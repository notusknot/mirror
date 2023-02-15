<script lang="ts">
	import { currentUser, pb } from "$lib/pocketbase";
	import { redirect } from "@sveltejs/kit";

	let username: string;
	let password: string;
	let errorMessage = "";

	async function login() {
		return new Promise(async (reject) => {
			try {
				await pb.collection("users").authWithPassword(username, password);
				username = "";
				password = "";
			} catch (err: any) {
				errorMessage = err.message;
				reject(err);
			}
		});
	}

	async function signUp() {
		return new Promise(async (reject) => {
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
				await login();
			} catch (err: any) {
				errorMessage = err.message;
				reject(err);
			}
		});
	}

	function signOut() {
		pb.authStore.clear();
		throw redirect(303, "/")
	}
</script>

{#if $currentUser}
	<button on:click={signOut}> Sign Out </button>
{:else}
	<div class="login">
		<form on:submit|preventDefault>
			<input
				id="username"
				placeholder="Username"
				type="text"
				bind:value={username}
			/>
			<input
				id="password"
				placeholder="Password"
				type="password"
				bind:value={password}
			/>
			<button id="login" on:click={login}>Login</button>
			<button id="signup" on:click={signUp}>Sign Up</button>
		</form>

		{#if errorMessage}
			<span class="error">{errorMessage}</span>
		{/if}
	</div>
{/if}

<style>
	div {
		height: clamp(160px, 100%, 480px);
		padding: var(--padding);
	}

	form {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-column-gap: 18px;
		grid-row-gap: 18px;
	}
	.error {
		color: red;
	}
	#username {
		grid-area: 1 / 1 / 2 / 3;
	}
	#password {
		grid-area: 2 / 1 / 3 / 3;
	}
	#login {
		grid-area: 3 / 1 / 4 / 2;
	}
	#signup {
		grid-area: 3 / 2 / 4 / 3;
	}
</style>
