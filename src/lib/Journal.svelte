<!--
<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	const content = writable("");

	let timeoutId;

	function handleInput(event) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			content.set(event.target.innerHTML);
		}, 1000);
	}

	$: console.log($content); // log the content to the console for debugging

	let divElement;

	onMount(() => {
		divElement.innerHTML = $content; // set the initial content of the div to the value of the content store
	});
</script>

<p contenteditable="true" bind:this={divElement} on:input={handleInput} />
-->
<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { currentUser, pb } from "$lib/pocketbase";
	import { writable } from "svelte/store";
	import { enhance } from "$app/forms";

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
				sort: "-created",
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
		if (!journalText) {
			return;
		}

		const data = {
			text: journalText,
			checked: false,
			user: $currentUser ? $currentUser.id : "",
		};
		await pb.collection("journals").create(data);
		journalText = "";
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

	<form use:enhance method="POST" action="?/extract" autocomplete="off">
		<input
			placeholder="brain dump"
			autocomplete="off"
			name="prompt"
			type="text"
			bind:value={journalText}
			on:blur={addJournal}
		/>
		<button>Extract</button>
	</form>
</div>

<style>
	.journals {
		padding: calc(var(--padding) * 2);
		height: clamp(160px, 100vh, 100vh);
		border-left: 2px solid var(--bg3);
	}

	.content {
		overflow-y: scroll;
	}

	form {
		position: sticky;
		width: 100%;
	}

	.entry {
		padding-bottom: var(--padding);
	}

	.entry-date {
		opacity: 80%;
	}
</style>
