import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, T as noop, h as detach, O as component_subscribe, U as bubble, k as element, a as space, q as text, l as claim_element, m as children, c as claim_space, r as claim_text, n as attr, M as append_hydration, V as set_input_value, G as listen, W as prevent_default, K as run_all, u as set_data } from "./index-cdc99104.js";
import { c as currentUser, p as pb } from "./pocketbase-e2ca09db.js";
const Login_svelte_svelte_type_style_lang = "";
function create_else_block(ctx) {
  let div;
  let form;
  let input0;
  let t0;
  let input1;
  let t1;
  let button0;
  let t2;
  let t3;
  let button1;
  let t4;
  let t5;
  let mounted;
  let dispose;
  let if_block = (
    /*errorMessage*/
    ctx[2] && create_if_block_1(ctx)
  );
  return {
    c() {
      div = element("div");
      form = element("form");
      input0 = element("input");
      t0 = space();
      input1 = element("input");
      t1 = space();
      button0 = element("button");
      t2 = text("Login");
      t3 = space();
      button1 = element("button");
      t4 = text("Sign Up");
      t5 = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      form = claim_element(div_nodes, "FORM", { class: true });
      var form_nodes = children(form);
      input0 = claim_element(form_nodes, "INPUT", {
        id: true,
        placeholder: true,
        type: true,
        class: true
      });
      t0 = claim_space(form_nodes);
      input1 = claim_element(form_nodes, "INPUT", {
        id: true,
        placeholder: true,
        type: true,
        class: true
      });
      t1 = claim_space(form_nodes);
      button0 = claim_element(form_nodes, "BUTTON", { id: true, class: true });
      var button0_nodes = children(button0);
      t2 = claim_text(button0_nodes, "Login");
      button0_nodes.forEach(detach);
      t3 = claim_space(form_nodes);
      button1 = claim_element(form_nodes, "BUTTON", { id: true, class: true });
      var button1_nodes = children(button1);
      t4 = claim_text(button1_nodes, "Sign Up");
      button1_nodes.forEach(detach);
      form_nodes.forEach(detach);
      t5 = claim_space(div_nodes);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input0, "id", "username");
      attr(input0, "placeholder", "Username");
      attr(input0, "type", "text");
      attr(input0, "class", "svelte-rcadj0");
      attr(input1, "id", "password");
      attr(input1, "placeholder", "Password");
      attr(input1, "type", "password");
      attr(input1, "class", "svelte-rcadj0");
      attr(button0, "id", "login");
      attr(button0, "class", "svelte-rcadj0");
      attr(button1, "id", "signup");
      attr(button1, "class", "svelte-rcadj0");
      attr(form, "class", "svelte-rcadj0");
      attr(div, "class", "login svelte-rcadj0");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, form);
      append_hydration(form, input0);
      set_input_value(
        input0,
        /*username*/
        ctx[0]
      );
      append_hydration(form, t0);
      append_hydration(form, input1);
      set_input_value(
        input1,
        /*password*/
        ctx[1]
      );
      append_hydration(form, t1);
      append_hydration(form, button0);
      append_hydration(button0, t2);
      append_hydration(form, t3);
      append_hydration(form, button1);
      append_hydration(button1, t4);
      append_hydration(div, t5);
      if (if_block)
        if_block.m(div, null);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[8]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[9]
          ),
          listen(
            button0,
            "click",
            /*login*/
            ctx[4]
          ),
          listen(
            button1,
            "click",
            /*signUp*/
            ctx[5]
          ),
          listen(form, "submit", prevent_default(
            /*submit_handler*/
            ctx[7]
          ))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*username*/
      1 && input0.value !== /*username*/
      ctx2[0]) {
        set_input_value(
          input0,
          /*username*/
          ctx2[0]
        );
      }
      if (dirty & /*password*/
      2 && input1.value !== /*password*/
      ctx2[1]) {
        set_input_value(
          input1,
          /*password*/
          ctx2[1]
        );
      }
      if (
        /*errorMessage*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block(ctx) {
  let button;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text("Sign Out");
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {});
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Sign Out");
      button_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*signOut*/
          ctx[6]
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
function create_if_block_1(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(
        /*errorMessage*/
        ctx[2]
      );
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(
        span_nodes,
        /*errorMessage*/
        ctx[2]
      );
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "error svelte-rcadj0");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*errorMessage*/
      4)
        set_data(
          t,
          /*errorMessage*/
          ctx2[2]
        );
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    if (
      /*$currentUser*/
      ctx2[3]
    )
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
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
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $currentUser;
  component_subscribe($$self, currentUser, ($$value) => $$invalidate(3, $currentUser = $$value));
  let username;
  let password;
  let errorMessage = "";
  async function login() {
    return new Promise(async (reject) => {
      try {
        await pb.collection("users").authWithPassword(username, password);
        $$invalidate(0, username = "");
        $$invalidate(1, password = "");
      } catch (err) {
        $$invalidate(2, errorMessage = err.message);
        reject(err);
      }
    });
  }
  async function signUp() {
    return new Promise(async (reject) => {
      try {
        const passwordLength = 8;
        if (password.length < passwordLength) {
          throw new Error(`Password must be at least ${passwordLength} characters long.`);
        }
        const data = {
          username,
          password,
          passwordConfirm: password
        };
        await pb.collection("users").create(data);
        await login();
      } catch (err) {
        $$invalidate(2, errorMessage = err.message);
        reject(err);
      }
    });
  }
  function signOut() {
    pb.authStore.clear();
  }
  function submit_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input0_input_handler() {
    username = this.value;
    $$invalidate(0, username);
  }
  function input1_input_handler() {
    password = this.value;
    $$invalidate(1, password);
  }
  return [
    username,
    password,
    errorMessage,
    $currentUser,
    login,
    signUp,
    signOut,
    submit_handler,
    input0_input_handler,
    input1_input_handler
  ];
}
class Login extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Login as L
};
