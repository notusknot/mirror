import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, E as null_to_empty, b as insert_hydration, M as append_hydration, u as set_data, T as noop, X as to_number, G as listen, V as set_input_value, K as run_all, e as empty, W as prevent_default, Y as update_keyed_each, Z as destroy_block, f as transition_in, g as group_outros, t as transition_out, d as check_outros, O as component_subscribe, o as onMount, _ as onDestroy, Q as svg_element, R as claim_svg_element, F as toggle_class, x as create_component, y as claim_component, z as mount_component, A as destroy_component, C as writable } from "../../chunks/index-cdc99104.js";
import { L as Login } from "../../chunks/Login-f46a1d5e.js";
import { c as currentUser, p as pb } from "../../chunks/pocketbase-e2ca09db.js";
const Pomodoro_svelte_svelte_type_style_lang = "";
function create_else_block$1(ctx) {
  let button;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text("Stop");
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {});
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Stop");
      button_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*stopTimer*/
          ctx[8]
        );
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$2(ctx) {
  let div0;
  let label0;
  let t0;
  let t1;
  let input0;
  let t2;
  let div1;
  let label1;
  let t3;
  let t4;
  let input1;
  let t5;
  let button0;
  let t6;
  let t7;
  let button1;
  let t8;
  let mounted;
  let dispose;
  return {
    c() {
      div0 = element("div");
      label0 = element("label");
      t0 = text("Timer Minutes:");
      t1 = space();
      input0 = element("input");
      t2 = space();
      div1 = element("div");
      label1 = element("label");
      t3 = text("Break Minutes:");
      t4 = space();
      input1 = element("input");
      t5 = space();
      button0 = element("button");
      t6 = text("Start");
      t7 = space();
      button1 = element("button");
      t8 = text("Stop");
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      label0 = claim_element(div0_nodes, "LABEL", { for: true, class: true });
      var label0_nodes = children(label0);
      t0 = claim_text(label0_nodes, "Timer Minutes:");
      label0_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      input0 = claim_element(div0_nodes, "INPUT", { type: true, id: true });
      div0_nodes.forEach(detach);
      t2 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      label1 = claim_element(div1_nodes, "LABEL", { for: true, class: true });
      var label1_nodes = children(label1);
      t3 = claim_text(label1_nodes, "Break Minutes:");
      label1_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      input1 = claim_element(div1_nodes, "INPUT", { type: true, id: true });
      div1_nodes.forEach(detach);
      t5 = claim_space(nodes);
      button0 = claim_element(nodes, "BUTTON", {});
      var button0_nodes = children(button0);
      t6 = claim_text(button0_nodes, "Start");
      button0_nodes.forEach(detach);
      t7 = claim_space(nodes);
      button1 = claim_element(nodes, "BUTTON", {});
      var button1_nodes = children(button1);
      t8 = claim_text(button1_nodes, "Stop");
      button1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(label0, "for", "timer-minutes");
      attr(label0, "class", "svelte-9srfn6");
      attr(input0, "type", "number");
      attr(input0, "id", "timer-minutes");
      attr(div0, "class", "input-container svelte-9srfn6");
      attr(label1, "for", "break-minutes");
      attr(label1, "class", "svelte-9srfn6");
      attr(input1, "type", "number");
      attr(input1, "id", "break-minutes");
      attr(div1, "class", "input-container svelte-9srfn6");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      append_hydration(div0, label0);
      append_hydration(label0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, input0);
      set_input_value(
        input0,
        /*timerMinutes*/
        ctx[1]
      );
      insert_hydration(target, t2, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, label1);
      append_hydration(label1, t3);
      append_hydration(div1, t4);
      append_hydration(div1, input1);
      set_input_value(
        input1,
        /*breakMinutes*/
        ctx[2]
      );
      insert_hydration(target, t5, anchor);
      insert_hydration(target, button0, anchor);
      append_hydration(button0, t6);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, button1, anchor);
      append_hydration(button1, t8);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[11]
          ),
          listen(
            input0,
            "input",
            /*handleTimerMinutesChange*/
            ctx[9]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[12]
          ),
          listen(
            input1,
            "input",
            /*handleBreakMinutesChange*/
            ctx[10]
          ),
          listen(
            button0,
            "click",
            /*startTimer*/
            ctx[7]
          ),
          listen(
            button1,
            "click",
            /*stopTimer*/
            ctx[8]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*timerMinutes*/
      2 && to_number(input0.value) !== /*timerMinutes*/
      ctx2[1]) {
        set_input_value(
          input0,
          /*timerMinutes*/
          ctx2[1]
        );
      }
      if (dirty & /*breakMinutes*/
      4 && to_number(input1.value) !== /*breakMinutes*/
      ctx2[2]) {
        set_input_value(
          input1,
          /*breakMinutes*/
          ctx2[2]
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(div1);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(button0);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(button1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$2(ctx) {
  let div1;
  let div0;
  let p0;
  let t0_value = (
    /*isBreak*/
    ctx[5] ? "Break" : "Work"
  );
  let t0;
  let t1;
  let p1;
  let t2;
  let t3;
  let t4_value = (
    /*seconds*/
    (ctx[4] < 10 ? `0${/*seconds*/
    ctx[4]}` : (
      /*seconds*/
      ctx[4]
    )) + ""
  );
  let t4;
  let t5;
  let div1_class_value;
  function select_block_type(ctx2, dirty) {
    if (!/*isRunning*/
    ctx2[6])
      return create_if_block$2;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      p0 = element("p");
      t0 = text(t0_value);
      t1 = space();
      p1 = element("p");
      t2 = text(
        /*minutes*/
        ctx[3]
      );
      t3 = text(":");
      t4 = text(t4_value);
      t5 = space();
      if_block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, t0_value);
      p0_nodes.forEach(detach);
      t1 = claim_space(div0_nodes);
      p1 = claim_element(div0_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t2 = claim_text(
        p1_nodes,
        /*minutes*/
        ctx[3]
      );
      t3 = claim_text(p1_nodes, ":");
      t4 = claim_text(p1_nodes, t4_value);
      p1_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t5 = claim_space(div1_nodes);
      if_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p0, "class", "timer-label svelte-9srfn6");
      attr(p1, "class", "timer-time svelte-9srfn6");
      attr(div0, "class", "timer-container svelte-9srfn6");
      attr(div1, "class", div1_class_value = null_to_empty(
        /*className*/
        ctx[0]
      ) + " svelte-9srfn6");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, p0);
      append_hydration(p0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, p1);
      append_hydration(p1, t2);
      append_hydration(p1, t3);
      append_hydration(p1, t4);
      append_hydration(div1, t5);
      if_block.m(div1, null);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*isBreak*/
      32 && t0_value !== (t0_value = /*isBreak*/
      ctx2[5] ? "Break" : "Work"))
        set_data(t0, t0_value);
      if (dirty & /*minutes*/
      8)
        set_data(
          t2,
          /*minutes*/
          ctx2[3]
        );
      if (dirty & /*seconds*/
      16 && t4_value !== (t4_value = /*seconds*/
      (ctx2[4] < 10 ? `0${/*seconds*/
      ctx2[4]}` : (
        /*seconds*/
        ctx2[4]
      )) + ""))
        set_data(t4, t4_value);
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div1, null);
        }
      }
      if (dirty & /*className*/
      1 && div1_class_value !== (div1_class_value = null_to_empty(
        /*className*/
        ctx2[0]
      ) + " svelte-9srfn6")) {
        attr(div1, "class", div1_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      if_block.d();
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { className } = $$props;
  let timerMinutes = 25;
  let breakMinutes = 5;
  let minutes = timerMinutes;
  let seconds = 0;
  let intervalId;
  let isBreak = false;
  let isRunning = false;
  function startTimer() {
    $$invalidate(6, isRunning = true);
    intervalId = setInterval(
      () => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (isBreak) {
              $$invalidate(3, minutes = timerMinutes);
              $$invalidate(5, isBreak = false);
            } else {
              $$invalidate(3, minutes = breakMinutes);
              $$invalidate(5, isBreak = true);
            }
            $$invalidate(4, seconds = 59);
          } else {
            $$invalidate(3, minutes--, minutes);
            $$invalidate(4, seconds = 59);
          }
        } else {
          $$invalidate(4, seconds--, seconds);
        }
      },
      1e3
    );
  }
  function stopTimer() {
    $$invalidate(6, isRunning = false);
    clearInterval(intervalId);
    $$invalidate(3, minutes = timerMinutes);
    $$invalidate(4, seconds = 0);
  }
  function handleTimerMinutesChange(event) {
    $$invalidate(1, timerMinutes = +event.target.value);
    $$invalidate(3, minutes = timerMinutes);
  }
  function handleBreakMinutesChange(event) {
    $$invalidate(2, breakMinutes = +event.target.value);
  }
  function input0_input_handler() {
    timerMinutes = to_number(this.value);
    $$invalidate(1, timerMinutes);
  }
  function input1_input_handler() {
    breakMinutes = to_number(this.value);
    $$invalidate(2, breakMinutes);
  }
  $$self.$$set = ($$props2) => {
    if ("className" in $$props2)
      $$invalidate(0, className = $$props2.className);
  };
  return [
    className,
    timerMinutes,
    breakMinutes,
    minutes,
    seconds,
    isBreak,
    isRunning,
    startTimer,
    stopTimer,
    handleTimerMinutesChange,
    handleBreakMinutesChange,
    input0_input_handler,
    input1_input_handler
  ];
}
class Pomodoro extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { className: 0 });
  }
}
const Todos_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  return child_ctx;
}
function create_each_block(key_1, ctx) {
  let div;
  let label;
  let input;
  let input_checked_value;
  let t0;
  let span0;
  let t1;
  let span1;
  let t2_value = (
    /*todo*/
    ctx[15].text + ""
  );
  let t2;
  let t3;
  let button0;
  let svg0;
  let path0;
  let t4;
  let button1;
  let svg1;
  let path1;
  let t5;
  let mounted;
  let dispose;
  function change_handler() {
    return (
      /*change_handler*/
      ctx[9](
        /*todo*/
        ctx[15]
      )
    );
  }
  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[11](
        /*todo*/
        ctx[15]
      )
    );
  }
  return {
    key: key_1,
    first: null,
    c() {
      div = element("div");
      label = element("label");
      input = element("input");
      t0 = space();
      span0 = element("span");
      t1 = space();
      span1 = element("span");
      t2 = text(t2_value);
      t3 = space();
      button0 = element("button");
      svg0 = svg_element("svg");
      path0 = svg_element("path");
      t4 = space();
      button1 = element("button");
      svg1 = svg_element("svg");
      path1 = svg_element("path");
      t5 = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      label = claim_element(div_nodes, "LABEL", { class: true });
      var label_nodes = children(label);
      input = claim_element(label_nodes, "INPUT", { type: true, class: true });
      t0 = claim_space(label_nodes);
      span0 = claim_element(label_nodes, "SPAN", { class: true });
      children(span0).forEach(detach);
      label_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      span1 = claim_element(div_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, t2_value);
      span1_nodes.forEach(detach);
      t3 = claim_space(div_nodes);
      button0 = claim_element(div_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      svg0 = claim_svg_element(button0_nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        viewBox: true
      });
      var svg0_nodes = children(svg0);
      path0 = claim_svg_element(svg0_nodes, "path", { fill: true, d: true });
      children(path0).forEach(detach);
      svg0_nodes.forEach(detach);
      button0_nodes.forEach(detach);
      t4 = claim_space(div_nodes);
      button1 = claim_element(div_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      svg1 = claim_svg_element(button1_nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        viewBox: true
      });
      var svg1_nodes = children(svg1);
      path1 = claim_svg_element(svg1_nodes, "path", { fill: true, d: true });
      children(path1).forEach(detach);
      svg1_nodes.forEach(detach);
      button1_nodes.forEach(detach);
      t5 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input, "type", "checkbox");
      input.checked = input_checked_value = /*todo*/
      ctx[15].checked;
      attr(input, "class", "svelte-1apu78h");
      attr(span0, "class", "checkmark svelte-1apu78h");
      attr(label, "class", "checkbox svelte-1apu78h");
      attr(span1, "class", "todo-text svelte-1apu78h");
      toggle_class(
        span1,
        "checked",
        /*todo*/
        ctx[15].checked
      );
      attr(path0, "fill", "currentColor");
      attr(path0, "d", "M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 9.5V13h-6V7h1.5v4.5H17Z");
      attr(svg0, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg0, "width", "1em");
      attr(svg0, "height", "1em");
      attr(svg0, "viewBox", "0 0 24 24");
      attr(button0, "class", "icon-button pomodoro-button svelte-1apu78h");
      attr(path1, "fill", "currentColor");
      attr(path1, "d", "M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z");
      attr(svg1, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg1, "width", "1em");
      attr(svg1, "height", "1em");
      attr(svg1, "viewBox", "0 0 15 15");
      attr(button1, "class", "icon-button delete-button svelte-1apu78h");
      attr(div, "class", "todo svelte-1apu78h");
      this.first = div;
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, label);
      append_hydration(label, input);
      append_hydration(label, t0);
      append_hydration(label, span0);
      append_hydration(div, t1);
      append_hydration(div, span1);
      append_hydration(span1, t2);
      append_hydration(div, t3);
      append_hydration(div, button0);
      append_hydration(button0, svg0);
      append_hydration(svg0, path0);
      append_hydration(div, t4);
      append_hydration(div, button1);
      append_hydration(button1, svg1);
      append_hydration(svg1, path1);
      append_hydration(div, t5);
      if (!mounted) {
        dispose = [
          listen(input, "change", change_handler),
          listen(
            button0,
            "click",
            /*click_handler*/
            ctx[10]
          ),
          listen(button1, "click", click_handler_1)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*$todos*/
      8 && input_checked_value !== (input_checked_value = /*todo*/
      ctx[15].checked)) {
        input.checked = input_checked_value;
      }
      if (dirty & /*$todos*/
      8 && t2_value !== (t2_value = /*todo*/
      ctx[15].text + ""))
        set_data(t2, t2_value);
      if (dirty & /*$todos*/
      8) {
        toggle_class(
          span1,
          "checked",
          /*todo*/
          ctx[15].checked
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$1(ctx) {
  let pomodoro;
  let current;
  pomodoro = new Pomodoro({ props: { className: "pomodoro" } });
  return {
    c() {
      create_component(pomodoro.$$.fragment);
    },
    l(nodes) {
      claim_component(pomodoro.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(pomodoro, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(pomodoro.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pomodoro.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(pomodoro, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let div1;
  let div0;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t0;
  let form;
  let input;
  let div1_class_value;
  let t1;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let each_value = (
    /*$todos*/
    ctx[3]
  );
  const get_key = (ctx2) => (
    /*todo*/
    ctx2[15].id
  );
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  let if_block = (
    /*showPomodoro*/
    ctx[2] && create_if_block$1()
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t0 = space();
      form = element("form");
      input = element("input");
      t1 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      form = claim_element(div1_nodes, "FORM", { class: true });
      var form_nodes = children(form);
      input = claim_element(form_nodes, "INPUT", {
        autocomplete: true,
        placeholder: true,
        type: true,
        class: true
      });
      form_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      attr(input, "autocomplete", "off");
      attr(input, "placeholder", "add task");
      attr(input, "type", "text");
      attr(input, "class", "svelte-1apu78h");
      attr(form, "class", "svelte-1apu78h");
      attr(div1, "class", div1_class_value = null_to_empty(
        /*className*/
        ctx[0]
      ) + " svelte-1apu78h");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      append_hydration(div1, t0);
      append_hydration(div1, form);
      append_hydration(form, input);
      set_input_value(
        input,
        /*todoText*/
        ctx[1]
      );
      insert_hydration(target, t1, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[12]
          ),
          listen(
            input,
            "blur",
            /*addTodo*/
            ctx[5]
          ),
          listen(form, "submit", prevent_default(
            /*addTodo*/
            ctx[5]
          ))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*deleteTodo, $todos, togglePomodoro, toggleChecked*/
      456) {
        each_value = /*$todos*/
        ctx2[3];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div0, destroy_block, create_each_block, null, get_each_context);
      }
      if (dirty & /*todoText*/
      2 && input.value !== /*todoText*/
      ctx2[1]) {
        set_input_value(
          input,
          /*todoText*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*className*/
      1 && div1_class_value !== (div1_class_value = null_to_empty(
        /*className*/
        ctx2[0]
      ) + " svelte-1apu78h")) {
        attr(div1, "class", div1_class_value);
      }
      if (
        /*showPomodoro*/
        ctx2[2]
      ) {
        if (if_block) {
          if (dirty & /*showPomodoro*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1();
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      if (detaching)
        detach(t1);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $currentUser;
  let $todos;
  component_subscribe($$self, currentUser, ($$value) => $$invalidate(14, $currentUser = $$value));
  let todoText;
  let todos = writable([]);
  component_subscribe($$self, todos, (value) => $$invalidate(3, $todos = value));
  let unsubscribe;
  onMount(async () => {
    const [initialTodos, subscribeFunc] = await Promise.all([
      pb.collection("todos").getList(1, 50, { sort: "created" }),
      pb.collection("todos").subscribe("*", async ({ action, record }) => {
        if (action === "create") {
          todos.update((items) => [...items, record]);
        }
        if (action === "delete") {
          todos.update((items) => items.filter((item) => item.id !== record.id));
        }
        if (action === "update") {
          const resultList = await pb.collection("todos").getList(1, 50, { sort: "created" });
          todos.set(resultList.items);
        }
      })
    ]);
    todos.set(initialTodos.items);
    unsubscribe = subscribeFunc;
  });
  onDestroy(() => {
    unsubscribe == null ? void 0 : unsubscribe();
  });
  async function addTodo() {
    if (!todoText) {
      return;
    }
    const data = {
      text: todoText,
      checked: false,
      user: $currentUser ? $currentUser.id : ""
    };
    await pb.collection("todos").create(data);
    $$invalidate(1, todoText = "");
  }
  async function deleteTodo(todo) {
    await pb.collection("todos").delete(todo.id);
  }
  async function toggleChecked(todo) {
    const updatedTodo = { ...todo, checked: !todo.checked };
    todos.update((items) => items.map((item) => item.id === todo.id ? updatedTodo : item));
    await pb.collection("todos").update(todo.id, { checked: !todo.checked });
  }
  let { className } = $$props;
  let showPomodoro = false;
  function togglePomodoro() {
    $$invalidate(2, showPomodoro = !showPomodoro);
  }
  const change_handler = (todo) => toggleChecked(todo);
  const click_handler = () => togglePomodoro();
  const click_handler_1 = (todo) => deleteTodo(todo);
  function input_input_handler() {
    todoText = this.value;
    $$invalidate(1, todoText);
  }
  $$self.$$set = ($$props2) => {
    if ("className" in $$props2)
      $$invalidate(0, className = $$props2.className);
  };
  return [
    className,
    todoText,
    showPomodoro,
    $todos,
    todos,
    addTodo,
    deleteTodo,
    toggleChecked,
    togglePomodoro,
    change_handler,
    click_handler,
    click_handler_1,
    input_input_handler
  ];
}
class Todos extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { className: 0 });
  }
}
function create_else_block(ctx) {
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
function create_if_block(ctx) {
  let todos;
  let current;
  todos = new Todos({ props: { className: "todos" } });
  return {
    c() {
      create_component(todos.$$.fragment);
    },
    l(nodes) {
      claim_component(todos.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(todos, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(todos.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(todos.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(todos, detaching);
    }
  };
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*$currentUser*/
      ctx2[0]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index !== previous_block_index) {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $currentUser;
  component_subscribe($$self, currentUser, ($$value) => $$invalidate(0, $currentUser = $$value));
  return [$currentUser];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
