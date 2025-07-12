import { db } from "$lib/db/db";
import { mailingList } from "$lib/db/schema";
import { count } from "drizzle-orm";

export async function load() {
  try {
    const result = await db.select({ count: count() }).from(mailingList);
    const subscriberCount = result[0]?.count || 0;
    return {
      subscriberCount,
    };
  } catch (error) {
    console.error("Error loading subscriber count:", error);
    return {
      subscriberCount: 0,
    };
  }
}
