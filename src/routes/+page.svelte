<script lang="ts">
	import Todos from "./components/Todos.svelte";
	import Pomodoro from "./components/Pomodoro.svelte";
	import Journal from "./components/Journal.svelte";

	export let data;
</script>

{#if data.user}
	<Todos className="todos" />
	<Journal className="journal" />
	<Pomodoro className="pomodoro" />
{/if}
