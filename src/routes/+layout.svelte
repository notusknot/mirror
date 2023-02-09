<script lang="ts">
	import type { Config } from '@sveltejs/adapter-vercel';

	export const config: Config = {
		runtime: 'edge'
	};

	import "./styles.css";
</script>

<svelte:head>
	<title>Productivity</title>
	<meta name="description" content="Todo and notes tailored to my needs" />
</svelte:head>

<slot />
