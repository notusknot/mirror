import { c as create_ssr_component, d as subscribe, o as onDestroy, e as escape, b as null_to_empty, h as each, v as validate_component } from "../../../chunks/index3.js";
import { c as currentUser } from "../../../chunks/pocketbase.js";
import { w as writable } from "../../../chunks/index2.js";
const Journal_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-k37dj1{position:fixed;bottom:var(--padding);width:calc(100% - var(--padding) * 2)}textarea.svelte-k37dj1{width:100%;resize:vertical;overflow:auto}.entry.svelte-k37dj1{padding:calc(var(--padding) / 2)}.entry-date.svelte-k37dj1{opacity:80%}",
  map: null
};
function formatDate(dateString) {
  const date = new Date(dateString);
  const formattedTimestamp = date.toLocaleString("default", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  return formattedTimestamp;
}
const Journal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentUser;
  let $journals, $$unsubscribe_journals;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => value);
  let journals = writable([]);
  $$unsubscribe_journals = subscribe(journals, (value) => $journals = value);
  onDestroy(() => {
  });
  let { className } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$result.css.add(css);
  $$unsubscribe_currentUser();
  $$unsubscribe_journals();
  return `<div class="${escape(null_to_empty(className), true) + " svelte-k37dj1"}"><div>${each($journals, (journal) => {
    return `<div class="${"entry svelte-k37dj1"}"><span class="${"entry-date svelte-k37dj1"}">${escape(formatDate(journal.created))}: </span>
				<span class="${"entry-text"}">${escape(journal.text)}</span>
			</div>`;
  })}</div>

	<form class="${"svelte-k37dj1"}"><textarea placeholder="${"add journal"}" class="${"svelte-k37dj1"}">${""}</textarea></form>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Journal, "Journal").$$render($$result, { className: "journal" }, {}, {})}`;
});
export {
  Page as default
};
