import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, l as claim_element, m as children, h as detach, c as claim_space, n as attr, E as null_to_empty, b as insert_hydration, O as append_hydration, _ as set_input_value, G as listen, $ as prevent_default, a2 as update_keyed_each, T as noop, K as run_all, Q as component_subscribe, o as onMount, a4 as onDestroy, q as text, r as claim_text, u as set_data, a3 as destroy_block, C as writable, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component } from "../../../chunks/index-42be36f1.js";
import { c as currentUser, p as pb } from "../../../chunks/pocketbase-132547e6.js";
const Journal_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  return child_ctx;
}
function create_each_block(key_1, ctx) {
  let div;
  let span0;
  let t0_value = formatDate(
    /*journal*/
    ctx[8].created
  ) + "";
  let t0;
  let t1;
  let t2;
  let span1;
  let t3_value = (
    /*journal*/
    ctx[8].text + ""
  );
  let t3;
  let t4;
  return {
    key: key_1,
    first: null,
    c() {
      div = element("div");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = text(":");
      t2 = space();
      span1 = element("span");
      t3 = text(t3_value);
      t4 = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      span0 = claim_element(div_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, t0_value);
      t1 = claim_text(span0_nodes, ":");
      span0_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      span1 = claim_element(div_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t3 = claim_text(span1_nodes, t3_value);
      span1_nodes.forEach(detach);
      t4 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "entry-date svelte-k37dj1");
      attr(span1, "class", "entry-text");
      attr(div, "class", "entry svelte-k37dj1");
      this.first = div;
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, span0);
      append_hydration(span0, t0);
      append_hydration(span0, t1);
      append_hydration(div, t2);
      append_hydration(div, span1);
      append_hydration(span1, t3);
      append_hydration(div, t4);
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*$journals*/
      4 && t0_value !== (t0_value = formatDate(
        /*journal*/
        ctx[8].created
      ) + ""))
        set_data(t0, t0_value);
      if (dirty & /*$journals*/
      4 && t3_value !== (t3_value = /*journal*/
      ctx[8].text + ""))
        set_data(t3, t3_value);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$1(ctx) {
  let div1;
  let div0;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let t;
  let form;
  let textarea;
  let div1_class_value;
  let mounted;
  let dispose;
  let each_value = (
    /*$journals*/
    ctx[2]
  );
  const get_key = (ctx2) => (
    /*journal*/
    ctx2[8].id
  );
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t = space();
      form = element("form");
      textarea = element("textarea");
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
      t = claim_space(div1_nodes);
      form = claim_element(div1_nodes, "FORM", { class: true });
      var form_nodes = children(form);
      textarea = claim_element(form_nodes, "TEXTAREA", { placeholder: true, class: true });
      children(textarea).forEach(detach);
      form_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(textarea, "placeholder", "add journal");
      attr(textarea, "class", "svelte-k37dj1");
      attr(form, "class", "svelte-k37dj1");
      attr(div1, "class", div1_class_value = null_to_empty(
        /*className*/
        ctx[0]
      ) + " svelte-k37dj1");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      append_hydration(div1, t);
      append_hydration(div1, form);
      append_hydration(form, textarea);
      set_input_value(
        textarea,
        /*journalText*/
        ctx[1]
      );
      if (!mounted) {
        dispose = [
          listen(
            textarea,
            "input",
            /*textarea_input_handler*/
            ctx[5]
          ),
          listen(
            textarea,
            "blur",
            /*addJournal*/
            ctx[4]
          ),
          listen(form, "submit", prevent_default(
            /*addJournal*/
            ctx[4]
          ))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*$journals, formatDate*/
      4) {
        each_value = /*$journals*/
        ctx2[2];
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div0, destroy_block, create_each_block, null, get_each_context);
      }
      if (dirty & /*journalText*/
      2) {
        set_input_value(
          textarea,
          /*journalText*/
          ctx2[1]
        );
      }
      if (dirty & /*className*/
      1 && div1_class_value !== (div1_class_value = null_to_empty(
        /*className*/
        ctx2[0]
      ) + " svelte-k37dj1")) {
        attr(div1, "class", div1_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
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
function instance($$self, $$props, $$invalidate) {
  let $currentUser;
  let $journals;
  component_subscribe($$self, currentUser, ($$value) => $$invalidate(7, $currentUser = $$value));
  let journalText;
  let journals = writable([]);
  component_subscribe($$self, journals, (value) => $$invalidate(2, $journals = value));
  let unsubscribe;
  onMount(async () => {
    const [initialJournals, subscribeFunc] = await Promise.all([
      pb.collection("journals").getList(1, 50, { sort: "-created" }),
      pb.collection("journals").subscribe("*", async ({ action, record }) => {
        if (action === "create") {
          journals.update((items) => [...items, record]);
        }
        if (action === "delete") {
          journals.update((items) => items.filter((item) => item.id !== record.id));
        }
        if (action === "update") {
          const resultList = await pb.collection("journals").getList(1, 50, { sort: "-created" });
          journals.set(resultList.items);
        }
      })
    ]);
    journals.set(initialJournals.items);
    unsubscribe = subscribeFunc;
  });
  onDestroy(() => {
    unsubscribe == null ? void 0 : unsubscribe();
  });
  async function addJournal() {
    if (!journalText) {
      return;
    }
    const data = {
      text: journalText,
      checked: false,
      user: $currentUser ? $currentUser.id : ""
    };
    await pb.collection("journals").create(data);
    $$invalidate(1, journalText = "");
  }
  let { className } = $$props;
  function textarea_input_handler() {
    journalText = this.value;
    $$invalidate(1, journalText);
  }
  $$self.$$set = ($$props2) => {
    if ("className" in $$props2)
      $$invalidate(0, className = $$props2.className);
  };
  return [
    className,
    journalText,
    $journals,
    journals,
    addJournal,
    textarea_input_handler
  ];
}
class Journal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, { className: 0 });
  }
}
function create_fragment(ctx) {
  let journal;
  let current;
  journal = new Journal({ props: { className: "journal" } });
  return {
    c() {
      create_component(journal.$$.fragment);
    },
    l(nodes) {
      claim_component(journal.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(journal, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(journal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(journal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(journal, detaching);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
