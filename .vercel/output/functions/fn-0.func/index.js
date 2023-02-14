globalThis.global = globalThis;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function error(status, message) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, message);
}
function redirect(status, location) {
  if (isNaN(status) || status < 300 || status > 308) {
    throw new Error("Invalid status code");
  }
  return new Redirect(status, location);
}
function json(data, init2) {
  const body = JSON.stringify(data);
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
function text(body, init2) {
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder.encode(body).byteLength.toString());
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
var HttpError, Redirect, ActionFailure, encoder;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    HttpError = class HttpError2 {
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body) {
        this.status = status;
        if (typeof body === "string") {
          this.body = { message: body };
        } else if (body) {
          this.body = body;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class Redirect2 {
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    ActionFailure = class ActionFailure2 {
      /**
       * @param {number} status
       * @param {T} [data]
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
    encoder = new TextEncoder();
  }
});

// node_modules/devalue/src/utils.js
function is_primitive(thing) {
  return Object(thing) !== thing;
}
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function stringify_string(str) {
  let result = '"';
  for (let i2 = 0; i2 < str.length; i2 += 1) {
    const char = str.charAt(i2);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code <= 31) {
      result += `\\u${code.toString(16).toUpperCase().padStart(4, "0")}`;
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i2 + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i2];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
var escaped, DevalueError, object_proto_names;
var init_utils = __esm({
  "node_modules/devalue/src/utils.js"() {
    escaped = {
      "<": "\\u003C",
      ">": "\\u003E",
      "/": "\\u002F",
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "\0": "\\u0000",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    DevalueError = class extends Error {
      /**
       * @param {string} message
       * @param {string[]} keys
       */
      constructor(message, keys) {
        super(message);
        this.name = "DevalueError";
        this.path = keys.join("");
      }
    };
    object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  }
});

// node_modules/devalue/src/uneval.js
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i2) => {
            keys.push(`[${i2}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a2, b2) => b2[1] - a2[1]).forEach((entry, i2) => {
    names.set(entry[0], get_name(i2));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v2, i2) => i2 in thing ? stringify2(v2) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v2, i2) => {
            statements.push(`${name}[${i2}]=${stringify2(v2)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v2) => `add(${stringify2(v2)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v2]) => `set(${stringify2(k)}, ${stringify2(v2)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c3) {
  return escaped[c3] || c3;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}
var chars, unsafe_chars, reserved;
var init_uneval = __esm({
  "node_modules/devalue/src/uneval.js"() {
    init_utils();
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
    unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
    reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
  }
});

// node_modules/devalue/src/constants.js
var UNDEFINED, HOLE, NAN, POSITIVE_INFINITY, NEGATIVE_INFINITY, NEGATIVE_ZERO;
var init_constants = __esm({
  "node_modules/devalue/src/constants.js"() {
    UNDEFINED = -1;
    HOLE = -2;
    NAN = -3;
    POSITIVE_INFINITY = -4;
    NEGATIVE_INFINITY = -5;
    NEGATIVE_ZERO = -6;
  }
});

// node_modules/devalue/src/parse.js
var init_parse = __esm({
  "node_modules/devalue/src/parse.js"() {
    init_constants();
  }
});

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p2 = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index6 = p2++;
    indexes.set(thing, index6);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index6] = `["${key2}",${flatten(value2)}]`;
        return index6;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i2 = 0; i2 < thing.length; i2 += 1) {
            if (i2 > 0)
              str += ",";
            if (i2 in thing) {
              keys.push(`[${i2}]`);
              str += flatten(thing[i2]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index6] = str;
    return index6;
  }
  const index5 = flatten(value);
  if (index5 < 0)
    return `${index5}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}
var init_stringify = __esm({
  "node_modules/devalue/src/stringify.js"() {
    init_utils();
    init_constants();
  }
});

// node_modules/devalue/index.js
var init_devalue = __esm({
  "node_modules/devalue/index.js"() {
    init_uneval();
    init_parse();
    init_stringify();
  }
});

// .svelte-kit/output/server/chunks/index3.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a2, b2) {
  return a2 != a2 ? b2 == b2 : a2 !== b2 || (a2 && typeof a2 === "object" || typeof a2 === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
function set_current_component(component5) {
  current_component = component5;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i2 = pattern2.lastIndex - 1;
    const ch = str[i2];
    escaped2 += str.substring(last, i2) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i2 + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = "";
  for (let i2 = 0; i2 < items.length; i2 += 1) {
    str += fn(items[i2], i2);
  }
  return str;
}
function validate_component(component5, name) {
  if (!component5 || !component5.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component5;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css5) => css5.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_index3 = __esm({
  ".svelte-kit/output/server/chunks/index3.js"() {
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/chunks/index2.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i2 = 0; i2 < subscriber_queue.length; i2 += 2) {
            subscriber_queue[i2][0](subscriber_queue[i2 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var subscriber_queue;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_index3();
    subscriber_queue = [];
  }
});

// .svelte-kit/output/server/chunks/hooks.server.js
var hooks_server_exports = {};
__export(hooks_server_exports, {
  handle: () => handle
});
var handle;
var init_hooks_server = __esm({
  ".svelte-kit/output/server/chunks/hooks.server.js"() {
    handle = async ({ event, resolve }) => {
      let theme = null;
      const newTheme = event.url.searchParams.get("theme");
      const cookieTheme = event.cookies.get("colortheme");
      if (newTheme) {
        theme = newTheme;
      } else if (cookieTheme) {
        theme = cookieTheme;
      }
      if (theme) {
        return await resolve(event, {
          transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
        });
      }
      const response = await resolve(event);
      return response;
    };
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index5 = 0;
      while (index5 < str.length) {
        var eqIdx = str.indexOf("=", index5);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index5);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index5 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index5, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index5 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e2) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e2) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e2
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key2) {
          return key2.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options2.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// node_modules/pocketbase/dist/pocketbase.es.mjs
function __extends(e2, t2) {
  if ("function" != typeof t2 && null !== t2)
    throw new TypeError("Class extends value " + String(t2) + " is not a constructor or null");
  function __() {
    this.constructor = e2;
  }
  extendStatics(e2, t2), e2.prototype = null === t2 ? Object.create(t2) : (__.prototype = t2.prototype, new __());
}
function __awaiter(e2, t2, n2, i2) {
  return new (n2 || (n2 = Promise))(function(o2, r2) {
    function fulfilled(e3) {
      try {
        step(i2.next(e3));
      } catch (e4) {
        r2(e4);
      }
    }
    function rejected(e3) {
      try {
        step(i2.throw(e3));
      } catch (e4) {
        r2(e4);
      }
    }
    function step(e3) {
      e3.done ? o2(e3.value) : function adopt(e4) {
        return e4 instanceof n2 ? e4 : new n2(function(t3) {
          t3(e4);
        });
      }(e3.value).then(fulfilled, rejected);
    }
    step((i2 = i2.apply(e2, t2 || [])).next());
  });
}
function __generator(e2, t2) {
  var n2, i2, o2, r2, s3 = { label: 0, sent: function() {
    if (1 & o2[0])
      throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return r2 = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (r2[Symbol.iterator] = function() {
    return this;
  }), r2;
  function verb(r3) {
    return function(a2) {
      return function step(r4) {
        if (n2)
          throw new TypeError("Generator is already executing.");
        for (; s3; )
          try {
            if (n2 = 1, i2 && (o2 = 2 & r4[0] ? i2.return : r4[0] ? i2.throw || ((o2 = i2.return) && o2.call(i2), 0) : i2.next) && !(o2 = o2.call(i2, r4[1])).done)
              return o2;
            switch (i2 = 0, o2 && (r4 = [2 & r4[0], o2.value]), r4[0]) {
              case 0:
              case 1:
                o2 = r4;
                break;
              case 4:
                return s3.label++, { value: r4[1], done: false };
              case 5:
                s3.label++, i2 = r4[1], r4 = [0];
                continue;
              case 7:
                r4 = s3.ops.pop(), s3.trys.pop();
                continue;
              default:
                if (!(o2 = s3.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || 6 !== r4[0] && 2 !== r4[0])) {
                  s3 = 0;
                  continue;
                }
                if (3 === r4[0] && (!o2 || r4[1] > o2[0] && r4[1] < o2[3])) {
                  s3.label = r4[1];
                  break;
                }
                if (6 === r4[0] && s3.label < o2[1]) {
                  s3.label = o2[1], o2 = r4;
                  break;
                }
                if (o2 && s3.label < o2[2]) {
                  s3.label = o2[2], s3.ops.push(r4);
                  break;
                }
                o2[2] && s3.ops.pop(), s3.trys.pop();
                continue;
            }
            r4 = t2.call(e2, s3);
          } catch (e3) {
            r4 = [6, e3], i2 = 0;
          } finally {
            n2 = o2 = 0;
          }
        if (5 & r4[0])
          throw r4[1];
        return { value: r4[0] ? r4[1] : void 0, done: true };
      }([r3, a2]);
    };
  }
}
function cookieSerialize(e2, t2, i2) {
  var o2 = Object.assign({}, i2 || {}), r2 = o2.encode || defaultEncode;
  if (!n.test(e2))
    throw new TypeError("argument name is invalid");
  var s3 = r2(t2);
  if (s3 && !n.test(s3))
    throw new TypeError("argument val is invalid");
  var a2 = e2 + "=" + s3;
  if (null != o2.maxAge) {
    var c3 = o2.maxAge - 0;
    if (isNaN(c3) || !isFinite(c3))
      throw new TypeError("option maxAge is invalid");
    a2 += "; Max-Age=" + Math.floor(c3);
  }
  if (o2.domain) {
    if (!n.test(o2.domain))
      throw new TypeError("option domain is invalid");
    a2 += "; Domain=" + o2.domain;
  }
  if (o2.path) {
    if (!n.test(o2.path))
      throw new TypeError("option path is invalid");
    a2 += "; Path=" + o2.path;
  }
  if (o2.expires) {
    if (!function isDate(e3) {
      return "[object Date]" === Object.prototype.toString.call(e3) || e3 instanceof Date;
    }(o2.expires) || isNaN(o2.expires.valueOf()))
      throw new TypeError("option expires is invalid");
    a2 += "; Expires=" + o2.expires.toUTCString();
  }
  if (o2.httpOnly && (a2 += "; HttpOnly"), o2.secure && (a2 += "; Secure"), o2.priority)
    switch ("string" == typeof o2.priority ? o2.priority.toLowerCase() : o2.priority) {
      case "low":
        a2 += "; Priority=Low";
        break;
      case "medium":
        a2 += "; Priority=Medium";
        break;
      case "high":
        a2 += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  if (o2.sameSite)
    switch ("string" == typeof o2.sameSite ? o2.sameSite.toLowerCase() : o2.sameSite) {
      case true:
        a2 += "; SameSite=Strict";
        break;
      case "lax":
        a2 += "; SameSite=Lax";
        break;
      case "strict":
        a2 += "; SameSite=Strict";
        break;
      case "none":
        a2 += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return a2;
}
function defaultDecode(e2) {
  return -1 !== e2.indexOf("%") ? decodeURIComponent(e2) : e2;
}
function defaultEncode(e2) {
  return encodeURIComponent(e2);
}
function getTokenPayload(t2) {
  if (t2)
    try {
      var n2 = decodeURIComponent(e(t2.split(".")[1]).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""));
      return JSON.parse(n2) || {};
    } catch (e2) {
    }
  return {};
}
var extendStatics, __assign, e, t, n, i, o, r, s2, a, c, u, l, d, h, p, v, f, m, y, b, g, S, w, C;
var init_pocketbase_es = __esm({
  "node_modules/pocketbase/dist/pocketbase.es.mjs"() {
    extendStatics = function(e2, t2) {
      return extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
        e3.__proto__ = t3;
      } || function(e3, t3) {
        for (var n2 in t3)
          Object.prototype.hasOwnProperty.call(t3, n2) && (e3[n2] = t3[n2]);
      }, extendStatics(e2, t2);
    };
    __assign = function() {
      return __assign = Object.assign || function __assign2(e2) {
        for (var t2, n2 = 1, i2 = arguments.length; n2 < i2; n2++)
          for (var o2 in t2 = arguments[n2])
            Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
        return e2;
      }, __assign.apply(this, arguments);
    };
    t = function(e2) {
      function ClientResponseError(t2) {
        var n2, i2, o2, r2, s3 = this;
        return (s3 = e2.call(this, "ClientResponseError") || this).url = "", s3.status = 0, s3.data = {}, s3.isAbort = false, s3.originalError = null, Object.setPrototypeOf(s3, ClientResponseError.prototype), t2 instanceof ClientResponseError || (s3.originalError = t2), null !== t2 && "object" == typeof t2 && (s3.url = "string" == typeof t2.url ? t2.url : "", s3.status = "number" == typeof t2.status ? t2.status : 0, s3.data = null !== t2.data && "object" == typeof t2.data ? t2.data : {}), "undefined" != typeof DOMException && t2 instanceof DOMException && (s3.isAbort = true), s3.name = "ClientResponseError " + s3.status, s3.message = null === (n2 = s3.data) || void 0 === n2 ? void 0 : n2.message, s3.message || (s3.isAbort ? s3.message = "The request was autocancelled. More info you could find in https://github.com/pocketbase/js-sdk#auto-cancellation." : (null === (r2 = null === (o2 = null === (i2 = s3.originalError) || void 0 === i2 ? void 0 : i2.cause) || void 0 === o2 ? void 0 : o2.message) || void 0 === r2 ? void 0 : r2.includes("ECONNREFUSED ::1")) ? s3.message = "Failed to connect to the PocketBase server. Try replacing the SDK url from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21)." : s3.message = "Something went wrong while processing your request."), s3;
      }
      return __extends(ClientResponseError, e2), ClientResponseError.prototype.toJSON = function() {
        return __assign({}, this);
      }, ClientResponseError;
    }(Error);
    n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    e = "function" == typeof atob ? atob : function(e2) {
      var t2 = String(e2).replace(/=+$/, "");
      if (t2.length % 4 == 1)
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
      for (var n2, i2, o2 = 0, r2 = 0, s3 = ""; i2 = t2.charAt(r2++); ~i2 && (n2 = o2 % 4 ? 64 * n2 + i2 : i2, o2++ % 4) ? s3 += String.fromCharCode(255 & n2 >> (-2 * o2 & 6)) : 0)
        i2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i2);
      return s3;
    };
    i = function() {
      function BaseModel(e2) {
        void 0 === e2 && (e2 = {}), this.load(e2 || {});
      }
      return BaseModel.prototype.load = function(e2) {
        for (var t2 = 0, n2 = Object.entries(e2); t2 < n2.length; t2++) {
          var i2 = n2[t2], o2 = i2[0], r2 = i2[1];
          this[o2] = r2;
        }
        this.id = void 0 !== e2.id ? e2.id : "", this.created = void 0 !== e2.created ? e2.created : "", this.updated = void 0 !== e2.updated ? e2.updated : "";
      }, Object.defineProperty(BaseModel.prototype, "isNew", { get: function() {
        return !this.id;
      }, enumerable: false, configurable: true }), BaseModel.prototype.clone = function() {
        var e2 = "function" == typeof structuredClone ? structuredClone(this) : JSON.parse(JSON.stringify(this));
        return new this.constructor(e2);
      }, BaseModel.prototype.export = function() {
        return Object.assign({}, this);
      }, BaseModel;
    }();
    o = function(e2) {
      function Record() {
        return null !== e2 && e2.apply(this, arguments) || this;
      }
      return __extends(Record, e2), Record.prototype.load = function(t2) {
        e2.prototype.load.call(this, t2), this.collectionId = "string" == typeof t2.collectionId ? t2.collectionId : "", this.collectionName = "string" == typeof t2.collectionName ? t2.collectionName : "", this.loadExpand(t2.expand);
      }, Record.prototype.loadExpand = function(e3) {
        for (var t2 in e3 = e3 || {}, this.expand = {}, e3)
          Array.isArray(e3[t2]) ? this.expand[t2] = e3[t2].map(function(e4) {
            return new Record(e4 || {});
          }) : this.expand[t2] = new Record(e3[t2] || {});
      }, Record;
    }(i);
    r = function(e2) {
      function Admin() {
        return null !== e2 && e2.apply(this, arguments) || this;
      }
      return __extends(Admin, e2), Admin.prototype.load = function(t2) {
        e2.prototype.load.call(this, t2), this.avatar = "number" == typeof t2.avatar ? t2.avatar : 0, this.email = "string" == typeof t2.email ? t2.email : "";
      }, Admin;
    }(i);
    s2 = function() {
      function BaseAuthStore() {
        this.baseToken = "", this.baseModel = null, this._onChangeCallbacks = [];
      }
      return Object.defineProperty(BaseAuthStore.prototype, "token", { get: function() {
        return this.baseToken;
      }, enumerable: false, configurable: true }), Object.defineProperty(BaseAuthStore.prototype, "model", { get: function() {
        return this.baseModel;
      }, enumerable: false, configurable: true }), Object.defineProperty(BaseAuthStore.prototype, "isValid", { get: function() {
        return !function isTokenExpired(e2, t2) {
          void 0 === t2 && (t2 = 0);
          var n2 = getTokenPayload(e2);
          return !(Object.keys(n2).length > 0 && (!n2.exp || n2.exp - t2 > Date.now() / 1e3));
        }(this.token);
      }, enumerable: false, configurable: true }), BaseAuthStore.prototype.save = function(e2, t2) {
        this.baseToken = e2 || "", this.baseModel = null !== t2 && "object" == typeof t2 ? void 0 !== t2.collectionId ? new o(t2) : new r(t2) : null, this.triggerChange();
      }, BaseAuthStore.prototype.clear = function() {
        this.baseToken = "", this.baseModel = null, this.triggerChange();
      }, BaseAuthStore.prototype.loadFromCookie = function(e2, t2) {
        void 0 === t2 && (t2 = "pb_auth");
        var n2 = function cookieParse(e3, t3) {
          var n3 = {};
          if ("string" != typeof e3)
            return n3;
          for (var i3 = Object.assign({}, t3 || {}).decode || defaultDecode, o2 = 0; o2 < e3.length; ) {
            var r2 = e3.indexOf("=", o2);
            if (-1 === r2)
              break;
            var s3 = e3.indexOf(";", o2);
            if (-1 === s3)
              s3 = e3.length;
            else if (s3 < r2) {
              o2 = e3.lastIndexOf(";", r2 - 1) + 1;
              continue;
            }
            var a2 = e3.slice(o2, r2).trim();
            if (void 0 === n3[a2]) {
              var c3 = e3.slice(r2 + 1, s3).trim();
              34 === c3.charCodeAt(0) && (c3 = c3.slice(1, -1));
              try {
                n3[a2] = i3(c3);
              } catch (e4) {
                n3[a2] = c3;
              }
            }
            o2 = s3 + 1;
          }
          return n3;
        }(e2 || "")[t2] || "", i2 = {};
        try {
          (null === typeof (i2 = JSON.parse(n2)) || "object" != typeof i2 || Array.isArray(i2)) && (i2 = {});
        } catch (e3) {
        }
        this.save(i2.token || "", i2.model || null);
      }, BaseAuthStore.prototype.exportToCookie = function(e2, t2) {
        var n2, i2, r2;
        void 0 === t2 && (t2 = "pb_auth");
        var s3 = { secure: true, sameSite: true, httpOnly: true, path: "/" }, a2 = getTokenPayload(this.token);
        (null == a2 ? void 0 : a2.exp) ? s3.expires = new Date(1e3 * a2.exp) : s3.expires = new Date("1970-01-01"), e2 = Object.assign({}, s3, e2);
        var c3 = { token: this.token, model: (null === (n2 = this.model) || void 0 === n2 ? void 0 : n2.export()) || null }, u2 = cookieSerialize(t2, JSON.stringify(c3), e2), l3 = "undefined" != typeof Blob ? new Blob([u2]).size : u2.length;
        return c3.model && l3 > 4096 && (c3.model = { id: null === (i2 = null == c3 ? void 0 : c3.model) || void 0 === i2 ? void 0 : i2.id, email: null === (r2 = null == c3 ? void 0 : c3.model) || void 0 === r2 ? void 0 : r2.email }, this.model instanceof o && (c3.model.username = this.model.username, c3.model.verified = this.model.verified, c3.model.collectionId = this.model.collectionId), u2 = cookieSerialize(t2, JSON.stringify(c3), e2)), u2;
      }, BaseAuthStore.prototype.onChange = function(e2, t2) {
        var n2 = this;
        return void 0 === t2 && (t2 = false), this._onChangeCallbacks.push(e2), t2 && e2(this.token, this.model), function() {
          for (var t3 = n2._onChangeCallbacks.length - 1; t3 >= 0; t3--)
            if (n2._onChangeCallbacks[t3] == e2)
              return delete n2._onChangeCallbacks[t3], void n2._onChangeCallbacks.splice(t3, 1);
        };
      }, BaseAuthStore.prototype.triggerChange = function() {
        for (var e2 = 0, t2 = this._onChangeCallbacks; e2 < t2.length; e2++) {
          var n2 = t2[e2];
          n2 && n2(this.token, this.model);
        }
      }, BaseAuthStore;
    }();
    a = function(e2) {
      function LocalAuthStore(t2) {
        void 0 === t2 && (t2 = "pocketbase_auth");
        var n2 = e2.call(this) || this;
        return n2.storageFallback = {}, n2.storageKey = t2, n2;
      }
      return __extends(LocalAuthStore, e2), Object.defineProperty(LocalAuthStore.prototype, "token", { get: function() {
        return (this._storageGet(this.storageKey) || {}).token || "";
      }, enumerable: false, configurable: true }), Object.defineProperty(LocalAuthStore.prototype, "model", { get: function() {
        var e3, t2 = this._storageGet(this.storageKey) || {};
        return null === t2 || "object" != typeof t2 || null === t2.model || "object" != typeof t2.model ? null : void 0 === (null === (e3 = t2.model) || void 0 === e3 ? void 0 : e3.collectionId) ? new r(t2.model) : new o(t2.model);
      }, enumerable: false, configurable: true }), LocalAuthStore.prototype.save = function(t2, n2) {
        this._storageSet(this.storageKey, { token: t2, model: n2 }), e2.prototype.save.call(this, t2, n2);
      }, LocalAuthStore.prototype.clear = function() {
        this._storageRemove(this.storageKey), e2.prototype.clear.call(this);
      }, LocalAuthStore.prototype._storageGet = function(e3) {
        if ("undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.localStorage)) {
          var t2 = window.localStorage.getItem(e3) || "";
          try {
            return JSON.parse(t2);
          } catch (e4) {
            return t2;
          }
        }
        return this.storageFallback[e3];
      }, LocalAuthStore.prototype._storageSet = function(e3, t2) {
        if ("undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.localStorage)) {
          var n2 = t2;
          "string" != typeof t2 && (n2 = JSON.stringify(t2)), window.localStorage.setItem(e3, n2);
        } else
          this.storageFallback[e3] = t2;
      }, LocalAuthStore.prototype._storageRemove = function(e3) {
        var t2;
        "undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.localStorage) && (null === (t2 = window.localStorage) || void 0 === t2 || t2.removeItem(e3)), delete this.storageFallback[e3];
      }, LocalAuthStore;
    }(s2);
    c = function c2(e2) {
      this.client = e2;
    };
    u = function(e2) {
      function SettingsService() {
        return null !== e2 && e2.apply(this, arguments) || this;
      }
      return __extends(SettingsService, e2), SettingsService.prototype.getAll = function(e3) {
        return void 0 === e3 && (e3 = {}), this.client.send("/api/settings", { method: "GET", params: e3 }).then(function(e4) {
          return e4 || {};
        });
      }, SettingsService.prototype.update = function(e3, t2) {
        return void 0 === e3 && (e3 = {}), void 0 === t2 && (t2 = {}), this.client.send("/api/settings", { method: "PATCH", params: t2, body: e3 }).then(function(e4) {
          return e4 || {};
        });
      }, SettingsService.prototype.testS3 = function(e3) {
        return void 0 === e3 && (e3 = {}), this.client.send("/api/settings/test/s3", { method: "POST", params: e3 }).then(function() {
          return true;
        });
      }, SettingsService.prototype.testEmail = function(e3, t2, n2) {
        void 0 === n2 && (n2 = {});
        var i2 = { email: e3, template: t2 };
        return this.client.send("/api/settings/test/email", { method: "POST", params: n2, body: i2 }).then(function() {
          return true;
        });
      }, SettingsService;
    }(c);
    l = function l2(e2, t2, n2, i2, o2) {
      this.page = e2 > 0 ? e2 : 1, this.perPage = t2 >= 0 ? t2 : 0, this.totalItems = n2 >= 0 ? n2 : 0, this.totalPages = i2 >= 0 ? i2 : 0, this.items = o2 || [];
    };
    d = function(e2) {
      function CrudService() {
        return null !== e2 && e2.apply(this, arguments) || this;
      }
      return __extends(CrudService, e2), CrudService.prototype.getFullList = function(e3, t2) {
        return void 0 === e3 && (e3 = 200), void 0 === t2 && (t2 = {}), this._getFullList(this.baseCrudPath, e3, t2);
      }, CrudService.prototype.getList = function(e3, t2, n2) {
        return void 0 === e3 && (e3 = 1), void 0 === t2 && (t2 = 30), void 0 === n2 && (n2 = {}), this._getList(this.baseCrudPath, e3, t2, n2);
      }, CrudService.prototype.getFirstListItem = function(e3, t2) {
        return void 0 === t2 && (t2 = {}), this._getFirstListItem(this.baseCrudPath, e3, t2);
      }, CrudService.prototype.getOne = function(e3, t2) {
        return void 0 === t2 && (t2 = {}), this._getOne(this.baseCrudPath, e3, t2);
      }, CrudService.prototype.create = function(e3, t2) {
        return void 0 === e3 && (e3 = {}), void 0 === t2 && (t2 = {}), this._create(this.baseCrudPath, e3, t2);
      }, CrudService.prototype.update = function(e3, t2, n2) {
        return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), this._update(this.baseCrudPath, e3, t2, n2);
      }, CrudService.prototype.delete = function(e3, t2) {
        return void 0 === t2 && (t2 = {}), this._delete(this.baseCrudPath, e3, t2);
      }, CrudService;
    }(function(e2) {
      function BaseCrudService() {
        return null !== e2 && e2.apply(this, arguments) || this;
      }
      return __extends(BaseCrudService, e2), BaseCrudService.prototype._getFullList = function(e3, t2, n2) {
        var i2 = this;
        void 0 === t2 && (t2 = 100), void 0 === n2 && (n2 = {});
        var o2 = [], request = function(r2) {
          return __awaiter(i2, void 0, void 0, function() {
            return __generator(this, function(i3) {
              return [2, this._getList(e3, r2, t2, n2).then(function(e4) {
                var t3 = e4, n3 = t3.items, i4 = t3.totalItems;
                return o2 = o2.concat(n3), n3.length && i4 > o2.length ? request(r2 + 1) : o2;
              })];
            });
          });
        };
        return request(1);
      }, BaseCrudService.prototype._getList = function(e3, t2, n2, i2) {
        var o2 = this;
        return void 0 === t2 && (t2 = 1), void 0 === n2 && (n2 = 30), void 0 === i2 && (i2 = {}), i2 = Object.assign({ page: t2, perPage: n2 }, i2), this.client.send(e3, { method: "GET", params: i2 }).then(function(e4) {
          var t3 = [];
          if (null == e4 ? void 0 : e4.items) {
            e4.items = e4.items || [];
            for (var n3 = 0, i3 = e4.items; n3 < i3.length; n3++) {
              var r2 = i3[n3];
              t3.push(o2.decode(r2));
            }
          }
          return new l((null == e4 ? void 0 : e4.page) || 1, (null == e4 ? void 0 : e4.perPage) || 0, (null == e4 ? void 0 : e4.totalItems) || 0, (null == e4 ? void 0 : e4.totalPages) || 0, t3);
        });
      }, BaseCrudService.prototype._getOne = function(e3, t2, n2) {
        var i2 = this;
        return void 0 === n2 && (n2 = {}), this.client.send(e3 + "/" + encodeURIComponent(t2), { method: "GET", params: n2 }).then(function(e4) {
          return i2.decode(e4);
        });
      }, BaseCrudService.prototype._getFirstListItem = function(e3, n2, i2) {
        return void 0 === i2 && (i2 = {}), i2 = Object.assign({ filter: n2, $cancelKey: "one_by_filter_" + e3 + "_" + n2 }, i2), this._getList(e3, 1, 1, i2).then(function(e4) {
          var n3;
          if (!(null === (n3 = null == e4 ? void 0 : e4.items) || void 0 === n3 ? void 0 : n3.length))
            throw new t({ status: 404, data: { code: 404, message: "The requested resource wasn't found.", data: {} } });
          return e4.items[0];
        });
      }, BaseCrudService.prototype._create = function(e3, t2, n2) {
        var i2 = this;
        return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), this.client.send(e3, { method: "POST", params: n2, body: t2 }).then(function(e4) {
          return i2.decode(e4);
        });
      }, BaseCrudService.prototype._update = function(e3, t2, n2, i2) {
        var o2 = this;
        return void 0 === n2 && (n2 = {}), void 0 === i2 && (i2 = {}), this.client.send(e3 + "/" + encodeURIComponent(t2), { method: "PATCH", params: i2, body: n2 }).then(function(e4) {
          return o2.decode(e4);
        });
      }, BaseCrudService.prototype._delete = function(e3, t2, n2) {
        return void 0 === n2 && (n2 = {}), this.client.send(e3 + "/" + encodeURIComponent(t2), { method: "DELETE", params: n2 }).then(function() {
          return true;
        });
      }, BaseCrudService;
    }(c));
    h = function(e2) {
      function AdminService() {
        return null !== e2 && e2.apply(this, arguments) || this;
      }
      return __extends(AdminService, e2), AdminService.prototype.decode = function(e3) {
        return new r(e3);
      }, Object.defineProperty(AdminService.prototype, "baseCrudPath", { get: function() {
        return "/api/admins";
      }, enumerable: false, configurable: true }), AdminService.prototype.update = function(t2, n2, i2) {
        var o2 = this;
        return void 0 === n2 && (n2 = {}), void 0 === i2 && (i2 = {}), e2.prototype.update.call(this, t2, n2, i2).then(function(e3) {
          var t3, n3;
          return o2.client.authStore.model && void 0 === (null === (t3 = o2.client.authStore.model) || void 0 === t3 ? void 0 : t3.collectionId) && (null === (n3 = o2.client.authStore.model) || void 0 === n3 ? void 0 : n3.id) === (null == e3 ? void 0 : e3.id) && o2.client.authStore.save(o2.client.authStore.token, e3), e3;
        });
      }, AdminService.prototype.delete = function(t2, n2) {
        var i2 = this;
        return void 0 === n2 && (n2 = {}), e2.prototype.delete.call(this, t2, n2).then(function(e3) {
          var n3, o2;
          return e3 && i2.client.authStore.model && void 0 === (null === (n3 = i2.client.authStore.model) || void 0 === n3 ? void 0 : n3.collectionId) && (null === (o2 = i2.client.authStore.model) || void 0 === o2 ? void 0 : o2.id) === t2 && i2.client.authStore.clear(), e3;
        });
      }, AdminService.prototype.authResponse = function(e3) {
        var t2 = this.decode((null == e3 ? void 0 : e3.admin) || {});
        return (null == e3 ? void 0 : e3.token) && (null == e3 ? void 0 : e3.admin) && this.client.authStore.save(e3.token, t2), Object.assign({}, e3, { token: (null == e3 ? void 0 : e3.token) || "", admin: t2 });
      }, AdminService.prototype.authWithPassword = function(e3, t2, n2, i2) {
        return void 0 === n2 && (n2 = {}), void 0 === i2 && (i2 = {}), n2 = Object.assign({ identity: e3, password: t2 }, n2), this.client.send(this.baseCrudPath + "/auth-with-password", { method: "POST", params: i2, body: n2 }).then(this.authResponse.bind(this));
      }, AdminService.prototype.authRefresh = function(e3, t2) {
        return void 0 === e3 && (e3 = {}), void 0 === t2 && (t2 = {}), this.client.send(this.baseCrudPath + "/auth-refresh", { method: "POST", params: t2, body: e3 }).then(this.authResponse.bind(this));
      }, AdminService.prototype.requestPasswordReset = function(e3, t2, n2) {
        return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), t2 = Object.assign({ email: e3 }, t2), this.client.send(this.baseCrudPath + "/request-password-reset", { method: "POST", params: n2, body: t2 }).then(function() {
          return true;
        });
      }, AdminService.prototype.confirmPasswordReset = function(e3, t2, n2, i2, o2) {
        return void 0 === i2 && (i2 = {}), void 0 === o2 && (o2 = {}), i2 = Object.assign({ token: e3, password: t2, passwordConfirm: n2 }, i2), this.client.send(this.baseCrudPath + "/confirm-password-reset", { method: "POST", params: o2, body: i2 }).then(function() {
          return true;
        });
      }, AdminService;
    }(d);
    p = function(e2) {
      function ExternalAuth() {
        return null !== e2 && e2.apply(this, arguments) || this;
      }
      return __extends(ExternalAuth, e2), ExternalAuth.prototype.load = function(t2) {
        e2.prototype.load.call(this, t2), this.recordId = "string" == typeof t2.recordId ? t2.recordId : "", this.collectionId = "string" == typeof t2.collectionId ? t2.collectionId : "", this.provider = "string" == typeof t2.provider ? t2.provider : "", this.providerId = "string" == typeof t2.providerId ? t2.providerId : "";
      }, ExternalAuth;
    }(i);
    v = function(e2) {
      function RecordService(t2, n2) {
        var i2 = e2.call(this, t2) || this;
        return i2.collectionIdOrName = n2, i2;
      }
      return __extends(RecordService, e2), RecordService.prototype.decode = function(e3) {
        return new o(e3);
      }, Object.defineProperty(RecordService.prototype, "baseCrudPath", { get: function() {
        return this.baseCollectionPath + "/records";
      }, enumerable: false, configurable: true }), Object.defineProperty(RecordService.prototype, "baseCollectionPath", { get: function() {
        return "/api/collections/" + encodeURIComponent(this.collectionIdOrName);
      }, enumerable: false, configurable: true }), RecordService.prototype.subscribeOne = function(e3, t2) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(n2) {
            return console.warn("PocketBase: subscribeOne(recordId, callback) is deprecated. Please replace it with subscribe(recordId, callback)."), [2, this.client.realtime.subscribe(this.collectionIdOrName + "/" + e3, t2)];
          });
        });
      }, RecordService.prototype.subscribe = function(e3, t2) {
        return __awaiter(this, void 0, void 0, function() {
          var n2;
          return __generator(this, function(i2) {
            if ("function" == typeof e3)
              return console.warn("PocketBase: subscribe(callback) is deprecated. Please replace it with subscribe('*', callback)."), [2, this.client.realtime.subscribe(this.collectionIdOrName, e3)];
            if (!t2)
              throw new Error("Missing subscription callback.");
            if ("" === e3)
              throw new Error("Missing topic.");
            return n2 = this.collectionIdOrName, "*" !== e3 && (n2 += "/" + e3), [2, this.client.realtime.subscribe(n2, t2)];
          });
        });
      }, RecordService.prototype.unsubscribe = function(e3) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(t2) {
            return "*" === e3 ? [2, this.client.realtime.unsubscribe(this.collectionIdOrName)] : e3 ? [2, this.client.realtime.unsubscribe(this.collectionIdOrName + "/" + e3)] : [2, this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)];
          });
        });
      }, RecordService.prototype.getFullList = function(t2, n2) {
        return void 0 === t2 && (t2 = 200), void 0 === n2 && (n2 = {}), e2.prototype.getFullList.call(this, t2, n2);
      }, RecordService.prototype.getList = function(t2, n2, i2) {
        return void 0 === t2 && (t2 = 1), void 0 === n2 && (n2 = 30), void 0 === i2 && (i2 = {}), e2.prototype.getList.call(this, t2, n2, i2);
      }, RecordService.prototype.getFirstListItem = function(t2, n2) {
        return void 0 === n2 && (n2 = {}), e2.prototype.getFirstListItem.call(this, t2, n2);
      }, RecordService.prototype.getOne = function(t2, n2) {
        return void 0 === n2 && (n2 = {}), e2.prototype.getOne.call(this, t2, n2);
      }, RecordService.prototype.create = function(t2, n2) {
        return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), e2.prototype.create.call(this, t2, n2);
      }, RecordService.prototype.update = function(t2, n2, i2) {
        var o2 = this;
        return void 0 === n2 && (n2 = {}), void 0 === i2 && (i2 = {}), e2.prototype.update.call(this, t2, n2, i2).then(function(e3) {
          var t3, n3, i3;
          return (null === (t3 = o2.client.authStore.model) || void 0 === t3 ? void 0 : t3.id) !== (null == e3 ? void 0 : e3.id) || (null === (n3 = o2.client.authStore.model) || void 0 === n3 ? void 0 : n3.collectionId) !== o2.collectionIdOrName && (null === (i3 = o2.client.authStore.model) || void 0 === i3 ? void 0 : i3.collectionName) !== o2.collectionIdOrName || o2.client.authStore.save(o2.client.authStore.token, e3), e3;
        });
      }, RecordService.prototype.delete = function(t2, n2) {
        var i2 = this;
        return void 0 === n2 && (n2 = {}), e2.prototype.delete.call(this, t2, n2).then(function(e3) {
          var n3, o2, r2;
          return !e3 || (null === (n3 = i2.client.authStore.model) || void 0 === n3 ? void 0 : n3.id) !== t2 || (null === (o2 = i2.client.authStore.model) || void 0 === o2 ? void 0 : o2.collectionId) !== i2.collectionIdOrName && (null === (r2 = i2.client.authStore.model) || void 0 === r2 ? void 0 : r2.collectionName) !== i2.collectionIdOrName || i2.client.authStore.clear(), e3;
        });
      }, RecordService.prototype.authResponse = function(e3) {
        var t2 = this.decode((null == e3 ? void 0 : e3.record) || {});
        return this.client.authStore.save(null == e3 ? void 0 : e3.token, t2), Object.assign({}, e3, { token: (null == e3 ? void 0 : e3.token) || "", record: t2 });
      }, RecordService.prototype.listAuthMethods = function(e3) {
        return void 0 === e3 && (e3 = {}), this.client.send(this.baseCollectionPath + "/auth-methods", { method: "GET", params: e3 }).then(function(e4) {
          return Object.assign({}, e4, { usernamePassword: !!(null == e4 ? void 0 : e4.usernamePassword), emailPassword: !!(null == e4 ? void 0 : e4.emailPassword), authProviders: Array.isArray(null == e4 ? void 0 : e4.authProviders) ? null == e4 ? void 0 : e4.authProviders : [] });
        });
      }, RecordService.prototype.authWithPassword = function(e3, t2, n2, i2) {
        var o2 = this;
        return void 0 === n2 && (n2 = {}), void 0 === i2 && (i2 = {}), n2 = Object.assign({ identity: e3, password: t2 }, n2), this.client.send(this.baseCollectionPath + "/auth-with-password", { method: "POST", params: i2, body: n2 }).then(function(e4) {
          return o2.authResponse(e4);
        });
      }, RecordService.prototype.authWithOAuth2 = function(e3, t2, n2, i2, o2, r2, s3) {
        var a2 = this;
        return void 0 === o2 && (o2 = {}), void 0 === r2 && (r2 = {}), void 0 === s3 && (s3 = {}), r2 = Object.assign({ provider: e3, code: t2, codeVerifier: n2, redirectUrl: i2, createData: o2 }, r2), this.client.send(this.baseCollectionPath + "/auth-with-oauth2", { method: "POST", params: s3, body: r2 }).then(function(e4) {
          return a2.authResponse(e4);
        });
      }, RecordService.prototype.authRefresh = function(e3, t2) {
        var n2 = this;
        return void 0 === e3 && (e3 = {}), void 0 === t2 && (t2 = {}), this.client.send(this.baseCollectionPath + "/auth-refresh", { method: "POST", params: t2, body: e3 }).then(function(e4) {
          return n2.authResponse(e4);
        });
      }, RecordService.prototype.requestPasswordReset = function(e3, t2, n2) {
        return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), t2 = Object.assign({ email: e3 }, t2), this.client.send(this.baseCollectionPath + "/request-password-reset", { method: "POST", params: n2, body: t2 }).then(function() {
          return true;
        });
      }, RecordService.prototype.confirmPasswordReset = function(e3, t2, n2, i2, o2) {
        return void 0 === i2 && (i2 = {}), void 0 === o2 && (o2 = {}), i2 = Object.assign({ token: e3, password: t2, passwordConfirm: n2 }, i2), this.client.send(this.baseCollectionPath + "/confirm-password-reset", { method: "POST", params: o2, body: i2 }).then(function() {
          return true;
        });
      }, RecordService.prototype.requestVerification = function(e3, t2, n2) {
        return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), t2 = Object.assign({ email: e3 }, t2), this.client.send(this.baseCollectionPath + "/request-verification", { method: "POST", params: n2, body: t2 }).then(function() {
          return true;
        });
      }, RecordService.prototype.confirmVerification = function(e3, t2, n2) {
        return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), t2 = Object.assign({ token: e3 }, t2), this.client.send(this.baseCollectionPath + "/confirm-verification", { method: "POST", params: n2, body: t2 }).then(function() {
          return true;
        });
      }, RecordService.prototype.requestEmailChange = function(e3, t2, n2) {
        return void 0 === t2 && (t2 = {}), void 0 === n2 && (n2 = {}), t2 = Object.assign({ newEmail: e3 }, t2), this.client.send(this.baseCollectionPath + "/request-email-change", { method: "POST", params: n2, body: t2 }).then(function() {
          return true;
        });
      }, RecordService.prototype.confirmEmailChange = function(e3, t2, n2, i2) {
        return void 0 === n2 && (n2 = {}), void 0 === i2 && (i2 = {}), n2 = Object.assign({ token: e3, password: t2 }, n2), this.client.send(this.baseCollectionPath + "/confirm-email-change", { method: "POST", params: i2, body: n2 }).then(function() {
          return true;
        });
      }, RecordService.prototype.listExternalAuths = function(e3, t2) {
        return void 0 === t2 && (t2 = {}), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e3) + "/external-auths", { method: "GET", params: t2 }).then(function(e4) {
          var t3 = [];
          if (Array.isArray(e4))
            for (var n2 = 0, i2 = e4; n2 < i2.length; n2++) {
              var o2 = i2[n2];
              t3.push(new p(o2));
            }
          return t3;
        });
      }, RecordService.prototype.unlinkExternalAuth = function(e3, t2, n2) {
        return void 0 === n2 && (n2 = {}), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e3) + "/external-auths/" + encodeURIComponent(t2), { method: "DELETE", params: n2 }).then(function() {
          return true;
        });
      }, RecordService;
    }(d);
    f = function() {
      function SchemaField(e2) {
        void 0 === e2 && (e2 = {}), this.load(e2 || {});
      }
      return SchemaField.prototype.load = function(e2) {
        this.id = void 0 !== e2.id ? e2.id : "", this.name = void 0 !== e2.name ? e2.name : "", this.type = void 0 !== e2.type ? e2.type : "text", this.system = !!e2.system, this.required = !!e2.required, this.unique = !!e2.unique, this.options = "object" == typeof e2.options && null !== e2.options ? e2.options : {};
      }, SchemaField;
    }();
    m = function(e2) {
      function Collection() {
        return null !== e2 && e2.apply(this, arguments) || this;
      }
      return __extends(Collection, e2), Collection.prototype.load = function(t2) {
        e2.prototype.load.call(this, t2), this.system = !!t2.system, this.name = "string" == typeof t2.name ? t2.name : "", this.type = "string" == typeof t2.type ? t2.type : "base", this.options = void 0 !== t2.options ? t2.options : {}, this.listRule = "string" == typeof t2.listRule ? t2.listRule : null, this.viewRule = "string" == typeof t2.viewRule ? t2.viewRule : null, this.createRule = "string" == typeof t2.createRule ? t2.createRule : null, this.updateRule = "string" == typeof t2.updateRule ? t2.updateRule : null, this.deleteRule = "string" == typeof t2.deleteRule ? t2.deleteRule : null, t2.schema = Array.isArray(t2.schema) ? t2.schema : [], this.schema = [];
        for (var n2 = 0, i2 = t2.schema; n2 < i2.length; n2++) {
          var o2 = i2[n2];
          this.schema.push(new f(o2));
        }
      }, Object.defineProperty(Collection.prototype, "isBase", { get: function() {
        return "base" === this.type;
      }, enumerable: false, configurable: true }), Object.defineProperty(Collection.prototype, "isAuth", { get: function() {
        return "auth" === this.type;
      }, enumerable: false, configurable: true }), Object.defineProperty(Collection.prototype, "isSingle", { get: function() {
        return "single" === this.type;
      }, enumerable: false, configurable: true }), Collection;
    }(i);
    y = function(e2) {
      function CollectionService() {
        return null !== e2 && e2.apply(this, arguments) || this;
      }
      return __extends(CollectionService, e2), CollectionService.prototype.decode = function(e3) {
        return new m(e3);
      }, Object.defineProperty(CollectionService.prototype, "baseCrudPath", { get: function() {
        return "/api/collections";
      }, enumerable: false, configurable: true }), CollectionService.prototype.import = function(e3, t2, n2) {
        return void 0 === t2 && (t2 = false), void 0 === n2 && (n2 = {}), __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(i2) {
            return [2, this.client.send(this.baseCrudPath + "/import", { method: "PUT", params: n2, body: { collections: e3, deleteMissing: t2 } }).then(function() {
              return true;
            })];
          });
        });
      }, CollectionService;
    }(d);
    b = function(e2) {
      function LogRequest() {
        return null !== e2 && e2.apply(this, arguments) || this;
      }
      return __extends(LogRequest, e2), LogRequest.prototype.load = function(t2) {
        e2.prototype.load.call(this, t2), t2.remoteIp = t2.remoteIp || t2.ip, this.url = "string" == typeof t2.url ? t2.url : "", this.method = "string" == typeof t2.method ? t2.method : "GET", this.status = "number" == typeof t2.status ? t2.status : 200, this.auth = "string" == typeof t2.auth ? t2.auth : "guest", this.remoteIp = "string" == typeof t2.remoteIp ? t2.remoteIp : "", this.userIp = "string" == typeof t2.userIp ? t2.userIp : "", this.referer = "string" == typeof t2.referer ? t2.referer : "", this.userAgent = "string" == typeof t2.userAgent ? t2.userAgent : "", this.meta = "object" == typeof t2.meta && null !== t2.meta ? t2.meta : {};
      }, LogRequest;
    }(i);
    g = function(e2) {
      function LogService() {
        return null !== e2 && e2.apply(this, arguments) || this;
      }
      return __extends(LogService, e2), LogService.prototype.getRequestsList = function(e3, t2, n2) {
        return void 0 === e3 && (e3 = 1), void 0 === t2 && (t2 = 30), void 0 === n2 && (n2 = {}), n2 = Object.assign({ page: e3, perPage: t2 }, n2), this.client.send("/api/logs/requests", { method: "GET", params: n2 }).then(function(e4) {
          var t3 = [];
          if (null == e4 ? void 0 : e4.items) {
            e4.items = (null == e4 ? void 0 : e4.items) || [];
            for (var n3 = 0, i2 = e4.items; n3 < i2.length; n3++) {
              var o2 = i2[n3];
              t3.push(new b(o2));
            }
          }
          return new l((null == e4 ? void 0 : e4.page) || 1, (null == e4 ? void 0 : e4.perPage) || 0, (null == e4 ? void 0 : e4.totalItems) || 0, (null == e4 ? void 0 : e4.totalPages) || 0, t3);
        });
      }, LogService.prototype.getRequest = function(e3, t2) {
        return void 0 === t2 && (t2 = {}), this.client.send("/api/logs/requests/" + encodeURIComponent(e3), { method: "GET", params: t2 }).then(function(e4) {
          return new b(e4);
        });
      }, LogService.prototype.getRequestsStats = function(e3) {
        return void 0 === e3 && (e3 = {}), this.client.send("/api/logs/requests/stats", { method: "GET", params: e3 }).then(function(e4) {
          return e4;
        });
      }, LogService;
    }(c);
    S = function(e2) {
      function RealtimeService() {
        var t2 = null !== e2 && e2.apply(this, arguments) || this;
        return t2.clientId = "", t2.eventSource = null, t2.subscriptions = {}, t2.lastSentTopics = [], t2.maxConnectTimeout = 15e3, t2.reconnectAttempts = 0, t2.maxReconnectAttempts = 1 / 0, t2.predefinedReconnectIntervals = [200, 300, 500, 1e3, 1200, 1500, 2e3], t2.pendingConnects = [], t2;
      }
      return __extends(RealtimeService, e2), Object.defineProperty(RealtimeService.prototype, "isConnected", { get: function() {
        return !!this.eventSource && !!this.clientId && !this.pendingConnects.length;
      }, enumerable: false, configurable: true }), RealtimeService.prototype.subscribe = function(e3, t2) {
        var n2;
        return __awaiter(this, void 0, void 0, function() {
          var i2, o2 = this;
          return __generator(this, function(r2) {
            switch (r2.label) {
              case 0:
                if (!e3)
                  throw new Error("topic must be set.");
                return i2 = function(e4) {
                  var n3, i3 = e4;
                  try {
                    n3 = JSON.parse(null == i3 ? void 0 : i3.data);
                  } catch (e5) {
                  }
                  t2(n3 || {});
                }, this.subscriptions[e3] || (this.subscriptions[e3] = []), this.subscriptions[e3].push(i2), this.isConnected ? [3, 2] : [4, this.connect()];
              case 1:
                return r2.sent(), [3, 5];
              case 2:
                return 1 !== this.subscriptions[e3].length ? [3, 4] : [4, this.submitSubscriptions()];
              case 3:
                return r2.sent(), [3, 5];
              case 4:
                null === (n2 = this.eventSource) || void 0 === n2 || n2.addEventListener(e3, i2), r2.label = 5;
              case 5:
                return [2, function() {
                  return __awaiter(o2, void 0, void 0, function() {
                    return __generator(this, function(t3) {
                      return [2, this.unsubscribeByTopicAndListener(e3, i2)];
                    });
                  });
                }];
            }
          });
        });
      }, RealtimeService.prototype.unsubscribe = function(e3) {
        var t2;
        return __awaiter(this, void 0, void 0, function() {
          var n2, i2, o2;
          return __generator(this, function(r2) {
            switch (r2.label) {
              case 0:
                if (!this.hasSubscriptionListeners(e3))
                  return [2];
                if (e3) {
                  for (n2 = 0, i2 = this.subscriptions[e3]; n2 < i2.length; n2++)
                    o2 = i2[n2], null === (t2 = this.eventSource) || void 0 === t2 || t2.removeEventListener(e3, o2);
                  delete this.subscriptions[e3];
                } else
                  this.subscriptions = {};
                return this.hasSubscriptionListeners() ? [3, 1] : (this.disconnect(), [3, 3]);
              case 1:
                return this.hasSubscriptionListeners(e3) ? [3, 3] : [4, this.submitSubscriptions()];
              case 2:
                r2.sent(), r2.label = 3;
              case 3:
                return [2];
            }
          });
        });
      }, RealtimeService.prototype.unsubscribeByPrefix = function(e3) {
        var t2;
        return __awaiter(this, void 0, void 0, function() {
          var n2, i2, o2, r2, s3;
          return __generator(this, function(a2) {
            switch (a2.label) {
              case 0:
                for (i2 in n2 = false, this.subscriptions)
                  if (i2.startsWith(e3)) {
                    for (n2 = true, o2 = 0, r2 = this.subscriptions[i2]; o2 < r2.length; o2++)
                      s3 = r2[o2], null === (t2 = this.eventSource) || void 0 === t2 || t2.removeEventListener(i2, s3);
                    delete this.subscriptions[i2];
                  }
                return n2 ? this.hasSubscriptionListeners() ? [4, this.submitSubscriptions()] : [3, 2] : [2];
              case 1:
                return a2.sent(), [3, 3];
              case 2:
                this.disconnect(), a2.label = 3;
              case 3:
                return [2];
            }
          });
        });
      }, RealtimeService.prototype.unsubscribeByTopicAndListener = function(e3, t2) {
        var n2;
        return __awaiter(this, void 0, void 0, function() {
          var i2, o2;
          return __generator(this, function(r2) {
            switch (r2.label) {
              case 0:
                if (!Array.isArray(this.subscriptions[e3]) || !this.subscriptions[e3].length)
                  return [2];
                for (i2 = false, o2 = this.subscriptions[e3].length - 1; o2 >= 0; o2--)
                  this.subscriptions[e3][o2] === t2 && (i2 = true, delete this.subscriptions[e3][o2], this.subscriptions[e3].splice(o2, 1), null === (n2 = this.eventSource) || void 0 === n2 || n2.removeEventListener(e3, t2));
                return i2 ? (this.subscriptions[e3].length || delete this.subscriptions[e3], this.hasSubscriptionListeners() ? [3, 1] : (this.disconnect(), [3, 3])) : [2];
              case 1:
                return this.hasSubscriptionListeners(e3) ? [3, 3] : [4, this.submitSubscriptions()];
              case 2:
                r2.sent(), r2.label = 3;
              case 3:
                return [2];
            }
          });
        });
      }, RealtimeService.prototype.hasSubscriptionListeners = function(e3) {
        var t2, n2;
        if (this.subscriptions = this.subscriptions || {}, e3)
          return !!(null === (t2 = this.subscriptions[e3]) || void 0 === t2 ? void 0 : t2.length);
        for (var i2 in this.subscriptions)
          if (null === (n2 = this.subscriptions[i2]) || void 0 === n2 ? void 0 : n2.length)
            return true;
        return false;
      }, RealtimeService.prototype.submitSubscriptions = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(e3) {
            return this.clientId ? (this.addAllSubscriptionListeners(), this.lastSentTopics = this.getNonEmptySubscriptionTopics(), [2, this.client.send("/api/realtime", { method: "POST", body: { clientId: this.clientId, subscriptions: this.lastSentTopics }, params: { $cancelKey: "realtime_" + this.clientId } }).catch(function(e4) {
              if (!(null == e4 ? void 0 : e4.isAbort))
                throw e4;
            })]) : [2];
          });
        });
      }, RealtimeService.prototype.getNonEmptySubscriptionTopics = function() {
        var e3 = [];
        for (var t2 in this.subscriptions)
          this.subscriptions[t2].length && e3.push(t2);
        return e3;
      }, RealtimeService.prototype.addAllSubscriptionListeners = function() {
        if (this.eventSource)
          for (var e3 in this.removeAllSubscriptionListeners(), this.subscriptions)
            for (var t2 = 0, n2 = this.subscriptions[e3]; t2 < n2.length; t2++) {
              var i2 = n2[t2];
              this.eventSource.addEventListener(e3, i2);
            }
      }, RealtimeService.prototype.removeAllSubscriptionListeners = function() {
        if (this.eventSource)
          for (var e3 in this.subscriptions)
            for (var t2 = 0, n2 = this.subscriptions[e3]; t2 < n2.length; t2++) {
              var i2 = n2[t2];
              this.eventSource.removeEventListener(e3, i2);
            }
      }, RealtimeService.prototype.connect = function() {
        return __awaiter(this, void 0, void 0, function() {
          var e3 = this;
          return __generator(this, function(t2) {
            return this.reconnectAttempts > 0 ? [2] : [2, new Promise(function(t3, n2) {
              e3.pendingConnects.push({ resolve: t3, reject: n2 }), e3.pendingConnects.length > 1 || e3.initConnect();
            })];
          });
        });
      }, RealtimeService.prototype.initConnect = function() {
        var e3 = this;
        this.disconnect(true), clearTimeout(this.connectTimeoutId), this.connectTimeoutId = setTimeout(function() {
          e3.connectErrorHandler(new Error("EventSource connect took too long."));
        }, this.maxConnectTimeout), this.eventSource = new EventSource(this.client.buildUrl("/api/realtime")), this.eventSource.onerror = function(t2) {
          e3.connectErrorHandler(new Error("Failed to establish realtime connection."));
        }, this.eventSource.addEventListener("PB_CONNECT", function(t2) {
          var n2 = t2;
          e3.clientId = null == n2 ? void 0 : n2.lastEventId, e3.submitSubscriptions().then(function() {
            return __awaiter(e3, void 0, void 0, function() {
              var e4;
              return __generator(this, function(t3) {
                switch (t3.label) {
                  case 0:
                    e4 = 3, t3.label = 1;
                  case 1:
                    return this.hasUnsentSubscriptions() && e4 > 0 ? (e4--, [4, this.submitSubscriptions()]) : [3, 3];
                  case 2:
                    return t3.sent(), [3, 1];
                  case 3:
                    return [2];
                }
              });
            });
          }).then(function() {
            for (var t3 = 0, n3 = e3.pendingConnects; t3 < n3.length; t3++) {
              n3[t3].resolve();
            }
            e3.pendingConnects = [], e3.reconnectAttempts = 0, clearTimeout(e3.reconnectTimeoutId), clearTimeout(e3.connectTimeoutId);
          }).catch(function(t3) {
            e3.clientId = "", e3.connectErrorHandler(t3);
          });
        });
      }, RealtimeService.prototype.hasUnsentSubscriptions = function() {
        var e3 = this.getNonEmptySubscriptionTopics();
        if (e3.length != this.lastSentTopics.length)
          return true;
        for (var t2 = 0, n2 = e3; t2 < n2.length; t2++) {
          var i2 = n2[t2];
          if (!this.lastSentTopics.includes(i2))
            return true;
        }
        return false;
      }, RealtimeService.prototype.connectErrorHandler = function(e3) {
        var n2 = this;
        if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), !this.clientId && !this.reconnectAttempts || this.reconnectAttempts > this.maxReconnectAttempts) {
          for (var i2 = 0, o2 = this.pendingConnects; i2 < o2.length; i2++) {
            o2[i2].reject(new t(e3));
          }
          this.disconnect();
        } else {
          this.disconnect(true);
          var r2 = this.predefinedReconnectIntervals[this.reconnectAttempts] || this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length - 1];
          this.reconnectAttempts++, this.reconnectTimeoutId = setTimeout(function() {
            n2.initConnect();
          }, r2);
        }
      }, RealtimeService.prototype.disconnect = function(e3) {
        var n2;
        if (void 0 === e3 && (e3 = false), clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), this.removeAllSubscriptionListeners(), null === (n2 = this.eventSource) || void 0 === n2 || n2.close(), this.eventSource = null, this.clientId = "", !e3) {
          this.reconnectAttempts = 0;
          for (var i2 = new t(new Error("Realtime disconnected.")), o2 = 0, r2 = this.pendingConnects; o2 < r2.length; o2++) {
            r2[o2].reject(i2);
          }
          this.pendingConnects = [];
        }
      }, RealtimeService;
    }(c);
    w = function(e2) {
      function HealthService() {
        return null !== e2 && e2.apply(this, arguments) || this;
      }
      return __extends(HealthService, e2), HealthService.prototype.check = function(e3) {
        return void 0 === e3 && (e3 = {}), this.client.send("/api/health", { method: "GET", params: e3 });
      }, HealthService;
    }(c);
    C = function() {
      function Client(e2, t2, n2) {
        void 0 === e2 && (e2 = "/"), void 0 === n2 && (n2 = "en-US"), this.cancelControllers = {}, this.recordServices = {}, this.enableAutoCancellation = true, this.baseUrl = e2, this.lang = n2, this.authStore = t2 || new a(), this.admins = new h(this), this.collections = new y(this), this.logs = new g(this), this.settings = new u(this), this.realtime = new S(this), this.health = new w(this);
      }
      return Client.prototype.collection = function(e2) {
        return this.recordServices[e2] || (this.recordServices[e2] = new v(this, e2)), this.recordServices[e2];
      }, Client.prototype.autoCancellation = function(e2) {
        return this.enableAutoCancellation = !!e2, this;
      }, Client.prototype.cancelRequest = function(e2) {
        return this.cancelControllers[e2] && (this.cancelControllers[e2].abort(), delete this.cancelControllers[e2]), this;
      }, Client.prototype.cancelAllRequests = function() {
        for (var e2 in this.cancelControllers)
          this.cancelControllers[e2].abort();
        return this.cancelControllers = {}, this;
      }, Client.prototype.send = function(e2, n2) {
        var i2, o2, r2, s3, a2, c3, u2, l3;
        return __awaiter(this, void 0, void 0, function() {
          var d2, h2, p2, v2, f2, m2 = this;
          return __generator(this, function(y2) {
            return (d2 = Object.assign({ method: "GET" }, n2)).body && "FormData" !== d2.body.constructor.name && ("string" != typeof d2.body && (d2.body = JSON.stringify(d2.body)), void 0 === (null === (i2 = null == d2 ? void 0 : d2.headers) || void 0 === i2 ? void 0 : i2["Content-Type"]) && (d2.headers = Object.assign({}, d2.headers, { "Content-Type": "application/json" }))), void 0 === (null === (o2 = null == d2 ? void 0 : d2.headers) || void 0 === o2 ? void 0 : o2["Accept-Language"]) && (d2.headers = Object.assign({}, d2.headers, { "Accept-Language": this.lang })), (null === (r2 = this.authStore) || void 0 === r2 ? void 0 : r2.token) && void 0 === (null === (s3 = null == d2 ? void 0 : d2.headers) || void 0 === s3 ? void 0 : s3.Authorization) && (d2.headers = Object.assign({}, d2.headers, { Authorization: this.authStore.token })), this.enableAutoCancellation && false !== (null === (a2 = d2.params) || void 0 === a2 ? void 0 : a2.$autoCancel) && (h2 = (null === (c3 = d2.params) || void 0 === c3 ? void 0 : c3.$cancelKey) || (d2.method || "GET") + e2, this.cancelRequest(h2), p2 = new AbortController(), this.cancelControllers[h2] = p2, d2.signal = p2.signal), null === (u2 = d2.params) || void 0 === u2 || delete u2.$autoCancel, null === (l3 = d2.params) || void 0 === l3 || delete l3.$cancelKey, v2 = this.buildUrl(e2), void 0 !== d2.params && ((f2 = this.serializeQueryParams(d2.params)) && (v2 += (v2.includes("?") ? "&" : "?") + f2), delete d2.params), this.beforeSend && (d2 = Object.assign({}, this.beforeSend(v2, d2))), [2, fetch(v2, d2).then(function(e3) {
              return __awaiter(m2, void 0, void 0, function() {
                var n3;
                return __generator(this, function(i3) {
                  switch (i3.label) {
                    case 0:
                      n3 = {}, i3.label = 1;
                    case 1:
                      return i3.trys.push([1, 3, , 4]), [4, e3.json()];
                    case 2:
                      return n3 = i3.sent(), [3, 4];
                    case 3:
                      return i3.sent(), [3, 4];
                    case 4:
                      if (this.afterSend && (n3 = this.afterSend(e3, n3)), e3.status >= 400)
                        throw new t({ url: e3.url, status: e3.status, data: n3 });
                      return [2, n3];
                  }
                });
              });
            }).catch(function(e3) {
              throw new t(e3);
            })];
          });
        });
      }, Client.prototype.getFileUrl = function(e2, t2, n2) {
        void 0 === n2 && (n2 = {});
        var i2 = [];
        i2.push("api"), i2.push("files"), i2.push(encodeURIComponent(e2.collectionId || e2.collectionName)), i2.push(encodeURIComponent(e2.id)), i2.push(encodeURIComponent(t2));
        var o2 = this.buildUrl(i2.join("/"));
        if (Object.keys(n2).length) {
          var r2 = new URLSearchParams(n2);
          o2 += (o2.includes("?") ? "&" : "?") + r2;
        }
        return o2;
      }, Client.prototype.buildUrl = function(e2) {
        var t2 = this.baseUrl + (this.baseUrl.endsWith("/") ? "" : "/");
        return e2 && (t2 += e2.startsWith("/") ? e2.substring(1) : e2), t2;
      }, Client.prototype.serializeQueryParams = function(e2) {
        var t2 = [];
        for (var n2 in e2)
          if (null !== e2[n2]) {
            var i2 = e2[n2], o2 = encodeURIComponent(n2);
            if (Array.isArray(i2))
              for (var r2 = 0, s3 = i2; r2 < s3.length; r2++) {
                var a2 = s3[r2];
                t2.push(o2 + "=" + encodeURIComponent(a2));
              }
            else
              i2 instanceof Date ? t2.push(o2 + "=" + encodeURIComponent(i2.toISOString())) : null !== typeof i2 && "object" == typeof i2 ? t2.push(o2 + "=" + encodeURIComponent(JSON.stringify(i2))) : t2.push(o2 + "=" + encodeURIComponent(i2));
          }
        return t2.join("&");
      }, Client;
    }();
  }
});

// .svelte-kit/output/server/chunks/pocketbase.js
var pb, currentUser;
var init_pocketbase = __esm({
  ".svelte-kit/output/server/chunks/pocketbase.js"() {
    init_pocketbase_es();
    init_index2();
    pb = new C("https://api.notusknot.com:443");
    currentUser = writable(pb.authStore.model);
    pb.authStore.onChange(() => {
      currentUser.set(pb.authStore.model);
    });
  }
});

// .svelte-kit/output/server/chunks/Login.js
var css, Login;
var init_Login = __esm({
  ".svelte-kit/output/server/chunks/Login.js"() {
    init_index3();
    init_pocketbase();
    css = {
      code: "div.svelte-rcadj0{height:clamp(160px, 100%, 480px)}form.svelte-rcadj0{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(3, 1fr);grid-column-gap:18px;grid-row-gap:18px}.error.svelte-rcadj0{color:red}#username.svelte-rcadj0{grid-area:1 / 1 / 2 / 3}#password.svelte-rcadj0{grid-area:2 / 1 / 3 / 3}#login.svelte-rcadj0{grid-area:3 / 1 / 4 / 2}#signup.svelte-rcadj0{grid-area:3 / 2 / 4 / 3}",
      map: null
    };
    Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $currentUser, $$unsubscribe_currentUser;
      $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
      let username;
      let password;
      $$result.css.add(css);
      $$unsubscribe_currentUser();
      return `${$currentUser ? `<button>Sign Out </button>` : `<div class="${"login svelte-rcadj0"}"><form class="${"svelte-rcadj0"}"><input id="${"username"}" placeholder="${"Username"}" type="${"text"}" class="${"svelte-rcadj0"}"${add_attribute("value", username, 0)}>
			<input id="${"password"}" placeholder="${"Password"}" type="${"password"}" class="${"svelte-rcadj0"}"${add_attribute("value", password, 0)}>
			<button id="${"login"}" class="${"svelte-rcadj0"}">Login</button>
			<button id="${"signup"}" class="${"svelte-rcadj0"}">Sign Up</button></form>

		${``}</div>`}`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var css$1, Boop, css2, Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_index3();
    init_pocketbase();
    init_devalue();
    init_Login();
    css$1 = {
      code: "@keyframes svelte-367r4o-wiggle{0%{transform:rotate(0deg)}20%{transform:rotate(-15deg)}40%{transform:rotate(15deg)}60%{transform:rotate(-7deg)}80%{transform:rotate(7deg)}90%{transform:rotate(-3deg)}95%{transform:rotate(2deg)}100%{transform:rotate(0deg)}}.boop.svelte-367r4o{display:inline-block;will-change:transform}.boop.active.svelte-367r4o{animation-duration:1s;animation-play-state:paused;animation-fill-mode:forwards}.boop.wiggle.svelte-367r4o{animation-name:svelte-367r4o-wiggle;animation-play-state:running}",
      map: null
    };
    Boop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$1);
      return `<span class="${[
        escape(null_to_empty(`boop${""}`), true) + " svelte-367r4o",
        ""
      ].join(" ").trim()}" style="${"--animation: boop"}">${slots.default ? slots.default({}) : ``}
</span>`;
    });
    css2 = {
      code: "main.svelte-14rdqgu.svelte-14rdqgu{padding:var(--padding);height:calc(100% - var(--header-height));display:flex;align-items:center;flex-direction:column}header.svelte-14rdqgu.svelte-14rdqgu{display:flex;align-items:center;justify-content:space-between;padding:var(--padding);border-bottom:1px solid var(--bg3)}header.svelte-14rdqgu div.svelte-14rdqgu{display:flex}header.svelte-14rdqgu form.svelte-14rdqgu{display:flex;align-items:center}a.svelte-14rdqgu.svelte-14rdqgu{color:var(--text);text-decoration:none}.icon-button.svelte-14rdqgu.svelte-14rdqgu{font-size:2rem;height:2rem;padding:0 var(--padding);background-color:transparent}",
      map: null
    };
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $currentUser, $$unsubscribe_currentUser;
      $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
      $$result.css.add(css2);
      $$unsubscribe_currentUser();
      return `${$$result.head += `<!-- HEAD_svelte-10ckgw5_START -->${$$result.title = `<title>Productivity</title>`, ""}<meta name="${"description"}" content="${"Todo and notes tailored to my needs"}"><!-- HEAD_svelte-10ckgw5_END -->`, ""}

<header class="${"svelte-14rdqgu"}"><button><a href="${"/journal"}" class="${"svelte-14rdqgu"}">Journal</a></button>

	<div class="${"svelte-14rdqgu"}"><form method="${"POST"}" class="${"svelte-14rdqgu"}">${validate_component(Boop, "Boop").$$render($$result, {}, {}, {
        default: () => {
          return `<button aria-label="${"enable-light-mode"}" class="${"icon-button light-button svelte-14rdqgu"}" formaction="${"/?/setTheme&theme=light"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1em"}" height="${"1em"}" viewBox="${"0 0 24 24"}"><path fill="${"currentColor"}" d="${"M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287ZM12 12Z"}"></path></svg></button>`;
        }
      })}

			${validate_component(Boop, "Boop").$$render($$result, {}, {}, {
        default: () => {
          return `<button aria-label="${"enable-dark-mode"}" class="${"icon-button dark-button svelte-14rdqgu"}" formaction="${"/?/setTheme&theme=dark"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1em"}" height="${"1em"}" viewBox="${"0 0 24 24"}"><path fill="${"currentColor"}" d="${"M12 21q-3.775 0-6.388-2.613Q3 15.775 3 12q0-3.45 2.25-5.988Q7.5 3.475 11 3.05q.625-.075.975.45t-.025 1.1q-.425.65-.638 1.375Q11.1 6.7 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q.775 0 1.538-.225q.762-.225 1.362-.625q.525-.35 1.075-.038q.55.313.475.988q-.35 3.45-2.937 5.725Q15.425 21 12 21Zm0-2q2.2 0 3.95-1.212q1.75-1.213 2.55-3.163q-.5.125-1 .2q-.5.075-1 .075q-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-.25-6.75Z"}"></path></svg></button>`;
        }
      })}</form>

		${$currentUser ? `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}` : ``}</div></header>

<main class="${"svelte-14rdqgu"}">${slots.default ? slots.default({}) : ``}
</main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-ae9733ae.js";
    imports = ["_app/immutable/components/pages/_layout.svelte-ae9733ae.js", "_app/immutable/chunks/index-cdc99104.js", "_app/immutable/chunks/pocketbase-e2ca09db.js", "_app/immutable/chunks/parse-a9b5aeea.js", "_app/immutable/chunks/singletons-83248bbb.js", "_app/immutable/chunks/Login-f46a1d5e.js"];
    stylesheets = ["_app/immutable/assets/_layout-a90f38c6.css", "_app/immutable/assets/Login-a6eabac3.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
var getStores, page, Error$1;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_index3();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
    };
    page = {
      /** @param {(value: any) => void} fn */
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1>
<p>${escape($page.error?.message)}</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/error.svelte-bd45e6e5.js";
    imports2 = ["_app/immutable/components/error.svelte-bd45e6e5.js", "_app/immutable/chunks/index-cdc99104.js", "_app/immutable/chunks/singletons-83248bbb.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  actions: () => actions
});
var actions;
var init_page_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_page.server.ts.js"() {
    init_chunks();
    actions = {
      setTheme: async ({ url, cookies }) => {
        const theme = url.searchParams.get("theme");
        console.log(theme);
        const redirectTo = url.searchParams.get("redirectTo");
        if (theme) {
          cookies.set("colortheme", theme, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365
          });
        }
        throw redirect(303, redirectTo ?? "/");
      }
    };
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var css3, Todos, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_index3();
    init_Login();
    init_pocketbase();
    init_index2();
    css3 = {
      code: '.todo.svelte-1apu78h.svelte-1apu78h.svelte-1apu78h{display:flex;position:relative;padding:calc(var(--padding) / 4) 0}.todos.svelte-1apu78h.svelte-1apu78h.svelte-1apu78h{width:clamp(160px, 100%, 320px);padding:var(--padding)}.todo-text.svelte-1apu78h.svelte-1apu78h.svelte-1apu78h{padding:0 var(--padding);position:relative}.delete-button.svelte-1apu78h.svelte-1apu78h.svelte-1apu78h{position:absolute;right:0}.pomodoro-button.svelte-1apu78h.svelte-1apu78h.svelte-1apu78h{position:absolute;right:calc(var(--padding) * 1.7)}.todo-text.svelte-1apu78h.svelte-1apu78h.svelte-1apu78h::before{content:"";position:absolute;left:calc(var(--padding) - 1ch / 2);top:50%;height:2px;background-color:rgba(var(--text-codes), 0.75);width:0;transition:width 0.25s;will-change:width}.todo-text.checked.svelte-1apu78h.svelte-1apu78h.svelte-1apu78h::before{width:calc(100% - var(--padding) - 1ch / 2)}.checkbox.svelte-1apu78h.svelte-1apu78h.svelte-1apu78h{position:relative;min-width:24px;border:1px solid var(--bg3);border-radius:8px;cursor:pointer;background-color:var(--bg2)}.checkbox.svelte-1apu78h.svelte-1apu78h.svelte-1apu78h:hover,.checkbox.svelte-1apu78h.svelte-1apu78h.svelte-1apu78h:active{border:1px solid var(--accent)}.checkbox.svelte-1apu78h input[type="checkbox"].svelte-1apu78h.svelte-1apu78h{position:absolute;opacity:0}.checkbox.svelte-1apu78h .checkmark.svelte-1apu78h.svelte-1apu78h:after{content:"";position:absolute;opacity:0;left:9px;top:5px;width:5px;height:10px;border:solid var(--text);border-width:0 3px 3px 0;transform:rotate(45deg);transition:opacity 150ms}.checkbox.svelte-1apu78h input[type="checkbox"].svelte-1apu78h:checked~.checkmark.svelte-1apu78h:after{opacity:1}form.svelte-1apu78h.svelte-1apu78h.svelte-1apu78h{padding-top:var(--padding)}form.svelte-1apu78h input.svelte-1apu78h.svelte-1apu78h{width:100%}',
      map: null
    };
    Todos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      $$result.css.add(css3);
      $$unsubscribe_currentUser();
      $$unsubscribe_todos();
      return `<div class="${escape(null_to_empty(className), true) + " svelte-1apu78h"}"><div>${each($todos, (todo) => {
        return `<div class="${"todo svelte-1apu78h"}"><label class="${"checkbox svelte-1apu78h"}"><input type="${"checkbox"}" ${todo.checked ? "checked" : ""} class="${"svelte-1apu78h"}">
					<span class="${"checkmark svelte-1apu78h"}"></span></label>
				<span class="${["todo-text svelte-1apu78h", todo.checked ? "checked" : ""].join(" ").trim()}">${escape(todo.text)}</span>

				<button class="${"icon-button pomodoro-button svelte-1apu78h"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1em"}" height="${"1em"}" viewBox="${"0 0 24 24"}"><path fill="${"currentColor"}" d="${"M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 9.5V13h-6V7h1.5v4.5H17Z"}"></path></svg></button>

				<button class="${"icon-button delete-button svelte-1apu78h"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1em"}" height="${"1em"}" viewBox="${"0 0 15 15"}"><path fill="${"currentColor"}" d="${"M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"}"></path></svg></button>
			</div>`;
      })}</div>

	<form class="${"svelte-1apu78h"}"><input autocomplete="${"off"}" placeholder="${"add task"}" type="${"text"}" class="${"svelte-1apu78h"}"${add_attribute("value", todoText, 0)}></form></div>

${``}`;
    });
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $currentUser, $$unsubscribe_currentUser;
      $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
      $$unsubscribe_currentUser();
      return `

${$currentUser ? `${validate_component(Todos, "Todos").$$render($$result, { className: "todos" }, {}, {})}` : `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`}`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  server: () => page_server_ts_exports,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_page_server_ts();
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_page.svelte-4883b535.js";
    imports3 = ["_app/immutable/components/pages/_page.svelte-4883b535.js", "_app/immutable/chunks/index-cdc99104.js", "_app/immutable/chunks/Login-f46a1d5e.js", "_app/immutable/chunks/pocketbase-e2ca09db.js"];
    stylesheets3 = ["_app/immutable/assets/_page-bb226f49.css", "_app/immutable/assets/Login-a6eabac3.css"];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/journal/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => Page2
});
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
var css4, Journal, Page2;
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/journal/_page.svelte.js"() {
    init_index3();
    init_pocketbase();
    init_index2();
    css4 = {
      code: ".entry.svelte-1co54gj{padding:calc(var(--padding) / 2)}.entry-date.svelte-1co54gj{opacity:80%}",
      map: null
    };
    Journal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_currentUser;
      let $journals, $$unsubscribe_journals;
      $$unsubscribe_currentUser = subscribe(currentUser, (value) => value);
      let journalText;
      let journals = writable([]);
      $$unsubscribe_journals = subscribe(journals, (value) => $journals = value);
      onDestroy(() => {
      });
      let { className } = $$props;
      if ($$props.className === void 0 && $$bindings.className && className !== void 0)
        $$bindings.className(className);
      $$result.css.add(css4);
      $$unsubscribe_currentUser();
      $$unsubscribe_journals();
      return `<div class="${escape(null_to_empty(className), true) + " svelte-1co54gj"}"><div>${each($journals, (journal) => {
        return `<div class="${"entry svelte-1co54gj"}"><span class="${"entry-date svelte-1co54gj"}">${escape(formatDate(journal.created))}: </span>
				<span class="${"entry-text"}">${escape(journal.text)}</span>
			</div>`;
      })}</div>

	<form><input placeholder="${"add journal"}" type="${"text"}"${add_attribute("value", journalText, 0)}></form>
</div>`;
    });
    Page2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${validate_component(Journal, "Journal").$$render($$result, { className: "journal" }, {}, {})}`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  file: () => file4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4
});
var index4, component4, file4, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    index4 = 3;
    component4 = async () => (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default;
    file4 = "_app/immutable/components/pages/journal/_page.svelte-feef3444.js";
    imports4 = ["_app/immutable/components/pages/journal/_page.svelte-feef3444.js", "_app/immutable/chunks/index-cdc99104.js", "_app/immutable/chunks/pocketbase-e2ca09db.js"];
    stylesheets4 = ["_app/immutable/assets/_page-df2635a2.css"];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();
init_devalue();
init_index2();

// .svelte-kit/output/server/chunks/internal.js
init_index3();
var base = "";
var assets = base;
var version = "";
var public_env = {};
function set_public_env(environment) {
  public_env = environment;
}
function set_version(value) {
  version = value;
}
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page2);
    }
    $$rendered = `


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
set_version("1676340520278");
var options = {
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en" data-theme="">\n	<head>\n		<meta charset="utf-8" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		<meta name="apple-mobile-web-app-capable" content="yes" />\n		<meta name="apple-mobile-web-app-status-bar-style" content="default" />\n		<link rel="icon" type="image/ico" href="' + assets2 + '/favicon.ico" />\n		' + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  }
};
function get_hooks() {
  return Promise.resolve().then(() => (init_hooks_server(), hooks_server_exports));
}

// .svelte-kit/output/server/index.js
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var DEV = false;
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i2) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i: i2 });
    }
  });
  parts.sort((a2, b2) => {
    if (a2.q !== b2.q) {
      return b2.q - a2.q;
    }
    if (a2.subtype === "*" !== (b2.subtype === "*")) {
      return a2.subtype === "*" ? 1 : -1;
    }
    if (a2.type === "*" !== (b2.type === "*")) {
      return a2.type === "*" ? 1 : -1;
    }
    return a2.i - b2.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type);
}
function is_form_content_type(request) {
  return is_content_type(request, "application/x-www-form-urlencoded", "multipart/form-data");
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {Redirect | HttpError | Error} */
    error2
  );
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method of ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  return text(options2.templates.error({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options2, status, body.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return await options2.hooks.handleError({ error: error2, event }) ?? {
      message: event.route.id != null ? "Internal Error" : "Not Found"
    };
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function serialize_data_node(node) {
  if (!node)
    return "null";
  if (node.type === "error" || node.type === "skip") {
    return JSON.stringify(node);
  }
  const stringified = stringify(node.data);
  const uses = [];
  if (node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses.parent)
    uses.push(`"parent":1`);
  if (node.uses.route)
    uses.push(`"route":1`);
  if (node.uses.url)
    uses.push(`"url":1`);
  return `{"type":"data","data":${stringified},"uses":{${uses.join(",")}}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
}
async function render_endpoint(event, route, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method];
  if (!handler && method === "HEAD") {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.initiator) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  state.initiator = route;
  try {
    const response = await handler(
      /** @type {import('types').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e2) {
    if (e2 instanceof Redirect) {
      return new Response(void 0, {
        status: e2.status,
        headers: { location: e2.location }
      });
    }
    throw e2;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE") {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions2 = server2?.actions;
  if (!actions2) {
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions2);
  try {
    const data = await call_action(event, actions2);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e2) {
    const err = normalize_error(e2);
    if (err instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: err.status,
        location: err.location
      });
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: err instanceof HttpError ? err.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error(`Cannot "throw fail()". Use "return fail()"`) : error2;
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions2 = server2?.actions;
  if (!actions2) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions2);
  try {
    const data = await call_action(event, actions2);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e2) {
    const err = normalize_error(e2);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions2) {
  if (actions2.default && Object.keys(actions2).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions2) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions2[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")}`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e2) {
    const error2 = (
      /** @type {any} */
      e2
    );
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
async function load_server_data({ event, state, node, parent }) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      const url2 = new URL(info instanceof Request ? info.url : info, event.url);
      uses.dependencies.add(url2.href);
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: {
      get id() {
        uses.route = true;
        return event.route.id;
      }
    },
    url
  });
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data = result ? await unwrap_promises(result) : null;
  validate_load_response(
    data,
    /** @type {string} */
    event.route.id
  );
  return data;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  return async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text2() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
              method: event.request.method,
              request_body: (
                /** @type {string | ArrayBufferView | undefined} */
                input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
              ),
              request_headers: init2?.headers,
              response_body: body,
              response: response2
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder.decode(value);
  }
  return result;
}
function validate_load_response(data, routeId) {
  if (data != null && Object.getPrototypeOf(data) !== Object.prototype) {
    throw new Error(
      `a load function related to route '${routeId}' returned ${typeof data !== "object" ? `a ${typeof data}` : data instanceof Response ? "a Response object" : Array.isArray(data) ? "an array" : "a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`
    );
  }
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i2 = value.length;
      while (i2)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i2);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i2 = buffer.length;
      while (i2)
        hash2 = hash2 * 33 ^ buffer[--i2];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  let vary = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
    if (key2 === "vary")
      vary = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !vary) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder2 = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i2 = 0; i2 < array2.length; i2 += 16) {
    const w2 = array2.subarray(i2, i2 + 16);
    let tmp;
    let a2;
    let b2;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i22 = 0; i22 < 64; i22++) {
      if (i22 < 16) {
        tmp = w2[i22];
      } else {
        a2 = w2[i22 + 1 & 15];
        b2 = w2[i22 + 14 & 15];
        tmp = w2[i22 & 15] = (a2 >>> 7 ^ a2 >>> 18 ^ a2 >>> 3 ^ a2 << 25 ^ a2 << 14) + (b2 >>> 17 ^ b2 >>> 19 ^ b2 >>> 10 ^ b2 << 15 ^ b2 << 13) + w2[i22 & 15] + w2[i22 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i22];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i2 = 0; i2 < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i2 < 8) {
        init[i2] = frac(prime ** (1 / 2));
      }
      key[i2] = frac(prime ** (1 / 3));
      i2++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i2 = 0; i2 < bytes.length; i2 += 4) {
    const a2 = bytes[i2 + 0];
    const b2 = bytes[i2 + 1];
    const c3 = bytes[i2 + 2];
    const d2 = bytes[i2 + 3];
    bytes[i2 + 0] = d2;
    bytes[i2 + 1] = c3;
    bytes[i2 + 2] = b2;
    bytes[i2 + 3] = a2;
  }
}
function encode(str) {
  const encoded = encoder2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l3 = bytes.length;
  let result = "";
  let i2;
  for (i2 = 2; i2 < l3; i2 += 3) {
    result += chars2[bytes[i2 - 2] >> 2];
    result += chars2[(bytes[i2 - 2] & 3) << 4 | bytes[i2 - 1] >> 4];
    result += chars2[(bytes[i2 - 1] & 15) << 2 | bytes[i2] >> 6];
    result += chars2[bytes[i2] & 63];
  }
  if (i2 === l3 + 1) {
    result += chars2[bytes[i2 - 2] >> 2];
    result += chars2[(bytes[i2 - 2] & 3) << 4];
    result += "==";
  }
  if (i2 === l3) {
    result += chars2[bytes[i2 - 2] >> 2];
    result += chars2[(bytes[i2 - 2] & 3) << 4 | bytes[i2 - 1] >> 4];
    result += chars2[(bytes[i2 - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes, void 0);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp, void 0);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp, void 0);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src, void 0);
    /** @type {string} */
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, directives);
    const d2 = __privateGet(this, _directives);
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d2["script-src"] || d2["default-src"];
    const effective_style_src = d2["style-src"] || d2["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  /** @param {string} content */
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v2) => !!v2).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types').CspConfig} config
   * @param {import('./types').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = manifest2._;
  const stylesheets5 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const fonts5 = new Set(manifest2._.entry.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data = {};
    for (let i2 = 0; i2 < branch.length; i2 += 1) {
      data = { ...data, ...branch[i2].data };
      props[`data_${i2}`] = data;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data,
      form: form_value
    };
    {
      rendered = options2.root.render(props);
    }
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets5.add(url));
      }
      if (node.fonts) {
        node.fonts.forEach((url) => fonts5.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v2]) => inline_styles.set(k, v2));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let resolved_assets;
  if (assets) {
    resolved_assets = assets;
  } else if (state.prerendering?.fallback) {
    resolved_assets = base;
  } else {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    resolved_assets = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${resolved_assets}/${path}`;
  };
  const serialized = { data: "", form: "null", error: "null" };
  try {
    serialized.data = `[${branch.map(({ server_data }) => {
      if (server_data?.type === "data") {
        const data = uneval(server_data.data);
        const uses = [];
        if (server_data.uses.dependencies.size > 0) {
          uses.push(`dependencies:${s(Array.from(server_data.uses.dependencies))}`);
        }
        if (server_data.uses.params.size > 0) {
          uses.push(`params:${s(Array.from(server_data.uses.params))}`);
        }
        if (server_data.uses.parent)
          uses.push(`parent:1`);
        if (server_data.uses.route)
          uses.push(`route:1`);
        if (server_data.uses.url)
          uses.push(`url:1`);
        return `{type:"data",data:${data},uses:{${uses.join(",")}}${server_data.slash ? `,slash:${s(server_data.slash)}` : ""}}`;
      }
      return s(server_data);
    }).join(",")}]`;
  } catch (e2) {
    const error3 = (
      /** @type {any} */
      e2
    );
    throw new Error(clarify_devalue_error(event, error3));
  }
  if (form_value) {
    serialized.form = uneval_action_response(
      form_value,
      /** @type {string} */
      event.route.id
    );
  }
  if (error2) {
    serialized.error = uneval(error2);
  }
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets5) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "css", path })) {
      const attributes = ['rel="stylesheet"'];
      if (inline_styles.has(dep)) {
        attributes.push("disabled", 'media="(max-width: 0)"');
      } else {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
      head += `
		<link href="${path}" ${attributes.join(" ")}>`;
    }
  }
  for (const dep of fonts5) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  if (page_config.csr) {
    const opts = [
      `assets: ${s(assets)}`,
      `env: ${s(public_env)}`,
      `target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode`,
      `version: ${s(version)}`
    ];
    if (page_config.ssr) {
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        `data: ${serialized.data}`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      opts.push(`hydrate: {
					${hydrate.join(",\n					")}
				}`);
    }
    const init_app = `
			import { start } from ${s(prefixed(entry.file))};

			start({
				${opts.join(",\n				")}
			});
		`;
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      if (resolve_opts.preload({ type: "js", path })) {
        link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (state.prerendering) {
          head += `
		<link rel="modulepreload" href="${path}">`;
        }
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body += `
	${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n	")}`;
  }
  if (options2.service_worker) {
    const opts = "";
    const init_service_worker = `
			if ('serviceWorker' in navigator) {
				addEventListener('load', function () {
					navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
				});
			}
		`;
    csp.add_script(init_service_worker);
    head += `
		<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body,
    assets: resolved_assets,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html",
    etag: `"${hash(transformed)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  return text(transformed, {
    status,
    headers
  });
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {any} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error: error2,
  resolve_opts
}) {
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.initiator = GENERIC_ERROR;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e2) {
    if (e2 instanceof Redirect) {
      return redirect_response(e2.status, e2.location);
    }
    return static_error_page(
      options2,
      e2 instanceof HttpError ? e2.status : 500,
      (await handle_error_and_jsonify(event, options2, e2)).message
    );
  }
}
async function render_page(event, route, page2, options2, manifest2, state, resolve_opts) {
  if (state.initiator === route) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  state.initiator = route;
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
      manifest2._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender");
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      if (should_prerender !== false && get_option(nodes, "ssr") === false && !leaf_node.server?.actions) {
        return await render_response({
          branch: [],
          fetched: [],
          page_config: {
            ssr: false,
            csr: get_option(nodes, "csr") ?? true
          },
          status,
          error: null,
          event,
          options: options2,
          manifest: manifest2,
          state,
          resolve_opts
        });
      }
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i2) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i2; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e2) {
          load_error = /** @type {Error} */
          e2;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i2) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i2; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i2],
            state,
            csr
          });
        } catch (e2) {
          load_error = /** @type {Error} */
          e2;
          throw load_error;
        }
      });
    });
    for (const p2 of server_promises)
      p2.catch(() => {
      });
    for (const p2 of load_promises)
      p2.catch(() => {
      });
    for (let i2 = 0; i2 < nodes.length; i2 += 1) {
      const node = nodes[i2];
      if (node) {
        try {
          const server_data = await server_promises[i2];
          const data = await load_promises[i2];
          branch.push({ node, server_data, data });
        } catch (e2) {
          const err = normalize_error(e2);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i2--) {
            if (page2.errors[i2]) {
              const index5 = (
                /** @type {number} */
                page2.errors[i2]
              );
              const node2 = await manifest2._.nodes[index5]();
              let j = i2;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = `{"type":"data","nodes":[${branch.map((node) => serialize_data_node(node?.server_data)).join(",")}]}`;
      state.prerendering.dependencies.set(data_pathname, {
        response: text(body),
        body
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (e2) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e2,
      resolve_opts
    });
  }
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  let buffered = 0;
  for (let i2 = 0; i2 < params.length; i2 += 1) {
    const param = params[i2];
    const value = values[i2 - buffered];
    if (param.chained && param.rest && buffered) {
      result[param.name] = values.slice(i2 - buffered, i2 + 1).filter((s22) => s22).join("/");
      buffered = 0;
      continue;
    }
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered)
    return;
  return result;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  state.initiator = route;
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n2, i2) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n2 == void 0 ? n2 : await manifest2._.nodes[n2]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i2; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data, parent.data);
                }
              }
              return data;
            }
          });
        } catch (e2) {
          aborted = true;
          throw e2;
        }
      });
    });
    const promises = functions.map(async (fn, i2) => {
      if (!invalidated[i2]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p2, i2) => p2.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i2 + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    try {
      const stubs = nodes.slice(0, length).map(serialize_data_node);
      const json2 = `{"type":"data","nodes":[${stubs.join(",")}]}`;
      return json_response(json2);
    } catch (e2) {
      const error2 = (
        /** @type {any} */
        e2
      );
      return json_response(JSON.stringify(clarify_devalue_error(event, error2)), 500);
    }
  } catch (e2) {
    const error2 = normalize_error(e2);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(JSON.stringify(await handle_error_and_jsonify(event, options2, error2)));
    }
  }
}
function json_response(json2, status = 200) {
  return text(json2, {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect2) {
  return json_response(
    JSON.stringify({
      type: "redirect",
      location: redirect2.location
    })
  );
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('types').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c3 = new_cookies[name];
      if (c3 && domain_matches(url.hostname, c3.options.domain) && path_matches(url.pathname, c3.options.path)) {
        return c3.value;
      }
      const decoder = opts?.decode || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder });
      const cookie = req_cookies[name];
      {
        return cookie;
      }
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      let path = opts.path ?? default_path;
      new_cookies[name] = {
        name,
        value,
        options: {
          ...defaults,
          ...opts,
          path
        }
      };
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder22 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder22(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  return { cookies, new_cookies, get_cookie_header };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header }) {
  return async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2?.body;
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return await options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        let response;
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file5 = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file5), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string" && !ArrayBuffer.isView(request_body)) {
          throw new Error("Request body must be a string or TypedArray");
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        response = await respond(request, options2, manifest2, state);
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str);
            event.cookies.set(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options3
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function validator(expected) {
  const set = new Set(expected);
  function validate(module, route_id) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] !== "_" && !set.has(key2)) {
        const valid = expected.join(", ");
        throw new Error(
          `Invalid export '${key2}'${route_id ? ` in ${route_id}` : ""} (valid exports are ${valid}, or anything with a '_' prefix)`
        );
      }
    }
  }
  return validate;
}
var validate_common_exports = validator([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config"
]);
var validate_page_server_exports = validator([
  "load",
  "prerender",
  "csr",
  "ssr",
  "actions",
  "trailingSlash",
  "config"
]);
var validate_server_exports = validator([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "prerender",
  "trailingSlash",
  "config"
]);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
async function respond(request, options2, manifest2, state) {
  let url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && is_form_content_type(request);
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) || "/";
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("_").map(Boolean);
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route && !is_data_request) {
      if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n2) => n2 == void 0 ? n2 : manifest2._.nodes[n2]()),
          manifest2._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
      if (normalized !== url.pathname && !state.prerendering?.fallback) {
        return new Response(void 0, {
          status: 301,
          headers: {
            "x-sveltekit-normalize": "1",
            location: (
              // ensure paths starting with '//' are not treated as protocol-relative
              (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
            )
          }
        });
      }
    }
    const { cookies, new_cookies, get_cookie_header } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e2) {
    if (e2 instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e2) : redirect_response(e2.status, e2.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e2);
  }
  async function resolve(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, route, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(
            event2,
            route,
            route.page,
            options2,
            manifest2,
            state,
            resolve_opts
          );
        } else {
          throw new Error("This should never happen");
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e2) {
      return await handle_fatal_error(event2, options2, e2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
var _options, _manifest;
var Server = class {
  /** @param {import('types').SSRManifest} manifest */
  constructor(manifest2) {
    /** @type {import('types').SSROptions} */
    __privateAdd(this, _options, void 0);
    /** @type {import('types').SSRManifest} */
    __privateAdd(this, _manifest, void 0);
    __privateSet(this, _options, options);
    __privateSet(this, _manifest, manifest2);
  }
  /**
   * @param {{
   *   env: Record<string, string>
   * }} opts
   */
  async init({ env }) {
    const entries = Object.entries(env);
    const prefix = __privateGet(this, _options).env_public_prefix;
    Object.fromEntries(entries.filter(([k]) => !k.startsWith(prefix)));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith(prefix)));
    set_public_env(pub);
    if (!__privateGet(this, _options).hooks) {
      const module = await get_hooks();
      __privateGet(this, _options).hooks = {
        handle: module.handle || (({ event, resolve }) => resolve(event)),
        // @ts-expect-error
        handleError: module.handleError || (({ error: error2 }) => console.error(error2?.stack)),
        handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
      };
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    if (!(request instanceof Request)) {
      throw new Error(
        "The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details"
      );
    }
    return respond(request, __privateGet(this, _options), __privateGet(this, _manifest), options2);
  }
};
_options = new WeakMap();
_manifest = new WeakMap();

// .svelte-kit/vercel-tmp/fn-0/manifest.js
var manifest = {
  appDir: "_app",
  appPath: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.ico"]),
  mimeTypes: { ".ico": "image/vnd.microsoft.icon" },
  _: {
    entry: { "file": "_app/immutable/start-e5a025ad.js", "imports": ["_app/immutable/start-e5a025ad.js", "_app/immutable/chunks/index-cdc99104.js", "_app/immutable/chunks/singletons-83248bbb.js", "_app/immutable/chunks/parse-a9b5aeea.js"], "stylesheets": [], "fonts": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4))
    ],
    routes: [
      {
        id: "/",
        pattern: /^\/$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      },
      {
        id: "/journal",
        pattern: /^\/journal\/?$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 3 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};

// .svelte-kit/vercel-tmp/fn-0/edge.js
var server = new Server(manifest);
var initialized = server.init({
  env: (
    /** @type {Record<string, string>} */
    process.env
  )
});
var edge_default = async (request) => {
  await initialized;
  return server.respond(request, {
    getClientAddress() {
      return (
        /** @type {string} */
        request.headers.get("x-forwarded-for")
      );
    }
  });
};
export {
  edge_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=index.js.map
