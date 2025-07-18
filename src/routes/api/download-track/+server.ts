import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { telegram } from "$lib/services/telegram";

export const POST: RequestHandler = async ({ request }) => {
  try {
    const data = await request.json();
    const { platform, userAgent } = data;

    // Send Telegram notification for download tracking
    const telegramMessage =
      `💾 Download Started\n` +
      `🖥️ Platform: ${platform}\n` +
      `🌐 User Agent: ${userAgent || "Not provided"}\n` +
      `📊 Download tracking`;
    
    try {
      await telegram(telegramMessage);
    } catch (error) {
      console.error("Error sending Telegram notification:", error);
      // Don't fail the API call if Telegram fails
    }

    return json({
      success: true,
      message: "Download tracked successfully",
    });
  } catch (error) {
    console.error("Error tracking download:", error);
    return json(
      {
        success: false,
        error: "Failed to track download",
      },
      { status: 500 }
    );
  }
};