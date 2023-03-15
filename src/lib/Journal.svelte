<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { currentUser, pb } from "$lib/pocketbase";
	import { writable } from "svelte/store";
	import type { CreateCompletionResponse } from "openai";
	import { SSE } from "sse.js";
	import { flip } from "svelte/animate";

	// TODO comment this code nicely with *why*
	let context = "";
	let loading = false;
	let error = false;
	let answer = "";

	type Journal = {
		id: string;
		text: string;
		title: string;
		user: string;
		created: string;
	};

	let journals = writable<Journal[]>([]);
	let unsubscribe: () => void;

	onMount(async () => {
		// Get initial items
		const [initialJournals, subscribeFunc] = await Promise.all([
			pb.collection("journals").getList(1, 50, {
				sort: "created",
			}),
			pb.collection("journals").subscribe("*", async ({ action, record }) => {
				if (action === "create") {
					journals.update((items) => [...items, record as unknown as Journal]);
				}
				if (action === "delete") {
					journals.update((items) =>
						items.filter((item) => item.id !== record.id)
					);
				}
				if (action === "update") {
					const resultList = await pb.collection("journals").getList(1, 50, {
						sort: "created",
					});
					journals.set(resultList.items as unknown as Journal[]);
				}
			}),
		]);
		journals.set(initialJournals.items as unknown as Journal[]);
		unsubscribe = subscribeFunc;
	});

	onDestroy(() => {
		unsubscribe?.();
	});

	async function createJournal() {
		const data = {
			title: "Title",
			text: "",
			user: $currentUser ? $currentUser.id : "",
		};
		await pb.collection("journals").create(data);
	}

	const deleteJournal = async (journal: Journal) => {
		await pb.collection("journals").delete(journal.id);
	};

	const updateJournal = async (
		journal: Journal,
		field: string,
		content: string
	) => {
		if (field == "title") {
			await pb.collection("journals").update(journal.id, { title: content });
		} else if (field == "text") {
			await pb.collection("journals").update(journal.id, { text: content });
		}
	};

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		const formattedTimestamp = date.toLocaleString("default", {
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
		return formattedTimestamp;
	}

	const handleSubmit = async () => {
		if (!context) {
			return;
		}

		loading = true;
		error = false;
		answer = "";

		const eventSource = new SSE("/api/extract", {
			headers: {
				"Content-Type": "application/json",
			},
			payload: JSON.stringify({ context }),
		});

		context = "";

		eventSource.addEventListener("error", (e) => {
			error = true;
			loading = false;
			console.log(e);
			alert("Something went wrong!");
		});

		eventSource.addEventListener("message", (e) => {
			try {
				loading = false;
				if (e.data === "[DONE]") {
					answer = JSON.parse(answer + "]}");

					if (!answer.events) {
						console.log("Answer has no events");
						return;
					}

					answer.events.forEach((event) => {
						const data = {
							text: event.text,
							checked: false,
							user: $currentUser ? $currentUser.id : "",
							date: event.date,
							time: event.time,
						};
						pb.collection("todos").create(data);
					});

					if (!answer.tasks) {
						console.log("Answer has no tasks");
						return;
					}

					answer.tasks.forEach((task) => {
						const data = {
							text: task.text,
							checked: false,
							user: $currentUser ? $currentUser.id : "",
							date: task.date,
							time: task.time,
						};
						pb.collection("todos").create(data);
					});

					return;
				}
				const completionResponse: CreateCompletionResponse = JSON.parse(e.data);
				const [{ text }] = completionResponse.choices;
				answer = (answer ?? "") + text;
			} catch (err) {
				error = true;
				loading = false;
				console.error(err);
				alert("Something went wrong!");
			}
		});

		eventSource.stream();
	};
</script>

<div class="journals">
	<button class="icon-button" on:click={createJournal}>+</button>

	<div class="content">
		{#each $journals as journal (journal.id)}
			<div class="entry" animate:flip="{{duration:300}}">
				<span class="entry-date">{formatDate(journal.created)}: </span>
				<span
					contenteditable
					on:blur={() => updateJournal(journal, "title", journal.title)}
					bind:textContent={journal.title}
				/>
				<p
					contenteditable
					on:blur={() => updateJournal(journal, "text", journal.text)}
					bind:textContent={journal.text}
				/>

				<button
					class="icon-button delete-button"
					aria-label="Delete entry"
					on:click={() => deleteJournal(journal)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 15 15"
						><path
							fill="currentColor"
							d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
						/></svg
					>
				</button>
			</div>
		{/each}
	</div>
</div>

<style>
	.journals {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
		width: clamp(160px, 100%, 720px);
		margin: 0 auto;
		overflow-y: auto;
		gap: calc(var(--padding) * 2);
		height: 100%;
	}

	.entry {
		position: relative;
		background-color: var(--bg2);
		line-height: calc(1em + 0.5rem);
		padding: var(--padding);
		border-radius: var(--padding);
		border: 2px solid var(--bg3);
	}

	.entry-date {
		opacity: 80%;
	}

	.delete-button {
		position: absolute;
		right: var(--padding);
		top: var(--padding);
	}
</style>
