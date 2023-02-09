import { d as now, l as loop, c as create_ssr_component, b as subscribe, f as add_attribute, o as onDestroy, e as escape, h as null_to_empty, i as each, v as validate_component } from "../../chunks/index3.js";
import "devalue";
import { w as writable } from "../../chunks/index2.js";
import { c as currentUser, L as Login } from "../../chunks/Login.js";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const Boop_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "span.svelte-hqw5i7{will-change:transform}",
  map: null
};
const Boop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let $springyRotation, $$unsubscribe_springyRotation;
  let { rotation = 0 } = $$props;
  let { timing = 150 } = $$props;
  let springyRotation = spring(0, { stiffness: 0.1, damping: 0.15 });
  $$unsubscribe_springyRotation = subscribe(springyRotation, (value) => $springyRotation = value);
  if ($$props.rotation === void 0 && $$bindings.rotation && rotation !== void 0)
    $$bindings.rotation(rotation);
  if ($$props.timing === void 0 && $$bindings.timing && timing !== void 0)
    $$bindings.timing(timing);
  $$result.css.add(css$2);
  {
    springyRotation.set(0);
  }
  style = `
		display: inline-block;
		transform: rotate(${$springyRotation}deg)
	`;
  $$unsubscribe_springyRotation();
  return `
<span${add_attribute("style", style, 0)} class="${"svelte-hqw5i7"}">${slots.default ? slots.default({}) : ``}
</span>`;
});
const Todos_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.todo.svelte-17kpv9.svelte-17kpv9.svelte-17kpv9{display:flex;justify-content:space-between;padding:calc(var(--padding) / 4) 0}.todo-text.svelte-17kpv9.svelte-17kpv9.svelte-17kpv9{padding:0 var(--padding);width:100%}.checkbox.svelte-17kpv9.svelte-17kpv9.svelte-17kpv9{display:inline-block;position:relative;min-width:24px;height:24px;border:1px solid var(--bg3);border-radius:8px;cursor:pointer;background-color:var(--bg2)}.checkbox.svelte-17kpv9.svelte-17kpv9.svelte-17kpv9:hover,.checkbox.svelte-17kpv9.svelte-17kpv9.svelte-17kpv9:active{border:1px solid var(--accent)}.checkbox.svelte-17kpv9 input[type="checkbox"].svelte-17kpv9.svelte-17kpv9{position:absolute;opacity:0;cursor:pointer}.checkbox.svelte-17kpv9 .checkmark.svelte-17kpv9.svelte-17kpv9:after{content:"";position:absolute;display:none}.checkbox.svelte-17kpv9 input[type="checkbox"].svelte-17kpv9:checked~.checkmark.svelte-17kpv9:after{display:block}.checkbox.svelte-17kpv9 .checkmark.svelte-17kpv9.svelte-17kpv9:after{left:9px;top:5px;width:5px;height:10px;border:solid var(--text);border-width:0 3px 3px 0;transform:rotate(45deg)}.todo-text.svelte-17kpv9.svelte-17kpv9.svelte-17kpv9{position:relative}.todo-text.svelte-17kpv9.svelte-17kpv9.svelte-17kpv9::before{content:"";position:absolute;left:calc(var(--padding) - 4px);top:50%;height:2px;background-color:rgba(var(--text-codes), 0.75);width:0;transition:width 0.25s;will-change:width}.todo-text.checked.svelte-17kpv9.svelte-17kpv9.svelte-17kpv9::before{width:calc(100% - var(--padding) * 2)}form.svelte-17kpv9.svelte-17kpv9.svelte-17kpv9{padding:var(--padding) calc(var(--padding) * 2)}form.svelte-17kpv9 input.svelte-17kpv9.svelte-17kpv9{width:100%}',
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
  $$result.css.add(css$1);
  $$unsubscribe_currentUser();
  $$unsubscribe_todos();
  return `<div class="${escape(null_to_empty(className), true) + " svelte-17kpv9"}"><div>${each($todos, (todo) => {
    return `<div class="${"todo svelte-17kpv9"}"><label class="${"checkbox svelte-17kpv9"}"><input type="${"checkbox"}" ${todo.checked ? "checked" : ""} class="${"svelte-17kpv9"}">
					<span class="${"checkmark svelte-17kpv9"}"></span></label>
				<span class="${["todo-text svelte-17kpv9", todo.checked ? "checked" : ""].join(" ").trim()}">${escape(todo.text)}</span>
				<button class="${"icon-button"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1em"}" height="${"1em"}" viewBox="${"0 0 15 15"}"><path fill="${"currentColor"}" d="${"M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"}"></path></svg></button>
			</div>`;
  })}</div>

	<form class="${"svelte-17kpv9"}"><input autocomplete="${"off"}" placeholder="${"add task"}" type="${"text"}" class="${"svelte-17kpv9"}"${add_attribute("value", todoText, 0)}></form>
</div>`;
});
const Pomodoro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className } = $$props;
  let timerMinutes = 25;
  let breakMinutes = 5;
  let minutes = timerMinutes;
  let seconds = 0;
  function getElapsedTime() {
    {
      return 0;
    }
  }
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<div${add_attribute("class", className, 0)}>${`<label for="${"timer-minutes"}">Timer Minutes:</label>
		<input type="${"number"}" id="${"timer-minutes"}"${add_attribute("value", timerMinutes, 0)}>

		<label for="${"break-minutes"}">Break Minutes:</label>
		<input type="${"number"}" id="${"break-minutes"}"${add_attribute("value", breakMinutes, 0)}>

		<button>Start</button>
		<button>Stop</button>`}
	<p>${escape(minutes)}:${escape(`0${seconds}`)}</p>
	<p>Elapsed Time: ${escape(Math.floor(getElapsedTime() / 60))}:${escape(getElapsedTime() % 60 < 10 ? `0${Math.floor(getElapsedTime() % 60)}` : Math.floor(getElapsedTime() % 60))}</p></div>`;
});
const Journal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => value);
  let { className } = $$props;
  let journalText;
  onDestroy(() => {
  });
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  $$unsubscribe_currentUser();
  return `<div${add_attribute("class", className, 0)}>
	<form><input placeholder="${"add journal"}" type="${"text"}"${add_attribute("value", journalText, 0)}></form></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-9s38wx{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:var(--padding);border-bottom:1px solid var(--bg3)}div.svelte-9s38wx{display:flex}form.svelte-9s38wx{display:flex;align-items:center}button.svelte-9s38wx{font-size:2rem;height:2rem;padding:0 var(--padding);background-color:transparent}main.svelte-9s38wx{display:grid;grid-template-columns:2fr 1fr;grid-template-rows:1fr 2fr;gap:var(--padding)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  $$result.css.add(css);
  $$unsubscribe_currentUser();
  return `<header class="${"svelte-9s38wx"}"><h1>Todo List</h1>

	<div class="${"svelte-9s38wx"}"><form method="${"POST"}" class="${"svelte-9s38wx"}">${validate_component(Boop, "Boop").$$render($$result, { rotation: 15, timing: 150 }, {}, {
    default: () => {
      return `<button aria-label="${"enable-light-mode"}" class="${"icon-button light-button svelte-9s38wx"}" formaction="${"/?/setTheme&theme=light"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1em"}" height="${"1em"}" viewBox="${"0 0 24 24"}"><path fill="${"currentColor"}" d="${"M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287ZM12 12Z"}"></path></svg></button>`;
    }
  })}

			${validate_component(Boop, "Boop").$$render($$result, { rotation: 15, timing: 150 }, {}, {
    default: () => {
      return `<button aria-label="${"enable-dark-mode"}" class="${"icon-button dark-button svelte-9s38wx"}" formaction="${"/?/setTheme&theme=dark"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1em"}" height="${"1em"}" viewBox="${"0 0 24 24"}"><path fill="${"currentColor"}" d="${"M12 21q-3.775 0-6.388-2.613Q3 15.775 3 12q0-3.45 2.25-5.988Q7.5 3.475 11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375Q11.1 6.7 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q.775 0 1.538-.225q.762-.225 1.362-.625q.525-.35 1.075-.038q.55.313.475.988q-.35 3.45-2.937 5.725Q15.425 21 12 21Zm0-2q2.2 0 3.95-1.212q1.75-1.213 2.55-3.163q-.5.125-1 .2q-.5.075-1 .075q-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-.25-6.75Z"}"></path></svg></button>`;
    }
  })}</form>

		${$currentUser ? `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}` : ``}</div></header>

<main class="${"svelte-9s38wx"}">${$currentUser ? `${validate_component(Todos, "Todos").$$render($$result, { className: "todos" }, {}, {})}
		${validate_component(Journal, "Journal").$$render($$result, { className: "journal" }, {}, {})}
		${validate_component(Pomodoro, "Pomodoro").$$render($$result, { className: "pomodoro" }, {}, {})}` : `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`}
</main>`;
});
export {
  Page as default
};
