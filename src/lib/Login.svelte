<script lang="ts">
	import { currentUser, pb } from "$lib/pocketbase";

	let username: string;
	let password: string;
	let errorMessage = "";
	let capsLockOn = false;
	let loading = false;

	async function login() {
		try {
			loading = true;
			await pb.collection("users").authWithPassword(username, password);
			loading = false;
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


	function handleKeyUp(event: KeyboardEvent) {
		capsLockOn = event.getModifierState("CapsLock");
	}
</script>

{#if loading}
	<p> Signing you in... </p>
{:else}
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

		<span> If you don't have an account </span>
		<button on:click={signUp}>Create account</button>
	</form>
{/if}

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: clamp(160px, 100%, 280px);
		padding: var(--padding);
	}

	label {
		width: 100%;
	}

	#password, #username {
		margin-bottom: calc(var(--padding));
	}

	button {
		width: clamp(0px, 100%, 160px);
		margin: calc(var(--padding) / 2) 0;
	}

	span {
		margin-top: var(--padding);
		color: rgba(var(--text-codes), 0.6);
	}

	.error {
		color: var(--accent);
		margin: 0;
	}
</style>
