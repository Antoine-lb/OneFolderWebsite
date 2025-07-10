import { Resend } from "resend";
import { RESEND_API_KEY, RESEND_AUDIENCE_ID } from "$env/static/private";

const resend = new Resend(RESEND_API_KEY);

export interface ResendContact {
  email: string;
  firstName?: string;
  lastName?: string;
}

export class ResendService {
  private audienceId: string;

  constructor(audienceId?: string) {
    this.audienceId = audienceId || RESEND_AUDIENCE_ID || "";

    if (!RESEND_API_KEY) {
      console.warn(
        "RESEND_API_KEY not found. Resend integration will be disabled."
      );
    }

    if (!this.audienceId) {
      console.warn("RESEND_AUDIENCE_ID not found. Using default audience.");
    }
  }

  async addContact(
    email: string
  ): Promise<{ success: boolean; id?: string; error?: string }> {
    try {
      if (!RESEND_API_KEY) {
        console.log("Resend API key not configured, skipping contact addition");
        return { success: true }; // Don't fail the form submission
      }

      // First, try to create the contact
      const contact = await resend.contacts.create({
        email: email,
        unsubscribed: false,
        audienceId: this.audienceId,
      });

      console.log("Successfully added contact to Resend:", email);
      return {
        success: true,
        id: contact.data?.id,
      };
    } catch (error: any) {
      // Handle common errors gracefully
      if (
        error?.message?.includes("already exists") ||
        error?.message?.includes("duplicate")
      ) {
        console.log("Contact already exists in Resend:", email);
        return { success: true }; // Treat as success - they're already subscribed
      }

      console.error("Error adding contact to Resend:", error);
      return {
        success: false,
        error: error.message || "Failed to add contact to mailing list",
      };
    }
  }
}

// Export a default instance
export const resendService = new ResendService();
