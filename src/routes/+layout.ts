import { PUBLIC_RENDERING_MODE } from "$env/static/public";

export async function load({ url }) {
	return {
		currentPath: url.pathname,
	};
}

let ssr;

if (PUBLIC_RENDERING_MODE == "ssr") {
	ssr = true;
} else {
	ssr = false;
}

export { ssr };
