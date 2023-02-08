<form action="?/register" method="POST">
	<input placeholder="Username" type="text" name="username" id="username">
	<input placeholder="Password" type="password" name="password" id="password">
	<input placeholder="Confirm password" type="password" name="passwordConfirm" id="passwordConfirm">
	<button id="register" type="submit">Register</button>
</form>

<!-- conditional rendering of logged in message or login 
{#if $currentUser}
	<button on:click={signOut}> Sign Out </button>
{:else}
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
{/if}
-->
<style>
	form {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, 1fr); 
		justify-items: center;
		gap: var(--padding);

		width: clamp(250px, 100%, 320px);
		max-height: 225px;
	}
	.error {
		color: red;
	}
	#username {
		grid-area: 1 / 1 / 2 / 2;
	}
	#password {
		grid-area: 2 / 1 / 3 / 2;
	}
	#passwordConfirm {
		grid-area: 3 / 1 / 4 / 2;
	}
	#register {
		grid-area: 5 / 1 / 4 / 2;
	}
</style>
