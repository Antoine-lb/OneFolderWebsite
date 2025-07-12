<script lang="ts">
  import { page } from "$app/stores";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";

  export let data;
</script>

<!-- <header class="fixed flex justify-between w-full px-3">
  <a class=" flex items-center gap-2" href="/">
    <img src="/favicon.svg" class="h-8" alt="a small flower" />
    <span class="text-2xl">OneFolder</span>
  </a>
  <div>github</div>
</header> -->

<main>
  <slot />
</main>

<Footer posts={data.posts} subscriberCount={data.subscriberCount || 0} />

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
