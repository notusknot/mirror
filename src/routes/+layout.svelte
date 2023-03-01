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
	<!--<ThemeToggle />-->

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
		background-color: transparent;
		z-index: 999;
		position: absolute;
		right: 0;
		padding: var(--padding);
		display: flex;
		justify-content: end;
		align-items: end;
	}
</style>
