const o = [
  "/_app/immutable/chunks/0-c5a89571.js",
  "/_app/immutable/chunks/1-996849bb.js",
  "/_app/immutable/chunks/2-4bcc51ad.js",
  "/_app/immutable/assets/Login-418202be.css",
  "/_app/immutable/chunks/Login.svelte_svelte_type_style_lang-0c59298c.js",
  "/_app/immutable/chunks/_layout-1f85f1d3.js",
  "/_app/immutable/chunks/control-e7f5239e.js",
  "/_app/immutable/chunks/index-a817bc95.js",
  "/_app/immutable/chunks/singletons-08c9d0d9.js",
  "/_app/immutable/start-39f42ba7.js",
  "/_app/immutable/components/error.svelte-7f2245f3.js",
  "/_app/immutable/assets/_layout-ba07fed8.css",
  "/_app/immutable/components/pages/_layout.svelte-967332df.js",
  "/_app/immutable/modules/pages/_layout.ts-0f950203.js",
  "/_app/immutable/assets/_page-32daf926.css",
  "/_app/immutable/components/pages/_page.svelte-0a5c527d.js"
], p = [
  "/apple-touch-icon.png",
  "/favicon.ico",
  "/favicon.png",
  "/icon.svg",
  "/icon192.png",
  "/icon512.png",
  "/manifest.json",
  "/moon.svg",
  "/robots.txt",
  "/sun.svg"
], l = "1677787231962", n = `cache-${l}`, i = [
  ...o,
  // the app itself
  ...p
  // everything in `static`
];
self.addEventListener("install", (s) => {
  async function e() {
    await (await caches.open(n)).addAll(i);
  }
  s.waitUntil(e());
});
self.addEventListener("activate", (s) => {
  async function e() {
    for (const a of await caches.keys())
      a !== n && await caches.delete(a);
  }
  s.waitUntil(e());
});
self.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET")
    return;
  async function e() {
    const a = new URL(s.request.url), t = await caches.open(n);
    if (i.includes(a.pathname))
      return t.match(s.request);
    try {
      const c = await fetch(s.request);
      return c.status === 200 && t.put(s.request, c.clone()), c;
    } catch {
      return t.match(s.request);
    }
  }
  s.respondWith(e());
});
