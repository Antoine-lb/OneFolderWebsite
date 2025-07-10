import { Resend } from "resend";
import { RESEND_API_KEY, RESEND_AUDIENCE_ID } from "$env/static/private";

const resend = new Resend(RESEND_API_KEY);

export interface ResendContact {
  email: string;
  firstName?: string;
  lastName?: string;
  unsubscribed?: boolean;
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

  async removeContact(
    email: string
  ): Promise<{ success: boolean; error?: string }> {
    try {
      if (!RESEND_API_KEY) {
        return { success: true };
      }

      // Find the contact first
      const contacts = await resend.contacts.list({
        audienceId: this.audienceId,
      });

      const contact = contacts.data?.data?.find((c) => c.email === email);

      if (!contact) {
        console.log("Contact not found in Resend:", email);
        return { success: true }; // Already not in the list
      }

      // Remove the contact
      await resend.contacts.remove({
        id: contact.id,
        audienceId: this.audienceId,
      });

      console.log("Successfully removed contact from Resend:", email);
      return { success: true };
    } catch (error: any) {
      console.error("Error removing contact from Resend:", error);
      return {
        success: false,
        error: error.message || "Failed to remove contact from mailing list",
      };
    }
  }

  async updateContactStatus(
    email: string,
    unsubscribed: boolean
  ): Promise<{ success: boolean; error?: string }> {
    try {
      if (!RESEND_API_KEY) {
        return { success: true };
      }

      // Find the contact first
      const contacts = await resend.contacts.list({
        audienceId: this.audienceId,
      });

      const contact = contacts.data?.data?.find((c) => c.email === email);

      if (!contact) {
        console.log("Contact not found in Resend for status update:", email);
        return { success: false, error: "Contact not found" };
      }

      // Update the contact
      await resend.contacts.update({
        id: contact.id,
        unsubscribed: unsubscribed,
        audienceId: this.audienceId,
      });

      console.log(
        `Successfully updated contact status in Resend: ${email} (unsubscribed: ${unsubscribed})`
      );
      return { success: true };
    } catch (error: any) {
      console.error("Error updating contact status in Resend:", error);
      return {
        success: false,
        error: error.message || "Failed to update contact status",
      };
    }
  }
}

// Export a default instance
export const resendService = new ResendService();
