<script lang="ts">
  import Login from './lib/Login.svelte';
  import Todos from './lib/Todos.svelte';
  import { currentUser } from "./lib/pocketbase";
</script>

<h1>Todo List</h1>
<Login />

{#if $currentUser}
  <Todos />
{/if}
