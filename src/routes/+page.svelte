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
		height: 100%;
	}

	.left, .right {
		padding: calc(var(--padding) * 2);
	}

	.right {
		width: 100%;
		height: 100%;
	}

	.left {
		display: grid;
		grid-template-columns: 1fr;
		background-color: var(--bg2);
		gap: var(--padding);
		border-right: 2px solid var(--bg3);
	}

	@media screen and (max-width: 600px) {
		main {
			flex-direction: column;
		}

		.left {
			border-bottom: 2px solid var(--bg3);
			border-right: none;
		}
	}
</style>
