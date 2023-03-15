<script lang="ts">
	import { pb, currentUser } from "$lib/pocketbase";
	import { redirect } from "@sveltejs/kit";
	import ThemeToggle from "$lib/ThemeToggle.svelte";

	import "../app.css";

	function signOut() {
		pb.authStore.clear();
		throw redirect(303, "/");
	}
</script>

<svelte:head>
	<title>Mirror</title>
	<meta name="description" content="Todo and notes tailored to my needs" />

	<script>
		if (localStorage.theme === "light") {
			document.documentElement.classList.add("light");
		}
		if (localStorage.theme === "dark") {
			document.documentElement.classList.add("dark");
		}
	</script>
</svelte:head>

<header>
	<ThemeToggle />

	{#if $currentUser}
		<button on:click={signOut}>Sign Out</button>
	{/if}
</header>

<slot />

<style>
	header {
		background-color: transparent;
		padding: var(--padding);
		position: absolute;
		top: 0;
		right: 0;
		gap: var(--padding);
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 999;
	}
</style>
