<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { writable } from "svelte/store";

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

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		const formattedTimestamp = date.toLocaleString("default", { 
		  month: "short", 
		  day: "numeric", 
		  hour: "2-digit", 
		  minute: "2-digit" 
		});
		return formattedTimestamp
	}

	export let className: string;
</script>

<div class={className}>
	<div>
		{#each $journals as journal (journal.id)}
			<div class="entry">
				<span class="entry-date">{formatDate(journal.created)}: </span>
				<span class="entry-text">{journal.text}</span>
			</div>
		{/each}
	</div>


	<form on:submit|preventDefault={addJournal}>
		<input
			placeholder="add journal"
			type="text"
			bind:value={journalText}
			on:blur={addJournal}
		/>
	</form>
</div>

<style>
.entry {
	padding: calc(var(--padding) / 2);
}

.entry-date {
	opacity: 80%;
}
</style>
