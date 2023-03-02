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

		<div class="right">
			<Journal />
		</div>
	{:else}
		<Login />
	{/if}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 1.618fr;
		grid-template-rows: 1fr;
		height: 100svh;
	}

	main > * {
		padding: calc(var(--padding) * 2);
	}

	.left {
		display: grid;
		grid-template-rows: 1.618fr 1fr;
		grid-template-columns: 1fr;
		background-color: var(--bg2);
		border-right: 2px solid var(--bg3);
	}
</style>
