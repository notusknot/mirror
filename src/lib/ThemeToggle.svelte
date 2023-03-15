<script lang="ts">
	import Boop from "$lib/Boop.svelte";
	import Sun from "$lib/sun.svg?raw";
	import Moon from "$lib/moon.svg?raw";
    import { browser } from '$app/environment';

    let darkMode = false;

    function toggleDarkMode() {
        darkMode = !darkMode;

        localStorage.setItem('theme', darkMode ? 'dark' : 'light');

        darkMode
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
    }

    if (browser) {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            darkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            darkMode = false;
        }
    }
</script>

<Boop>
	<input
		checked={darkMode}
		on:click={toggleDarkMode}
		type="checkbox"
		id="theme-toggle"
	/>
	<label class="icon-button" for="theme-toggle">{@html darkMode ? Sun : Moon}</label>
</Boop>

<style>
	input {
		display: none;
	}

	label {
		color: var(--text);
		font-size: 2rem;
	}
</style>
<!--

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

			// store opposite of preference
			localStorage.setItem(
				STORAGE_KEY,
				prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK
			);

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
	checked={currentTheme === THEMES.DARK}
	on:click={toggleTheme}
/>

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

		localStorage.setItem("darkMode", darkMode.toString());
	}

	function isDarkMode() {
		if (import.meta.env.SSR) {
			return false;
		}

		const sessionData = window.localStorage.getItem("darkMode");
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
