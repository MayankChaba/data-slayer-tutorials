// Cloudflare Pages middleware — canonicalise www → apex with a 301.
//
// Why here and not a zone Redirect Rule: the scoped token
// (Account: Pages:Edit, All zones: DNS:Edit + Zone:Read) has no Rulesets
// permission, so the zone-level http_request_dynamic_redirect rule cannot be
// written from CI. A Pages Function runs for every request to the project,
// including the www custom domain, and needs only the Pages:Edit we already use.
//
// Only the www host is rewritten; the apex and *.pages.dev preview hosts fall
// through to static assets via context.next().
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "www.dataslayer.dev") {
    url.hostname = "dataslayer.dev";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
