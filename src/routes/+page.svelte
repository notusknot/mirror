<script lang="ts">
	import Login from "$lib/Login.svelte";
	import Todos from "$lib/Todos.svelte";
	import Journal from "$lib/Journal.svelte";
	import { currentUser, pb } from "$lib/pocketbase";

	export let data: any;

	async function addTodo(text: string) {
		if (!text) {
			return;
		}

		const data = {
			text: text,
			checked: false,
			user: $currentUser ? $currentUser.id : "",
		};
		await pb.collection("todos").create(data);
	}

	$: {
		if (data.extracted) {
			for (let event of data.extracted.events) {
				const taskText =
					"EVENT: " + event.event + " | " + event.date + " " + event.time;
				addTodo(taskText);
			}

			for (let task of data.extracted.tasks) {
				const taskText = task.task + " | " + task.date + " " + task.time;
				addTodo(taskText);
			}
		}
	}
</script>

<main>
	{#if $currentUser}
		<Todos />
		<Journal />
	{:else}
		<Login />
	{/if}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 1.618fr;
		grid-template-rows: 1fr;
	}
</style>
