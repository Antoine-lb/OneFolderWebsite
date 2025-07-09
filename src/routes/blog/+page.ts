import type { PageLoad } from "./$types";
import { browser } from "$app/environment";

export const load: PageLoad = async ({ data, url }) => {
  // Only access searchParams in the browser, not during prerendering
  const tagFilter = browser ? url.searchParams.get("tag") : null;
  let posts = data.posts;

  // Filter by tag if specified
  if (tagFilter) {
    posts = posts.filter((post) => post.tags && post.tags.includes(tagFilter));
  }

  return {
    posts,
    currentTag: tagFilter,
  };
};
