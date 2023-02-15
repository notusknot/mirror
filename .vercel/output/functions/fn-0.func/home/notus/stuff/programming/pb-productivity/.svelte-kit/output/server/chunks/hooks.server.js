const handle = async ({ event, resolve }) => {
  let theme = null;
  const newTheme = event.url.searchParams.get("theme");
  const cookieTheme = event.cookies.get("colortheme");
  if (newTheme) {
    theme = newTheme;
  } else if (cookieTheme) {
    theme = cookieTheme;
  }
  if (theme) {
    const themeColor = theme === "light" ? "#ffffff" : "#242424";
    return await resolve(event, {
      transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`).replace(
        '<meta name="theme-color" content="">',
        `<meta name="theme-color" content="${themeColor}">`
      )
    });
  }
  const response = await resolve(event);
  return response;
};
export {
  handle
};
