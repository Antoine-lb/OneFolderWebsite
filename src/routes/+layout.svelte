<script lang="ts">
  import { page } from "$app/stores";
  import { CTA_URL, GITHUB_LINK } from "$lib/constants";
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
      Built for the <br class="block md:hidden" /><span class="italic"
        >long term</span
      >
    </h3>
    <p class="text-lg mt-3 p-4">
      All software comes to an end, it's inevitable. But files have to last
      forever. That's why our top priority is to create OneFolder so that you
      can access your photos after OneFolder has disappeared.
    </p>

    <br />
    <div class="flex items-center flex-col">
      <a
        class="cta-button !text-white !no-underline px-5 py-3 text-2xl hover:px-6 transition-all"
        href={CTA_URL}
        target="_blank"
      >
        Give it a try 🌼
      </a>
    </div>
    <div class="flex text-left flex-col md:flex-row gap-8 justify-center mt-16">
      <div class="flex flex-col justify-start text-left">
        {#each data.posts as post}
          <a href={`/blog/${post.slug}`} class=" !text-[#fff]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline ml-2 fill-white -rotate-45"
              height="1em"
              width="1em"
              viewBox="0 0 448 512"
              ><path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              /></svg
            >
            {post.title}
          </a>
        {/each}
        <a href="/blog" class=" !text-[#fff]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline ml-2 fill-white -rotate-45"
            height="1em"
            width="1em"
            viewBox="0 0 448 512"
            ><path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            /></svg
          > All articles from our blog
        </a>
      </div>
      <div>
        <a href={GITHUB_LINK} class=" !text-[#fff]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline ml-2 fill-white -rotate-45"
            height="1em"
            width="1em"
            viewBox="0 0 448 512"
            ><path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            /></svg
          >
          Github
        </a>
      </div>
    </div>
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
