<script lang="ts">
	import { fly } from "svelte/transition";
	import { currentUser } from "$lib/pocketbase";
	import ThemeToggle from "$lib/ThemeToggle.svelte";
	import Boop from "$lib/Boop.svelte";
	import Login from "$lib/Login.svelte";
	import Icon from "../../static/icon.svg?raw";

	import "./styles.css";

	export let data: any;
</script>

<svelte:head>
	<title>Productivity</title>
	<meta name="description" content="Todo and notes tailored to my needs" />
</svelte:head>

<header>
	<div class="button-group">
		{#if $currentUser}
			<button><a aria-label="Go to journal" href="/journal">Journal</a></button>
		{/if}
		<Boop>
			<button aria-label="Main page" class="icon-button home-icon"><a aria-label="Go to main page" href="/">{@html Icon}</a></button
			>
		</Boop>
	</div>

	<div class="button-group">
		<ThemeToggle />

		{#if $currentUser}
			<Login />
		{/if}
	</div>
</header>

{#key data.currentPath}
	<main
		in:fly={{ y: -30, duration: 200, delay: 150 }}
		out:fly={{ y: -30, duration: 150 }}
	>
		<slot />
	</main>
{/key}

<style>
	main {
		padding: 0 var(--padding);
		height: calc(100% - var(--header-height));
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	header {
		background-color: var(--bg2);
		padding: var(--padding);
		border-bottom: 1px solid var(--bg3);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	:global(header button) {
		background-color: var(--bg);
	}

	.button-group {
		display: flex;
		align-items: center;
	}

	a {
		color: var(--text);
		text-decoration: none;
	}

	.icon-button {
		font-size: 2rem;
		padding: 0 var(--padding);
		background-color: transparent;
	}
</style>
