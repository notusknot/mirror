<script lang="ts">
	import Login from "$lib/Login.svelte";
	import Todos from "$lib/Todos.svelte";

	import { currentUser } from "$lib/pocketbase";
</script>

<!--Sidebar bind:show={sidebar_show} /-->

{#if $currentUser}
	<Todos />
{:else}
	<Login />
{/if}
