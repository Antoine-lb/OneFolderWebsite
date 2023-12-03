<script lang="ts">
  import { page } from "$app/stores";
  import "../app.css";

  export let data;
</script>

<main>
  <slot />
</main>

<!-- <footer>
	<img src="/bottom-images.webp" alt="images stack" class="w-full -mt-24" />
</footer> -->

<br />
<br />
<footer class="flex justify-center">
  <div class="flex justify-center flex-col">
    <a href="/blog" class=" !text-[#005DC4]"> Blog </a>
    more from our blog:
    {#each data.posts as post}
      <a href={`/blog/${post.slug}`} class=" !text-[#005DC4]">
        {post.title}
      </a>
    {/each}
  </div>
</footer>
<img src="/bottom-images.webp" alt="images stack" class="w-full" />

<style>
  :global(:root) {
    --spacing-unit: 4px;
    --color-background: #e5e5e5;
    --color-text-primary: #212121;
    --color-text-secondary: #5a5a5a;
    --brand-primary: #005dc4;
  }

  :global(a, a:visited, a:active) {
    text-decoration: none;
    color: var(--color-text-primary);
  }

  :global(a:hover) {
    text-decoration: underline;
  }
</style>
