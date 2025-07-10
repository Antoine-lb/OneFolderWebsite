CREATE TABLE "mailing_list" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text,
	"currently_using" text,
	"how_did_you_hear" text,
	"created_at" timestamp DEFAULT now()
);
