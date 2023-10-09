export async function GET(request) {
  // Create a JSON representation of the request object
  const requestJson = {
    method: request.method,
    url: request.url,
    ip: request.ip,
    geo: request.geo,
    headers: Object.fromEntries(request.headers),
    ipAddress:
      request.headers.get("x-forwarded-for") ||
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-real-ip") ||
      request.headers.get("remote-addr") ||
      request.headers.get("x-cluster-client-ip") ||
      request.headers.get("x-client-ip") ||
      request.headers.get("x-forwarded") ||
      request.headers.get("forwarded-for"),

    // You can add more properties from the request object as needed
  };

  // Return the request JSON in the response
  return new Response(JSON.stringify(requestJson), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
