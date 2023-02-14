import PocketBase from "pocketbase";

import { writable } from "svelte/store";

// instantiate new PocketBase link user to it
export const pb = new PocketBase("https://api.notusknot.com:443");
export const currentUser = writable(pb.authStore.model);

// subscribe to changes in authStore
pb.authStore.onChange(() => {
	currentUser.set(pb.authStore.model);
});
