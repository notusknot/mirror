import PocketBase from 'pocketbase';

import { writable } from 'svelte/store';

// instantiate new PocketBase link user to it
export const pb = new PocketBase('https://app.notusknot.com:443');
export const currentUser = writable(pb.authStore.model);

// subscribe to changes in authStore
pb.authStore.onChange((auth) => {
  console.log('authStore changed', auth);
  currentUser.set(pb.authStore.model)
});
