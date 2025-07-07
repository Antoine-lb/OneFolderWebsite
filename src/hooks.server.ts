import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

// Redirects for renamed blog posts
const blogRedirects: Record<string, string> = {
  "/blog/tag-vs-folder":
    "/blog/2023-12-02-tags-vs-folders-stop-using-folders-to-organize-your-files",
  "/blog/how-to-improve-our-digital-storage":
    "/blog/2023-12-02-how-to-improve-our-digital-storage",
  "/blog/of-vs-tagstudio": "/blog/2024-04-15-onefolder-vs-tagstudio",
};

export const handle: Handle = async ({ event, resolve }) => {
  const { pathname } = event.url;

  // Check if this is a request for an old blog post URL
  if (blogRedirects[pathname]) {
    redirect(301, blogRedirects[pathname]);
  }

  return await resolve(event);
};
