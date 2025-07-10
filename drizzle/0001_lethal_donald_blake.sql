CREATE TABLE "form_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"form_type" text NOT NULL,
	"currently_using" text,
	"how_did_you_hear" text,
	"mailing_list_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "mailing_list" ALTER COLUMN "email" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "mailing_list" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "mailing_list" ADD COLUMN "is_subscribed" boolean DEFAULT true NOT NULL;--> statement-breakpoint
ALTER TABLE "mailing_list" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "mailing_list" DROP COLUMN "currently_using";--> statement-breakpoint
ALTER TABLE "mailing_list" DROP COLUMN "how_did_you_hear";--> statement-breakpoint
ALTER TABLE "mailing_list" ADD CONSTRAINT "mailing_list_email_unique" UNIQUE("email");