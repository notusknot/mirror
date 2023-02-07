import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { L as Login } from "../../../chunks/Login.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1stqhwj{display:flex;flex-direction:row;justify-content:space-between;padding:var(--padding)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-10ckgw5_START -->${$$result.title = `<title>Productivity</title>`, ""}<meta name="${"description"}" content="${"Todo and notes tailored to my needs"}"><!-- HEAD_svelte-10ckgw5_END -->`, ""}

<nav class="${"svelte-1stqhwj"}"><h1>Todo List</h1></nav>

<main>${validate_component(Login, "Login").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
