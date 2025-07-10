import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { db } from "$lib/db/db";
import { mailingList, formSubmissions } from "$lib/db/schema";
import { eq } from "drizzle-orm";

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
        // Check if email already exists in mailing list
        const existingEntry = await db
          .select()
          .from(mailingList)
          .where(eq(mailingList.email, email.trim()))
          .limit(1);

        if (existingEntry.length > 0) {
          // Email exists, ensure they're subscribed
          if (!existingEntry[0].isSubscribed) {
            // Re-subscribe them if they were unsubscribed
            await db
              .update(mailingList)
              .set({
                isSubscribed: true,
                updatedAt: new Date(),
              })
              .where(eq(mailingList.id, existingEntry[0].id));
          }
        } else {
          // Email doesn't exist, create new mailing list entry
          await db.insert(mailingList).values({
            email: email.trim(),
            isSubscribed: true,
          });
        }
      }

      return {
        success: true,
        message: "Thank you for your interest! We'll keep you updated.",
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
