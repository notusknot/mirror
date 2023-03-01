<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { currentUser, pb } from "$lib/pocketbase";
	import { writable } from "svelte/store";
	import type { CreateCompletionResponse } from "openai";
	import { SSE } from "sse.js";

	// TODO comment this code nicely with *why*
	let context = "";
	let loading = false;
	let error = false;
	let answer = "";

	const handleSubmit = async () => {
		addJournal();

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

	type Journal = {
		id: string;
		text: string;
		user: string;
		created: Date;
	};

	let journalText: string;
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
						sort: "-created",
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

	async function addJournal() {
		if (!context) {
			return;
		}

		const data = {
			text: context,
			checked: false,
			user: $currentUser ? $currentUser.id : "",
		};
		await pb.collection("journals").create(data);
		context = "";
	}

	function formatDate(date: Date) {
		const formattedTimestamp = date.toLocaleString("default", {
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
		return formattedTimestamp;
	}
</script>

<div class="journals">
	<div class="content">
		{#each $journals as journal (journal.id)}
			<div class="entry">
				<span class="entry-date">{formatDate(journal.created)}: </span>
				<span class="entry-text">{journal.text}</span>
			</div>
		{/each}
	</div>

	<form on:submit|preventDefault={() => handleSubmit()}>
		<input bind:value={context} placeholder="journal" />
		<button> add </button>
		{#if loading}
			<p>loading...</p>
		{/if}
	</form>
</div>

<style>
	.journals {
		padding: calc(var(--padding) * 2);
		height: clamp(160px, 100vh, 100vh);
		border-left: 2px solid var(--bg3);
		display: flex;
		flex-direction: column;
	}

	.content {
		overflow-y: scroll;
		display: flex;
		flex-direction: column-reverse;
		margin-bottom: var(--padding);
		height: 100%;
	}

	form {
		bottom: calc(var(--padding) * 2);
		display: flex;
		gap: var(--padding);
	}

	input {
		width: 100%;
	}

	.entry {
		padding-bottom: var(--padding);
	}

	.entry-date {
		opacity: 80%;
	}
</style>
