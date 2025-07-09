<script lang="ts">
  import type { PageData } from "./$types";
  import PageHead from "$lib/components/PageHead.svelte";
  import BlogCallToAction from "$lib/components/BlogCallToAction.svelte";
  import { getTagColor } from "$lib/tagColors";

  export let data: PageData;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
</script>

<PageHead
  title="Blog"
  description="An awesome blog about development with Svelte"
/>

<!-- Paper note introduction -->
<BlogCallToAction />

<!-- Tag filter indicator -->
{#if data.currentTag}
  <div class="max-w-2xl mx-auto mb-6 px-4">
    <div
      class="bg-purple-50 border border-purple-200 rounded-lg px-4 py-3 flex items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <span class="text-purple-700 font-medium">Filtered by tag:</span>
        <span
          class="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
        >
          {data.currentTag}
        </span>
      </div>
      <a
        href="/blog"
        class="text-purple-600 hover:text-purple-800 text-sm font-medium !no-underline"
      >
        Clear filter ×
      </a>
    </div>
  </div>
{/if}

{#each data.posts as { slug, title, author, description, date, tags }}
  <a
    href="/blog/{slug}"
    class="block py-6 hover:bg-purple-50 hover:border-purple-100 transition-all duration-200 rounded-lg px-4 !no-underline border-4 border-transparent"
  >
    <article class="flex gap-6">
      <!-- Date column (left) -->
      <div class="flex-shrink-0 w-24 mt-2">
        <span class="text-[#666] font-mono text-sm">
          {formatDate(date)}
        </span>
      </div>

      <!-- Title column (right) -->
      <div class="flex-1">
        <h2
          class="text-2xl md:text-3xl font-bold text-[#333] title-font leading-tight"
        >
          {title}
        </h2>
        {#if description}
          <p class="text-[#666] mt-2 text-lg">
            {description}
          </p>
        {/if}

        <!-- Tags below description -->
        {#if tags && tags.length > 0}
          <div class="mt-3 flex flex-wrap gap-2">
            {#each tags as tag}
              <button
                class="tag-button {getTagColor(
                  tag
                )} px-3 py-1 rounded-full text-sm font-medium transition-colors"
                on:click|preventDefault|stopPropagation={() =>
                  (window.location.href = `/blog?tag=${encodeURIComponent(tag)}`)}
              >
                {tag}
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </article>
  </a>
{/each}

<slot />

<style>
  .tag-button {
    cursor: pointer;
    font-family: inherit;
    white-space: nowrap;
  }

  /* Mobile responsive styles */
  @media (max-width: 768px) {
    .paper-sheet {
      transform: rotate(0deg) !important;
      margin-left: 0.75rem;
      margin-right: 0.75rem;
    }

    .paper-sheet:hover {
      transform: rotate(0deg) !important;
    }
  }
</style>
