import { c as create_ssr_component, b as subscribe, f as add_attribute } from "./index3.js";
import PocketBase from "pocketbase";
import { w as writable } from "./index2.js";
const pb = new PocketBase("https://api.notusknot.com:443");
const currentUser = writable(pb.authStore.model);
pb.authStore.onChange((auth) => {
  console.log("authStore changed", auth);
  currentUser.set(pb.authStore.model);
});
const Login_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-1hgs75k{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(3, 1fr);grid-column-gap:18px;grid-row-gap:18px}.error.svelte-1hgs75k{color:red}#username.svelte-1hgs75k{grid-area:1 / 1 / 2 / 3}#password.svelte-1hgs75k{grid-area:2 / 1 / 3 / 3}#login.svelte-1hgs75k{grid-area:3 / 1 / 4 / 2}#signup.svelte-1hgs75k{grid-area:3 / 2 / 4 / 3}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  let username;
  let password;
  $$result.css.add(css);
  $$unsubscribe_currentUser();
  return `
${$currentUser ? `<button>Sign Out </button>` : `<form class="${"svelte-1hgs75k"}"><input id="${"username"}" placeholder="${"Username"}" type="${"text"}" class="${"svelte-1hgs75k"}"${add_attribute("value", username, 0)}>
		<input id="${"password"}" placeholder="${"Password"}" type="${"password"}" class="${"svelte-1hgs75k"}"${add_attribute("value", password, 0)}>
		<button id="${"login"}" class="${"svelte-1hgs75k"}">Login</button>
		<button id="${"signup"}" class="${"svelte-1hgs75k"}">Sign Up</button></form>

	${``}`}`;
});
export {
  Login as L,
  currentUser as c
};
