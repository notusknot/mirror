import { c as create_ssr_component, b as subscribe, d as add_attribute, o as onDestroy, f as each, e as escape, v as validate_component } from "../../chunks/index2.js";
import PocketBase from "pocketbase";
import { w as writable } from "../../chunks/index.js";
/* empty css                   */const pb = new PocketBase("https://api.notusknot.com:443");
const currentUser = writable(pb.authStore.model);
pb.authStore.onChange((auth) => {
  console.log("authStore changed", auth);
  currentUser.set(pb.authStore.model);
});
const Login_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "form.svelte-8hmr2f{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(3, 1fr);grid-column-gap:18px;grid-row-gap:18px}#username.svelte-8hmr2f{grid-area:1 / 1 / 2 / 3}#password.svelte-8hmr2f{grid-area:2 / 1 / 3 / 3}#signup.svelte-8hmr2f{grid-area:3 / 1 / 4 / 2}#login.svelte-8hmr2f{grid-area:3 / 2 / 4 / 3}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  let username;
  let password;
  $$result.css.add(css$2);
  $$unsubscribe_currentUser();
  return `
${$currentUser ? `<button>Sign Out </button>` : `<form class="${"svelte-8hmr2f"}"><input id="${"username"}" placeholder="${"Username"}" type="${"text"}" class="${"svelte-8hmr2f"}"${add_attribute("value", username, 0)}>
    <input id="${"password"}" placeholder="${"Password"}" type="${"password"}" class="${"svelte-8hmr2f"}"${add_attribute("value", password, 0)}>
    <button id="${"login"}" class="${"svelte-8hmr2f"}">Login</button>
    <button id="${"signup"}" class="${"svelte-8hmr2f"}">Sign Up</button></form>`}`;
});
const Todos_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".todo.svelte-1fsmmvv.svelte-1fsmmvv{display:flex}.checked.svelte-1fsmmvv.svelte-1fsmmvv{text-decoration:line-through}form.svelte-1fsmmvv.svelte-1fsmmvv{padding:var(--padding) calc(var(--padding) * 2)}form.svelte-1fsmmvv input.svelte-1fsmmvv{width:100%}",
  map: null
};
const Todos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentUser;
  let $todos, $$unsubscribe_todos;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => value);
  let todoText;
  let todos = writable([]);
  $$unsubscribe_todos = subscribe(todos, (value) => $todos = value);
  onDestroy(() => {
  });
  $$result.css.add(css$1);
  $$unsubscribe_currentUser();
  $$unsubscribe_todos();
  return `



<div>${each($todos, (todo) => {
    return `<div class="${"todo svelte-1fsmmvv"}"><input type="${"checkbox"}" id="${"checkbox"}" ${todo.checked ? "checked" : ""}>
		    <span class="${["svelte-1fsmmvv", todo.checked ? "checked" : ""].join(" ").trim()}">${escape(todo.text)}</span>
	    <button>x</button>
		</div>`;
  })}</div>

<form class="${"svelte-1fsmmvv"}"><input placeholder="${"add something"}" type="${"text"}" class="${"svelte-1fsmmvv"}"${add_attribute("value", todoText, 0)}>
</form>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-15gsa4t{display:flex;flex-direction:row;justify-content:space-between;padding:var(--padding)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$result.css.add(css);
  $$unsubscribe_currentUser();
  return `${$$result.head += `<!-- HEAD_svelte-10ckgw5_START -->${$$result.title = `<title>Productivity</title>`, ""}<meta name="${"description"}" content="${"Todo and notes tailored to my needs"}"><!-- HEAD_svelte-10ckgw5_END -->`, ""}

<nav class="${"svelte-15gsa4t"}"><h1>Todo List</h1>
  ${validate_component(Login, "Login").$$render($$result, {}, {}, {})}</nav>

<main>${$currentUser ? `${validate_component(Todos, "Todos").$$render($$result, {}, {}, {})}` : ``}
</main>`;
});
export {
  Page as default
};
