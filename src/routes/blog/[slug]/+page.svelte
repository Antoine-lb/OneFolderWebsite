<script lang="ts">
  import type { PageData } from "./$types";
  import { CTA_URL, YOUTUBE_URL } from "$lib/constants";

  import PageHead from "$lib/components/PageHead.svelte";
  import ArticleTitle from "$lib/components/ArticleTitle.svelte";
  import ArticleMeta from "$lib/components/ArticleMeta.svelte";
  import BlogCallToAction from "$lib/components/BlogCallToAction.svelte";

  export let data: PageData;
</script>

<PageHead
  title={data.frontmatter.title}
  description={data.frontmatter.description}
/>
<ArticleTitle title={data.frontmatter.title} />
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
