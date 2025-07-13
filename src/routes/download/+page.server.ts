import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { db } from "$lib/db/db";
import { mailingList, formSubmissions } from "$lib/db/schema";
import { eq } from "drizzle-orm";
import { resendService } from "$lib/services/resend";
import { telegram } from "$lib/services/telegram";
import { getNewsletterConfirmationEmail } from "$lib/services/emailTemplates";

export const load = async () => {
  const BACKUP_VERSION_IF_FETCH_FAILS = "1.0.19";
  let windows = `https://github.com/OneFolderApp/OneFolder/releases/download/v${BACKUP_VERSION_IF_FETCH_FAILS}/OneFolder-Setup-${BACKUP_VERSION_IF_FETCH_FAILS}.exe`;
  let mac = `https://github.com/OneFolderApp/OneFolder/releases/download/v${BACKUP_VERSION_IF_FETCH_FAILS}/OneFolder-${BACKUP_VERSION_IF_FETCH_FAILS}-arm64.dmg`;
  let linux = `https://github.com/OneFolderApp/OneFolder/releases/download/v${BACKUP_VERSION_IF_FETCH_FAILS}/OneFolder-${BACKUP_VERSION_IF_FETCH_FAILS}.AppImage`;

  try {
    const response = await fetch(
      "https://api.github.com/repos/OneFolderApp/OneFolder/releases/latest",
      {
        method: "GET",
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    const json = await response.json();
    const assets = json.assets;

    windows = assets.find((asset: any) =>
      asset.name.endsWith(".exe")
    )?.browser_download_url;
    mac = assets.find((asset: any) =>
      asset.name.endsWith(".dmg")
    )?.browser_download_url;
    linux = assets.find((asset: any) =>
      asset.name.endsWith(".AppImage")
    )?.browser_download_url;
  } catch (error) {
    console.error(error);
  }

  return { windows, mac, linux };
};

export const actions = {
  subscribe: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email") as string;
    const currentlyUsing = data.get("currentlyUsing") as string;
    const howDidYouHear = data.get("howDidYouHear") as string;

    try {
      // Always create a form submission record
      await db.insert(formSubmissions).values({
        currentlyUsing: currentlyUsing || null,
        howDidYouHear: howDidYouHear || null,
      });

      // If email is provided, handle mailing list subscription separately
      if (email && email.trim()) {
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
        // If email already exists, don't create duplicate

        // Always try to add to Resend (Resend will handle duplicates)
        try {
          const resendResult = await resendService.addContact(trimmedEmail);
          if (!resendResult.success) {
            console.error(
              "Failed to add contact to Resend:",
              resendResult.error
            );
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
            console.error(
              "Failed to send confirmation email:",
              emailResult.error
            );
            // Don't fail the form submission, just log the error
          } else {
            console.log(
              "Successfully sent confirmation email to:",
              trimmedEmail
            );
          }
        } catch (error) {
          console.error("Error sending confirmation email:", error);
          // Don't fail the form submission
        }
      }

      // Send Telegram notification
      const telegramMessage =
        `📧 ${email || "Not provided"}\n` +
        `🔧 Currently using: ${currentlyUsing || "Not provided"}\n` +
        `📍 How they heard about us: ${howDidYouHear || "Not provided"}\n` +
        `New form submission`;
      try {
        await telegram(telegramMessage);
      } catch (error) {
        console.error("Error sending Telegram notification:", error);
        // Don't fail the form submission if Telegram fails
      }

      return {
        success: true,
        message:
          "🎉 Thank you for your interest! We'll keep you updated. If you provided an email, check your inbox for a confirmation message. ⚠️ Important: Check your spam folder too!",
      };
    } catch (error) {
      console.error("Error processing form submission:", error);
      return fail(500, {
        success: false,
        error: "Something went wrong. Please try again.",
      });
    }
  },
} satisfies Actions;
