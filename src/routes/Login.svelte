<script lang="ts">
  import { currentUser, pb } from '$lib/pocketbase';

  // if you need a comment for this I can't help you
  let username: string;
  let password: string;
  let errorMessage: string = '';

  async function login() {
    try {
      await pb.collection('users').authWithPassword(username, password);
      username = '';
      password = '';
    } catch (err: any) {
      errorMessage = err.message;
    }
  }

  async function signUp() {
    try {
      const passwordLength = 8;
      if (password.length < passwordLength) {
        throw new Error(`Password must be at least ${passwordLength} characters long.`);
      }
      const data = {
        username,
        password,
        passwordConfirm: password,
      };
      await pb.collection('users').create(data);
      await login();
    } catch (err: any) {
      errorMessage = err.message;
    }
  }
  function signOut() {
    pb.authStore.clear();
  }  
</script>

<!-- conditional rendering of logged in message or login -->
{#if $currentUser}
  <button on:click={signOut}> Sign Out </button>

{:else}
  <form on:submit|preventDefault>

    <input id="username" placeholder="Username" type="text" bind:value={username}/>
    <input id="password" placeholder="Password" type="password" bind:value={password}/>
    <button id="login" on:click={login}>Login</button>
    <button id="signup" on:click={signUp}>Sign Up</button>
  </form>

  {#if errorMessage}
    <span class="error">{errorMessage}</span>
  {/if}

{/if}

<style>
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

#username { grid-area: 1 / 1 / 2 / 3; }
#password { grid-area: 2 / 1 / 3 / 3; } 
#login { grid-area: 3 / 1 / 4 / 2; }
#signup { grid-area: 3 / 2 / 4 / 3; } 
</style>
