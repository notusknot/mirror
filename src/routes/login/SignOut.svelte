<script lang="ts">
	import { currentUser, pb } from "$lib/pocketbase";

	function signOut() {
		pb.authStore.clear();
	}
</script>

<button on:click={signOut}> Sign Out </button>
