import { c as create_ssr_component, e as escape, b as null_to_empty, d as subscribe, v as validate_component } from "../../chunks/index3.js";
import { c as currentUser } from "../../chunks/pocketbase.js";
import "devalue";
import { L as Login } from "../../chunks/Login.js";
const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/manifest.webmanifest">' } };
const Boop_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-367r4o-wiggle{0%{transform:rotate(0deg)}20%{transform:rotate(-15deg)}40%{transform:rotate(15deg)}60%{transform:rotate(-7deg)}80%{transform:rotate(7deg)}90%{transform:rotate(-3deg)}95%{transform:rotate(2deg)}100%{transform:rotate(0deg)}}.boop.svelte-367r4o{display:inline-block;will-change:transform}.boop.active.svelte-367r4o{animation-duration:1s;animation-play-state:paused;animation-fill-mode:forwards}.boop.wiggle.svelte-367r4o{animation-name:svelte-367r4o-wiggle;animation-play-state:running}",
  map: null
};
const Boop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<span class="${[
    escape(null_to_empty(`boop${""}`), true) + " svelte-367r4o",
    ""
  ].join(" ").trim()}" style="${"--animation: boop"}">${slots.default ? slots.default({}) : ``}
</span>`;
});
const Icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.864 8.465a3.505 3.505 0 0 0-3.03-4.449A3.005 3.005 0 0 0 14 2a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 2c-1.301 0-2.41.831-2.825 2.015a3.505 3.505 0 0 0-3.039 4.45A4.028 4.028 0 0 0 2 12c0 1.075.428 2.086 1.172 2.832A4.067 4.067 0 0 0 3 16c0 1.957 1.412 3.59 3.306 3.934A3.515 3.515 0 0 0 9.5 22c.979 0 1.864-.407 2.5-1.059A3.484 3.484 0 0 0 14.5 22a3.51 3.51 0 0 0 3.19-2.06a4.006 4.006 0 0 0 3.138-5.108A4.003 4.003 0 0 0 22 12a4.028 4.028 0 0 0-2.136-3.535zM9.5 20c-.711 0-1.33-.504-1.47-1.198L7.818 18H7c-1.103 0-2-.897-2-2c0-.352.085-.682.253-.981l.456-.816l-.784-.51A2.019 2.019 0 0 1 4 12c0-.977.723-1.824 1.682-1.972l1.693-.26l-1.059-1.346a1.502 1.502 0 0 1 1.498-2.39L9 6.207V5a1 1 0 0 1 2 0v13.5c0 .827-.673 1.5-1.5 1.5zm9.575-6.308l-.784.51l.456.816c.168.3.253.63.253.982c0 1.103-.897 2-2.05 2h-.818l-.162.802A1.502 1.502 0 0 1 14.5 20c-.827 0-1.5-.673-1.5-1.5V5c0-.552.448-1 1-1s1 .448 1 1.05v1.207l1.186-.225a1.502 1.502 0 0 1 1.498 2.39l-1.059 1.347l1.693.26A2.002 2.002 0 0 1 20 12c0 .683-.346 1.315-.925 1.692z"/></svg>';
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1iqzj3.svelte-1iqzj3{padding:var(--padding);height:calc(100% - var(--header-height));display:flex;align-items:center;flex-direction:column}header.svelte-1iqzj3.svelte-1iqzj3{display:flex;align-items:center;justify-content:space-between;padding:var(--padding);border-bottom:1px solid var(--bg3)}header.svelte-1iqzj3 div.svelte-1iqzj3{display:flex}header.svelte-1iqzj3 form.svelte-1iqzj3{display:flex;align-items:center}a.svelte-1iqzj3.svelte-1iqzj3{color:var(--text);text-decoration:none;height:32px}.icon-button.svelte-1iqzj3.svelte-1iqzj3{font-size:2rem;height:2rem;padding:0 var(--padding);background-color:transparent}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webManifest;
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
  $$unsubscribe_currentUser();
  return `${$$result.head += `<!-- HEAD_svelte-10rrtm0_START -->${$$result.title = `<title>Productivity</title>`, ""}<meta name="${"description"}" content="${"Todo and notes tailored to my needs"}"><!-- HTML_TAG_START -->${webManifest}<!-- HTML_TAG_END --><!-- HEAD_svelte-10rrtm0_END -->`, ""}

<header class="${"svelte-1iqzj3"}"><div class="${"svelte-1iqzj3"}"><button><a href="${"/journal"}" class="${"svelte-1iqzj3"}">Journal</a></button>
		${validate_component(Boop, "Boop").$$render($$result, {}, {}, {
    default: () => {
      return `<button style="${"padding-top: 6px;"}" class="${"icon-button svelte-1iqzj3"}"><a href="${"/"}" class="${"svelte-1iqzj3"}"><!-- HTML_TAG_START -->${Icon}<!-- HTML_TAG_END --></a></button>`;
    }
  })}</div>

	<div class="${"svelte-1iqzj3"}"><form method="${"POST"}" class="${"svelte-1iqzj3"}">${validate_component(Boop, "Boop").$$render($$result, {}, {}, {
    default: () => {
      return `<button aria-label="${"enable-light-mode"}" class="${"icon-button light-button svelte-1iqzj3"}" formaction="${"/?/setTheme&theme=light"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1em"}" height="${"1em"}" viewBox="${"0 0 24 24"}"><path fill="${"currentColor"}" d="${"M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287ZM12 12Z"}"></path></svg></button>`;
    }
  })}

			${validate_component(Boop, "Boop").$$render($$result, {}, {}, {
    default: () => {
      return `<button aria-label="${"enable-dark-mode"}" class="${"icon-button dark-button svelte-1iqzj3"}" formaction="${"/?/setTheme&theme=dark"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1em"}" height="${"1em"}" viewBox="${"0 0 24 24"}"><path fill="${"currentColor"}" d="${"M12 21q-3.775 0-6.388-2.613Q3 15.775 3 12q0-3.45 2.25-5.988Q7.5 3.475 11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375Q11.1 6.7 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q.775 0 1.538-.225q.762-.225 1.362-.625q.525-.35 1.075-.038q.55.313.475.988q-.35 3.45-2.937 5.725Q15.425 21 12 21Zm0-2q2.2 0 3.95-1.212q1.75-1.213 2.55-3.163q-.5.125-1 .2q-.5.075-1 .075q-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-.25-6.75Z"}"></path></svg></button>`;
    }
  })}</form>

		${$currentUser ? `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}` : ``}</div></header>

<main class="${"svelte-1iqzj3"}">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
