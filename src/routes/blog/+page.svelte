<script lang="ts">
  import type { PageData } from "../$types";
  import PageHead from "$lib/components/PageHead.svelte";

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

{#each data.posts as { slug, title, author, description, date }}
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
      </div>
    </article>
  </a>
{/each}

<slot />
