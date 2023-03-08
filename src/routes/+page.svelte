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
			<!-- Pomodoro / -->
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
		display: flex;
		height: 100vh;
	}

	main > * {
		padding: calc(var(--padding) * 2);
	}

	.right {
		width: 100%;
	}

	.left {
		display: grid;
		grid-template-rows: 1.618fr 1fr;
		grid-template-columns: 1fr;
		width: clamp(0px, 100%, 420px);
		background-color: var(--bg2);
		gap: var(--padding);
		border-right: 3px solid var(--bg3);
	}
</style>
