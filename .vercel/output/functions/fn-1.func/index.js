globalThis.global = globalThis;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
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
function l(n4, t3) {
  if (isNaN(n4) || n4 < 400 || n4 > 599)
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${n4} is invalid`);
  return new o(n4, t3);
}
function g(n4, t3) {
  const e3 = JSON.stringify(n4), s3 = new Headers(t3?.headers);
  return s3.has("content-length") || s3.set("content-length", r.encode(e3).byteLength.toString()), s3.has("content-type") || s3.set("content-type", "application/json"), new Response(e3, { ...t3, headers: s3 });
}
function f(n4, t3) {
  const e3 = new Headers(t3?.headers);
  return e3.has("content-length") || e3.set("content-length", r.encode(n4).byteLength.toString()), new Response(n4, { ...t3, headers: e3 });
}
var o, c, h, r;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    o = class {
      constructor(t3, e3) {
        this.status = t3, typeof e3 == "string" ? this.body = { message: e3 } : e3 ? this.body = e3 : this.body = { message: `Error: ${t3}` };
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    c = class {
      constructor(t3, e3) {
        this.status = t3, this.location = e3;
      }
    };
    h = class {
      constructor(t3, e3) {
        this.status = t3, this.data = e3;
      }
    };
    r = new TextEncoder();
  }
});

// .svelte-kit/output/server/chunks/index3.js
function _() {
}
function m(t3) {
  return t3();
}
function $() {
  return /* @__PURE__ */ Object.create(null);
}
function h2(t3) {
  t3.forEach(m);
}
function y(t3, n4) {
  return t3 != t3 ? n4 == n4 : t3 !== n4 || t3 && typeof t3 == "object" || typeof t3 == "function";
}
function x(t3, ...n4) {
  if (t3 == null)
    return _;
  const e3 = t3.subscribe(...n4);
  return e3.unsubscribe ? () => e3.unsubscribe() : e3;
}
function f2(t3) {
  i = t3;
}
function l2() {
  if (!i)
    throw new Error("Function called outside component initialization");
  return i;
}
function j(t3, n4) {
  return l2().$$.context.set(t3, n4), n4;
}
function R(t3) {
  return l2().$$.context.get(t3);
}
function w(t3, n4 = false) {
  const e3 = String(t3), o3 = n4 ? b : g2;
  o3.lastIndex = 0;
  let u3 = "", r4 = 0;
  for (; o3.test(e3); ) {
    const c4 = o3.lastIndex - 1, s3 = e3[c4];
    u3 += e3.substring(r4, c4) + (s3 === "&" ? "&amp;" : s3 === '"' ? "&quot;" : "&lt;"), r4 = c4 + 1;
  }
  return u3 + e3.substring(r4);
}
function v(t3, n4) {
  if (!t3 || !t3.$$render)
    throw n4 === "svelte:component" && (n4 += " this={...}"), new Error(`<${n4}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${n4}>.`);
  return t3;
}
function C(t3) {
  function n4(e3, o3, u3, r4, c4) {
    const s3 = i, d4 = { on_destroy: a, context: new Map(c4 || (s3 ? s3.$$.context : [])), on_mount: [], before_update: [], after_update: [], callbacks: $() };
    f2({ $$: d4 });
    const p4 = t3(e3, o3, u3, r4);
    return f2(s3), p4;
  }
  return { render: (e3 = {}, { $$slots: o3 = {}, context: u3 = /* @__PURE__ */ new Map() } = {}) => {
    a = [];
    const r4 = { title: "", head: "", css: /* @__PURE__ */ new Set() }, c4 = n4(r4, e3, {}, o3, u3);
    return h2(a), { html: c4, css: { code: Array.from(r4.css).map((s3) => s3.code).join(`
`), map: null }, head: r4.title + r4.head };
  }, $$render: n4 };
}
var i, b, g2, T, a;
var init_index3 = __esm({
  ".svelte-kit/output/server/chunks/index3.js"() {
    Promise.resolve();
    b = /[&"]/g;
    g2 = /[&<]/g;
    T = { $$render: () => "" };
  }
});

// .svelte-kit/output/server/chunks/index2.js
function h3(e3, o3) {
  return { subscribe: p(e3, o3).subscribe };
}
function p(e3, o3 = _) {
  let i3;
  const r4 = /* @__PURE__ */ new Set();
  function u3(t3) {
    if (y(e3, t3) && (e3 = t3, i3)) {
      const c4 = !n.length;
      for (const s3 of r4)
        s3[1](), n.push(s3, e3);
      if (c4) {
        for (let s3 = 0; s3 < n.length; s3 += 2)
          n[s3][0](n[s3 + 1]);
        n.length = 0;
      }
    }
  }
  function f4(t3) {
    u3(t3(e3));
  }
  function a3(t3, c4 = _) {
    const s3 = [t3, c4];
    return r4.add(s3), r4.size === 1 && (i3 = o3(u3) || _), t3(e3), () => {
      r4.delete(s3), r4.size === 0 && (i3(), i3 = null);
    };
  }
  return { set: u3, update: f4, subscribe: a3 };
}
var n;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_index3();
    n = [];
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse2;
    exports.serialize = serialize;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse2(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index3 = 0;
      while (index3 < str.length) {
        var eqIdx = str.indexOf("=", index3);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index3);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index3 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key = str.slice(index3, eqIdx).trim();
        if (void 0 === obj[key]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
        index3 = endIdx + 1;
      }
      return obj;
    }
    function serialize(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
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
    function encode(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e3) {
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
    function parseString2(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e3) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e3
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key === "expires") {
          cookie.expires = new Date(value2);
        } else if (key === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key === "secure") {
          cookie.secure = true;
        } else if (key === "httponly") {
          cookie.httpOnly = true;
        } else if (key === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key] = value2;
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
    function parse2(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key) {
          return key.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options);
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
    module.exports = parse2;
    module.exports.parse = parse2;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/entries/pages/_layout.ts.js
var layout_ts_exports = {};
__export(layout_ts_exports, {
  load: () => e,
  ssr: () => r2
});
async function e({ url: t3 }) {
  return { currentPath: t3.pathname };
}
var r2;
var init_layout_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.ts.js"() {
    r2 = true;
  }
});

// node_modules/pocketbase/dist/pocketbase.es.mjs
function __extends(e3, t3) {
  if ("function" != typeof t3 && null !== t3)
    throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
  function __() {
    this.constructor = e3;
  }
  extendStatics(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (__.prototype = t3.prototype, new __());
}
function __awaiter(e3, t3, n4, i3) {
  return new (n4 || (n4 = Promise))(function(o3, r4) {
    function fulfilled(e4) {
      try {
        step(i3.next(e4));
      } catch (e5) {
        r4(e5);
      }
    }
    function rejected(e4) {
      try {
        step(i3.throw(e4));
      } catch (e5) {
        r4(e5);
      }
    }
    function step(e4) {
      e4.done ? o3(e4.value) : function adopt(e5) {
        return e5 instanceof n4 ? e5 : new n4(function(t4) {
          t4(e5);
        });
      }(e4.value).then(fulfilled, rejected);
    }
    step((i3 = i3.apply(e3, t3 || [])).next());
  });
}
function __generator(e3, t3) {
  var n4, i3, o3, r4, s3 = { label: 0, sent: function() {
    if (1 & o3[0])
      throw o3[1];
    return o3[1];
  }, trys: [], ops: [] };
  return r4 = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (r4[Symbol.iterator] = function() {
    return this;
  }), r4;
  function verb(r5) {
    return function(a3) {
      return function step(r6) {
        if (n4)
          throw new TypeError("Generator is already executing.");
        for (; s3; )
          try {
            if (n4 = 1, i3 && (o3 = 2 & r6[0] ? i3.return : r6[0] ? i3.throw || ((o3 = i3.return) && o3.call(i3), 0) : i3.next) && !(o3 = o3.call(i3, r6[1])).done)
              return o3;
            switch (i3 = 0, o3 && (r6 = [2 & r6[0], o3.value]), r6[0]) {
              case 0:
              case 1:
                o3 = r6;
                break;
              case 4:
                return s3.label++, { value: r6[1], done: false };
              case 5:
                s3.label++, i3 = r6[1], r6 = [0];
                continue;
              case 7:
                r6 = s3.ops.pop(), s3.trys.pop();
                continue;
              default:
                if (!(o3 = s3.trys, (o3 = o3.length > 0 && o3[o3.length - 1]) || 6 !== r6[0] && 2 !== r6[0])) {
                  s3 = 0;
                  continue;
                }
                if (3 === r6[0] && (!o3 || r6[1] > o3[0] && r6[1] < o3[3])) {
                  s3.label = r6[1];
                  break;
                }
                if (6 === r6[0] && s3.label < o3[1]) {
                  s3.label = o3[1], o3 = r6;
                  break;
                }
                if (o3 && s3.label < o3[2]) {
                  s3.label = o3[2], s3.ops.push(r6);
                  break;
                }
                o3[2] && s3.ops.pop(), s3.trys.pop();
                continue;
            }
            r6 = t3.call(e3, s3);
          } catch (e4) {
            r6 = [6, e4], i3 = 0;
          } finally {
            n4 = o3 = 0;
          }
        if (5 & r6[0])
          throw r6[1];
        return { value: r6[0] ? r6[1] : void 0, done: true };
      }([r5, a3]);
    };
  }
}
function cookieSerialize(e3, t3, i3) {
  var o3 = Object.assign({}, i3 || {}), r4 = o3.encode || defaultEncode;
  if (!n2.test(e3))
    throw new TypeError("argument name is invalid");
  var s3 = r4(t3);
  if (s3 && !n2.test(s3))
    throw new TypeError("argument val is invalid");
  var a3 = e3 + "=" + s3;
  if (null != o3.maxAge) {
    var c4 = o3.maxAge - 0;
    if (isNaN(c4) || !isFinite(c4))
      throw new TypeError("option maxAge is invalid");
    a3 += "; Max-Age=" + Math.floor(c4);
  }
  if (o3.domain) {
    if (!n2.test(o3.domain))
      throw new TypeError("option domain is invalid");
    a3 += "; Domain=" + o3.domain;
  }
  if (o3.path) {
    if (!n2.test(o3.path))
      throw new TypeError("option path is invalid");
    a3 += "; Path=" + o3.path;
  }
  if (o3.expires) {
    if (!function isDate(e4) {
      return "[object Date]" === Object.prototype.toString.call(e4) || e4 instanceof Date;
    }(o3.expires) || isNaN(o3.expires.valueOf()))
      throw new TypeError("option expires is invalid");
    a3 += "; Expires=" + o3.expires.toUTCString();
  }
  if (o3.httpOnly && (a3 += "; HttpOnly"), o3.secure && (a3 += "; Secure"), o3.priority)
    switch ("string" == typeof o3.priority ? o3.priority.toLowerCase() : o3.priority) {
      case "low":
        a3 += "; Priority=Low";
        break;
      case "medium":
        a3 += "; Priority=Medium";
        break;
      case "high":
        a3 += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  if (o3.sameSite)
    switch ("string" == typeof o3.sameSite ? o3.sameSite.toLowerCase() : o3.sameSite) {
      case true:
        a3 += "; SameSite=Strict";
        break;
      case "lax":
        a3 += "; SameSite=Lax";
        break;
      case "strict":
        a3 += "; SameSite=Strict";
        break;
      case "none":
        a3 += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return a3;
}
function defaultDecode(e3) {
  return -1 !== e3.indexOf("%") ? decodeURIComponent(e3) : e3;
}
function defaultEncode(e3) {
  return encodeURIComponent(e3);
}
function getTokenPayload(t3) {
  if (t3)
    try {
      var n4 = decodeURIComponent(e2(t3.split(".")[1]).split("").map(function(e3) {
        return "%" + ("00" + e3.charCodeAt(0).toString(16)).slice(-2);
      }).join(""));
      return JSON.parse(n4) || {};
    } catch (e3) {
    }
  return {};
}
var extendStatics, __assign, e2, t, n2, i2, o2, r3, s, a2, c2, u, l3, d, h4, p2, v2, f3, m2, y3, b3, g4, S, w3, C2;
var init_pocketbase_es = __esm({
  "node_modules/pocketbase/dist/pocketbase.es.mjs"() {
    extendStatics = function(e3, t3) {
      return extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
        e4.__proto__ = t4;
      } || function(e4, t4) {
        for (var n4 in t4)
          Object.prototype.hasOwnProperty.call(t4, n4) && (e4[n4] = t4[n4]);
      }, extendStatics(e3, t3);
    };
    __assign = function() {
      return __assign = Object.assign || function __assign2(e3) {
        for (var t3, n4 = 1, i3 = arguments.length; n4 < i3; n4++)
          for (var o3 in t3 = arguments[n4])
            Object.prototype.hasOwnProperty.call(t3, o3) && (e3[o3] = t3[o3]);
        return e3;
      }, __assign.apply(this, arguments);
    };
    t = function(e3) {
      function ClientResponseError(t3) {
        var n4, i3, o3, r4, s3 = this;
        return (s3 = e3.call(this, "ClientResponseError") || this).url = "", s3.status = 0, s3.data = {}, s3.isAbort = false, s3.originalError = null, Object.setPrototypeOf(s3, ClientResponseError.prototype), t3 instanceof ClientResponseError || (s3.originalError = t3), null !== t3 && "object" == typeof t3 && (s3.url = "string" == typeof t3.url ? t3.url : "", s3.status = "number" == typeof t3.status ? t3.status : 0, s3.data = null !== t3.data && "object" == typeof t3.data ? t3.data : {}), "undefined" != typeof DOMException && t3 instanceof DOMException && (s3.isAbort = true), s3.name = "ClientResponseError " + s3.status, s3.message = null === (n4 = s3.data) || void 0 === n4 ? void 0 : n4.message, s3.message || (s3.isAbort ? s3.message = "The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation." : (null === (r4 = null === (o3 = null === (i3 = s3.originalError) || void 0 === i3 ? void 0 : i3.cause) || void 0 === o3 ? void 0 : o3.message) || void 0 === r4 ? void 0 : r4.includes("ECONNREFUSED ::1")) ? s3.message = "Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21)." : s3.message = "Something went wrong while processing your request."), s3;
      }
      return __extends(ClientResponseError, e3), ClientResponseError.prototype.toJSON = function() {
        return __assign({}, this);
      }, ClientResponseError;
    }(Error);
    n2 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    e2 = "function" == typeof atob ? atob : function(e3) {
      var t3 = String(e3).replace(/=+$/, "");
      if (t3.length % 4 == 1)
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
      for (var n4, i3, o3 = 0, r4 = 0, s3 = ""; i3 = t3.charAt(r4++); ~i3 && (n4 = o3 % 4 ? 64 * n4 + i3 : i3, o3++ % 4) ? s3 += String.fromCharCode(255 & n4 >> (-2 * o3 & 6)) : 0)
        i3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i3);
      return s3;
    };
    i2 = function() {
      function BaseModel(e3) {
        void 0 === e3 && (e3 = {}), this.load(e3 || {});
      }
      return BaseModel.prototype.load = function(e3) {
        for (var t3 = 0, n4 = Object.entries(e3); t3 < n4.length; t3++) {
          var i3 = n4[t3], o3 = i3[0], r4 = i3[1];
          this[o3] = r4;
        }
        this.id = void 0 !== e3.id ? e3.id : "", this.created = void 0 !== e3.created ? e3.created : "", this.updated = void 0 !== e3.updated ? e3.updated : "";
      }, Object.defineProperty(BaseModel.prototype, "isNew", { get: function() {
        return !this.id;
      }, enumerable: false, configurable: true }), BaseModel.prototype.clone = function() {
        var e3 = "function" == typeof structuredClone ? structuredClone(this) : JSON.parse(JSON.stringify(this));
        return new this.constructor(e3);
      }, BaseModel.prototype.export = function() {
        return Object.assign({}, this);
      }, BaseModel;
    }();
    o2 = function(e3) {
      function Record() {
        return null !== e3 && e3.apply(this, arguments) || this;
      }
      return __extends(Record, e3), Record.prototype.load = function(t3) {
        e3.prototype.load.call(this, t3), this.collectionId = "string" == typeof t3.collectionId ? t3.collectionId : "", this.collectionName = "string" == typeof t3.collectionName ? t3.collectionName : "", this.loadExpand(t3.expand);
      }, Record.prototype.loadExpand = function(e4) {
        for (var t3 in e4 = e4 || {}, this.expand = {}, e4)
          Array.isArray(e4[t3]) ? this.expand[t3] = e4[t3].map(function(e5) {
            return new Record(e5 || {});
          }) : this.expand[t3] = new Record(e4[t3] || {});
      }, Record;
    }(i2);
    r3 = function(e3) {
      function Admin() {
        return null !== e3 && e3.apply(this, arguments) || this;
      }
      return __extends(Admin, e3), Admin.prototype.load = function(t3) {
        e3.prototype.load.call(this, t3), this.avatar = "number" == typeof t3.avatar ? t3.avatar : 0, this.email = "string" == typeof t3.email ? t3.email : "";
      }, Admin;
    }(i2);
    s = function() {
      function BaseAuthStore() {
        this.baseToken = "", this.baseModel = null, this._onChangeCallbacks = [];
      }
      return Object.defineProperty(BaseAuthStore.prototype, "token", { get: function() {
        return this.baseToken;
      }, enumerable: false, configurable: true }), Object.defineProperty(BaseAuthStore.prototype, "model", { get: function() {
        return this.baseModel;
      }, enumerable: false, configurable: true }), Object.defineProperty(BaseAuthStore.prototype, "isValid", { get: function() {
        return !function isTokenExpired(e3, t3) {
          void 0 === t3 && (t3 = 0);
          var n4 = getTokenPayload(e3);
          return !(Object.keys(n4).length > 0 && (!n4.exp || n4.exp - t3 > Date.now() / 1e3));
        }(this.token);
      }, enumerable: false, configurable: true }), BaseAuthStore.prototype.save = function(e3, t3) {
        this.baseToken = e3 || "", this.baseModel = null !== t3 && "object" == typeof t3 ? void 0 !== t3.collectionId ? new o2(t3) : new r3(t3) : null, this.triggerChange();
      }, BaseAuthStore.prototype.clear = function() {
        this.baseToken = "", this.baseModel = null, this.triggerChange();
      }, BaseAuthStore.prototype.loadFromCookie = function(e3, t3) {
        void 0 === t3 && (t3 = "pb_auth");
        var n4 = function cookieParse(e4, t4) {
          var n5 = {};
          if ("string" != typeof e4)
            return n5;
          for (var i4 = Object.assign({}, t4 || {}).decode || defaultDecode, o3 = 0; o3 < e4.length; ) {
            var r4 = e4.indexOf("=", o3);
            if (-1 === r4)
              break;
            var s3 = e4.indexOf(";", o3);
            if (-1 === s3)
              s3 = e4.length;
            else if (s3 < r4) {
              o3 = e4.lastIndexOf(";", r4 - 1) + 1;
              continue;
            }
            var a3 = e4.slice(o3, r4).trim();
            if (void 0 === n5[a3]) {
              var c4 = e4.slice(r4 + 1, s3).trim();
              34 === c4.charCodeAt(0) && (c4 = c4.slice(1, -1));
              try {
                n5[a3] = i4(c4);
              } catch (e5) {
                n5[a3] = c4;
              }
            }
            o3 = s3 + 1;
          }
          return n5;
        }(e3 || "")[t3] || "", i3 = {};
        try {
          (null === typeof (i3 = JSON.parse(n4)) || "object" != typeof i3 || Array.isArray(i3)) && (i3 = {});
        } catch (e4) {
        }
        this.save(i3.token || "", i3.model || null);
      }, BaseAuthStore.prototype.exportToCookie = function(e3, t3) {
        var n4, i3, r4;
        void 0 === t3 && (t3 = "pb_auth");
        var s3 = { secure: true, sameSite: true, httpOnly: true, path: "/" }, a3 = getTokenPayload(this.token);
        (null == a3 ? void 0 : a3.exp) ? s3.expires = new Date(1e3 * a3.exp) : s3.expires = new Date("1970-01-01"), e3 = Object.assign({}, s3, e3);
        var c4 = { token: this.token, model: (null === (n4 = this.model) || void 0 === n4 ? void 0 : n4.export()) || null }, u3 = cookieSerialize(t3, JSON.stringify(c4), e3), l5 = "undefined" != typeof Blob ? new Blob([u3]).size : u3.length;
        return c4.model && l5 > 4096 && (c4.model = { id: null === (i3 = null == c4 ? void 0 : c4.model) || void 0 === i3 ? void 0 : i3.id, email: null === (r4 = null == c4 ? void 0 : c4.model) || void 0 === r4 ? void 0 : r4.email }, this.model instanceof o2 && (c4.model.username = this.model.username, c4.model.verified = this.model.verified, c4.model.collectionId = this.model.collectionId), u3 = cookieSerialize(t3, JSON.stringify(c4), e3)), u3;
      }, BaseAuthStore.prototype.onChange = function(e3, t3) {
        var n4 = this;
        return void 0 === t3 && (t3 = false), this._onChangeCallbacks.push(e3), t3 && e3(this.token, this.model), function() {
          for (var t4 = n4._onChangeCallbacks.length - 1; t4 >= 0; t4--)
            if (n4._onChangeCallbacks[t4] == e3)
              return delete n4._onChangeCallbacks[t4], void n4._onChangeCallbacks.splice(t4, 1);
        };
      }, BaseAuthStore.prototype.triggerChange = function() {
        for (var e3 = 0, t3 = this._onChangeCallbacks; e3 < t3.length; e3++) {
          var n4 = t3[e3];
          n4 && n4(this.token, this.model);
        }
      }, BaseAuthStore;
    }();
    a2 = function(e3) {
      function LocalAuthStore(t3) {
        void 0 === t3 && (t3 = "pocketbase_auth");
        var n4 = e3.call(this) || this;
        return n4.storageFallback = {}, n4.storageKey = t3, n4;
      }
      return __extends(LocalAuthStore, e3), Object.defineProperty(LocalAuthStore.prototype, "token", { get: function() {
        return (this._storageGet(this.storageKey) || {}).token || "";
      }, enumerable: false, configurable: true }), Object.defineProperty(LocalAuthStore.prototype, "model", { get: function() {
        var e4, t3 = this._storageGet(this.storageKey) || {};
        return null === t3 || "object" != typeof t3 || null === t3.model || "object" != typeof t3.model ? null : void 0 === (null === (e4 = t3.model) || void 0 === e4 ? void 0 : e4.collectionId) ? new r3(t3.model) : new o2(t3.model);
      }, enumerable: false, configurable: true }), LocalAuthStore.prototype.save = function(t3, n4) {
        this._storageSet(this.storageKey, { token: t3, model: n4 }), e3.prototype.save.call(this, t3, n4);
      }, LocalAuthStore.prototype.clear = function() {
        this._storageRemove(this.storageKey), e3.prototype.clear.call(this);
      }, LocalAuthStore.prototype._storageGet = function(e4) {
        if ("undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.localStorage)) {
          var t3 = window.localStorage.getItem(e4) || "";
          try {
            return JSON.parse(t3);
          } catch (e5) {
            return t3;
          }
        }
        return this.storageFallback[e4];
      }, LocalAuthStore.prototype._storageSet = function(e4, t3) {
        if ("undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.localStorage)) {
          var n4 = t3;
          "string" != typeof t3 && (n4 = JSON.stringify(t3)), window.localStorage.setItem(e4, n4);
        } else
          this.storageFallback[e4] = t3;
      }, LocalAuthStore.prototype._storageRemove = function(e4) {
        var t3;
        "undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.localStorage) && (null === (t3 = window.localStorage) || void 0 === t3 || t3.removeItem(e4)), delete this.storageFallback[e4];
      }, LocalAuthStore;
    }(s);
    c2 = function c3(e3) {
      this.client = e3;
    };
    u = function(e3) {
      function SettingsService() {
        return null !== e3 && e3.apply(this, arguments) || this;
      }
      return __extends(SettingsService, e3), SettingsService.prototype.getAll = function(e4) {
        return void 0 === e4 && (e4 = {}), this.client.send("/api/settings", { method: "GET", params: e4 }).then(function(e5) {
          return e5 || {};
        });
      }, SettingsService.prototype.update = function(e4, t3) {
        return void 0 === e4 && (e4 = {}), void 0 === t3 && (t3 = {}), this.client.send("/api/settings", { method: "PATCH", params: t3, body: e4 }).then(function(e5) {
          return e5 || {};
        });
      }, SettingsService.prototype.testS3 = function(e4) {
        return void 0 === e4 && (e4 = {}), this.client.send("/api/settings/test/s3", { method: "POST", params: e4 }).then(function() {
          return true;
        });
      }, SettingsService.prototype.testEmail = function(e4, t3, n4) {
        void 0 === n4 && (n4 = {});
        var i3 = { email: e4, template: t3 };
        return this.client.send("/api/settings/test/email", { method: "POST", params: n4, body: i3 }).then(function() {
          return true;
        });
      }, SettingsService;
    }(c2);
    l3 = function l4(e3, t3, n4, i3, o3) {
      this.page = e3 > 0 ? e3 : 1, this.perPage = t3 >= 0 ? t3 : 0, this.totalItems = n4 >= 0 ? n4 : 0, this.totalPages = i3 >= 0 ? i3 : 0, this.items = o3 || [];
    };
    d = function(e3) {
      function CrudService() {
        return null !== e3 && e3.apply(this, arguments) || this;
      }
      return __extends(CrudService, e3), CrudService.prototype.getFullList = function(e4, t3) {
        return void 0 === e4 && (e4 = 200), void 0 === t3 && (t3 = {}), this._getFullList(this.baseCrudPath, e4, t3);
      }, CrudService.prototype.getList = function(e4, t3, n4) {
        return void 0 === e4 && (e4 = 1), void 0 === t3 && (t3 = 30), void 0 === n4 && (n4 = {}), this._getList(this.baseCrudPath, e4, t3, n4);
      }, CrudService.prototype.getFirstListItem = function(e4, t3) {
        return void 0 === t3 && (t3 = {}), this._getFirstListItem(this.baseCrudPath, e4, t3);
      }, CrudService.prototype.getOne = function(e4, t3) {
        return void 0 === t3 && (t3 = {}), this._getOne(this.baseCrudPath, e4, t3);
      }, CrudService.prototype.create = function(e4, t3) {
        return void 0 === e4 && (e4 = {}), void 0 === t3 && (t3 = {}), this._create(this.baseCrudPath, e4, t3);
      }, CrudService.prototype.update = function(e4, t3, n4) {
        return void 0 === t3 && (t3 = {}), void 0 === n4 && (n4 = {}), this._update(this.baseCrudPath, e4, t3, n4);
      }, CrudService.prototype.delete = function(e4, t3) {
        return void 0 === t3 && (t3 = {}), this._delete(this.baseCrudPath, e4, t3);
      }, CrudService;
    }(function(e3) {
      function BaseCrudService() {
        return null !== e3 && e3.apply(this, arguments) || this;
      }
      return __extends(BaseCrudService, e3), BaseCrudService.prototype._getFullList = function(e4, t3, n4) {
        var i3 = this;
        void 0 === t3 && (t3 = 100), void 0 === n4 && (n4 = {});
        var o3 = [], request = function(r4) {
          return __awaiter(i3, void 0, void 0, function() {
            return __generator(this, function(i4) {
              return [2, this._getList(e4, r4, t3, n4).then(function(e5) {
                var t4 = e5, n5 = t4.items, i5 = t4.totalItems;
                return o3 = o3.concat(n5), n5.length && i5 > o3.length ? request(r4 + 1) : o3;
              })];
            });
          });
        };
        return request(1);
      }, BaseCrudService.prototype._getList = function(e4, t3, n4, i3) {
        var o3 = this;
        return void 0 === t3 && (t3 = 1), void 0 === n4 && (n4 = 30), void 0 === i3 && (i3 = {}), i3 = Object.assign({ page: t3, perPage: n4 }, i3), this.client.send(e4, { method: "GET", params: i3 }).then(function(e5) {
          var t4 = [];
          if (null == e5 ? void 0 : e5.items) {
            e5.items = e5.items || [];
            for (var n5 = 0, i4 = e5.items; n5 < i4.length; n5++) {
              var r4 = i4[n5];
              t4.push(o3.decode(r4));
            }
          }
          return new l3((null == e5 ? void 0 : e5.page) || 1, (null == e5 ? void 0 : e5.perPage) || 0, (null == e5 ? void 0 : e5.totalItems) || 0, (null == e5 ? void 0 : e5.totalPages) || 0, t4);
        });
      }, BaseCrudService.prototype._getOne = function(e4, t3, n4) {
        var i3 = this;
        return void 0 === n4 && (n4 = {}), this.client.send(e4 + "/" + encodeURIComponent(t3), { method: "GET", params: n4 }).then(function(e5) {
          return i3.decode(e5);
        });
      }, BaseCrudService.prototype._getFirstListItem = function(e4, n4, i3) {
        return void 0 === i3 && (i3 = {}), i3 = Object.assign({ filter: n4, $cancelKey: "one_by_filter_" + e4 + "_" + n4 }, i3), this._getList(e4, 1, 1, i3).then(function(e5) {
          var n5;
          if (!(null === (n5 = null == e5 ? void 0 : e5.items) || void 0 === n5 ? void 0 : n5.length))
            throw new t({ status: 404, data: { code: 404, message: "The requested resource wasn't found.", data: {} } });
          return e5.items[0];
        });
      }, BaseCrudService.prototype._create = function(e4, t3, n4) {
        var i3 = this;
        return void 0 === t3 && (t3 = {}), void 0 === n4 && (n4 = {}), this.client.send(e4, { method: "POST", params: n4, body: t3 }).then(function(e5) {
          return i3.decode(e5);
        });
      }, BaseCrudService.prototype._update = function(e4, t3, n4, i3) {
        var o3 = this;
        return void 0 === n4 && (n4 = {}), void 0 === i3 && (i3 = {}), this.client.send(e4 + "/" + encodeURIComponent(t3), { method: "PATCH", params: i3, body: n4 }).then(function(e5) {
          return o3.decode(e5);
        });
      }, BaseCrudService.prototype._delete = function(e4, t3, n4) {
        return void 0 === n4 && (n4 = {}), this.client.send(e4 + "/" + encodeURIComponent(t3), { method: "DELETE", params: n4 }).then(function() {
          return true;
        });
      }, BaseCrudService;
    }(c2));
    h4 = function(e3) {
      function AdminService() {
        return null !== e3 && e3.apply(this, arguments) || this;
      }
      return __extends(AdminService, e3), AdminService.prototype.decode = function(e4) {
        return new r3(e4);
      }, Object.defineProperty(AdminService.prototype, "baseCrudPath", { get: function() {
        return "/api/admins";
      }, enumerable: false, configurable: true }), AdminService.prototype.update = function(t3, n4, i3) {
        var o3 = this;
        return void 0 === n4 && (n4 = {}), void 0 === i3 && (i3 = {}), e3.prototype.update.call(this, t3, n4, i3).then(function(e4) {
          var t4, n5;
          return o3.client.authStore.model && void 0 === (null === (t4 = o3.client.authStore.model) || void 0 === t4 ? void 0 : t4.collectionId) && (null === (n5 = o3.client.authStore.model) || void 0 === n5 ? void 0 : n5.id) === (null == e4 ? void 0 : e4.id) && o3.client.authStore.save(o3.client.authStore.token, e4), e4;
        });
      }, AdminService.prototype.delete = function(t3, n4) {
        var i3 = this;
        return void 0 === n4 && (n4 = {}), e3.prototype.delete.call(this, t3, n4).then(function(e4) {
          var n5, o3;
          return e4 && i3.client.authStore.model && void 0 === (null === (n5 = i3.client.authStore.model) || void 0 === n5 ? void 0 : n5.collectionId) && (null === (o3 = i3.client.authStore.model) || void 0 === o3 ? void 0 : o3.id) === t3 && i3.client.authStore.clear(), e4;
        });
      }, AdminService.prototype.authResponse = function(e4) {
        var t3 = this.decode((null == e4 ? void 0 : e4.admin) || {});
        return (null == e4 ? void 0 : e4.token) && (null == e4 ? void 0 : e4.admin) && this.client.authStore.save(e4.token, t3), Object.assign({}, e4, { token: (null == e4 ? void 0 : e4.token) || "", admin: t3 });
      }, AdminService.prototype.authWithPassword = function(e4, t3, n4, i3) {
        return void 0 === n4 && (n4 = {}), void 0 === i3 && (i3 = {}), n4 = Object.assign({ identity: e4, password: t3 }, n4), this.client.send(this.baseCrudPath + "/auth-with-password", { method: "POST", params: i3, body: n4 }).then(this.authResponse.bind(this));
      }, AdminService.prototype.authRefresh = function(e4, t3) {
        return void 0 === e4 && (e4 = {}), void 0 === t3 && (t3 = {}), this.client.send(this.baseCrudPath + "/auth-refresh", { method: "POST", params: t3, body: e4 }).then(this.authResponse.bind(this));
      }, AdminService.prototype.requestPasswordReset = function(e4, t3, n4) {
        return void 0 === t3 && (t3 = {}), void 0 === n4 && (n4 = {}), t3 = Object.assign({ email: e4 }, t3), this.client.send(this.baseCrudPath + "/request-password-reset", { method: "POST", params: n4, body: t3 }).then(function() {
          return true;
        });
      }, AdminService.prototype.confirmPasswordReset = function(e4, t3, n4, i3, o3) {
        return void 0 === i3 && (i3 = {}), void 0 === o3 && (o3 = {}), i3 = Object.assign({ token: e4, password: t3, passwordConfirm: n4 }, i3), this.client.send(this.baseCrudPath + "/confirm-password-reset", { method: "POST", params: o3, body: i3 }).then(function() {
          return true;
        });
      }, AdminService;
    }(d);
    p2 = function(e3) {
      function ExternalAuth() {
        return null !== e3 && e3.apply(this, arguments) || this;
      }
      return __extends(ExternalAuth, e3), ExternalAuth.prototype.load = function(t3) {
        e3.prototype.load.call(this, t3), this.recordId = "string" == typeof t3.recordId ? t3.recordId : "", this.collectionId = "string" == typeof t3.collectionId ? t3.collectionId : "", this.provider = "string" == typeof t3.provider ? t3.provider : "", this.providerId = "string" == typeof t3.providerId ? t3.providerId : "";
      }, ExternalAuth;
    }(i2);
    v2 = function(e3) {
      function RecordService(t3, n4) {
        var i3 = e3.call(this, t3) || this;
        return i3.collectionIdOrName = n4, i3;
      }
      return __extends(RecordService, e3), RecordService.prototype.decode = function(e4) {
        return new o2(e4);
      }, Object.defineProperty(RecordService.prototype, "baseCrudPath", { get: function() {
        return this.baseCollectionPath + "/records";
      }, enumerable: false, configurable: true }), Object.defineProperty(RecordService.prototype, "baseCollectionPath", { get: function() {
        return "/api/collections/" + encodeURIComponent(this.collectionIdOrName);
      }, enumerable: false, configurable: true }), RecordService.prototype.subscribeOne = function(e4, t3) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(n4) {
            return console.warn("PocketBase: subscribeOne(recordId, callback) is deprecated. Please replace it with subscribe(recordId, callback)."), [2, this.client.realtime.subscribe(this.collectionIdOrName + "/" + e4, t3)];
          });
        });
      }, RecordService.prototype.subscribe = function(e4, t3) {
        return __awaiter(this, void 0, void 0, function() {
          var n4;
          return __generator(this, function(i3) {
            if ("function" == typeof e4)
              return console.warn("PocketBase: subscribe(callback) is deprecated. Please replace it with subscribe('*', callback)."), [2, this.client.realtime.subscribe(this.collectionIdOrName, e4)];
            if (!t3)
              throw new Error("Missing subscription callback.");
            if ("" === e4)
              throw new Error("Missing topic.");
            return n4 = this.collectionIdOrName, "*" !== e4 && (n4 += "/" + e4), [2, this.client.realtime.subscribe(n4, t3)];
          });
        });
      }, RecordService.prototype.unsubscribe = function(e4) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(t3) {
            return "*" === e4 ? [2, this.client.realtime.unsubscribe(this.collectionIdOrName)] : e4 ? [2, this.client.realtime.unsubscribe(this.collectionIdOrName + "/" + e4)] : [2, this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)];
          });
        });
      }, RecordService.prototype.getFullList = function(t3, n4) {
        return void 0 === t3 && (t3 = 200), void 0 === n4 && (n4 = {}), e3.prototype.getFullList.call(this, t3, n4);
      }, RecordService.prototype.getList = function(t3, n4, i3) {
        return void 0 === t3 && (t3 = 1), void 0 === n4 && (n4 = 30), void 0 === i3 && (i3 = {}), e3.prototype.getList.call(this, t3, n4, i3);
      }, RecordService.prototype.getFirstListItem = function(t3, n4) {
        return void 0 === n4 && (n4 = {}), e3.prototype.getFirstListItem.call(this, t3, n4);
      }, RecordService.prototype.getOne = function(t3, n4) {
        return void 0 === n4 && (n4 = {}), e3.prototype.getOne.call(this, t3, n4);
      }, RecordService.prototype.create = function(t3, n4) {
        return void 0 === t3 && (t3 = {}), void 0 === n4 && (n4 = {}), e3.prototype.create.call(this, t3, n4);
      }, RecordService.prototype.update = function(t3, n4, i3) {
        var o3 = this;
        return void 0 === n4 && (n4 = {}), void 0 === i3 && (i3 = {}), e3.prototype.update.call(this, t3, n4, i3).then(function(e4) {
          var t4, n5, i4;
          return (null === (t4 = o3.client.authStore.model) || void 0 === t4 ? void 0 : t4.id) !== (null == e4 ? void 0 : e4.id) || (null === (n5 = o3.client.authStore.model) || void 0 === n5 ? void 0 : n5.collectionId) !== o3.collectionIdOrName && (null === (i4 = o3.client.authStore.model) || void 0 === i4 ? void 0 : i4.collectionName) !== o3.collectionIdOrName || o3.client.authStore.save(o3.client.authStore.token, e4), e4;
        });
      }, RecordService.prototype.delete = function(t3, n4) {
        var i3 = this;
        return void 0 === n4 && (n4 = {}), e3.prototype.delete.call(this, t3, n4).then(function(e4) {
          var n5, o3, r4;
          return !e4 || (null === (n5 = i3.client.authStore.model) || void 0 === n5 ? void 0 : n5.id) !== t3 || (null === (o3 = i3.client.authStore.model) || void 0 === o3 ? void 0 : o3.collectionId) !== i3.collectionIdOrName && (null === (r4 = i3.client.authStore.model) || void 0 === r4 ? void 0 : r4.collectionName) !== i3.collectionIdOrName || i3.client.authStore.clear(), e4;
        });
      }, RecordService.prototype.authResponse = function(e4) {
        var t3 = this.decode((null == e4 ? void 0 : e4.record) || {});
        return this.client.authStore.save(null == e4 ? void 0 : e4.token, t3), Object.assign({}, e4, { token: (null == e4 ? void 0 : e4.token) || "", record: t3 });
      }, RecordService.prototype.listAuthMethods = function(e4) {
        return void 0 === e4 && (e4 = {}), this.client.send(this.baseCollectionPath + "/auth-methods", { method: "GET", params: e4 }).then(function(e5) {
          return Object.assign({}, e5, { usernamePassword: !!(null == e5 ? void 0 : e5.usernamePassword), emailPassword: !!(null == e5 ? void 0 : e5.emailPassword), authProviders: Array.isArray(null == e5 ? void 0 : e5.authProviders) ? null == e5 ? void 0 : e5.authProviders : [] });
        });
      }, RecordService.prototype.authWithPassword = function(e4, t3, n4, i3) {
        var o3 = this;
        return void 0 === n4 && (n4 = {}), void 0 === i3 && (i3 = {}), n4 = Object.assign({ identity: e4, password: t3 }, n4), this.client.send(this.baseCollectionPath + "/auth-with-password", { method: "POST", params: i3, body: n4 }).then(function(e5) {
          return o3.authResponse(e5);
        });
      }, RecordService.prototype.authWithOAuth2 = function(e4, t3, n4, i3, o3, r4, s3) {
        var a3 = this;
        return void 0 === o3 && (o3 = {}), void 0 === r4 && (r4 = {}), void 0 === s3 && (s3 = {}), r4 = Object.assign({ provider: e4, code: t3, codeVerifier: n4, redirectUrl: i3, createData: o3 }, r4), this.client.send(this.baseCollectionPath + "/auth-with-oauth2", { method: "POST", params: s3, body: r4 }).then(function(e5) {
          return a3.authResponse(e5);
        });
      }, RecordService.prototype.authRefresh = function(e4, t3) {
        var n4 = this;
        return void 0 === e4 && (e4 = {}), void 0 === t3 && (t3 = {}), this.client.send(this.baseCollectionPath + "/auth-refresh", { method: "POST", params: t3, body: e4 }).then(function(e5) {
          return n4.authResponse(e5);
        });
      }, RecordService.prototype.requestPasswordReset = function(e4, t3, n4) {
        return void 0 === t3 && (t3 = {}), void 0 === n4 && (n4 = {}), t3 = Object.assign({ email: e4 }, t3), this.client.send(this.baseCollectionPath + "/request-password-reset", { method: "POST", params: n4, body: t3 }).then(function() {
          return true;
        });
      }, RecordService.prototype.confirmPasswordReset = function(e4, t3, n4, i3, o3) {
        return void 0 === i3 && (i3 = {}), void 0 === o3 && (o3 = {}), i3 = Object.assign({ token: e4, password: t3, passwordConfirm: n4 }, i3), this.client.send(this.baseCollectionPath + "/confirm-password-reset", { method: "POST", params: o3, body: i3 }).then(function() {
          return true;
        });
      }, RecordService.prototype.requestVerification = function(e4, t3, n4) {
        return void 0 === t3 && (t3 = {}), void 0 === n4 && (n4 = {}), t3 = Object.assign({ email: e4 }, t3), this.client.send(this.baseCollectionPath + "/request-verification", { method: "POST", params: n4, body: t3 }).then(function() {
          return true;
        });
      }, RecordService.prototype.confirmVerification = function(e4, t3, n4) {
        return void 0 === t3 && (t3 = {}), void 0 === n4 && (n4 = {}), t3 = Object.assign({ token: e4 }, t3), this.client.send(this.baseCollectionPath + "/confirm-verification", { method: "POST", params: n4, body: t3 }).then(function() {
          return true;
        });
      }, RecordService.prototype.requestEmailChange = function(e4, t3, n4) {
        return void 0 === t3 && (t3 = {}), void 0 === n4 && (n4 = {}), t3 = Object.assign({ newEmail: e4 }, t3), this.client.send(this.baseCollectionPath + "/request-email-change", { method: "POST", params: n4, body: t3 }).then(function() {
          return true;
        });
      }, RecordService.prototype.confirmEmailChange = function(e4, t3, n4, i3) {
        return void 0 === n4 && (n4 = {}), void 0 === i3 && (i3 = {}), n4 = Object.assign({ token: e4, password: t3 }, n4), this.client.send(this.baseCollectionPath + "/confirm-email-change", { method: "POST", params: i3, body: n4 }).then(function() {
          return true;
        });
      }, RecordService.prototype.listExternalAuths = function(e4, t3) {
        return void 0 === t3 && (t3 = {}), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e4) + "/external-auths", { method: "GET", params: t3 }).then(function(e5) {
          var t4 = [];
          if (Array.isArray(e5))
            for (var n4 = 0, i3 = e5; n4 < i3.length; n4++) {
              var o3 = i3[n4];
              t4.push(new p2(o3));
            }
          return t4;
        });
      }, RecordService.prototype.unlinkExternalAuth = function(e4, t3, n4) {
        return void 0 === n4 && (n4 = {}), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e4) + "/external-auths/" + encodeURIComponent(t3), { method: "DELETE", params: n4 }).then(function() {
          return true;
        });
      }, RecordService;
    }(d);
    f3 = function() {
      function SchemaField(e3) {
        void 0 === e3 && (e3 = {}), this.load(e3 || {});
      }
      return SchemaField.prototype.load = function(e3) {
        this.id = void 0 !== e3.id ? e3.id : "", this.name = void 0 !== e3.name ? e3.name : "", this.type = void 0 !== e3.type ? e3.type : "text", this.system = !!e3.system, this.required = !!e3.required, this.unique = !!e3.unique, this.options = "object" == typeof e3.options && null !== e3.options ? e3.options : {};
      }, SchemaField;
    }();
    m2 = function(e3) {
      function Collection() {
        return null !== e3 && e3.apply(this, arguments) || this;
      }
      return __extends(Collection, e3), Collection.prototype.load = function(t3) {
        e3.prototype.load.call(this, t3), this.system = !!t3.system, this.name = "string" == typeof t3.name ? t3.name : "", this.type = "string" == typeof t3.type ? t3.type : "base", this.options = void 0 !== t3.options ? t3.options : {}, this.listRule = "string" == typeof t3.listRule ? t3.listRule : null, this.viewRule = "string" == typeof t3.viewRule ? t3.viewRule : null, this.createRule = "string" == typeof t3.createRule ? t3.createRule : null, this.updateRule = "string" == typeof t3.updateRule ? t3.updateRule : null, this.deleteRule = "string" == typeof t3.deleteRule ? t3.deleteRule : null, t3.schema = Array.isArray(t3.schema) ? t3.schema : [], this.schema = [];
        for (var n4 = 0, i3 = t3.schema; n4 < i3.length; n4++) {
          var o3 = i3[n4];
          this.schema.push(new f3(o3));
        }
      }, Object.defineProperty(Collection.prototype, "isBase", { get: function() {
        return "base" === this.type;
      }, enumerable: false, configurable: true }), Object.defineProperty(Collection.prototype, "isAuth", { get: function() {
        return "auth" === this.type;
      }, enumerable: false, configurable: true }), Object.defineProperty(Collection.prototype, "isView", { get: function() {
        return "view" === this.type;
      }, enumerable: false, configurable: true }), Collection;
    }(i2);
    y3 = function(e3) {
      function CollectionService() {
        return null !== e3 && e3.apply(this, arguments) || this;
      }
      return __extends(CollectionService, e3), CollectionService.prototype.decode = function(e4) {
        return new m2(e4);
      }, Object.defineProperty(CollectionService.prototype, "baseCrudPath", { get: function() {
        return "/api/collections";
      }, enumerable: false, configurable: true }), CollectionService.prototype.import = function(e4, t3, n4) {
        return void 0 === t3 && (t3 = false), void 0 === n4 && (n4 = {}), __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(i3) {
            return [2, this.client.send(this.baseCrudPath + "/import", { method: "PUT", params: n4, body: { collections: e4, deleteMissing: t3 } }).then(function() {
              return true;
            })];
          });
        });
      }, CollectionService;
    }(d);
    b3 = function(e3) {
      function LogRequest() {
        return null !== e3 && e3.apply(this, arguments) || this;
      }
      return __extends(LogRequest, e3), LogRequest.prototype.load = function(t3) {
        e3.prototype.load.call(this, t3), t3.remoteIp = t3.remoteIp || t3.ip, this.url = "string" == typeof t3.url ? t3.url : "", this.method = "string" == typeof t3.method ? t3.method : "GET", this.status = "number" == typeof t3.status ? t3.status : 200, this.auth = "string" == typeof t3.auth ? t3.auth : "guest", this.remoteIp = "string" == typeof t3.remoteIp ? t3.remoteIp : "", this.userIp = "string" == typeof t3.userIp ? t3.userIp : "", this.referer = "string" == typeof t3.referer ? t3.referer : "", this.userAgent = "string" == typeof t3.userAgent ? t3.userAgent : "", this.meta = "object" == typeof t3.meta && null !== t3.meta ? t3.meta : {};
      }, LogRequest;
    }(i2);
    g4 = function(e3) {
      function LogService() {
        return null !== e3 && e3.apply(this, arguments) || this;
      }
      return __extends(LogService, e3), LogService.prototype.getRequestsList = function(e4, t3, n4) {
        return void 0 === e4 && (e4 = 1), void 0 === t3 && (t3 = 30), void 0 === n4 && (n4 = {}), n4 = Object.assign({ page: e4, perPage: t3 }, n4), this.client.send("/api/logs/requests", { method: "GET", params: n4 }).then(function(e5) {
          var t4 = [];
          if (null == e5 ? void 0 : e5.items) {
            e5.items = (null == e5 ? void 0 : e5.items) || [];
            for (var n5 = 0, i3 = e5.items; n5 < i3.length; n5++) {
              var o3 = i3[n5];
              t4.push(new b3(o3));
            }
          }
          return new l3((null == e5 ? void 0 : e5.page) || 1, (null == e5 ? void 0 : e5.perPage) || 0, (null == e5 ? void 0 : e5.totalItems) || 0, (null == e5 ? void 0 : e5.totalPages) || 0, t4);
        });
      }, LogService.prototype.getRequest = function(e4, t3) {
        return void 0 === t3 && (t3 = {}), this.client.send("/api/logs/requests/" + encodeURIComponent(e4), { method: "GET", params: t3 }).then(function(e5) {
          return new b3(e5);
        });
      }, LogService.prototype.getRequestsStats = function(e4) {
        return void 0 === e4 && (e4 = {}), this.client.send("/api/logs/requests/stats", { method: "GET", params: e4 }).then(function(e5) {
          return e5;
        });
      }, LogService;
    }(c2);
    S = function(e3) {
      function RealtimeService() {
        var t3 = null !== e3 && e3.apply(this, arguments) || this;
        return t3.clientId = "", t3.eventSource = null, t3.subscriptions = {}, t3.lastSentTopics = [], t3.maxConnectTimeout = 15e3, t3.reconnectAttempts = 0, t3.maxReconnectAttempts = 1 / 0, t3.predefinedReconnectIntervals = [200, 300, 500, 1e3, 1200, 1500, 2e3], t3.pendingConnects = [], t3;
      }
      return __extends(RealtimeService, e3), Object.defineProperty(RealtimeService.prototype, "isConnected", { get: function() {
        return !!this.eventSource && !!this.clientId && !this.pendingConnects.length;
      }, enumerable: false, configurable: true }), RealtimeService.prototype.subscribe = function(e4, t3) {
        var n4;
        return __awaiter(this, void 0, void 0, function() {
          var i3, o3 = this;
          return __generator(this, function(r4) {
            switch (r4.label) {
              case 0:
                if (!e4)
                  throw new Error("topic must be set.");
                return i3 = function(e5) {
                  var n5, i4 = e5;
                  try {
                    n5 = JSON.parse(null == i4 ? void 0 : i4.data);
                  } catch (e6) {
                  }
                  t3(n5 || {});
                }, this.subscriptions[e4] || (this.subscriptions[e4] = []), this.subscriptions[e4].push(i3), this.isConnected ? [3, 2] : [4, this.connect()];
              case 1:
                return r4.sent(), [3, 5];
              case 2:
                return 1 !== this.subscriptions[e4].length ? [3, 4] : [4, this.submitSubscriptions()];
              case 3:
                return r4.sent(), [3, 5];
              case 4:
                null === (n4 = this.eventSource) || void 0 === n4 || n4.addEventListener(e4, i3), r4.label = 5;
              case 5:
                return [2, function() {
                  return __awaiter(o3, void 0, void 0, function() {
                    return __generator(this, function(t4) {
                      return [2, this.unsubscribeByTopicAndListener(e4, i3)];
                    });
                  });
                }];
            }
          });
        });
      }, RealtimeService.prototype.unsubscribe = function(e4) {
        var t3;
        return __awaiter(this, void 0, void 0, function() {
          var n4, i3, o3;
          return __generator(this, function(r4) {
            switch (r4.label) {
              case 0:
                if (!this.hasSubscriptionListeners(e4))
                  return [2];
                if (e4) {
                  for (n4 = 0, i3 = this.subscriptions[e4]; n4 < i3.length; n4++)
                    o3 = i3[n4], null === (t3 = this.eventSource) || void 0 === t3 || t3.removeEventListener(e4, o3);
                  delete this.subscriptions[e4];
                } else
                  this.subscriptions = {};
                return this.hasSubscriptionListeners() ? [3, 1] : (this.disconnect(), [3, 3]);
              case 1:
                return this.hasSubscriptionListeners(e4) ? [3, 3] : [4, this.submitSubscriptions()];
              case 2:
                r4.sent(), r4.label = 3;
              case 3:
                return [2];
            }
          });
        });
      }, RealtimeService.prototype.unsubscribeByPrefix = function(e4) {
        var t3;
        return __awaiter(this, void 0, void 0, function() {
          var n4, i3, o3, r4, s3;
          return __generator(this, function(a3) {
            switch (a3.label) {
              case 0:
                for (i3 in n4 = false, this.subscriptions)
                  if (i3.startsWith(e4)) {
                    for (n4 = true, o3 = 0, r4 = this.subscriptions[i3]; o3 < r4.length; o3++)
                      s3 = r4[o3], null === (t3 = this.eventSource) || void 0 === t3 || t3.removeEventListener(i3, s3);
                    delete this.subscriptions[i3];
                  }
                return n4 ? this.hasSubscriptionListeners() ? [4, this.submitSubscriptions()] : [3, 2] : [2];
              case 1:
                return a3.sent(), [3, 3];
              case 2:
                this.disconnect(), a3.label = 3;
              case 3:
                return [2];
            }
          });
        });
      }, RealtimeService.prototype.unsubscribeByTopicAndListener = function(e4, t3) {
        var n4;
        return __awaiter(this, void 0, void 0, function() {
          var i3, o3;
          return __generator(this, function(r4) {
            switch (r4.label) {
              case 0:
                if (!Array.isArray(this.subscriptions[e4]) || !this.subscriptions[e4].length)
                  return [2];
                for (i3 = false, o3 = this.subscriptions[e4].length - 1; o3 >= 0; o3--)
                  this.subscriptions[e4][o3] === t3 && (i3 = true, delete this.subscriptions[e4][o3], this.subscriptions[e4].splice(o3, 1), null === (n4 = this.eventSource) || void 0 === n4 || n4.removeEventListener(e4, t3));
                return i3 ? (this.subscriptions[e4].length || delete this.subscriptions[e4], this.hasSubscriptionListeners() ? [3, 1] : (this.disconnect(), [3, 3])) : [2];
              case 1:
                return this.hasSubscriptionListeners(e4) ? [3, 3] : [4, this.submitSubscriptions()];
              case 2:
                r4.sent(), r4.label = 3;
              case 3:
                return [2];
            }
          });
        });
      }, RealtimeService.prototype.hasSubscriptionListeners = function(e4) {
        var t3, n4;
        if (this.subscriptions = this.subscriptions || {}, e4)
          return !!(null === (t3 = this.subscriptions[e4]) || void 0 === t3 ? void 0 : t3.length);
        for (var i3 in this.subscriptions)
          if (null === (n4 = this.subscriptions[i3]) || void 0 === n4 ? void 0 : n4.length)
            return true;
        return false;
      }, RealtimeService.prototype.submitSubscriptions = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(e4) {
            return this.clientId ? (this.addAllSubscriptionListeners(), this.lastSentTopics = this.getNonEmptySubscriptionTopics(), [2, this.client.send("/api/realtime", { method: "POST", body: { clientId: this.clientId, subscriptions: this.lastSentTopics }, params: { $cancelKey: "realtime_" + this.clientId } }).catch(function(e5) {
              if (!(null == e5 ? void 0 : e5.isAbort))
                throw e5;
            })]) : [2];
          });
        });
      }, RealtimeService.prototype.getNonEmptySubscriptionTopics = function() {
        var e4 = [];
        for (var t3 in this.subscriptions)
          this.subscriptions[t3].length && e4.push(t3);
        return e4;
      }, RealtimeService.prototype.addAllSubscriptionListeners = function() {
        if (this.eventSource)
          for (var e4 in this.removeAllSubscriptionListeners(), this.subscriptions)
            for (var t3 = 0, n4 = this.subscriptions[e4]; t3 < n4.length; t3++) {
              var i3 = n4[t3];
              this.eventSource.addEventListener(e4, i3);
            }
      }, RealtimeService.prototype.removeAllSubscriptionListeners = function() {
        if (this.eventSource)
          for (var e4 in this.subscriptions)
            for (var t3 = 0, n4 = this.subscriptions[e4]; t3 < n4.length; t3++) {
              var i3 = n4[t3];
              this.eventSource.removeEventListener(e4, i3);
            }
      }, RealtimeService.prototype.connect = function() {
        return __awaiter(this, void 0, void 0, function() {
          var e4 = this;
          return __generator(this, function(t3) {
            return this.reconnectAttempts > 0 ? [2] : [2, new Promise(function(t4, n4) {
              e4.pendingConnects.push({ resolve: t4, reject: n4 }), e4.pendingConnects.length > 1 || e4.initConnect();
            })];
          });
        });
      }, RealtimeService.prototype.initConnect = function() {
        var e4 = this;
        this.disconnect(true), clearTimeout(this.connectTimeoutId), this.connectTimeoutId = setTimeout(function() {
          e4.connectErrorHandler(new Error("EventSource connect took too long."));
        }, this.maxConnectTimeout), this.eventSource = new EventSource(this.client.buildUrl("/api/realtime")), this.eventSource.onerror = function(t3) {
          e4.connectErrorHandler(new Error("Failed to establish realtime connection."));
        }, this.eventSource.addEventListener("PB_CONNECT", function(t3) {
          var n4 = t3;
          e4.clientId = null == n4 ? void 0 : n4.lastEventId, e4.submitSubscriptions().then(function() {
            return __awaiter(e4, void 0, void 0, function() {
              var e5;
              return __generator(this, function(t4) {
                switch (t4.label) {
                  case 0:
                    e5 = 3, t4.label = 1;
                  case 1:
                    return this.hasUnsentSubscriptions() && e5 > 0 ? (e5--, [4, this.submitSubscriptions()]) : [3, 3];
                  case 2:
                    return t4.sent(), [3, 1];
                  case 3:
                    return [2];
                }
              });
            });
          }).then(function() {
            for (var t4 = 0, n5 = e4.pendingConnects; t4 < n5.length; t4++) {
              n5[t4].resolve();
            }
            e4.pendingConnects = [], e4.reconnectAttempts = 0, clearTimeout(e4.reconnectTimeoutId), clearTimeout(e4.connectTimeoutId);
          }).catch(function(t4) {
            e4.clientId = "", e4.connectErrorHandler(t4);
          });
        });
      }, RealtimeService.prototype.hasUnsentSubscriptions = function() {
        var e4 = this.getNonEmptySubscriptionTopics();
        if (e4.length != this.lastSentTopics.length)
          return true;
        for (var t3 = 0, n4 = e4; t3 < n4.length; t3++) {
          var i3 = n4[t3];
          if (!this.lastSentTopics.includes(i3))
            return true;
        }
        return false;
      }, RealtimeService.prototype.connectErrorHandler = function(e4) {
        var n4 = this;
        if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), !this.clientId && !this.reconnectAttempts || this.reconnectAttempts > this.maxReconnectAttempts) {
          for (var i3 = 0, o3 = this.pendingConnects; i3 < o3.length; i3++) {
            o3[i3].reject(new t(e4));
          }
          this.disconnect();
        } else {
          this.disconnect(true);
          var r4 = this.predefinedReconnectIntervals[this.reconnectAttempts] || this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length - 1];
          this.reconnectAttempts++, this.reconnectTimeoutId = setTimeout(function() {
            n4.initConnect();
          }, r4);
        }
      }, RealtimeService.prototype.disconnect = function(e4) {
        var n4;
        if (void 0 === e4 && (e4 = false), clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), this.removeAllSubscriptionListeners(), null === (n4 = this.eventSource) || void 0 === n4 || n4.close(), this.eventSource = null, this.clientId = "", !e4) {
          this.reconnectAttempts = 0;
          for (var i3 = new t(new Error("Realtime disconnected.")), o3 = 0, r4 = this.pendingConnects; o3 < r4.length; o3++) {
            r4[o3].reject(i3);
          }
          this.pendingConnects = [];
        }
      }, RealtimeService;
    }(c2);
    w3 = function(e3) {
      function HealthService() {
        return null !== e3 && e3.apply(this, arguments) || this;
      }
      return __extends(HealthService, e3), HealthService.prototype.check = function(e4) {
        return void 0 === e4 && (e4 = {}), this.client.send("/api/health", { method: "GET", params: e4 });
      }, HealthService;
    }(c2);
    C2 = function() {
      function Client(e3, t3, n4) {
        void 0 === e3 && (e3 = "/"), void 0 === n4 && (n4 = "en-US"), this.cancelControllers = {}, this.recordServices = {}, this.enableAutoCancellation = true, this.baseUrl = e3, this.lang = n4, this.authStore = t3 || new a2(), this.admins = new h4(this), this.collections = new y3(this), this.logs = new g4(this), this.settings = new u(this), this.realtime = new S(this), this.health = new w3(this);
      }
      return Client.prototype.collection = function(e3) {
        return this.recordServices[e3] || (this.recordServices[e3] = new v2(this, e3)), this.recordServices[e3];
      }, Client.prototype.autoCancellation = function(e3) {
        return this.enableAutoCancellation = !!e3, this;
      }, Client.prototype.cancelRequest = function(e3) {
        return this.cancelControllers[e3] && (this.cancelControllers[e3].abort(), delete this.cancelControllers[e3]), this;
      }, Client.prototype.cancelAllRequests = function() {
        for (var e3 in this.cancelControllers)
          this.cancelControllers[e3].abort();
        return this.cancelControllers = {}, this;
      }, Client.prototype.send = function(e3, n4) {
        var i3, o3, r4, s3, a3, c4, u3, l5;
        return __awaiter(this, void 0, void 0, function() {
          var d4, h5, p4, v3, f4, m4 = this;
          return __generator(this, function(y4) {
            return (d4 = Object.assign({ method: "GET" }, n4)).body && "FormData" !== d4.body.constructor.name && ("string" != typeof d4.body && (d4.body = JSON.stringify(d4.body)), void 0 === (null === (i3 = null == d4 ? void 0 : d4.headers) || void 0 === i3 ? void 0 : i3["Content-Type"]) && (d4.headers = Object.assign({}, d4.headers, { "Content-Type": "application/json" }))), void 0 === (null === (o3 = null == d4 ? void 0 : d4.headers) || void 0 === o3 ? void 0 : o3["Accept-Language"]) && (d4.headers = Object.assign({}, d4.headers, { "Accept-Language": this.lang })), (null === (r4 = this.authStore) || void 0 === r4 ? void 0 : r4.token) && void 0 === (null === (s3 = null == d4 ? void 0 : d4.headers) || void 0 === s3 ? void 0 : s3.Authorization) && (d4.headers = Object.assign({}, d4.headers, { Authorization: this.authStore.token })), this.enableAutoCancellation && false !== (null === (a3 = d4.params) || void 0 === a3 ? void 0 : a3.$autoCancel) && (h5 = (null === (c4 = d4.params) || void 0 === c4 ? void 0 : c4.$cancelKey) || (d4.method || "GET") + e3, this.cancelRequest(h5), p4 = new AbortController(), this.cancelControllers[h5] = p4, d4.signal = p4.signal), null === (u3 = d4.params) || void 0 === u3 || delete u3.$autoCancel, null === (l5 = d4.params) || void 0 === l5 || delete l5.$cancelKey, v3 = this.buildUrl(e3), void 0 !== d4.params && ((f4 = this.serializeQueryParams(d4.params)) && (v3 += (v3.includes("?") ? "&" : "?") + f4), delete d4.params), this.beforeSend && (d4 = Object.assign({}, this.beforeSend(v3, d4))), [2, fetch(v3, d4).then(function(e4) {
              return __awaiter(m4, void 0, void 0, function() {
                var n5;
                return __generator(this, function(i4) {
                  switch (i4.label) {
                    case 0:
                      n5 = {}, i4.label = 1;
                    case 1:
                      return i4.trys.push([1, 3, , 4]), [4, e4.json()];
                    case 2:
                      return n5 = i4.sent(), [3, 4];
                    case 3:
                      return i4.sent(), [3, 4];
                    case 4:
                      if (this.afterSend && (n5 = this.afterSend(e4, n5)), e4.status >= 400)
                        throw new t({ url: e4.url, status: e4.status, data: n5 });
                      return [2, n5];
                  }
                });
              });
            }).catch(function(e4) {
              throw new t(e4);
            })];
          });
        });
      }, Client.prototype.getFileUrl = function(e3, t3, n4) {
        void 0 === n4 && (n4 = {});
        var i3 = [];
        i3.push("api"), i3.push("files"), i3.push(encodeURIComponent(e3.collectionId || e3.collectionName)), i3.push(encodeURIComponent(e3.id)), i3.push(encodeURIComponent(t3));
        var o3 = this.buildUrl(i3.join("/"));
        if (Object.keys(n4).length) {
          var r4 = new URLSearchParams(n4);
          o3 += (o3.includes("?") ? "&" : "?") + r4;
        }
        return o3;
      }, Client.prototype.buildUrl = function(e3) {
        var t3 = this.baseUrl + (this.baseUrl.endsWith("/") ? "" : "/");
        return e3 && (t3 += e3.startsWith("/") ? e3.substring(1) : e3), t3;
      }, Client.prototype.serializeQueryParams = function(e3) {
        var t3 = [];
        for (var n4 in e3)
          if (null !== e3[n4]) {
            var i3 = e3[n4], o3 = encodeURIComponent(n4);
            if (Array.isArray(i3))
              for (var r4 = 0, s3 = i3; r4 < s3.length; r4++) {
                var a3 = s3[r4];
                t3.push(o3 + "=" + encodeURIComponent(a3));
              }
            else
              i3 instanceof Date ? t3.push(o3 + "=" + encodeURIComponent(i3.toISOString())) : null !== typeof i3 && "object" == typeof i3 ? t3.push(o3 + "=" + encodeURIComponent(JSON.stringify(i3))) : t3.push(o3 + "=" + encodeURIComponent(i3));
          }
        return t3.join("&");
      }, Client;
    }();
  }
});

// .svelte-kit/output/server/chunks/Login.svelte_svelte_type_style_lang.js
var t2, s2;
var init_Login_svelte_svelte_type_style_lang = __esm({
  ".svelte-kit/output/server/chunks/Login.svelte_svelte_type_style_lang.js"() {
    init_pocketbase_es();
    init_index2();
    t2 = new C2("https://api.notusknot.com:443");
    s2 = p(t2.authStore.model);
    t2.authStore.onChange(() => {
      s2.set(t2.authStore.model);
    });
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => b4
});
var d2, b4;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_index3();
    init_Login_svelte_svelte_type_style_lang();
    init_chunks();
    d2 = { code: "header.svelte-1b8h9wl{background-color:transparent;z-index:999;position:absolute;right:0;padding:var(--padding)}", map: null };
    b4 = C((e3, l5, i3, t3) => {
      let s3, r4;
      return r4 = x(s2, (n4) => s3 = n4), e3.css.add(d2), r4(), `${e3.head += `<!-- HEAD_svelte-1au9jcm_START -->${e3.title = "<title>Mirror</title>", ""}<meta name="description" content="Todo and notes tailored to my needs"><!-- HEAD_svelte-1au9jcm_END -->`, ""}

<header class="svelte-1b8h9wl">

	${s3 ? "<button>Sign Out</button>" : ""}</header>

${t3.default ? t3.default({}) : ""}`;
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
  stylesheets: () => stylesheets,
  universal: () => layout_ts_exports,
  universal_id: () => universal_id
});
var index, component, file, universal_id, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_ts();
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/pages/_layout.svelte-967332df.js";
    universal_id = "src/routes/+layout.ts";
    imports = ["_app/immutable/components/pages/_layout.svelte-967332df.js", "_app/immutable/chunks/index-a817bc95.js", "_app/immutable/chunks/Login.svelte_svelte_type_style_lang-0c59298c.js", "_app/immutable/chunks/control-e7f5239e.js", "_app/immutable/modules/pages/_layout.ts-0f950203.js", "_app/immutable/chunks/_layout-1f85f1d3.js"];
    stylesheets = ["_app/immutable/assets/_layout-ba07fed8.css", "_app/immutable/assets/Login-418202be.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => _2
});
var u2, p3, _2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_index3();
    u2 = () => {
      const s3 = R("__svelte__");
      return { page: { subscribe: s3.page.subscribe }, navigating: { subscribe: s3.navigating.subscribe }, updated: s3.updated };
    };
    p3 = { subscribe(s3) {
      return u2().page.subscribe(s3);
    } };
    _2 = C((s3, a3, g5, i3) => {
      let e3, r4;
      return r4 = x(p3, (o3) => e3 = o3), r4(), `<h1>${w(e3.status)}</h1>
<p>${w(e3.error?.message)}</p>`;
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
    file2 = "_app/immutable/components/error.svelte-7f2245f3.js";
    imports2 = ["_app/immutable/components/error.svelte-7f2245f3.js", "_app/immutable/chunks/index-a817bc95.js", "_app/immutable/chunks/singletons-08c9d0d9.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// .svelte-kit/output/server/entries/endpoints/api/extract/_server.ts.js
var server_ts_exports = {};
__export(server_ts_exports, {
  POST: () => d3,
  config: () => m3
});
var n3, m3, d3;
var init_server_ts = __esm({
  ".svelte-kit/output/server/entries/endpoints/api/extract/_server.ts.js"() {
    init_chunks();
    n3 = "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";
    m3 = { runtime: "edge" };
    d3 = async ({ request: s3 }) => {
      try {
        const t3 = await s3.json();
        if (!t3)
          throw new Error("Request data missing");
        const { context: o3 } = t3;
        if (!o3)
          throw new Error("No context provided");
        const a3 = { model: "ada:ft-personal-2023-03-01-20-13-37", prompt: `${o3.trim()} 

###

`, temperature: 0.75, max_tokens: 256, stop: ["]}"], stream: true }, e3 = await fetch("https://api.openai.com/v1/completions", { headers: { Authorization: `Bearer ${n3}`, "Content-Type": "application/json" }, method: "POST", body: JSON.stringify(a3) });
        if (!e3.ok) {
          const r4 = await e3.json();
          throw console.error(r4), new Error("Failed to create completion", r4);
        }
        return new Response(e3.body, { headers: { "Content-Type": "text/event-stream" } });
      } catch (t3) {
        throw console.error(t3), l(500, "An error occurred");
      }
    };
  }
});

// .svelte-kit/output/server/index.js
init_chunks();

// node_modules/devalue/src/utils.js
var escaped = {
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
var DevalueError = class extends Error {
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
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function stringify_string(str) {
  let result = '"';
  for (let i3 = 0; i3 < str.length; i3 += 1) {
    const char = str.charAt(i3);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code <= 31) {
      result += `\\u${code.toString(16).toUpperCase().padStart(4, "0")}`;
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i3 + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i3];
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

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
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
          thing.forEach((value2, i3) => {
            keys.push(`[${i3}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key) ? stringify_primitive(key) : "..."})`
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
          for (const key in thing) {
            keys.push(`.${key}`);
            walk(thing[key]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a3, b5) => b5[1] - a3[1]).forEach((entry, i3) => {
    names.set(entry[0], get_name(i3));
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
            (v3, i3) => i3 in thing ? stringify2(v3) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key) => `${safe_key(key)}:${stringify2(thing[key])}`).join(",")}}`;
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
          thing.forEach((v3, i3) => {
            statements.push(`${name}[${i3}]=${stringify2(v3)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v3) => `add(${stringify2(v3)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k2, v3]) => `set(${stringify2(k2)}, ${stringify2(v3)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key) => {
            statements.push(
              `${name}${safe_prop(key)}=${stringify2(thing[key])}`
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
function escape_unsafe_char(c4) {
  return escaped[c4] || c4;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escape_unsafe_chars(JSON.stringify(key));
}
function safe_prop(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escape_unsafe_chars(JSON.stringify(key))}]`;
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

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key in reducers) {
    custom.push({ key, fn: reducers[key] });
  }
  const keys = [];
  let p4 = 0;
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
    const index4 = p4++;
    indexes.set(thing, index4);
    for (const { key, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index4] = `["${key}",${flatten(value2)}]`;
        return index4;
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
          for (let i3 = 0; i3 < thing.length; i3 += 1) {
            if (i3 > 0)
              str += ",";
            if (i3 in thing) {
              keys.push(`[${i3}]`);
              str += flatten(thing[i3]);
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
          for (const [key, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key) ? stringify_primitive2(key) : "..."})`
            );
            str += `,${flatten(key)},${flatten(value2)}`;
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
            for (const key in thing) {
              keys.push(`.${key}`);
              str += `,${stringify_string(key)},${flatten(thing[key])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key}`);
              str += `${stringify_string(key)}:${flatten(thing[key])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index4] = str;
    return index4;
  }
  const index3 = flatten(value);
  if (index3 < 0)
    return `${index3}`;
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

// .svelte-kit/output/server/index.js
init_index2();

// .svelte-kit/output/server/chunks/internal.js
init_index3();
var g3 = "";
var y2 = g3;
var k = "";
var w2 = {};
function U(n4) {
  w2 = n4;
}
function x2(n4) {
  k = n4;
}
var b2 = C((n4, t3, e3, v3) => {
  let { stores: s3 } = t3, { page: m4 } = t3, { constructors: o3 } = t3, { components: a3 = [] } = t3, { form: r4 } = t3, { data_0: c4 = null } = t3, { data_1: d4 = null } = t3;
  j("__svelte__", s3), s3.page.notify, t3.stores === void 0 && e3.stores && s3 !== void 0 && e3.stores(s3), t3.page === void 0 && e3.page && m4 !== void 0 && e3.page(m4), t3.constructors === void 0 && e3.constructors && o3 !== void 0 && e3.constructors(o3), t3.components === void 0 && e3.components && a3 !== void 0 && e3.components(a3), t3.form === void 0 && e3.form && r4 !== void 0 && e3.form(r4), t3.data_0 === void 0 && e3.data_0 && c4 !== void 0 && e3.data_0(c4), t3.data_1 === void 0 && e3.data_1 && d4 !== void 0 && e3.data_1(d4);
  let i3, u3;
  do
    i3 = true, s3.page.set(m4), u3 = `


${o3[1] ? `${v(o3[0] || T, "svelte:component").$$render(n4, { data: c4, this: a3[0] }, { this: (l5) => {
      a3[0] = l5, i3 = false;
    } }, { default: () => `${v(o3[1] || T, "svelte:component").$$render(n4, { data: d4, form: r4, this: a3[1] }, { this: (l5) => {
      a3[1] = l5, i3 = false;
    } }, {})}` })}` : `${v(o3[0] || T, "svelte:component").$$render(n4, { data: c4, form: r4, this: a3[0] }, { this: (l5) => {
      a3[0] = l5, i3 = false;
    } }, {})}`}

`;
  while (!i3);
  return u3;
});
x2("1677787231962");
var z = { csp: { mode: "auto", directives: { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, reportOnly: { "upgrade-insecure-requests": false, "block-all-mixed-content": false } }, csrf_check_origin: true, embedded: false, env_public_prefix: "PUBLIC_", hooks: null, root: b2, service_worker: true, templates: { app: ({ head: n4, body: t3, assets: e3, nonce: v3, env: s3 }) => `<!DOCTYPE html>
<html lang="en" data-theme="">
	<head>
		<script>
			if (sessionStorage.theme === "light")
				if (window.matchMedia("(prefers-color-scheme: dark)").matches)
					document.documentElement.classList.add("light");

			if (sessionStorage.theme === "dark")
				if (window.matchMedia("(prefers-color-scheme: light)").matches)
					document.documentElement.classList.add("dark");
		<\/script>

		<meta charset="utf-8" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta
			name="apple-mobile-web-app-status-bar-style"
			content="black-translucent"
		/>
		<link rel="manifest" href="` + e3 + `/manifest.json" />
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="` + e3 + `/apple-touch-icon.png"
		/>
		<link rel="icon" type="image/svg+xml" href="` + e3 + `/icon.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		` + n4 + `
	</head>
	<body>
		<div>` + t3 + `</div>
	</body>
</html>
`, error: ({ status: n4, message: t3 }) => `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>` + t3 + `</title>

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
			<span class="status">` + n4 + `</span>
			<div class="message">
				<h1>` + t3 + `</h1>
			</div>
		</div>
	</body>
</html>
` } };
function L() {
  return {};
}

// .svelte-kit/output/server/index.js
var import_cookie = __toESM(require_cookie(), 1);
var ue = __toESM(require_set_cookie(), 1);
function te(e3, t3) {
  const r4 = [];
  e3.split(",").forEach((o3, a3) => {
    const i3 = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(o3);
    if (i3) {
      const [, c4, p4, l5 = "1"] = i3;
      r4.push({ type: c4, subtype: p4, q: +l5, i: a3 });
    }
  }), r4.sort((o3, a3) => o3.q !== a3.q ? a3.q - o3.q : o3.subtype === "*" != (a3.subtype === "*") ? o3.subtype === "*" ? 1 : -1 : o3.type === "*" != (a3.type === "*") ? o3.type === "*" ? 1 : -1 : o3.i - a3.i);
  let n4, s3 = 1 / 0;
  for (const o3 of t3) {
    const [a3, i3] = o3.split("/"), c4 = r4.findIndex((p4) => (p4.type === a3 || p4.type === "*") && (p4.subtype === i3 || p4.subtype === "*"));
    c4 !== -1 && c4 < s3 && (n4 = o3, s3 = c4);
  }
  return n4;
}
function et(e3, ...t3) {
  const r4 = e3.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return t3.includes(r4);
}
function Re(e3) {
  return et(e3, "application/x-www-form-urlencoded", "multipart/form-data");
}
function tt(e3) {
  return e3 instanceof Error || e3 && e3.name && e3.message ? e3 : new Error(JSON.stringify(e3));
}
var ve = { id: "__error" };
function rt(e3, t3) {
  return f(`${t3} method not allowed`, { status: 405, headers: { allow: nt(e3).join(", ") } });
}
function nt(e3) {
  const t3 = [];
  for (const r4 in ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"])
    r4 in e3 && t3.push(r4);
  return (e3.GET || e3.HEAD) && t3.push("HEAD"), t3;
}
function re(e3, t3, r4) {
  return f(e3.templates.error({ status: t3, message: r4 }), { headers: { "content-type": "text/html; charset=utf-8" }, status: t3 });
}
async function de(e3, t3, r4) {
  r4 = r4 instanceof o ? r4 : tt(r4);
  const n4 = r4 instanceof o ? r4.status : 500, s3 = await H(e3, t3, r4), o3 = te(e3.request.headers.get("accept") || "text/html", ["application/json", "text/html"]);
  return e3.isDataRequest || o3 === "application/json" ? g(s3, { status: n4 }) : re(t3, n4, s3.message);
}
async function H(e3, t3, r4) {
  return r4 instanceof o ? r4.body : await t3.hooks.handleError({ error: r4, event: e3 }) ?? { message: e3.route.id != null ? "Internal Error" : "Not Found" };
}
function B(e3, t3) {
  return new Response(void 0, { status: e3, headers: { location: t3 } });
}
function Se(e3, t3) {
  return t3.path ? `Data returned from \`load\` while rendering ${e3.route.id} is not serializable: ${t3.message} (data${t3.path})` : t3.path === "" ? `Data returned from \`load\` while rendering ${e3.route.id} is not a plain object` : t3.message;
}
function Oe(e3) {
  if (!e3)
    return "null";
  if (e3.type === "error" || e3.type === "skip")
    return JSON.stringify(e3);
  const t3 = stringify(e3.data), r4 = [];
  return e3.uses.dependencies.size > 0 && r4.push(`"dependencies":${JSON.stringify(Array.from(e3.uses.dependencies))}`), e3.uses.params.size > 0 && r4.push(`"params":${JSON.stringify(Array.from(e3.uses.params))}`), e3.uses.parent && r4.push('"parent":1'), e3.uses.route && r4.push('"route":1'), e3.uses.url && r4.push('"url":1'), `{"type":"data","data":${t3},"uses":{${r4.join(",")}}${e3.slash ? `,"slash":${JSON.stringify(e3.slash)}` : ""}}`;
}
async function st(e3, t3, r4, n4) {
  const s3 = e3.request.method;
  let o3 = r4[s3];
  if (!o3 && s3 === "HEAD" && (o3 = r4.GET), !o3)
    return rt(r4, s3);
  const a3 = r4.prerender ?? n4.prerender_default;
  if (a3 && (r4.POST || r4.PATCH || r4.PUT || r4.DELETE))
    throw new Error("Cannot prerender endpoints that have mutative methods");
  if (n4.prerendering && !a3) {
    if (n4.initiator)
      throw new Error(`${e3.route.id} is not prerenderable`);
    return new Response(void 0, { status: 204 });
  }
  n4.initiator = t3;
  try {
    const i3 = await o3(e3);
    if (!(i3 instanceof Response))
      throw new Error(`Invalid response from route ${e3.url.pathname}: handler should return a Response object`);
    return n4.prerendering && i3.headers.set("x-sveltekit-prerender", String(a3)), i3;
  } catch (i3) {
    if (i3 instanceof c)
      return new Response(void 0, { status: i3.status, headers: { location: i3.location } });
    throw i3;
  }
}
function ot(e3) {
  const { method: t3, headers: r4 } = e3.request;
  if (t3 === "PUT" || t3 === "PATCH" || t3 === "DELETE" || t3 === "OPTIONS")
    return true;
  if (t3 === "POST" && r4.get("x-sveltekit-action") === "true")
    return false;
  const n4 = e3.request.headers.get("accept") ?? "*/*";
  return te(n4, ["*", "text/html"]) !== "text/html";
}
function fe(e3) {
  return e3.filter((t3) => t3 != null);
}
function ne(e3, t3) {
  return e3 === "/" || t3 === "ignore" ? e3 : t3 === "never" ? e3.endsWith("/") ? e3.slice(0, -1) : e3 : t3 === "always" && !e3.endsWith("/") ? e3 + "/" : e3;
}
function at(e3) {
  return e3.split("%25").map(decodeURI).join("%25");
}
function it(e3) {
  for (const t3 in e3)
    e3[t3] = decodeURIComponent(e3[t3]);
  return e3;
}
var ct = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function ut(e3, t3) {
  const r4 = new URL(e3);
  for (const n4 of ct) {
    let s3 = r4[n4];
    Object.defineProperty(r4, n4, { get() {
      return t3(), s3;
    }, enumerable: true, configurable: true });
  }
  return r4[Symbol.for("nodejs.util.inspect.custom")] = (n4, s3, o3) => o3(e3, s3), lt(r4), r4;
}
function lt(e3) {
  Object.defineProperty(e3, "hash", { get() {
    throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead");
  } });
}
function qe(e3) {
  for (const t3 of ["search", "searchParams"])
    Object.defineProperty(e3, t3, { get() {
      throw new Error(`Cannot access url.${t3} on a page with prerendering enabled`);
    } });
}
var se = "/__data.json";
function dt(e3) {
  return e3.endsWith(se);
}
function ft(e3) {
  return e3.replace(/\/$/, "") + se;
}
function pe(e3) {
  return e3.slice(0, -se.length);
}
function pt(e3) {
  return te(e3.request.headers.get("accept") ?? "*/*", ["application/json", "text/html"]) === "application/json" && e3.request.method === "POST";
}
async function ht(e3, t3, r4) {
  const n4 = r4?.actions;
  if (!n4) {
    const s3 = l(405, "POST method not allowed. No actions exist for this page");
    return L2({ type: "error", error: await H(e3, t3, s3) }, { status: s3.status, headers: { allow: "GET" } });
  }
  Ae(n4);
  try {
    const s3 = await Te(e3, n4);
    return s3 instanceof h ? L2({ type: "failure", status: s3.status, data: he(s3.data, e3.route.id) }) : L2({ type: "success", status: s3 ? 200 : 204, data: he(s3, e3.route.id) });
  } catch (s3) {
    const o3 = s3;
    return o3 instanceof c ? L2({ type: "redirect", status: o3.status, location: o3.location }) : L2({ type: "error", error: await H(e3, t3, Pe(o3)) }, { status: o3 instanceof o ? o3.status : 500 });
  }
}
function Pe(e3) {
  return e3 instanceof h ? new Error('Cannot "throw fail()". Use "return fail()"') : e3;
}
function L2(e3, t3) {
  return g(e3, t3);
}
function _t(e3) {
  return e3.request.method === "POST";
}
async function mt(e3, t3) {
  const r4 = t3?.actions;
  if (!r4)
    return e3.setHeaders({ allow: "GET" }), { type: "error", error: l(405, "POST method not allowed. No actions exist for this page") };
  Ae(r4);
  try {
    const n4 = await Te(e3, r4);
    return n4 instanceof h ? { type: "failure", status: n4.status, data: n4.data } : { type: "success", status: 200, data: n4 };
  } catch (n4) {
    const s3 = n4;
    return s3 instanceof c ? { type: "redirect", status: s3.status, location: s3.location } : { type: "error", error: Pe(s3) };
  }
}
function Ae(e3) {
  if (e3.default && Object.keys(e3).length > 1)
    throw new Error("When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions");
}
async function Te(e3, t3) {
  const r4 = new URL(e3.request.url);
  let n4 = "default";
  for (const o3 of r4.searchParams)
    if (o3[0].startsWith("/")) {
      if (n4 = o3[0].slice(1), n4 === "default")
        throw new Error('Cannot use reserved action name "default"');
      break;
    }
  const s3 = t3[n4];
  if (!s3)
    throw new Error(`No action with name '${n4}' found`);
  if (!Re(e3.request))
    throw new Error(`Actions expect form-encoded data (received ${e3.request.headers.get("content-type")}`);
  return s3(e3);
}
function yt(e3, t3) {
  return Ce(e3, uneval, t3);
}
function he(e3, t3) {
  return Ce(e3, stringify, t3);
}
function Ce(e3, t3, r4) {
  try {
    return t3(e3);
  } catch (n4) {
    const s3 = n4;
    if ("path" in s3) {
      let o3 = `Data returned from action inside ${r4} is not serializable: ${s3.message}`;
      throw s3.path !== "" && (o3 += ` (data.${s3.path})`), new Error(o3);
    }
    throw s3;
  }
}
async function ze(e3) {
  for (const t3 in e3)
    if (typeof e3[t3]?.then == "function")
      return Object.fromEntries(await Promise.all(Object.entries(e3).map(async ([r4, n4]) => [r4, await n4])));
  return e3;
}
async function oe({ event: e3, state: t3, node: r4, parent: n4 }) {
  if (!r4?.server)
    return null;
  const s3 = { dependencies: /* @__PURE__ */ new Set(), params: /* @__PURE__ */ new Set(), parent: false, route: false, url: false }, o3 = ut(e3.url, () => {
    s3.url = true;
  });
  t3.prerendering && qe(o3);
  const a3 = await r4.server.load?.call(null, { ...e3, fetch: (c4, p4) => {
    const l5 = new URL(c4 instanceof Request ? c4.url : c4, e3.url);
    return s3.dependencies.add(l5.href), e3.fetch(c4, p4);
  }, depends: (...c4) => {
    for (const p4 of c4) {
      const { href: l5 } = new URL(p4, e3.url);
      s3.dependencies.add(l5);
    }
  }, params: new Proxy(e3.params, { get: (c4, p4) => (s3.params.add(p4), c4[p4]) }), parent: async () => (s3.parent = true, n4()), route: { get id() {
    return s3.route = true, e3.route.id;
  } }, url: o3 });
  return { type: "data", data: a3 ? await ze(a3) : null, uses: s3, slash: r4.server.trailingSlash };
}
async function Ue({ event: e3, fetched: t3, node: r4, parent: n4, server_data_promise: s3, state: o3, resolve_opts: a3, csr: i3 }) {
  const c4 = await s3;
  if (!r4?.universal?.load)
    return c4?.data ?? null;
  const p4 = await r4.universal.load.call(null, { url: e3.url, params: e3.params, data: c4?.data ?? null, route: e3.route, fetch: gt(e3, o3, t3, i3, a3), setHeaders: e3.setHeaders, depends: () => {
  }, parent: n4 }), l5 = p4 ? await ze(p4) : null;
  return $t(l5, e3.route.id), l5;
}
function gt(e3, t3, r4, n4, s3) {
  return async (o3, a3) => {
    const i3 = o3 instanceof Request && o3.body ? o3.clone().body : null;
    let c4 = await e3.fetch(o3, a3);
    const p4 = new URL(o3 instanceof Request ? o3.url : o3, e3.url), l5 = p4.origin === e3.url.origin;
    let _3;
    if (l5)
      t3.prerendering && (_3 = { response: c4, body: null }, t3.prerendering.dependencies.set(p4.pathname, _3));
    else if ((o3 instanceof Request ? o3.mode : a3?.mode ?? "cors") === "no-cors")
      c4 = new Response("", { status: c4.status, statusText: c4.statusText, headers: c4.headers });
    else {
      const m4 = c4.headers.get("access-control-allow-origin");
      if (!m4 || m4 !== e3.url.origin && m4 !== "*")
        throw new Error(`CORS error: ${m4 ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`);
    }
    const b5 = new Proxy(c4, { get(u3, m4, g5) {
      async function f4() {
        const d4 = await u3.text();
        if (!d4 || typeof d4 == "string") {
          const w4 = Number(u3.status);
          if (isNaN(w4))
            throw new Error(`response.status is not a number. value: "${u3.status}" type: ${typeof u3.status}`);
          r4.push({ url: l5 ? p4.href.slice(e3.url.origin.length) : p4.href, method: e3.request.method, request_body: o3 instanceof Request && i3 ? await wt(i3) : a3?.body, request_headers: a3?.headers, response_body: d4, response: u3 });
        }
        return _3 && (_3.body = d4), d4;
      }
      return m4 === "arrayBuffer" ? async () => {
        const d4 = await u3.arrayBuffer();
        return _3 && (_3.body = new Uint8Array(d4)), d4;
      } : m4 === "text" ? f4 : m4 === "json" ? async () => JSON.parse(await f4()) : Reflect.get(u3, m4, u3);
    } });
    if (n4) {
      const u3 = c4.headers.get;
      c4.headers.get = (m4) => {
        const g5 = m4.toLowerCase(), f4 = u3.call(c4.headers, g5);
        if (f4 && !g5.startsWith("x-sveltekit-") && !s3.filterSerializedResponseHeaders(g5, f4))
          throw new Error(`Failed to get response header "${g5}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${e3.route.id})`);
        return f4;
      };
    }
    return b5;
  };
}
async function wt(e3) {
  let t3 = "";
  const r4 = e3.getReader(), n4 = new TextDecoder();
  for (; ; ) {
    const { done: s3, value: o3 } = await r4.read();
    if (s3)
      break;
    t3 += n4.decode(o3);
  }
  return t3;
}
function $t(e3, t3) {
  if (e3 != null && Object.getPrototypeOf(e3) !== Object.prototype)
    throw new Error(`a load function related to route '${t3}' returned ${typeof e3 != "object" ? `a ${typeof e3}` : e3 instanceof Response ? "a Response object" : Array.isArray(e3) ? "an array" : "a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`);
}
function X(...e3) {
  let t3 = 5381;
  for (const r4 of e3)
    if (typeof r4 == "string") {
      let n4 = r4.length;
      for (; n4; )
        t3 = t3 * 33 ^ r4.charCodeAt(--n4);
    } else if (ArrayBuffer.isView(r4)) {
      const n4 = new Uint8Array(r4.buffer, r4.byteOffset, r4.byteLength);
      let s3 = n4.length;
      for (; s3; )
        t3 = t3 * 33 ^ n4[--s3];
    } else
      throw new TypeError("value must be a string or TypedArray");
  return (t3 >>> 0).toString(36);
}
var Ne = { "&": "&amp;", '"': "&quot;" };
var bt = new RegExp(`[${Object.keys(Ne).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`, "g");
function He(e3) {
  return `"${e3.replace(bt, (r4) => r4.length === 2 ? r4 : Ne[r4] ?? `&#${r4.charCodeAt(0)};`)}"`;
}
var Ie = { "<": "\\u003C", "\u2028": "\\u2028", "\u2029": "\\u2029" };
var kt = new RegExp(`[${Object.keys(Ie).join("")}]`, "g");
function jt(e3, t3, r4 = false) {
  const n4 = {};
  let s3 = null, o3 = null, a3 = false;
  for (const [l5, _3] of e3.response.headers)
    t3(l5, _3) && (n4[l5] = _3), l5 === "cache-control" && (s3 = _3), l5 === "age" && (o3 = _3), l5 === "vary" && (a3 = true);
  const i3 = { status: e3.response.status, statusText: e3.response.statusText, headers: n4, body: e3.response_body }, c4 = JSON.stringify(i3).replace(kt, (l5) => Ie[l5]), p4 = ['type="application/json"', "data-sveltekit-fetched", `data-url=${He(e3.url)}`];
  if (e3.request_headers || e3.request_body) {
    const l5 = [];
    e3.request_headers && l5.push([...new Headers(e3.request_headers)].join(",")), e3.request_body && l5.push(e3.request_body), p4.push(`data-hash="${X(...l5)}"`);
  }
  if (!r4 && e3.method === "GET" && s3 && !a3) {
    const l5 = /s-maxage=(\d+)/g.exec(s3) ?? /max-age=(\d+)/g.exec(s3);
    if (l5) {
      const _3 = +l5[1] - +(o3 ?? "0");
      p4.push(`data-ttl="${_3}"`);
    }
  }
  return `<script ${p4.join(" ")}>${c4}<\/script>`;
}
var A = JSON.stringify;
var Et = new TextEncoder();
function _e(e3) {
  K[0] || xt();
  const t3 = We.slice(0), r4 = Rt(e3);
  for (let s3 = 0; s3 < r4.length; s3 += 16) {
    const o3 = r4.subarray(s3, s3 + 16);
    let a3, i3, c4, p4 = t3[0], l5 = t3[1], _3 = t3[2], b5 = t3[3], u3 = t3[4], m4 = t3[5], g5 = t3[6], f4 = t3[7];
    for (let d4 = 0; d4 < 64; d4++)
      d4 < 16 ? a3 = o3[d4] : (i3 = o3[d4 + 1 & 15], c4 = o3[d4 + 14 & 15], a3 = o3[d4 & 15] = (i3 >>> 7 ^ i3 >>> 18 ^ i3 >>> 3 ^ i3 << 25 ^ i3 << 14) + (c4 >>> 17 ^ c4 >>> 19 ^ c4 >>> 10 ^ c4 << 15 ^ c4 << 13) + o3[d4 & 15] + o3[d4 + 9 & 15] | 0), a3 = a3 + f4 + (u3 >>> 6 ^ u3 >>> 11 ^ u3 >>> 25 ^ u3 << 26 ^ u3 << 21 ^ u3 << 7) + (g5 ^ u3 & (m4 ^ g5)) + K[d4], f4 = g5, g5 = m4, m4 = u3, u3 = b5 + a3 | 0, b5 = _3, _3 = l5, l5 = p4, p4 = a3 + (l5 & _3 ^ b5 & (l5 ^ _3)) + (l5 >>> 2 ^ l5 >>> 13 ^ l5 >>> 22 ^ l5 << 30 ^ l5 << 19 ^ l5 << 10) | 0;
    t3[0] = t3[0] + p4 | 0, t3[1] = t3[1] + l5 | 0, t3[2] = t3[2] + _3 | 0, t3[3] = t3[3] + b5 | 0, t3[4] = t3[4] + u3 | 0, t3[5] = t3[5] + m4 | 0, t3[6] = t3[6] + g5 | 0, t3[7] = t3[7] + f4 | 0;
  }
  const n4 = new Uint8Array(t3.buffer);
  return De(n4), Le(n4);
}
var We = new Uint32Array(8);
var K = new Uint32Array(64);
function xt() {
  function e3(r4) {
    return (r4 - Math.floor(r4)) * 4294967296;
  }
  let t3 = 2;
  for (let r4 = 0; r4 < 64; t3++) {
    let n4 = true;
    for (let s3 = 2; s3 * s3 <= t3; s3++)
      if (t3 % s3 === 0) {
        n4 = false;
        break;
      }
    n4 && (r4 < 8 && (We[r4] = e3(t3 ** (1 / 2))), K[r4] = e3(t3 ** (1 / 3)), r4++);
  }
}
function De(e3) {
  for (let t3 = 0; t3 < e3.length; t3 += 4) {
    const r4 = e3[t3 + 0], n4 = e3[t3 + 1], s3 = e3[t3 + 2], o3 = e3[t3 + 3];
    e3[t3 + 0] = o3, e3[t3 + 1] = s3, e3[t3 + 2] = n4, e3[t3 + 3] = r4;
  }
}
function Rt(e3) {
  const t3 = Et.encode(e3), r4 = t3.length * 8, n4 = 512 * Math.ceil((r4 + 65) / 512), s3 = new Uint8Array(n4 / 8);
  s3.set(t3), s3[t3.length] = 128, De(s3);
  const o3 = new Uint32Array(s3.buffer);
  return o3[o3.length - 2] = Math.floor(r4 / 4294967296), o3[o3.length - 1] = r4, o3;
}
var T2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function Le(e3) {
  const t3 = e3.length;
  let r4 = "", n4;
  for (n4 = 2; n4 < t3; n4 += 3)
    r4 += T2[e3[n4 - 2] >> 2], r4 += T2[(e3[n4 - 2] & 3) << 4 | e3[n4 - 1] >> 4], r4 += T2[(e3[n4 - 1] & 15) << 2 | e3[n4] >> 6], r4 += T2[e3[n4] & 63];
  return n4 === t3 + 1 && (r4 += T2[e3[n4 - 2] >> 2], r4 += T2[(e3[n4 - 2] & 3) << 4], r4 += "=="), n4 === t3 && (r4 += T2[e3[n4 - 2] >> 2], r4 += T2[(e3[n4 - 2] & 3) << 4 | e3[n4 - 1] >> 4], r4 += T2[(e3[n4 - 1] & 15) << 2], r4 += "="), r4;
}
var me = new Uint8Array(16);
function vt() {
  return crypto.getRandomValues(me), Le(me);
}
var St = /* @__PURE__ */ new Set(["self", "unsafe-eval", "unsafe-hashes", "unsafe-inline", "none", "strict-dynamic", "report-sample", "wasm-unsafe-eval", "script"]);
var Ot = /^(nonce|sha\d\d\d)-/;
var _e2, _t2, _s, _o, _r, _n, _a;
var Je = class {
  constructor(t3, r4, n4) {
    __privateAdd(this, _e2, void 0);
    __privateAdd(this, _t2, void 0);
    __privateAdd(this, _s, void 0);
    __privateAdd(this, _o, void 0);
    __privateAdd(this, _r, void 0);
    __privateAdd(this, _n, void 0);
    __privateAdd(this, _a, void 0);
    __privateSet(this, _e2, t3), __privateSet(this, _o, r4);
    const s3 = __privateGet(this, _o);
    __privateSet(this, _r, []), __privateSet(this, _n, []);
    const o3 = s3["script-src"] || s3["default-src"], a3 = s3["style-src"] || s3["default-src"];
    __privateSet(this, _t2, !!o3 && o3.filter((i3) => i3 !== "unsafe-inline").length > 0), __privateSet(this, _s, !!a3 && a3.filter((i3) => i3 !== "unsafe-inline").length > 0), this.script_needs_nonce = __privateGet(this, _t2) && !__privateGet(this, _e2), this.style_needs_nonce = __privateGet(this, _s) && !__privateGet(this, _e2), __privateSet(this, _a, n4);
  }
  add_script(t3) {
    __privateGet(this, _t2) && (__privateGet(this, _e2) ? __privateGet(this, _r).push(`sha256-${_e(t3)}`) : __privateGet(this, _r).length === 0 && __privateGet(this, _r).push(`nonce-${__privateGet(this, _a)}`));
  }
  add_style(t3) {
    __privateGet(this, _s) && (__privateGet(this, _e2) ? __privateGet(this, _n).push(`sha256-${_e(t3)}`) : __privateGet(this, _n).length === 0 && __privateGet(this, _n).push(`nonce-${__privateGet(this, _a)}`));
  }
  get_header(t3 = false) {
    const r4 = [], n4 = { ...__privateGet(this, _o) };
    __privateGet(this, _n).length > 0 && (n4["style-src"] = [...n4["style-src"] || n4["default-src"] || [], ...__privateGet(this, _n)]), __privateGet(this, _r).length > 0 && (n4["script-src"] = [...n4["script-src"] || n4["default-src"] || [], ...__privateGet(this, _r)]);
    for (const s3 in n4) {
      if (t3 && (s3 === "frame-ancestors" || s3 === "report-uri" || s3 === "sandbox"))
        continue;
      const o3 = n4[s3];
      if (!o3)
        continue;
      const a3 = [s3];
      Array.isArray(o3) && o3.forEach((i3) => {
        St.has(i3) || Ot.test(i3) ? a3.push(`'${i3}'`) : a3.push(i3);
      }), r4.push(a3.join(" "));
    }
    return r4.join("; ");
  }
};
_e2 = new WeakMap();
_t2 = new WeakMap();
_s = new WeakMap();
_o = new WeakMap();
_r = new WeakMap();
_n = new WeakMap();
_a = new WeakMap();
var qt = class extends Je {
  get_meta() {
    return `<meta http-equiv="content-security-policy" content=${He(this.get_header(true))}>`;
  }
};
var Pt = class extends Je {
  constructor(t3, r4, n4) {
    if (super(t3, r4, n4), Object.values(r4).filter((s3) => !!s3).length > 0) {
      const s3 = r4["report-to"]?.length ?? 0 > 0, o3 = r4["report-uri"]?.length ?? 0 > 0;
      if (!s3 && !o3)
        throw Error("`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both");
    }
  }
};
var At = class {
  constructor({ mode: t3, directives: r4, reportOnly: n4 }, { prerender: s3 }) {
    __publicField(this, "nonce", vt());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const o3 = t3 === "hash" || t3 === "auto" && s3;
    this.csp_provider = new qt(o3, r4, this.nonce), this.report_only_provider = new Pt(o3, n4, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(t3) {
    this.csp_provider.add_script(t3), this.report_only_provider.add_script(t3);
  }
  add_style(t3) {
    this.csp_provider.add_style(t3), this.report_only_provider.add_style(t3);
  }
};
var Tt = { ...h3(false), check: () => false };
async function W({ branch: e3, fetched: t3, options: r4, manifest: n4, state: s3, page_config: o3, status: a3, error: i3 = null, event: c4, resolve_opts: p4, action_result: l5 }) {
  if (s3.prerendering) {
    if (r4.csp.mode === "nonce")
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    if (r4.app_template_contains_nonce)
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
  }
  const { entry: _3 } = n4._, b5 = new Set(_3.stylesheets), u3 = new Set(_3.imports), m4 = new Set(n4._.entry.fonts), g5 = /* @__PURE__ */ new Set(), f4 = /* @__PURE__ */ new Map();
  let d4;
  const w4 = l5?.type === "success" || l5?.type === "failure" ? l5.data ?? null : null;
  if (o3.ssr) {
    const y4 = { stores: { page: p(null), navigating: p(null), updated: Tt }, constructors: await Promise.all(e3.map(({ node: R2 }) => R2.component())), form: w4 };
    let x3 = {};
    for (let R2 = 0; R2 < e3.length; R2 += 1)
      x3 = { ...x3, ...e3[R2].data }, y4[`data_${R2}`] = x3;
    y4.page = { error: i3, params: c4.params, route: c4.route, status: a3, url: c4.url, data: x3, form: w4 }, d4 = r4.root.render(y4);
    for (const { node: R2 } of e3)
      R2.imports && R2.imports.forEach((S2) => u3.add(S2)), R2.stylesheets && R2.stylesheets.forEach((S2) => b5.add(S2)), R2.fonts && R2.fonts.forEach((S2) => m4.add(S2)), R2.inline_styles && Object.entries(await R2.inline_styles()).forEach(([S2, I]) => f4.set(S2, I));
  } else
    d4 = { head: "", html: "", css: { code: "", map: null } };
  let j2 = "", h5 = d4.html;
  const k2 = new At(r4.csp, { prerender: !!s3.prerendering }), E = X(h5);
  let $2;
  if (y2)
    $2 = y2;
  else if (s3.prerendering?.fallback)
    $2 = g3;
  else {
    const y4 = c4.url.pathname.slice(g3.length).split("/").slice(2);
    $2 = y4.length > 0 ? y4.map(() => "..").join("/") : ".";
  }
  const v3 = (y4) => y4.startsWith("/") ? g3 + y4 : `${$2}/${y4}`, O = { data: "", form: "null", error: "null" };
  try {
    O.data = `[${e3.map(({ server_data: y4 }) => {
      if (y4?.type === "data") {
        const x3 = uneval(y4.data), R2 = [];
        return y4.uses.dependencies.size > 0 && R2.push(`dependencies:${A(Array.from(y4.uses.dependencies))}`), y4.uses.params.size > 0 && R2.push(`params:${A(Array.from(y4.uses.params))}`), y4.uses.parent && R2.push("parent:1"), y4.uses.route && R2.push("route:1"), y4.uses.url && R2.push("url:1"), `{type:"data",data:${x3},uses:{${R2.join(",")}}${y4.slash ? `,slash:${A(y4.slash)}` : ""}}`;
      }
      return A(y4);
    }).join(",")}]`;
  } catch (y4) {
    const x3 = y4;
    throw new Error(Se(c4, x3));
  }
  if (w4 && (O.form = yt(w4, c4.route.id)), i3 && (O.error = uneval(i3)), f4.size > 0) {
    const y4 = Array.from(f4.values()).join(`
`), x3 = [];
    k2.style_needs_nonce && x3.push(` nonce="${k2.nonce}"`), k2.add_style(y4), j2 += `
	<style${x3.join("")}>${y4}</style>`;
  }
  for (const y4 of b5) {
    const x3 = v3(y4);
    if (p4.preload({ type: "css", path: x3 })) {
      const R2 = ['rel="stylesheet"'];
      if (f4.has(y4))
        R2.push("disabled", 'media="(max-width: 0)"');
      else {
        const S2 = ['rel="preload"', 'as="style"'];
        g5.add(`<${encodeURI(x3)}>; ${S2.join(";")}; nopush`);
      }
      j2 += `
		<link href="${x3}" ${R2.join(" ")}>`;
    }
  }
  for (const y4 of m4) {
    const x3 = v3(y4);
    if (p4.preload({ type: "font", path: x3 })) {
      const S2 = ['rel="preload"', 'as="font"', `type="font/${y4.slice(y4.lastIndexOf(".") + 1)}"`, `href="${x3}"`, "crossorigin"];
      j2 += `
		<link ${S2.join(" ")}>`;
    }
  }
  if (o3.csr) {
    const y4 = [`assets: ${A(y2)}`, `env: ${A(w2)}`, `target: document.querySelector('[data-sveltekit-hydrate="${E}"]').parentNode`, `version: ${A(k)}`];
    if (o3.ssr) {
      const S2 = [`node_ids: [${e3.map(({ node: I }) => I.index).join(", ")}]`, `data: ${O.data}`, `form: ${O.form}`, `error: ${O.error}`];
      a3 !== 200 && S2.push(`status: ${a3}`), r4.embedded && S2.push(`params: ${uneval(c4.params)}`, `route: ${A(c4.route)}`), y4.push(`hydrate: {
					${S2.join(`,
					`)}
				}`);
    }
    const x3 = `
			import { start } from ${A(v3(_3.file))};

			start({
				${y4.join(`,
				`)}
			});
		`;
    for (const S2 of u3) {
      const I = v3(S2);
      p4.preload({ type: "js", path: I }) && (g5.add(`<${encodeURI(I)}>; rel="modulepreload"; nopush`), s3.prerendering && (j2 += `
		<link rel="modulepreload" href="${I}">`));
    }
    const R2 = ['type="module"', `data-sveltekit-hydrate="${E}"`];
    k2.add_script(x3), k2.script_needs_nonce && R2.push(`nonce="${k2.nonce}"`), h5 += `
		<script ${R2.join(" ")}>${x3}<\/script>`;
  }
  if (o3.ssr && o3.csr && (h5 += `
	${t3.map((y4) => jt(y4, p4.filterSerializedResponseHeaders, !!s3.prerendering)).join(`
	`)}`), r4.service_worker) {
    const y4 = "", x3 = `
			if ('serviceWorker' in navigator) {
				addEventListener('load', function () {
					navigator.serviceWorker.register('${v3("service-worker.js")}'${y4});
				});
			}
		`;
    k2.add_script(x3), j2 += `
		<script${k2.script_needs_nonce ? ` nonce="${k2.nonce}"` : ""}>${x3}<\/script>`;
  }
  if (s3.prerendering) {
    const y4 = [], x3 = k2.csp_provider.get_meta();
    x3 && y4.push(x3), s3.prerendering.cache && y4.push(`<meta http-equiv="cache-control" content="${s3.prerendering.cache}">`), y4.length > 0 && (j2 = y4.join(`
`) + j2);
  }
  j2 += d4.head;
  const z2 = r4.templates.app({ head: j2, body: h5, assets: $2, nonce: k2.nonce, env: w2 }), J = await p4.transformPageChunk({ html: z2, done: true }) || "", U2 = new Headers({ "x-sveltekit-page": "true", "content-type": "text/html", etag: `"${X(J)}"` });
  if (!s3.prerendering) {
    const y4 = k2.csp_provider.get_header();
    y4 && U2.set("content-security-policy", y4);
    const x3 = k2.report_only_provider.get_header();
    x3 && U2.set("content-security-policy-report-only", x3), g5.size && U2.set("link", Array.from(g5).join(", "));
  }
  return f(J, { status: a3, headers: U2 });
}
function q(e3, t3) {
  return e3.reduce((r4, n4) => n4?.universal?.[t3] ?? n4?.server?.[t3] ?? r4, void 0);
}
async function Ge({ event: e3, options: t3, manifest: r4, state: n4, status: s3, error: o3, resolve_opts: a3 }) {
  const i3 = [];
  try {
    const c4 = [], p4 = await r4._.nodes[0](), l5 = q([p4], "ssr") ?? true, _3 = q([p4], "csr") ?? true;
    if (l5) {
      n4.initiator = ve;
      const b5 = oe({ event: e3, state: n4, node: p4, parent: async () => ({}) }), u3 = await b5, m4 = await Ue({ event: e3, fetched: i3, node: p4, parent: async () => ({}), resolve_opts: a3, server_data_promise: b5, state: n4, csr: _3 });
      c4.push({ node: p4, server_data: u3, data: m4 }, { node: await r4._.nodes[1](), data: null, server_data: null });
    }
    return await W({ options: t3, manifest: r4, state: n4, page_config: { ssr: l5, csr: q([p4], "csr") ?? true }, status: s3, error: await H(e3, t3, o3), branch: c4, fetched: i3, event: e3, resolve_opts: a3 });
  } catch (c4) {
    return c4 instanceof c ? B(c4.status, c4.location) : re(t3, c4 instanceof o ? c4.status : 500, (await H(e3, t3, c4)).message);
  }
}
async function Ct(e3, t3, r4, n4, s3, o3, a3) {
  if (o3.initiator === t3)
    return f(`Not found: ${e3.url.pathname}`, { status: 404 });
  if (o3.initiator = t3, pt(e3)) {
    const i3 = await s3._.nodes[r4.leaf]();
    return ht(e3, n4, i3?.server);
  }
  try {
    const i3 = await Promise.all([...r4.layouts.map((h5) => h5 == null ? h5 : s3._.nodes[h5]()), s3._.nodes[r4.leaf]()]), c4 = i3.at(-1);
    let p4 = 200, l5;
    if (_t(e3)) {
      if (l5 = await mt(e3, c4.server), l5?.type === "redirect")
        return B(l5.status, l5.location);
      if (l5?.type === "error") {
        const h5 = l5.error;
        p4 = h5 instanceof o ? h5.status : 500;
      }
      l5?.type === "failure" && (p4 = l5.status);
    }
    const _3 = i3.some((h5) => h5?.server), b5 = ft(e3.url.pathname), u3 = q(i3, "prerender");
    if (u3) {
      if (c4.server?.actions)
        throw new Error("Cannot prerender pages with actions");
    } else if (o3.prerendering)
      return u3 !== false && q(i3, "ssr") === false && !c4.server?.actions ? await W({ branch: [], fetched: [], page_config: { ssr: false, csr: q(i3, "csr") ?? true }, status: p4, error: null, event: e3, options: n4, manifest: s3, state: o3, resolve_opts: a3 }) : new Response(void 0, { status: 204 });
    o3.prerender_default = u3;
    const m4 = [];
    if (q(i3, "ssr") === false)
      return await W({ branch: [], fetched: m4, page_config: { ssr: false, csr: q(i3, "csr") ?? true }, status: p4, error: null, event: e3, options: n4, manifest: s3, state: o3, resolve_opts: a3 });
    let g5 = [], f4 = null;
    const d4 = i3.map((h5, k2) => {
      if (f4)
        throw f4;
      return Promise.resolve().then(async () => {
        try {
          if (h5 === c4 && l5?.type === "error")
            throw l5.error;
          return await oe({ event: e3, state: o3, node: h5, parent: async () => {
            const E = {};
            for (let $2 = 0; $2 < k2; $2 += 1) {
              const v3 = await d4[$2];
              v3 && Object.assign(E, await v3.data);
            }
            return E;
          } });
        } catch (E) {
          throw f4 = E, f4;
        }
      });
    }), w4 = q(i3, "csr") ?? true, j2 = i3.map((h5, k2) => {
      if (f4)
        throw f4;
      return Promise.resolve().then(async () => {
        try {
          return await Ue({ event: e3, fetched: m4, node: h5, parent: async () => {
            const E = {};
            for (let $2 = 0; $2 < k2; $2 += 1)
              Object.assign(E, await j2[$2]);
            return E;
          }, resolve_opts: a3, server_data_promise: d4[k2], state: o3, csr: w4 });
        } catch (E) {
          throw f4 = E, f4;
        }
      });
    });
    for (const h5 of d4)
      h5.catch(() => {
      });
    for (const h5 of j2)
      h5.catch(() => {
      });
    for (let h5 = 0; h5 < i3.length; h5 += 1) {
      const k2 = i3[h5];
      if (k2)
        try {
          const E = await d4[h5], $2 = await j2[h5];
          g5.push({ node: k2, server_data: E, data: $2 });
        } catch (E) {
          const $2 = E;
          if ($2 instanceof c) {
            if (o3.prerendering && _3) {
              const z2 = JSON.stringify({ type: "redirect", location: $2.location });
              o3.prerendering.dependencies.set(b5, { response: f(z2), body: z2 });
            }
            return B($2.status, $2.location);
          }
          const v3 = $2 instanceof o ? $2.status : 500, O = await H(e3, n4, $2);
          for (; h5--; )
            if (r4.errors[h5]) {
              const z2 = r4.errors[h5], J = await s3._.nodes[z2]();
              let U2 = h5;
              for (; !g5[U2]; )
                U2 -= 1;
              return await W({ event: e3, options: n4, manifest: s3, state: o3, resolve_opts: a3, page_config: { ssr: true, csr: true }, status: v3, error: O, branch: fe(g5.slice(0, U2 + 1)).concat({ node: J, data: null, server_data: null }), fetched: m4 });
            }
          return re(n4, v3, O.message);
        }
      else
        g5.push(null);
    }
    if (o3.prerendering && _3) {
      const h5 = `{"type":"data","nodes":[${g5.map((k2) => Oe(k2?.server_data)).join(",")}]}`;
      o3.prerendering.dependencies.set(b5, { response: f(h5), body: h5 });
    }
    return await W({ event: e3, options: n4, manifest: s3, state: o3, resolve_opts: a3, page_config: { csr: q(i3, "csr") ?? true, ssr: true }, status: p4, error: null, branch: fe(g5), action_result: l5, fetched: m4 });
  } catch (i3) {
    return await Ge({ event: e3, options: n4, manifest: s3, state: o3, status: 500, error: i3, resolve_opts: a3 });
  }
}
function zt(e3, t3, r4) {
  const n4 = {}, s3 = e3.slice(1);
  let o3 = 0;
  for (let a3 = 0; a3 < t3.length; a3 += 1) {
    const i3 = t3[a3], c4 = s3[a3 - o3];
    if (i3.chained && i3.rest && o3) {
      n4[i3.name] = s3.slice(a3 - o3, a3 + 1).filter((p4) => p4).join("/"), o3 = 0;
      continue;
    }
    if (c4 === void 0) {
      i3.rest && (n4[i3.name] = "");
      continue;
    }
    if (!i3.matcher || r4[i3.matcher](c4)) {
      n4[i3.name] = c4;
      continue;
    }
    if (i3.optional && i3.chained) {
      o3++;
      continue;
    }
    return;
  }
  if (!o3)
    return n4;
}
function Ut(e3) {
  let t3 = false, r4;
  return () => t3 ? r4 : (t3 = true, r4 = e3());
}
var ye = "x-sveltekit-invalidated";
async function Nt(e3, t3, r4, n4, s3, o3, a3) {
  if (!t3.page)
    return new Response(void 0, { status: 404 });
  s3.initiator = t3;
  try {
    const i3 = [...t3.page.layouts, t3.page.leaf], c4 = o3 ?? i3.map(() => true);
    let p4 = false;
    const l5 = new URL(e3.url);
    l5.pathname = ne(l5.pathname, a3);
    const _3 = { ...e3, url: l5 }, b5 = i3.map((f4, d4) => Ut(async () => {
      try {
        if (p4)
          return { type: "skip" };
        const w4 = f4 == null ? f4 : await n4._.nodes[f4]();
        return oe({ event: _3, state: s3, node: w4, parent: async () => {
          const j2 = {};
          for (let h5 = 0; h5 < d4; h5 += 1) {
            const k2 = await b5[h5]();
            k2 && Object.assign(j2, k2.data);
          }
          return j2;
        } });
      } catch (w4) {
        throw p4 = true, w4;
      }
    })), u3 = b5.map(async (f4, d4) => c4[d4] ? f4() : { type: "skip" });
    let m4 = u3.length;
    const g5 = await Promise.all(u3.map((f4, d4) => f4.catch(async (w4) => {
      if (w4 instanceof c)
        throw w4;
      return m4 = Math.min(m4, d4 + 1), { type: "error", error: await H(e3, r4, w4), status: w4 instanceof o ? w4.status : void 0 };
    })));
    try {
      const d4 = `{"type":"data","nodes":[${g5.slice(0, m4).map(Oe).join(",")}]}`;
      return M(d4);
    } catch (f4) {
      return M(JSON.stringify(Se(e3, f4)), 500);
    }
  } catch (i3) {
    const c4 = i3;
    return c4 instanceof c ? Q(c4) : M(JSON.stringify(await H(e3, r4, c4)));
  }
}
function M(e3, t3 = 200) {
  return f(e3, { status: t3, headers: { "content-type": "application/json", "cache-control": "private, no-store" } });
}
function Q(e3) {
  return M(JSON.stringify({ type: "redirect", location: e3.location }));
}
function Ht(e3, t3, r4) {
  const n4 = e3.headers.get("cookie") ?? "", s3 = (0, import_cookie.parse)(n4, { decode: (_3) => _3 }), a3 = ne(t3.pathname, r4).split("/").slice(0, -1).join("/") || "/", i3 = {}, c4 = { httpOnly: true, sameSite: "lax", secure: !(t3.hostname === "localhost" && t3.protocol === "http:") }, p4 = { get(_3, b5) {
    const u3 = i3[_3];
    if (u3 && ge(t3.hostname, u3.options.domain) && we(t3.pathname, u3.options.path))
      return u3.value;
    const m4 = b5?.decode || decodeURIComponent;
    return (0, import_cookie.parse)(n4, { decode: m4 })[_3];
  }, set(_3, b5, u3 = {}) {
    let m4 = u3.path ?? a3;
    i3[_3] = { name: _3, value: b5, options: { ...c4, ...u3, path: m4 } };
  }, delete(_3, b5 = {}) {
    p4.set(_3, "", { ...b5, maxAge: 0 });
  }, serialize(_3, b5, u3) {
    return (0, import_cookie.serialize)(_3, b5, { ...c4, ...u3 });
  } };
  function l5(_3, b5) {
    const u3 = { ...s3 };
    for (const m4 in i3) {
      const g5 = i3[m4];
      if (!ge(_3.hostname, g5.options.domain) || !we(_3.pathname, g5.options.path))
        continue;
      const f4 = g5.options.encode || encodeURIComponent;
      u3[g5.name] = f4(g5.value);
    }
    if (b5) {
      const m4 = (0, import_cookie.parse)(b5, { decode: (g5) => g5 });
      for (const g5 in m4)
        u3[g5] = m4[g5];
    }
    return Object.entries(u3).map(([m4, g5]) => `${m4}=${g5}`).join("; ");
  }
  return { cookies: p4, new_cookies: i3, get_cookie_header: l5 };
}
function ge(e3, t3) {
  if (!t3)
    return true;
  const r4 = t3[0] === "." ? t3.slice(1) : t3;
  return e3 === r4 ? true : e3.endsWith("." + r4);
}
function we(e3, t3) {
  if (!t3)
    return true;
  const r4 = t3.endsWith("/") ? t3.slice(0, -1) : t3;
  return e3 === r4 ? true : e3.startsWith(r4 + "/");
}
function $e(e3, t3) {
  for (const r4 of t3) {
    const { name: n4, value: s3, options: o3 } = r4;
    e3.append("set-cookie", (0, import_cookie.serialize)(n4, s3, o3));
  }
}
function It({ event: e3, options: t3, manifest: r4, state: n4, get_cookie_header: s3 }) {
  return async (o3, a3) => {
    const i3 = be(o3, a3, e3.url), c4 = a3?.body;
    let p4 = (o3 instanceof Request ? o3.mode : a3?.mode) ?? "cors", l5 = (o3 instanceof Request ? o3.credentials : a3?.credentials) ?? "same-origin";
    return await t3.hooks.handleFetch({ event: e3, request: i3, fetch: async (_3, b5) => {
      const u3 = be(_3, b5, e3.url), m4 = new URL(u3.url);
      if (u3.headers.has("origin") || u3.headers.set("origin", e3.url.origin), _3 !== i3 && (p4 = (_3 instanceof Request ? _3.mode : b5?.mode) ?? "cors", l5 = (_3 instanceof Request ? _3.credentials : b5?.credentials) ?? "same-origin"), (u3.method === "GET" || u3.method === "HEAD") && (p4 === "no-cors" && m4.origin !== e3.url.origin || m4.origin === e3.url.origin) && u3.headers.delete("origin"), m4.origin !== e3.url.origin) {
        if (`.${m4.hostname}`.endsWith(`.${e3.url.hostname}`) && l5 !== "omit") {
          const $2 = s3(m4, u3.headers.get("cookie"));
          $2 && u3.headers.set("cookie", $2);
        }
        return fetch(u3);
      }
      let g5;
      const f4 = y2 || g3, d4 = decodeURIComponent(m4.pathname), w4 = (d4.startsWith(f4) ? d4.slice(f4.length) : d4).slice(1), j2 = `${w4}/index.html`, h5 = r4.assets.has(w4), k2 = r4.assets.has(j2);
      if (h5 || k2) {
        const $2 = h5 ? w4 : j2;
        if (n4.read) {
          const v3 = h5 ? r4.mimeTypes[w4.slice(w4.lastIndexOf("."))] : "text/html";
          return new Response(n4.read($2), { headers: v3 ? { "content-type": v3 } : {} });
        }
        return await fetch(u3);
      }
      if (l5 !== "omit") {
        const $2 = s3(m4, u3.headers.get("cookie"));
        $2 && u3.headers.set("cookie", $2);
        const v3 = e3.request.headers.get("authorization");
        v3 && !u3.headers.has("authorization") && u3.headers.set("authorization", v3);
      }
      if (c4 && typeof c4 != "string" && !ArrayBuffer.isView(c4))
        throw new Error("Request body must be a string or TypedArray");
      u3.headers.has("accept") || u3.headers.set("accept", "*/*"), u3.headers.has("accept-language") || u3.headers.set("accept-language", e3.request.headers.get("accept-language")), g5 = await Ve(u3, t3, r4, n4);
      const E = g5.headers.get("set-cookie");
      if (E)
        for (const $2 of ue.splitCookiesString(E)) {
          const { name: v3, value: O, ...z2 } = ue.parseString($2);
          e3.cookies.set(v3, O, z2);
        }
      return g5;
    } });
  };
}
function be(e3, t3, r4) {
  return e3 instanceof Request ? e3 : new Request(typeof e3 == "string" ? new URL(e3, r4) : e3, t3);
}
function ae(e3) {
  const t3 = new Set(e3);
  function r4(n4, s3) {
    if (n4)
      for (const o3 in n4) {
        if (o3[0] === "_" || t3.has(o3))
          continue;
        const a3 = Wt(o3, s3?.slice(s3.lastIndexOf("."))) ?? `valid exports are ${e3.join(", ")}, or anything with a '_' prefix`;
        throw new Error(`Invalid export '${o3}'${s3 ? ` in ${s3}` : ""} (${a3})`);
      }
  }
  return r4;
}
function Wt(e3, t3 = ".js") {
  let r4 = [];
  if (Fe.includes(e3) && r4.push(`+page${t3}`), Me.includes(e3) && r4.push(`+page.server${t3}`), Be.includes(e3) && r4.push(`+server${t3}`), r4.length > 0)
    return `'${e3}' is a valid export in ${r4.join(" or ")}`;
}
var Fe = ["load", "prerender", "csr", "ssr", "trailingSlash", "config"];
var Me = ["load", "prerender", "csr", "ssr", "actions", "trailingSlash", "config"];
var Be = ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS", "prerender", "trailingSlash", "config"];
var Ft = ae(Fe);
var Mt = ae(Me);
var Bt = ae(Be);
var ke = ({ html: e3 }) => e3;
var je = () => false;
var Ee = ({ type: e3 }) => e3 === "js" || e3 === "css";
async function Ve(e3, t3, r4, n4) {
  let s3 = new URL(e3.url);
  if (t3.csrf_check_origin && e3.method === "POST" && e3.headers.get("origin") !== s3.origin && Re(e3)) {
    const d4 = l(403, `Cross-site ${e3.method} form submissions are forbidden`);
    return e3.headers.get("accept") === "application/json" ? g(d4.body, { status: d4.status }) : f(d4.body.message, { status: d4.status });
  }
  let o3;
  try {
    o3 = at(s3.pathname);
  } catch {
    return f("Malformed URI", { status: 400 });
  }
  let a3 = null, i3 = {};
  const c4 = dt(o3);
  let p4;
  if (c4 && (o3 = pe(o3) || "/", s3.pathname = pe(s3.pathname) || "/", p4 = s3.searchParams.get(ye)?.split("_").map(Boolean), s3.searchParams.delete(ye)), !n4.prerendering?.fallback) {
    const f4 = await r4._.matchers();
    for (const d4 of r4._.routes) {
      const w4 = d4.pattern.exec(o3);
      if (!w4)
        continue;
      const j2 = zt(w4, d4.params, f4);
      if (j2) {
        a3 = d4, i3 = it(j2);
        break;
      }
    }
  }
  let l5;
  const _3 = {};
  let b5 = {};
  const u3 = { cookies: null, fetch: null, getClientAddress: n4.getClientAddress || (() => {
    throw new Error("@sveltejs/adapter-vercel does not specify getClientAddress. Please raise an issue");
  }), locals: {}, params: i3, platform: n4.platform, request: e3, route: { id: a3?.id ?? null }, setHeaders: (f4) => {
    for (const d4 in f4) {
      const w4 = d4.toLowerCase(), j2 = f4[d4];
      if (w4 === "set-cookie")
        throw new Error("Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies");
      if (w4 in _3)
        throw new Error(`"${d4}" header is already set`);
      _3[w4] = j2, n4.prerendering && w4 === "cache-control" && (n4.prerendering.cache = j2);
    }
  }, url: s3, isDataRequest: c4 };
  let m4 = { transformPageChunk: ke, filterSerializedResponseHeaders: je, preload: Ee };
  try {
    if (a3 && !c4) {
      if (a3.page) {
        const k2 = await Promise.all([...a3.page.layouts.map((E) => E == null ? E : r4._.nodes[E]()), r4._.nodes[a3.page.leaf]()]);
        l5 = q(k2, "trailingSlash");
      } else
        a3.endpoint && (l5 = (await a3.endpoint()).trailingSlash);
      const h5 = ne(s3.pathname, l5 ?? "never");
      if (h5 !== s3.pathname && !n4.prerendering?.fallback)
        return new Response(void 0, { status: 301, headers: { "x-sveltekit-normalize": "1", location: (h5.startsWith("//") ? s3.origin + h5 : h5) + (s3.search === "?" ? "" : s3.search) } });
    }
    const { cookies: f4, new_cookies: d4, get_cookie_header: w4 } = Ht(e3, s3, l5 ?? "never");
    b5 = d4, u3.cookies = f4, u3.fetch = It({ event: u3, options: t3, manifest: r4, state: n4, get_cookie_header: w4 }), n4.prerendering && !n4.prerendering.fallback && qe(s3);
    const j2 = await t3.hooks.handle({ event: u3, resolve: (h5, k2) => g5(h5, k2).then((E) => {
      for (const $2 in _3) {
        const v3 = _3[$2];
        E.headers.set($2, v3);
      }
      return $e(E.headers, Object.values(b5)), n4.prerendering && h5.route.id !== null && E.headers.set("x-sveltekit-routeid", encodeURI(h5.route.id)), E;
    }) });
    if (j2.status === 200 && j2.headers.has("etag")) {
      let h5 = e3.headers.get("if-none-match");
      h5?.startsWith('W/"') && (h5 = h5.substring(2));
      const k2 = j2.headers.get("etag");
      if (h5 === k2) {
        const E = new Headers({ etag: k2 });
        for (const $2 of ["cache-control", "content-location", "date", "expires", "vary", "set-cookie"]) {
          const v3 = j2.headers.get($2);
          v3 && E.set($2, v3);
        }
        return new Response(void 0, { status: 304, headers: E });
      }
    }
    if (c4 && j2.status >= 300 && j2.status <= 308) {
      const h5 = j2.headers.get("location");
      if (h5)
        return Q(new c(j2.status, h5));
    }
    return j2;
  } catch (f4) {
    if (f4 instanceof c) {
      const d4 = c4 ? Q(f4) : B(f4.status, f4.location);
      return $e(d4.headers, Object.values(b5)), d4;
    }
    return await de(u3, t3, f4);
  }
  async function g5(f4, d4) {
    try {
      if (d4) {
        if ("ssr" in d4)
          throw new Error("ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197");
        m4 = { transformPageChunk: d4.transformPageChunk || ke, filterSerializedResponseHeaders: d4.filterSerializedResponseHeaders || je, preload: d4.preload || Ee };
      }
      if (n4.prerendering?.fallback)
        return await W({ event: f4, options: t3, manifest: r4, state: n4, page_config: { ssr: false, csr: true }, status: 200, error: null, branch: [], fetched: [], resolve_opts: m4 });
      if (a3) {
        let w4;
        if (c4)
          w4 = await Nt(f4, a3, t3, r4, n4, p4, l5 ?? "never");
        else if (a3.endpoint && (!a3.page || ot(f4)))
          w4 = await st(f4, a3, await a3.endpoint(), n4);
        else if (a3.page)
          w4 = await Ct(f4, a3, a3.page, t3, r4, n4, m4);
        else
          throw new Error("This should never happen");
        return w4;
      }
      return n4.initiator === ve ? f("Internal Server Error", { status: 500 }) : n4.initiator ? n4.prerendering ? f("not found", { status: 404 }) : await fetch(e3) : await Ge({ event: f4, options: t3, manifest: r4, state: n4, status: 404, error: new Error(`Not found: ${f4.url.pathname}`), resolve_opts: m4 });
    } catch (w4) {
      return await de(f4, t3, w4);
    } finally {
      f4.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      }, f4.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
var _e3, _t3;
var Vt = class {
  constructor(t3) {
    __privateAdd(this, _e3, void 0);
    __privateAdd(this, _t3, void 0);
    __privateSet(this, _e3, z), __privateSet(this, _t3, t3);
  }
  async init({ env: t3 }) {
    const r4 = Object.entries(t3), n4 = __privateGet(this, _e3).env_public_prefix;
    Object.fromEntries(r4.filter(([o3]) => !o3.startsWith(n4)));
    const s3 = Object.fromEntries(r4.filter(([o3]) => o3.startsWith(n4)));
    if (U(s3), !__privateGet(this, _e3).hooks) {
      const o3 = await L();
      __privateGet(this, _e3).hooks = { handle: o3.handle || (({ event: a3, resolve: i3 }) => i3(a3)), handleError: o3.handleError || (({ error: a3 }) => console.error(a3?.stack)), handleFetch: o3.handleFetch || (({ request: a3, fetch: i3 }) => i3(a3)) };
    }
  }
  async respond(t3, r4) {
    if (!(t3 instanceof Request))
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    return Ve(t3, __privateGet(this, _e3), __privateGet(this, _t3), r4);
  }
};
_e3 = new WeakMap();
_t3 = new WeakMap();

// .svelte-kit/vercel-tmp/fn-1/manifest.js
var manifest = {
  appDir: "_app",
  appPath: "_app",
  assets: /* @__PURE__ */ new Set(["apple-touch-icon.png", "favicon.ico", "favicon.png", "icon.svg", "icon192.png", "icon512.png", "manifest.json", "moon.svg", "robots.txt", "sun.svg", "service-worker.js"]),
  mimeTypes: { ".png": "image/png", ".ico": "image/vnd.microsoft.icon", ".svg": "image/svg+xml", ".json": "application/json", ".txt": "text/plain" },
  _: {
    entry: { "file": "_app/immutable/start-39f42ba7.js", "imports": ["_app/immutable/start-39f42ba7.js", "_app/immutable/chunks/index-a817bc95.js", "_app/immutable/chunks/singletons-08c9d0d9.js", "_app/immutable/chunks/control-e7f5239e.js"], "stylesheets": [], "fonts": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2))
    ],
    routes: [
      {
        id: "/api/extract",
        pattern: /^\/api\/extract\/?$/,
        params: [],
        page: null,
        endpoint: () => Promise.resolve().then(() => (init_server_ts(), server_ts_exports))
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};

// .svelte-kit/vercel-tmp/fn-1/edge.js
var server = new Vt(manifest);
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
