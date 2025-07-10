import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// Mailing list table - stores email subscriptions
export const mailingList = pgTable("mailing_list", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Form submissions table - stores all form submissions (independent from mailing list)
export const formSubmissions = pgTable("form_submissions", {
  id: serial("id").primaryKey(),
  currentlyUsing: text("currently_using"),
  howDidYouHear: text("how_did_you_hear"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Types
export type MailingListEntry = typeof mailingList.$inferSelect;
export type NewMailingListEntry = typeof mailingList.$inferInsert;
export type FormSubmission = typeof formSubmissions.$inferSelect;
export type NewFormSubmission = typeof formSubmissions.$inferInsert;
