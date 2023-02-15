import { c as create_ssr_component, d as subscribe, o as onDestroy, e as escape, b as null_to_empty, h as each, f as add_attribute, v as validate_component } from "../../chunks/index3.js";
import { L as Login } from "../../chunks/Login.js";
import { c as currentUser } from "../../chunks/pocketbase.js";
import { w as writable } from "../../chunks/index2.js";
const Pomodoro_svelte_svelte_type_style_lang = "";
const Todos_svelte_svelte_type_style_lang = "";
const css = {
  code: '.todo.svelte-pot18n.svelte-pot18n.svelte-pot18n{display:flex;position:relative;padding:calc(var(--padding) / 4) 0}.todos.svelte-pot18n.svelte-pot18n.svelte-pot18n{width:clamp(160px, 100%, 620px);padding:var(--padding)}.todo-text.svelte-pot18n.svelte-pot18n.svelte-pot18n{padding:0 var(--padding);position:relative}.delete-button.svelte-pot18n.svelte-pot18n.svelte-pot18n{position:absolute;right:0}.pomodoro-button.svelte-pot18n.svelte-pot18n.svelte-pot18n{position:absolute;right:calc(var(--padding) * 1.7)}.todo-text.svelte-pot18n.svelte-pot18n.svelte-pot18n::before{content:"";position:absolute;left:calc(var(--padding) - 1ch / 2);top:50%;height:2px;background-color:rgba(var(--text-codes), 0.75);width:0;transition:width 0.25s;will-change:width}.todo-text.checked.svelte-pot18n.svelte-pot18n.svelte-pot18n::before{width:calc(100% - var(--padding) - 1ch / 2)}.checkbox.svelte-pot18n.svelte-pot18n.svelte-pot18n{position:relative;min-width:24px;max-height:24px;border:1px solid var(--bg3);border-radius:8px;cursor:pointer;background-color:var(--bg2)}.checkbox.svelte-pot18n.svelte-pot18n.svelte-pot18n:hover,.checkbox.svelte-pot18n.svelte-pot18n.svelte-pot18n:active{border:1px solid var(--accent)}.checkbox.svelte-pot18n input[type="checkbox"].svelte-pot18n.svelte-pot18n{position:absolute;opacity:0}.checkbox.svelte-pot18n .checkmark.svelte-pot18n.svelte-pot18n:after{content:"";position:absolute;opacity:0;left:9px;top:5px;width:5px;height:10px;border:solid var(--text);border-width:0 3px 3px 0;transform:rotate(45deg);transition:opacity 150ms}.checkbox.svelte-pot18n input[type="checkbox"].svelte-pot18n:checked~.checkmark.svelte-pot18n:after{opacity:1}form.svelte-pot18n.svelte-pot18n.svelte-pot18n{padding-top:var(--padding);display:flex;justify-content:center}form.svelte-pot18n input.svelte-pot18n.svelte-pot18n{width:clamp(160px, 100%, 320px)}',
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
  let { className } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css);
  $$unsubscribe_currentUser();
  $$unsubscribe_todos();
  return `



<div class="${escape(null_to_empty(className), true) + " svelte-pot18n"}"><div>${each($todos, (todo) => {
    return `<div class="${"todo svelte-pot18n"}"><label class="${"checkbox svelte-pot18n"}"><input type="${"checkbox"}" ${todo.checked ? "checked" : ""} class="${"svelte-pot18n"}">
					<span class="${"checkmark svelte-pot18n"}"></span></label>
				<span class="${["todo-text svelte-pot18n", todo.checked ? "checked" : ""].join(" ").trim()}">${escape(todo.text)}</span>

				<button class="${"icon-button pomodoro-button svelte-pot18n"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1em"}" height="${"1em"}" viewBox="${"0 0 24 24"}"><path fill="${"currentColor"}" d="${"M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 9.5V13h-6V7h1.5v4.5H17Z"}"></path></svg></button>

				<button class="${"icon-button delete-button svelte-pot18n"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1em"}" height="${"1em"}" viewBox="${"0 0 15 15"}"><path fill="${"currentColor"}" d="${"M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"}"></path></svg></button>
			</div>`;
  })}</div>

	<form class="${"svelte-pot18n"}"><input autocomplete="${"off"}" placeholder="${"add task"}" type="${"text"}" class="${"svelte-pot18n"}"${add_attribute("value", todoText, 0)}></form></div>

${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$unsubscribe_currentUser();
  return `

${$currentUser ? `${validate_component(Todos, "Todos").$$render($$result, { className: "todos" }, {}, {})}` : `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
