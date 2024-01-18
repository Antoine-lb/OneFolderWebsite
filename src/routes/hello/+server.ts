import { telegram } from "$lib/_services/telegram.js";

export async function GET(event) {
  const message = event.url.searchParams.get("m");

  if (message) {
    telegram(message);
  }

  return new Response("Hello", {
    status: 200,
  });
}
