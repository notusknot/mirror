import type { Handle } from "@sveltejs/kit";
import Pocketbase from 'pocketbase';
import { serializeNonPOJOs } from "$lib/utils";

export const handle = (async ({ event, resolve }) => {
	// authentication
	event.locals.pb = new Pocketbase("https://api.notusknot.com:443");
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
	} else {
		event.locals.user = undefined;
	}
	
	// theme handler
	let theme: string | null = null;

	const newTheme = event.url.searchParams.get("theme");
	const cookieTheme = event.cookies.get("colortheme");

	if (newTheme) {
		theme = newTheme;
	} else if (cookieTheme) {
		theme = cookieTheme;
	}

	if (theme) {
		return await resolve(event, {
			transformPageChunk: ({ html }) =>
				html.replace('data-theme=""', `data-theme="${theme}"`),
		});
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie());

	return response;
}) satisfies Handle;
