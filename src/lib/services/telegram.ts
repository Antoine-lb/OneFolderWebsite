import { TELEGRAM_BOT_TOKEN, CHAT_ID } from "$env/static/private";

export async function telegram(text: string) {
  try {
    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          disable_notification: false,
        }),
      }
    );
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
}
