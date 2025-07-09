import type { PageServerLoad } from "./$types";
import { slugFromPath } from "$lib/slugFromPath";

const MAX_POSTS = 50;

export const load: PageServerLoad = async () => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

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

  // Sort by date first (newest first), then slice to get the most recent posts
  publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
  publishedPosts = publishedPosts.slice(0, MAX_POSTS);

  return {
    posts: publishedPosts,
  };
};
