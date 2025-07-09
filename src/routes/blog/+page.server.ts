import type { PageServerLoad } from "./$types";
import { slugFromPath } from "$lib/slugFromPath";

const MAX_POSTS = 10;

export const load: PageServerLoad = async ({ url }) => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);
  const tagFilter = url.searchParams.get("tag");

  const postPromises = Object.entries(modules).map(([path, resolver]) =>
    resolver().then(
      (post) =>
        ({
          slug: slugFromPath(path),
          ...(post as unknown as App.MdsvexFile).metadata,
        }) as App.BlogPost
    )
  );

  const posts = await Promise.all(postPromises);
  let publishedPosts = posts.filter((post) => post.published);

  // Filter by tag if specified
  if (tagFilter) {
    publishedPosts = publishedPosts.filter(
      (post) => post.tags && post.tags.includes(tagFilter)
    );
  }

  publishedPosts = publishedPosts.slice(0, MAX_POSTS);
  publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  return {
    posts: publishedPosts,
    currentTag: tagFilter,
  };
};
