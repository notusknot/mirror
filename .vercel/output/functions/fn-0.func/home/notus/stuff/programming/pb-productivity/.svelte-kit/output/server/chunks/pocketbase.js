import PocketBase from "pocketbase";
import { w as writable } from "./index2.js";
const pb = new PocketBase("https://api.notusknot.com:443");
const currentUser = writable(pb.authStore.model);
pb.authStore.onChange(() => {
  currentUser.set(pb.authStore.model);
});
export {
  currentUser as c
};
