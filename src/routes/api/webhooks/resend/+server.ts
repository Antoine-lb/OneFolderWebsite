import { json, type RequestHandler } from "@sveltejs/kit";
import { db } from "$lib/db/db";
import { mailingList } from "$lib/db/schema";
import { eq } from "drizzle-orm";
// import { RESEND_WEBHOOK_SECRET } from "$env/static/private"; // Uncomment if you use webhook secrets

export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();

    // Verify webhook signature if you set up a webhook secret
    // const signature = request.headers.get('resend-signature');
    // if (signature !== RESEND_WEBHOOK_SECRET) {
    //   return json({ error: 'Invalid signature' }, { status: 401 });
    // }

    console.log("Received Resend webhook:", body);

    // Handle different webhook event types
    const { type, data } = body;

    if (type === "contact.unsubscribed" || type === "contact.removed") {
      const email = data?.email;

      if (!email) {
        console.error("No email found in webhook data");
        return json({ error: "No email provided" }, { status: 400 });
      }

      // Update the subscription status in our database
      const result = await db
        .update(mailingList)
        .set({
          isSubscribed: false,
          updatedAt: new Date(),
        })
        .where(eq(mailingList.email, email))
        .returning();

      if (result.length > 0) {
        console.log(`Successfully unsubscribed ${email} in database`);
        return json({
          success: true,
          message: `Unsubscribed ${email}`,
        });
      } else {
        console.log(`Email ${email} not found in database`);
        return json({
          success: true,
          message: `Email not found in database, but webhook processed`,
        });
      }
    }

    if (type === "contact.subscribed" || type === "contact.created") {
      const email = data?.email;

      if (!email) {
        console.error("No email found in webhook data");
        return json({ error: "No email provided" }, { status: 400 });
      }

      // Check if email exists and update, or create new entry
      const existingEntry = await db
        .select()
        .from(mailingList)
        .where(eq(mailingList.email, email))
        .limit(1);

      if (existingEntry.length > 0) {
        // Update existing entry to subscribed
        await db
          .update(mailingList)
          .set({
            isSubscribed: true,
            updatedAt: new Date(),
          })
          .where(eq(mailingList.id, existingEntry[0].id));

        console.log(`Re-subscribed existing email ${email}`);
      } else {
        // Create new entry
        await db.insert(mailingList).values({
          email: email,
          isSubscribed: true,
        });

        console.log(`Added new subscriber ${email} from webhook`);
      }

      return json({
        success: true,
        message: `Subscribed ${email}`,
      });
    }

    // Handle other webhook types
    console.log(`Unhandled webhook type: ${type}`);
    return json({
      success: true,
      message: `Webhook ${type} received but not processed`,
    });
  } catch (error) {
    console.error("Error processing Resend webhook:", error);
    return json(
      {
        success: false,
        error: "Failed to process webhook",
      },
      { status: 500 }
    );
  }
};
