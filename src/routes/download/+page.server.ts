import { telegram } from "$lib/_services/telegram.js";

export const prerender = false;

/** @type {import('./$types').Actions} */
export const actions = {
  // triggerDownload: async ({ cookies, request }) => {},
  submitForm: async (event) => {
    const data = await event.request.formData();
    const email = data.get("email");
    const what_are_you_using = data.get("what_are_you_using");
    const how_did_you_hear = data.get("how_did_you_hear");

    let message = `🌼 Form Submition\nUsing: ${what_are_you_using}\nCame from: ${how_did_you_hear}`;
    if (email) {
      message += `\nEmail: ${email}`;
    }

    telegram(message);
    return { success: true };
  },
};
