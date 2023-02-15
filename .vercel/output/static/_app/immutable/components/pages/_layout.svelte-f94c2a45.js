import { p as parse, _ as __vitePreload } from "../../chunks/parse-815ad804.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, D as create_slot, k as element, l as claim_element, m as children, h as detach, n as attr, E as null_to_empty, p as set_style, F as toggle_class, b as insert_hydration, G as listen, H as update_slot_base, I as get_all_dirty_from_scope, J as get_slot_changes, f as transition_in, t as transition_out, K as run_all, L as HtmlTagHydration, e as empty, a as space, q as text, x as create_component, M as head_selector, N as claim_html_tag, c as claim_space, r as claim_text, y as claim_component, O as append_hydration, z as mount_component, P as action_destroyer, d as check_outros, A as destroy_component, Q as component_subscribe, o as onMount, R as globals, T as noop, U as svg_element, V as claim_svg_element, W as add_render_callback, X as create_in_transition, Y as create_out_transition, g as group_outros } from "../../chunks/index-42be36f1.js";
import { c as currentUser } from "../../chunks/pocketbase-132547e6.js";
import { l as client } from "../../chunks/singletons-ba1ecc11.js";
import { L as Login } from "../../chunks/Login-8da91d3b.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
  };
}
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
const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/manifest.webmanifest">' } };
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
const Icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.864 8.465a3.505 3.505 0 0 0-3.03-4.449A3.005 3.005 0 0 0 14 2a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 2c-1.301 0-2.41.831-2.825 2.015a3.505 3.505 0 0 0-3.039 4.45A4.028 4.028 0 0 0 2 12c0 1.075.428 2.086 1.172 2.832A4.067 4.067 0 0 0 3 16c0 1.957 1.412 3.59 3.306 3.934A3.515 3.515 0 0 0 9.5 22c.979 0 1.864-.407 2.5-1.059A3.484 3.484 0 0 0 14.5 22a3.51 3.51 0 0 0 3.19-2.06a4.006 4.006 0 0 0 3.138-5.108A4.003 4.003 0 0 0 22 12a4.028 4.028 0 0 0-2.136-3.535zM9.5 20c-.711 0-1.33-.504-1.47-1.198L7.818 18H7c-1.103 0-2-.897-2-2c0-.352.085-.682.253-.981l.456-.816l-.784-.51A2.019 2.019 0 0 1 4 12c0-.977.723-1.824 1.682-1.972l1.693-.26l-1.059-1.346a1.502 1.502 0 0 1 1.498-2.39L9 6.207V5a1 1 0 0 1 2 0v13.5c0 .827-.673 1.5-1.5 1.5zm9.575-6.308l-.784.51l.456.816c.168.3.253.63.253.982c0 1.103-.897 2-2.05 2h-.818l-.162.802A1.502 1.502 0 0 1 14.5 20c-.827 0-1.5-.673-1.5-1.5V5c0-.552.448-1 1-1s1 .448 1 1.05v1.207l1.186-.225a1.502 1.502 0 0 1 1.498 2.39l-1.059 1.347l1.693.26A2.002 2.002 0 0 1 20 12c0 .683-.346 1.315-.925 1.692z"/></svg>';
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const { document: document_1 } = globals;
function create_default_slot_2(ctx) {
  let button;
  let a;
  return {
    c() {
      button = element("button");
      a = element("a");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { style: true, class: true });
      var button_nodes = children(button);
      a = claim_element(button_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      a_nodes.forEach(detach);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", "/");
      attr(a, "class", "svelte-1iqzj3");
      set_style(button, "padding-top", "6px");
      attr(button, "class", "icon-button svelte-1iqzj3");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, a);
      a.innerHTML = Icon;
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(button);
    }
  };
}
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
      attr(button, "class", "icon-button light-button svelte-1iqzj3");
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
      attr(button, "class", "icon-button dark-button svelte-1iqzj3");
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
function create_key_block(ctx) {
  let main;
  let main_intro;
  let main_outro;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    null
  );
  return {
    c() {
      main = element("main");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      if (default_slot)
        default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(main, "class", "svelte-1iqzj3");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      if (default_slot) {
        default_slot.m(main, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
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
      transition_in(default_slot, local);
      add_render_callback(() => {
        if (main_outro)
          main_outro.end(1);
        main_intro = create_in_transition(main, fly, { y: -30, duration: 200, delay: 150 });
        main_intro.start();
      });
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (main_intro)
        main_intro.invalidate();
      main_outro = create_out_transition(main, fly, { y: -30, duration: 150 });
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching && main_outro)
        main_outro.end();
    }
  };
}
function create_fragment(ctx) {
  let meta;
  let html_tag;
  let html_anchor;
  let t0;
  let header;
  let div0;
  let button;
  let a;
  let t1;
  let t2;
  let boop0;
  let t3;
  let div1;
  let form;
  let boop1;
  let t4;
  let boop2;
  let t5;
  let t6;
  let previous_key = (
    /*data*/
    ctx[0].currentPath
  );
  let key_block_anchor;
  let current;
  let mounted;
  let dispose;
  boop0 = new Boop({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  boop1 = new Boop({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  boop2 = new Boop({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  let if_block = (
    /*$currentUser*/
    ctx[2] && create_if_block()
  );
  let key_block = create_key_block(ctx);
  return {
    c() {
      meta = element("meta");
      html_tag = new HtmlTagHydration(false);
      html_anchor = empty();
      t0 = space();
      header = element("header");
      div0 = element("div");
      button = element("button");
      a = element("a");
      t1 = text("Journal");
      t2 = space();
      create_component(boop0.$$.fragment);
      t3 = space();
      div1 = element("div");
      form = element("form");
      create_component(boop1.$$.fragment);
      t4 = space();
      create_component(boop2.$$.fragment);
      t5 = space();
      if (if_block)
        if_block.c();
      t6 = space();
      key_block.c();
      key_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-10rrtm0", document_1.head);
      meta = claim_element(head_nodes, "META", { name: true, content: true });
      html_tag = claim_html_tag(head_nodes, false);
      html_anchor = empty();
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      header = claim_element(nodes, "HEADER", { class: true });
      var header_nodes = children(header);
      div0 = claim_element(header_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", {});
      var button_nodes = children(button);
      a = claim_element(button_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Journal");
      a_nodes.forEach(detach);
      button_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      claim_component(boop0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t3 = claim_space(header_nodes);
      div1 = claim_element(header_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      form = claim_element(div1_nodes, "FORM", { method: true, class: true });
      var form_nodes = children(form);
      claim_component(boop1.$$.fragment, form_nodes);
      t4 = claim_space(form_nodes);
      claim_component(boop2.$$.fragment, form_nodes);
      form_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      if (if_block)
        if_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t6 = claim_space(nodes);
      key_block.l(nodes);
      key_block_anchor = empty();
      this.h();
    },
    h() {
      document_1.title = "Productivity";
      attr(meta, "name", "description");
      attr(meta, "content", "Todo and notes tailored to my needs");
      html_tag.a = html_anchor;
      attr(a, "href", "/journal");
      attr(a, "class", "svelte-1iqzj3");
      attr(div0, "class", "svelte-1iqzj3");
      attr(form, "method", "POST");
      attr(form, "class", "svelte-1iqzj3");
      attr(div1, "class", "svelte-1iqzj3");
      attr(header, "class", "svelte-1iqzj3");
    },
    m(target, anchor) {
      append_hydration(document_1.head, meta);
      html_tag.m(
        /*webManifest*/
        ctx[1],
        document_1.head
      );
      append_hydration(document_1.head, html_anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, header, anchor);
      append_hydration(header, div0);
      append_hydration(div0, button);
      append_hydration(button, a);
      append_hydration(a, t1);
      append_hydration(div0, t2);
      mount_component(boop0, div0, null);
      append_hydration(header, t3);
      append_hydration(header, div1);
      append_hydration(div1, form);
      mount_component(boop1, form, null);
      append_hydration(form, t4);
      mount_component(boop2, form, null);
      append_hydration(div1, t5);
      if (if_block)
        if_block.m(div1, null);
      insert_hydration(target, t6, anchor);
      key_block.m(target, anchor);
      insert_hydration(target, key_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = action_destroyer(enhance.call(
          null,
          form,
          /*submitUpdateTheme*/
          ctx[3]
        ));
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & /*webManifest*/
      2)
        html_tag.p(
          /*webManifest*/
          ctx2[1]
        );
      const boop0_changes = {};
      if (dirty & /*$$scope*/
      32) {
        boop0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      boop0.$set(boop0_changes);
      const boop1_changes = {};
      if (dirty & /*$$scope*/
      32) {
        boop1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      boop1.$set(boop1_changes);
      const boop2_changes = {};
      if (dirty & /*$$scope*/
      32) {
        boop2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      boop2.$set(boop2_changes);
      if (
        /*$currentUser*/
        ctx2[2]
      ) {
        if (if_block) {
          if (dirty & /*$currentUser*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block();
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (dirty & /*data*/
      1 && safe_not_equal(previous_key, previous_key = /*data*/
      ctx2[0].currentPath)) {
        group_outros();
        transition_out(key_block, 1, 1, noop);
        check_outros();
        key_block = create_key_block(ctx2);
        key_block.c();
        transition_in(key_block, 1);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx2, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(boop0.$$.fragment, local);
      transition_in(boop1.$$.fragment, local);
      transition_in(boop2.$$.fragment, local);
      transition_in(if_block);
      transition_in(key_block);
      current = true;
    },
    o(local) {
      transition_out(boop0.$$.fragment, local);
      transition_out(boop1.$$.fragment, local);
      transition_out(boop2.$$.fragment, local);
      transition_out(if_block);
      transition_out(key_block);
      current = false;
    },
    d(detaching) {
      detach(meta);
      detach(html_anchor);
      if (detaching)
        html_tag.d();
      if (detaching)
        detach(t0);
      if (detaching)
        detach(header);
      destroy_component(boop0);
      destroy_component(boop1);
      destroy_component(boop2);
      if (if_block)
        if_block.d();
      if (detaching)
        detach(t6);
      if (detaching)
        detach(key_block_anchor);
      key_block.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let webManifest;
  let $currentUser;
  component_subscribe($$self, currentUser, ($$value) => $$invalidate(2, $currentUser = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  const submitUpdateTheme = ({ action }) => {
    const theme = action.searchParams.get("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };
  let { data } = $$props;
  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await __vitePreload(() => import("../../chunks/virtual_pwa-register-9d7a1bc4.js"), true ? ["../../chunks/virtual_pwa-register-9d7a1bc4.js","../../chunks/parse-815ad804.js"] : void 0, import.meta.url);
      registerSW({
        immediate: true,
        onRegistered(r) {
          console.log(`SW Registered: ${r}`);
        },
        onRegisterError(error) {
          console.log("SW registration error", error);
        }
      });
    }
  });
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  $$invalidate(1, webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "");
  return [data, webManifest, $currentUser, submitUpdateTheme, slots, $$scope];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0 });
  }
}
export {
  Layout as default
};
