<script lang="ts">
  import Login from './Login.svelte';
</script>

<svelte:head>
	<title>Productivity</title>
	<meta name="description" content="Todo and notes tailored to my needs" />
</svelte:head>

<nav>
  <h1>Todo List</h1>
</nav>

<main>
  <Login />
</main>

<style>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: var(--padding);
}
</style>