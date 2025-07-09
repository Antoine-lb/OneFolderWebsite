<script lang="ts">
  import type { PageData } from "./$types";
  import { CTA_URL, YOUTUBE_URL } from "$lib/constants";

  import PageHead from "$lib/components/PageHead.svelte";
  import ArticleTitle from "$lib/components/ArticleTitle.svelte";
  import ArticleMeta from "$lib/components/ArticleMeta.svelte";
  import BlogCallToAction from "$lib/components/BlogCallToAction.svelte";
  import { getTagColor } from "$lib/tagColors";

  export let data: PageData;
</script>

<PageHead
  title={data.frontmatter.title}
  description={data.frontmatter.description}
/>
<ArticleTitle title={data.frontmatter.title} />

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

<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />

<article
  class="prose prose-lg max-w-none prose-a:text-orange-600 prose-code:bg-orange-50 prose-code:text-orange-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
>
  <svelte:component this={data.component} />
</article>

<br />
<br />

<BlogCallToAction />

<!-- <div class="m-auto text-center">
  <a
    href="/#downloadDiv"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex bg-[#313131] !text-[#f3f3ec] !no-underline p-2 px-3 hover:px-4 transition-all rounded-xl text-2xl items-center shadow-xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1489EC] to-[#0569d3]"
  >
    Try OneFolder for free
    <img src="/arrow.svg" alt="OneFolder logo" class=" ml-2 rounded" />
  </a>
  <br />
  <br />
</div> -->
