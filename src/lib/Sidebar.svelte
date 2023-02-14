<script>
	import Journal from "$lib/Journal.svelte";

	export let show = false;
</script>

{#if show}
	<nav transition:fly={{ x: -120, opacity: 1 }}>
		<button><a href="/journal">Journal</a></button>
	</nav>
{/if}

<style>
	a {
		color: var(--text);
		text-decoration: none;
	}

	nav {
		position: fixed;
		z-index: 1;
		left: 0;
		padding: var(--padding);
		height: calc(100% - var(--header-height));
		border-right: 1px solid var(--bg3);
		background: var(--bg);
		width: clamp(10px, 120px, 120px);
	}
</style>
