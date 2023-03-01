<script lang="ts">
	import Login from "$lib/Login.svelte";
	import Todos from "$lib/Todos.svelte";
	import Journal from "$lib/Journal.svelte";
	import Pomodoro from "$lib/Pomodoro.svelte";
	import { currentUser } from "$lib/pocketbase";
</script>

<main>
	{#if $currentUser}
		<div class="left">
			<Todos />
			<Pomodoro />
		</div>

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

	.left {
		display: grid;
		grid-template-rows: 1.618fr 1fr;
		grid-template-columns: 1fr;
		background-color: var(--bg2);
	}
</style>
