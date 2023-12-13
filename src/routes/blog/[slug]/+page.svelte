<script lang="ts">
  import type { PageData } from "./$types";
  import type { SvelteComponentTyped } from "svelte/internal";
  import { CTA_URL, YOUTUBE_URL } from "$lib/constants";

  import PageHead from "$lib/components/PageHead.svelte";
  import ArticleTitle from "$lib/components/ArticleTitle.svelte";
  import ArticleMeta from "$lib/components/ArticleMeta.svelte";

  export let data: PageData;

  type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
  $: component = data.component as unknown as C;
</script>

<PageHead
  title={data.frontmatter.title}
  description={data.frontmatter.description}
/>
<ArticleTitle title={data.frontmatter.title} />
<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />

<div class="article-body">
  <svelte:component this={component} />
</div>

<br />
<br />

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

<style>
  .article-body {
    color: var(--color-text-primary);
    line-height: 1.51;
    font-size: 20px;
  }

  :global(.article-body p) {
    margin-bottom: calc(var(--spacing-unit) * 3);
  }

  :global(.article-body h2) {
    font-size: 1.7rem;
    font-weight: 700 !important;
    margin-top: calc(var(--spacing-unit) * 8);
    margin-bottom: calc(var(--spacing-unit) * 2);
    color: var(--color-text-primary);
  }

  :global(.article-body code) {
    background: #005dc422;
    border: 1px solid #005dc4;
    color: #0051ad;
    word-wrap: break-word;
    box-decoration-break: clone;
    padding: 0.1rem 0.3rem 0rem;
    border-radius: 0.4rem;
  }

  :global(
      .article-body h1 a,
      .article-body h2 a,
      .article-body h3 a,
      .article-body h4 a,
      .article-body h5 a,
      .article-body h6 a
    ) {
    color: var(--color-text-primary);
  }

  :global(.article-body a) {
    color: var(--brand-primary);
  }

  /* LIST  */
  :global(.article-body ul, .article-body ol) {
    padding: 20px 30px;
    list-style: inside;
  }

  /* UNORDERED LIST - BULLET LIST */
  :global(.article-body ul li) {
    list-style-type: none;
  }
  :global(.article-body ul li::before) {
    content: "\2022";
    color: #888;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  /* ORDERED LIST - NUMBER LIST */
  :global(.article-body ol li) {
    list-style-type: none;
    counter-increment: list;
    position: relative;
  }

  :global(.article-body ol li::after) {
    content: counter(list) ".";
    position: absolute;
    left: -2.5em;
    width: 2em;
    text-align: right;
    color: #888;
  }
</style>
