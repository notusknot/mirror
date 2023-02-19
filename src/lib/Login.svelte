<script lang="ts">
	import { currentUser, pb } from "$lib/pocketbase";
	import { redirect } from "@sveltejs/kit";

	let username: string;
	let password: string;
	let errorMessage = "";
	let capsLockOn = false;

	async function login() {
		try {
			await pb.collection("users").authWithPassword(username, password);
			username = "";
			password = "";
		} catch (err: any) {
			errorMessage = err.message;
			throw err;
		}
	}

	async function signUp() {
		try {
			const passwordLength = 8;
			if (password.length < passwordLength) {
				throw new Error(
					`Password must be at least ${passwordLength} characters long.`
				);
			}
			const data = {
				username,
				password,
				passwordConfirm: password,
			};
			await pb.collection("users").create(data);
			await login(); // Wait for login to complete before continuing
		} catch (err: any) {
			errorMessage = err.message;
			throw err;
		}
	}

	function signOut() {
		pb.authStore.clear();
		throw redirect(303, "/");
	}

	function handleKeyUp(event: KeyboardEvent) {
		capsLockOn = event.getModifierState("CapsLock");
	}
</script>

{#if $currentUser}
	<button on:click={signOut}> Sign Out </button>
{:else}
	<div>
		<form on:submit|preventDefault>
			<label for="username"> Username </label>
			<input id="username" type="text" bind:value={username} />
			<label for="password"> Password </label>
			<input
				id="password"
				placeholder="at least 8 characters"
				type="password"
				bind:value={password}
				on:keyup={handleKeyUp}
			/>

			{#if errorMessage}
				<span class="error">{errorMessage}</span>
			{/if}

			{#if capsLockOn}
				<span class="error">Caps lock is on</span>
			{/if}
			<button on:click={login}>Login</button>
			<span class="no-account"> If you don't have an account </span>
			<button on:click={signUp}>Create account</button>
		</form>
	</div>
{/if}

<style>
	div {
		width: clamp(160px, 100%, 280px);
		padding: var(--padding);
	}

	#password {
		margin-bottom: calc(var(--padding) * 2);
	}

	#username {
		margin-bottom: var(--padding);
	}

	button {
		width: clamp(0px, 100%, 160px);
		margin: 0 auto;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	span {
		color: rgba(var(--text-codes), 0.6);
		text-align: center;
	}

	.no-account {
		margin-top: calc(var(--padding) * 1.5);
		margin-bottom: calc(var(--padding) / 4);
	}

	.error {
		color: var(--accent);
	}
</style>
