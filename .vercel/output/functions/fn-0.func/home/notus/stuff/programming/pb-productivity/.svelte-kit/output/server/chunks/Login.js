import { c as create_ssr_component, d as subscribe, f as add_attribute } from "./index3.js";
import { c as currentUser } from "./pocketbase.js";
const Login_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-rcadj0{height:clamp(160px, 100%, 480px)}form.svelte-rcadj0{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(3, 1fr);grid-column-gap:18px;grid-row-gap:18px}.error.svelte-rcadj0{color:red}#username.svelte-rcadj0{grid-area:1 / 1 / 2 / 3}#password.svelte-rcadj0{grid-area:2 / 1 / 3 / 3}#login.svelte-rcadj0{grid-area:3 / 1 / 4 / 2}#signup.svelte-rcadj0{grid-area:3 / 2 / 4 / 3}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  let username;
  let password;
  $$result.css.add(css);
  $$unsubscribe_currentUser();
  return `${$currentUser ? `<button>Sign Out </button>` : `<div class="${"login svelte-rcadj0"}"><form class="${"svelte-rcadj0"}"><input id="${"username"}" placeholder="${"Username"}" type="${"text"}" class="${"svelte-rcadj0"}"${add_attribute("value", username, 0)}>
			<input id="${"password"}" placeholder="${"Password"}" type="${"password"}" class="${"svelte-rcadj0"}"${add_attribute("value", password, 0)}>
			<button id="${"login"}" class="${"svelte-rcadj0"}">Login</button>
			<button id="${"signup"}" class="${"svelte-rcadj0"}">Sign Up</button></form>

		${``}</div>`}`;
});
export {
  Login as L
};
