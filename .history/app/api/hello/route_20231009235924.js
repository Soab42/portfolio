export async function GET(request) {
  // Create a JSON representation of the request object
  const requestJson = {
    method: request.method,
    url: request.url,
    headers: Object.fromEntries(request.headers),
    // You can add more properties from the request object as needed
  };

  // Return the request JSON in the response
  return new Response(JSON.stringify(requestJson), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
