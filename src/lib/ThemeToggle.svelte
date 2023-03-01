<script>
	import { onMount } from "svelte";

	const STORAGE_KEY = "theme";
	const DARK_PREFERENCE = "(prefers-color-scheme: dark)";

	let currentTheme;

	const THEMES = {
		DARK: "dark",
		LIGHT: "light",
	};

	const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

	const applyTheme = () => {
		const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

		if (currentTheme === THEMES.DARK) {
			document.body.classList.remove(THEMES.LIGHT);
			document.body.classList.add(THEMES.DARK);
		} else {
			document.body.classList.remove(THEMES.DARK);
			document.body.classList.add(THEMES.LIGHT);
		}
	};

	const toggleTheme = () => {
		const stored = localStorage.getItem(STORAGE_KEY);

		if (stored) {
			// clear storage
			localStorage.removeItem(STORAGE_KEY);
		} else {
			// store opposite of preference
			localStorage.setItem(
				STORAGE_KEY,
				prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK
			);
		}

		// TODO: apply new theme
		applyTheme();
	};
	onMount(() => {
		applyTheme();
		window.matchMedia(DARK_PREFERENCE).addEventListener("change", applyTheme);
	});
</script>

<input
	type="checkbox"
	checked={currentTheme !== THEMES.DARK}
	on:click={toggleTheme}
/>
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
