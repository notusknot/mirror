export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","favicon.png","icon.svg","icon192.png","icon512.png","manifest.json","moon.svg","robots.txt","sun.svg","service-worker.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-39f42ba7.js","imports":["_app/immutable/start-39f42ba7.js","_app/immutable/chunks/index-a817bc95.js","_app/immutable/chunks/singletons-08c9d0d9.js","_app/immutable/chunks/control-e7f5239e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
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
				id: "/api/extract",
				pattern: /^\/api\/extract\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/extract/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
