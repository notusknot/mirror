<script lang="ts">
	import { currentUser } from "$lib/pocketbase";
	import { enhance, type SubmitFunction } from "$app/forms";
	import Boop from "$lib/Boop.svelte";
	import Login from "$lib/Login.svelte";

	import "./styles.css";

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get("theme");

		if (theme) {
			document.documentElement.setAttribute("data-theme", theme);
		}
	};
	</script>

<svelte:head>
	<title>Productivity</title>
	<meta name="description" content="Todo and notes tailored to my needs" />
</svelte:head>

<header>
	<button><a href="/journal">Journal</a></button>

	<div>
		<form method="POST" use:enhance={submitUpdateTheme}>
			<Boop>
				<button
					aria-label="enable-light-mode"
					class="icon-button light-button"
					formaction="/?/setTheme&theme=light"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287ZM12 12Z"
						/></svg
					>
				</button>
			</Boop>

			<Boop>
				<button
					aria-label="enable-dark-mode"
					class="icon-button dark-button"
					formaction="/?/setTheme&theme=dark"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 21q-3.775 0-6.388-2.613Q3 15.775 3 12q0-3.45 2.25-5.988Q7.5 3.475 11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375Q11.1 6.7 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q.775 0 1.538-.225q.762-.225 1.362-.625q.525-.35 1.075-.038q.55.313.475.988q-.35 3.45-2.937 5.725Q15.425 21 12 21Zm0-2q2.2 0 3.95-1.212q1.75-1.213 2.55-3.163q-.5.125-1 .2q-.5.075-1 .075q-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-.25-6.75Z"
						/></svg
					>
				</button>
			</Boop>
		</form>

		{#if $currentUser}
			<Login />
		{/if}
	</div>
</header>

<main>
	<slot />
</main>

<style>
	main {
		padding: var(--padding);
		height: calc(100% - var(--header-height));
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--padding);
		border-bottom: 1px solid var(--bg3);
	}

	header div {
		display: flex;
	}

	header form {
		display: flex;
		align-items: center;
	}

	a {
		color: var(--text);
		text-decoration: none;
	}

	.icon-button {
		font-size: 2rem;
		height: 2rem;
		padding: 0 var(--padding);
		background-color: transparent;
	}
</style>
