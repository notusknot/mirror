<form action="?/login" method="POST">
	<input placeholder="Username" type="text" name="username" id="username">
	<input placeholder="Password" type="password" name="password" id="password">
	<button id="login" type="submit">Login</button>
</form>

<style>
	form {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, 1fr); 
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
	#login{
		grid-area: 4 / 1 / 3 / 2;
	}
</style>
