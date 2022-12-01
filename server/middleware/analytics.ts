const STREAM_ID = "G-9BMX8FWJ6F";

export default defineEventHandler((event) => {
  const requestUrl = event.node.req.url;
  if (requestUrl && isFaviconRequest(requestUrl)) {
    return;
  }
  const userAgent = event.node.req.headers["user-agent"] || "";
  const pageLocation = event.node.req.headers["referer"] || "";
  const clientID =
    new Date().getTime() + "." + Math.ceil(Math.random() * 1000000);
  const hitURL = `https://region1.google-analytics.com/g/collect?v=2&en=page_view&dl=${encodeURIComponent(
    pageLocation
  )}&cid=${clientID}&tid=${STREAM_ID}}`;
  $fetch(hitURL, {
    headers: {
      "user-agent": userAgent,
    },
  });
});

function isFaviconRequest(requestUrl: string) {
  return requestUrl.includes("favicon.ico");
}
