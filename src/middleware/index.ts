import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  let shouldRedirect = false;

  // Redirect www to non-www
  if (url.hostname === "www.hestiatechnology.pt") {
    url.hostname = "hestiatechnology.pt";
    shouldRedirect = true;
  }

  // Redirect URLs with trailing slashes to URLs without trailing slashes
  // Exception: root paths like "/" or "/en/" or "/pt/" should keep the slash
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    // Remove the trailing slash
    url.pathname = url.pathname.slice(0, -1);
    shouldRedirect = true;
  }

  // If we need to redirect, do it with 301 (permanent)
  if (shouldRedirect) {
    return context.redirect(url.toString(), 301);
  }

  return next();
});
