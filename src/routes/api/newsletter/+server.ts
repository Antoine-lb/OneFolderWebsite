import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import { db } from "$lib/db/db";
import { mailingList } from "$lib/db/schema";
import { eq } from "drizzle-orm";
import { resendService } from "$lib/services/resend";
import { telegram } from "$lib/services/telegram";
import { getNewsletterConfirmationEmail } from "$lib/services/emailTemplates";

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email") as string;

  if (!email || !email.trim()) {
    return json(
      {
        success: false,
        error: "Email is required",
      },
      { status: 400 }
    );
  }

  try {
    const trimmedEmail = email.trim();

    // Check if email already exists in mailing list
    const existingEntry = await db
      .select()
      .from(mailingList)
      .where(eq(mailingList.email, trimmedEmail))
      .limit(1);

    if (existingEntry.length === 0) {
      // Email doesn't exist, create new mailing list entry
      await db.insert(mailingList).values({
        email: trimmedEmail,
      });
    }

    // Always try to add to Resend (Resend will handle duplicates)
    try {
      const resendResult = await resendService.addContact(trimmedEmail);
      if (!resendResult.success) {
        console.error("Failed to add contact to Resend:", resendResult.error);
        // Don't fail the form submission, just log the error
      } else {
        console.log("Successfully synced email to Resend:", trimmedEmail);
      }
    } catch (error) {
      console.error("Error syncing with Resend:", error);
      // Don't fail the form submission
    }

    // Send confirmation email to the user
    try {
      const emailHtml = getNewsletterConfirmationEmail(trimmedEmail);
      const emailResult = await resendService.sendEmail({
        to: trimmedEmail,
        subject: "Welcome to OneFolder's newsletter!",
        html: emailHtml,
      });

      if (!emailResult.success) {
        console.error("Failed to send confirmation email:", emailResult.error);
        // Don't fail the form submission, just log the error
      } else {
        console.log("Successfully sent confirmation email to:", trimmedEmail);
      }
    } catch (error) {
      console.error("Error sending confirmation email:", error);
      // Don't fail the form submission
    }

    // Send Telegram notification
    const telegramMessage = `📧 ${trimmedEmail}\n` + `New newsletter signup`;

    try {
      await telegram(telegramMessage);
    } catch (error) {
      console.error("Error sending Telegram notification:", error);
      // Don't fail the form submission if Telegram fails
    }

    return json({
      success: true,
      message:
        "🎉 You're subscribed! Check your email for a confirmation message. ⚠️ Important: Check your spam folder too!",
    });
  } catch (error) {
    console.error("Error processing newsletter signup:", error);
    return json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
};
