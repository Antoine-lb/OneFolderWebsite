<script lang="ts">
  import type { PageData } from "./$types";
  import { CTA_URL, YOUTUBE_URL } from "$lib/constants";

  import BlogCallToAction from "$lib/components/BlogCallToAction.svelte";
  import { getTagColor } from "$lib/tagColors";

  export let data: PageData;

  // PageHead logic
  const siteTitle = "OneFolder";
  const formattedTitle = data.frontmatter.title
    ? `${data.frontmatter.title} | ${siteTitle}`
    : siteTitle;

  // ArticleTitle logic
  const titleId = data.frontmatter.title
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s/g, "-");

  // ArticleMeta logic
  const formattedDate = new Date(data.frontmatter.date).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );
</script>

<!-- PageHead inline -->
<svelte:head>
  <title>{formattedTitle}</title>
  <meta property="og:site_name" content={siteTitle} />
  <meta property="og:title" content={data.frontmatter.title} />
  <meta property="og:description" content={data.frontmatter.description} />
</svelte:head>

<!-- ArticleTitle inline -->
<h1 class="text-2xl md:text-4xl drop-shadow font-bold text-[#333]" id={titleId}>
  {data.frontmatter.title}
</h1>

<!-- Tags section - moved here between title and date -->
{#if data.frontmatter.tags && data.frontmatter.tags.length > 0}
  <div class="mt-4 mb-4">
    <div class="flex flex-wrap gap-2 items-center">
      {#each data.frontmatter.tags as tag}
        <a
          href="/blog?tag={encodeURIComponent(tag)}"
          class="inline-block {getTagColor(
            tag
          )} px-3 py-1 rounded-full text-sm font-medium transition-colors !no-underline"
        >
          {tag}
        </a>
      {/each}
    </div>
  </div>
{/if}

<!-- ArticleMeta inline -->
<p class="mb-3">
  <span class="text-[#666] font-mono pl-1">{formattedDate}</span>
</p>

<article
  class="prose prose-lg max-w-none prose-a:text-orange-600 prose-code:bg-orange-50 prose-code:text-orange-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
>
  <svelte:component this={data.component} />
</article>

<br />
<br />

<BlogCallToAction />
