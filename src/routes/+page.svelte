<script lang="ts">
  import Login from './Login.svelte';
  import Todos from './Todos.svelte';
  import './styles.css';
  import { currentUser } from "$lib/pocketbase";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>Todo List</h1>
<Login />
<br>

{#if $currentUser}
  <Todos />
{/if}
