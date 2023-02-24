<script lang="ts">
	import { currentUser } from "$lib/pocketbase";
	import ThemeToggle from "$lib/ThemeToggle.svelte";
	import Login from "$lib/Login.svelte";

	import "./styles.css";

	export let data: any;
</script>

<svelte:head>
	<title>Mirror</title>
	<meta name="description" content="Todo and notes tailored to my needs" />
</svelte:head>

<header>
	<ThemeToggle />

	<div>
		{#if $currentUser}
			<Login />
		{/if}
	</div>
</header>

{#key data.currentPath}
	<slot />
{/key}

<style>
	header {
		background-color: var(--bg2);
		padding: var(--padding);
		border-bottom: 2px solid var(--bg3);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
