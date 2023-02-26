<script lang="ts">
	import Login from "$lib/Login.svelte";
	import Todos from "$lib/Todos.svelte";
	import Journal from "$lib/Journal.svelte";
	import { currentUser } from "$lib/pocketbase";
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
