<!--

<script lang="ts">
	import Boop from "$lib/Boop.svelte";
	import Sun from "../../static/sun.svg?raw";
	import Moon from "../../static/moon.svg?raw";
	import { onMount } from "svelte";

	let themeIcon = Sun;

    const htmlElement = document.querySelector("html");

	function toggleColorScheme(enableDarkMode = false) {
		if (enableDarkMode) {
			htmlElement.setAttribute("data-theme", "dark");
		} else {
			htmlElement.setAttribute("data-theme", "light");
		}

		sessionStorage.setItem("darkMode", darkMode.toString());
	}

	function isDarkMode() {
		if (import.meta.env.SSR) {
			return false;
		}

		const sessionData = window.sessionStorage.getItem("darkMode");
		if (sessionData) {
			return "true" === sessionData;
		}

		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	}

	let darkMode = isDarkMode();
	$: toggleColorScheme(darkMode);

	$: themeIcon = darkMode ? Moon : Sun;
</script>

<Boop>
	<button
		on:click={() => (darkMode = !darkMode)}
		aria-label="enable-light-mode"
		class="icon-button"
	>
		{@html themeIcon}
	</button>
</Boop>

<style>
	.icon-button {
		font-size: 2rem;
		padding: 0;
	}
</style>
-->