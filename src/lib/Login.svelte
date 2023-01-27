<script lang="ts">
  import { currentUser, pb } from './pocketbase';

  // if you need a comment for this I can't help you
  let username: string;
  let password: string;

  async function login() {
    await pb.collection('users').authWithPassword(username, password);
  }

  async function signUp() {
    try {
      const data = {
        username,
        password,
        // TODO proper password confirmation
        passwordConfirm: password,
      };
      const createdUser = await pb.collection('users').create(data);
      await login();
    } catch (err) {
      // TODO elegant error handling
      console.error(err)
    }
  }
  function signOut() {
    pb.authStore.clear();
  }  
</script>

<!-- conditional rendering of logged in message or login -->
{#if $currentUser}
  <p>Signed in as {$currentUser.username}</p>
  <button on:click={signOut}> Sign Out </button>

{:else}
  <form on:submit|preventDefault>
    <input id="username" placeholder="Username" type="text" bind:value={username}/>
    <input id="password" placeholder="Password" type="password" bind:value={password}/>
    <button id="signup" on:click={signUp}>Sign Up</button>
    <button id="login" on:click={login}>Login</button>
  </form>

{/if}

<style>
form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 12px; 
}

#username { grid-area: 1 / 1 / 2 / 3; }
#password { grid-area: 2 / 1 / 3 / 3; } 
#signup { grid-area: 3 / 1 / 4 / 2; }
#login { grid-area: 3 / 2 / 4 / 3; } 
</style>
