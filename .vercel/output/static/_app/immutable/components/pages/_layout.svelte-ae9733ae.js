import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, l as claim_element, m as children, h as detach, n as attr, E as null_to_empty, p as set_style, F as toggle_class, b as insert_hydration, G as listen, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, f as transition_in, t as transition_out, K as run_all, a as space, q as text, x as create_component, L as head_selector, c as claim_space, r as claim_text, y as claim_component, M as append_hydration, z as mount_component, N as action_destroyer, d as check_outros, A as destroy_component, O as component_subscribe, P as globals, Q as svg_element, R as claim_svg_element, T as noop, g as group_outros } from "../../chunks/index-cdc99104.js";
import { c as currentUser } from "../../chunks/pocketbase-e2ca09db.js";
import { p as parse } from "../../chunks/parse-a9b5aeea.js";
import { l as client } from "../../chunks/singletons-83248bbb.js";
import { L as Login } from "../../chunks/Login-f46a1d5e.js";
client.disable_scroll_handling;
client.goto;
client.invalidate;
const invalidateAll = client.invalidateAll;
client.preload_data;
client.preload_code;
client.before_navigate;
client.after_navigate;
const applyAction = client.apply_action;
function deserialize(result) {
  const parsed = JSON.parse(result);
  if (parsed.data) {
    parsed.data = parse(parsed.data);
  }
  return parsed;
}
function enhance(form, submit = () => {
}) {
  const fallback_callback = async ({ action, result, reset }) => {
    if (result.type === "success") {
      if (reset !== false) {
        HTMLFormElement.prototype.reset.call(form);
      }
      await invalidateAll();
    }
    if (location.origin + location.pathname === action.origin + action.pathname || result.type === "redirect" || result.type === "error") {
      applyAction(result);
    }
  };
  async function handle_submit(event) {
    var _a, _b, _c;
    event.preventDefault();
    const action = new URL(
      // We can't do submitter.formAction directly because that property is always set
      // We do cloneNode for avoid DOM clobbering - https://github.com/sveltejs/kit/issues/7593
      ((_a = event.submitter) == null ? void 0 : _a.hasAttribute("formaction")) ? (
        /** @type {HTMLButtonElement | HTMLInputElement} */
        event.submitter.formAction
      ) : (
        /** @type {HTMLFormElement} */
        HTMLFormElement.prototype.cloneNode.call(form).action
      )
    );
    const data = new FormData(form);
    const submitter_name = (_b = event.submitter) == null ? void 0 : _b.getAttribute("name");
    if (submitter_name) {
      data.append(submitter_name, ((_c = event.submitter) == null ? void 0 : _c.getAttribute("value")) ?? "");
    }
    const controller = new AbortController();
    let cancelled = false;
    const cancel = () => cancelled = true;
    const callback = await submit({
      action,
      cancel,
      controller,
      data,
      form
    }) ?? fallback_callback;
    if (cancelled)
      return;
    let result;
    try {
      const response = await fetch(action, {
        method: "POST",
        headers: {
          accept: "application/json",
          "x-sveltekit-action": "true"
        },
        cache: "no-store",
        body: data,
        signal: controller.signal
      });
      result = deserialize(await response.text());
      if (result.type === "error")
        result.status = response.status;
    } catch (error) {
      if (
        /** @type {any} */
        (error == null ? void 0 : error.name) === "AbortError"
      )
        return;
      result = { type: "error", error };
    }
    callback({
      action,
      data,
      form,
      update: (opts) => fallback_callback({ action, result, reset: opts == null ? void 0 : opts.reset }),
      // @ts-expect-error generic constraints stuff we don't care about
      result
    });
  }
  HTMLFormElement.prototype.addEventListener.call(form, "submit", handle_submit);
  return {
    destroy() {
      HTMLFormElement.prototype.removeEventListener.call(form, "submit", handle_submit);
    }
  };
}
const Boop_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let span;
  let span_class_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
    null
  );
  return {
    c() {
      span = element("span");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true, style: true });
      var span_nodes = children(span);
      if (default_slot)
        default_slot.l(span_nodes);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", span_class_value = null_to_empty(`boop${/*clicked*/
      ctx[0] ? " wiggle" : ""}`) + " svelte-367r4o");
      set_style(span, "--animation", "boop");
      toggle_class(
        span,
        "active",
        /*clicked*/
        ctx[0]
      );
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      if (default_slot) {
        default_slot.m(span, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            span,
            "keypress",
            /*onClick*/
            ctx[1]
          ),
          listen(
            span,
            "click",
            /*onClick*/
            ctx[1]
          ),
          listen(
            span,
            "mouseenter",
            /*onClick*/
            ctx[1]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*clicked*/
      1 && span_class_value !== (span_class_value = null_to_empty(`boop${/*clicked*/
      ctx2[0] ? " wiggle" : ""}`) + " svelte-367r4o")) {
        attr(span, "class", span_class_value);
      }
      if (!current || dirty & /*clicked, clicked*/
      1) {
        toggle_class(
          span,
          "active",
          /*clicked*/
          ctx2[0]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let clicked = false;
  let timeoutId = 0;
  const onClick = () => {
    $$invalidate(0, clicked = !clicked);
    timeoutId++;
    const tId = timeoutId;
    setTimeout(
      () => {
        if (tId === timeoutId)
          $$invalidate(0, clicked = false);
      },
      1e3
    );
  };
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  return [clicked, onClick, $$scope, slots];
}
class Boop extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const { document: document_1 } = globals;
function create_default_slot_1(ctx) {
  let button;
  let svg;
  let path;
  return {
    c() {
      button = element("button");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        "aria-label": true,
        class: true,
        formaction: true
      });
      var button_nodes = children(button);
      svg = claim_svg_element(button_nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { fill: true, d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill", "currentColor");
      attr(path, "d", "M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287ZM12 12Z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "width", "1em");
      attr(svg, "height", "1em");
      attr(svg, "viewBox", "0 0 24 24");
      attr(button, "aria-label", "enable-light-mode");
      attr(button, "class", "icon-button light-button svelte-14rdqgu");
      attr(button, "formaction", "/?/setTheme&theme=light");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, svg);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(button);
    }
  };
}
function create_default_slot(ctx) {
  let button;
  let svg;
  let path;
  return {
    c() {
      button = element("button");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {
        "aria-label": true,
        class: true,
        formaction: true
      });
      var button_nodes = children(button);
      svg = claim_svg_element(button_nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        viewBox: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { fill: true, d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill", "currentColor");
      attr(path, "d", "M12 21q-3.775 0-6.388-2.613Q3 15.775 3 12q0-3.45 2.25-5.988Q7.5 3.475 11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375Q11.1 6.7 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q.775 0 1.538-.225q.762-.225 1.362-.625q.525-.35 1.075-.038q.55.313.475.988q-.35 3.45-2.937 5.725Q15.425 21 12 21Zm0-2q2.2 0 3.95-1.212q1.75-1.213 2.55-3.163q-.5.125-1 .2q-.5.075-1 .075q-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-.25-6.75Z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "width", "1em");
      attr(svg, "height", "1em");
      attr(svg, "viewBox", "0 0 24 24");
      attr(button, "aria-label", "enable-dark-mode");
      attr(button, "class", "icon-button dark-button svelte-14rdqgu");
      attr(button, "formaction", "/?/setTheme&theme=dark");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, svg);
      append_hydration(svg, path);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(button);
    }
  };
}
function create_if_block(ctx) {
  let login;
  let current;
  login = new Login({});
  return {
    c() {
      create_component(login.$$.fragment);
    },
    l(nodes) {
      claim_component(login.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(login, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(login.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(login.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(login, detaching);
    }
  };
}
function create_fragment(ctx) {
  let meta;
  let t0;
  let header;
  let button;
  let a;
  let t1;
  let t2;
  let div;
  let form;
  let boop0;
  let t3;
  let boop1;
  let t4;
  let t5;
  let main;
  let current;
  let mounted;
  let dispose;
  boop0 = new Boop({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  boop1 = new Boop({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  let if_block = (
    /*$currentUser*/
    ctx[0] && create_if_block()
  );
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    null
  );
  return {
    c() {
      meta = element("meta");
      t0 = space();
      header = element("header");
      button = element("button");
      a = element("a");
      t1 = text("Journal");
      t2 = space();
      div = element("div");
      form = element("form");
      create_component(boop0.$$.fragment);
      t3 = space();
      create_component(boop1.$$.fragment);
      t4 = space();
      if (if_block)
        if_block.c();
      t5 = space();
      main = element("main");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-10ckgw5", document_1.head);
      meta = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      header = claim_element(nodes, "HEADER", { class: true });
      var header_nodes = children(header);
      button = claim_element(header_nodes, "BUTTON", {});
      var button_nodes = children(button);
      a = claim_element(button_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Journal");
      a_nodes.forEach(detach);
      button_nodes.forEach(detach);
      t2 = claim_space(header_nodes);
      div = claim_element(header_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      form = claim_element(div_nodes, "FORM", { method: true, class: true });
      var form_nodes = children(form);
      claim_component(boop0.$$.fragment, form_nodes);
      t3 = claim_space(form_nodes);
      claim_component(boop1.$$.fragment, form_nodes);
      form_nodes.forEach(detach);
      t4 = claim_space(div_nodes);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t5 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      if (default_slot)
        default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      document_1.title = "Productivity";
      attr(meta, "name", "description");
      attr(meta, "content", "Todo and notes tailored to my needs");
      attr(a, "href", "/journal");
      attr(a, "class", "svelte-14rdqgu");
      attr(form, "method", "POST");
      attr(form, "class", "svelte-14rdqgu");
      attr(div, "class", "svelte-14rdqgu");
      attr(header, "class", "svelte-14rdqgu");
      attr(main, "class", "svelte-14rdqgu");
    },
    m(target, anchor) {
      append_hydration(document_1.head, meta);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, header, anchor);
      append_hydration(header, button);
      append_hydration(button, a);
      append_hydration(a, t1);
      append_hydration(header, t2);
      append_hydration(header, div);
      append_hydration(div, form);
      mount_component(boop0, form, null);
      append_hydration(form, t3);
      mount_component(boop1, form, null);
      append_hydration(div, t4);
      if (if_block)
        if_block.m(div, null);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, main, anchor);
      if (default_slot) {
        default_slot.m(main, null);
      }
      current = true;
      if (!mounted) {
        dispose = action_destroyer(enhance.call(
          null,
          form,
          /*submitUpdateTheme*/
          ctx[1]
        ));
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const boop0_changes = {};
      if (dirty & /*$$scope*/
      8) {
        boop0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      boop0.$set(boop0_changes);
      const boop1_changes = {};
      if (dirty & /*$$scope*/
      8) {
        boop1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      boop1.$set(boop1_changes);
      if (
        /*$currentUser*/
        ctx2[0]
      ) {
        if (if_block) {
          if (dirty & /*$currentUser*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block();
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(boop0.$$.fragment, local);
      transition_in(boop1.$$.fragment, local);
      transition_in(if_block);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(boop0.$$.fragment, local);
      transition_out(boop1.$$.fragment, local);
      transition_out(if_block);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      detach(meta);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(header);
      destroy_component(boop0);
      destroy_component(boop1);
      if (if_block)
        if_block.d();
      if (detaching)
        detach(t5);
      if (detaching)
        detach(main);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $currentUser;
  component_subscribe($$self, currentUser, ($$value) => $$invalidate(0, $currentUser = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  const submitUpdateTheme = ({ action }) => {
    const theme = action.searchParams.get("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [$currentUser, submitUpdateTheme, slots, $$scope];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
