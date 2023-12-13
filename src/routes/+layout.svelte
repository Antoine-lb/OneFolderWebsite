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
<footer class="flex text-white justify-center bg-black py-14">
  <div class="max-w-2xl text-center">
    <h3 class="text-4xl font-extrabold">
      Built for <span class="italic">sustainability</span>
    </h3>
    <p class="text-lg mt-3">
      All software comes to an end, it's inevitable. But files have to last
      forever. That's why our top priority is to create OneFolder so that you
      can access your photos after OneFolder has disappeared.
    </p>

    <br />
    <button
      class="inline-flex font-bold !text-[#f3f3ec] !no-underline p-2 px-3 hover:px-4 transition-all rounded-xl text-2xl items-center shadow-xl bg-[#FF5543]"
      on:click={() => {
        if (downloadDiv) {
          window.scrollTo(downloadDiv.offsetLeft, downloadDiv.offsetTop);
        }
      }}
    >
      Get early access 🌼
    </button>
    <!-- <div class="flex justify-center flex-col">
    <a href="/blog" class=" !text-[#005DC4]"> Blog </a>
    more from our blog:
    {#each data.posts as post}
      <a href={`/blog/${post.slug}`} class=" !text-[#005DC4]">
        {post.title}
      </a>
    {/each}
  </div> -->
  </div>
  <br />
  <br />
  <br />
  <br />
</footer>

<!-- <img src="/bottom-images.webp" alt="images stack" class="w-full" /> -->

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
