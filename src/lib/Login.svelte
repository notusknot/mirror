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
    <input placeholder="Username" type="text" bind:value={username}/>
    <input placeholder="Password" type="password" bind:value={password}/>

    <button on:click={signUp}>Sign Up</button>
    <button on:click={login}>Login</button>
  </form>

{/if}
