<script lang="ts">
	import { pb, currentUser } from "$lib/pocketbase";
	import { redirect } from "@sveltejs/kit";

	import "../app.css";

	function signOut() {
		pb.authStore.clear();
		throw redirect(303, "/");
	}
</script>

<svelte:head>
	<title>Mirror</title>
	<meta name="description" content="Todo and notes tailored to my needs" />
</svelte:head>

<header>
	<!--<ThemeToggle />-->

	{#if $currentUser}
		<button on:click={signOut}>Sign Out</button>
	{/if}
</header>

<slot />

<style>
	header {
		background-color: transparent;
		z-index: 999;
		position: absolute;
		right: 0;
		padding: var(--padding);
	}
</style>
