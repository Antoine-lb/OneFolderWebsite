import axios from "axios";
import { CHAT_ID, TELEGRAM_BOT_TOKEN } from "$env/static/private";

// https://gist.github.com/dideler/85de4d64f66c1966788c1b2304b9caf1

export function telegram(text: string) {
  return axios.post(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      chat_id: CHAT_ID,
      text,
      disable_notification: true,
    }
  );
}

// Get the ID of the chat
// curl https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/getUpdates | jq .message.chat.id

// curl -X POST \
//      -H 'Content-Type: application/json' \
//      -d '{"chat_id": "123456789", "text": "This is a test from curl", "disable_notification": true}' \
//      https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage
