<script lang="ts">
  import { page } from "$app/stores";
  import {
    CTA_URL,
    GITHUB_LINK,
    TWITTER_LINK,
    YOUTUBE_CHANNEL_URL,
  } from "$lib/constants";
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

<!-- <footer>
	<img src="/bottom-images.webp" alt="images stack" class="w-full -mt-24" />
</footer> -->

<br />
<br />
<footer class="flex text-white justify-center bg-black py-14">
  <div class="px-8 w-full">
    <!-- FIRST CHUNK -->
    <div
      class="flex flex-col md:flex-row justify-between w-full text-center md:text-left"
    >
      <div class=" md:max-w-md">
        <h3 class="text-5xl font-extrabold mb-3">
          Built for the <br /> long term
        </h3>
        <p class="text-lg">
          All software comes to an end, it's inevitable. But files have to last
          forever. That's why our top priority is to create OneFolder so that
          you can access your photos after OneFolder has disappeared.
        </p>
      </div>

      <br />
      <div class="flex flex-col justify-center items-center mt-6">
        <a
          class="cta-button !text-white !no-underline px-5 py-2 text-2xl hover:px-6 transition-all"
          href={CTA_URL}
          target="_blank"
        >
          Give it a try 🌼
        </a>
      </div>
    </div>

    <!-- LINK -->
    <div
      class="flex text-left flex-col md:flex-row gap-8 justify-center mt-16 w-full"
    >
      <div class="flex flex-col justify-start text-left w-full">
        <p>From our blog:</p>
        {#each data.posts as post}
          <a href={`/blog/${post.slug}`} class=" !text-[#fff]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline fill-white -rotate-45"
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
            class="inline fill-white -rotate-45"
            height="1em"
            width="1em"
            viewBox="0 0 448 512"
            ><path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            /></svg
          > all blog posts ...
        </a>
      </div>
      <div class="flex flex-col">
        <p class="w-24">Also find us:</p>

        <div>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            class="flex items-center gap-1 !text-[#fff]"
          >
            <img src="/youtube.svg" alt="github favicon" />

            Youtube
          </a>
        </div>
        <div>
          <a
            href={GITHUB_LINK}
            target="_blank"
            class="flex items-center gap-1 !text-[#fff]"
          >
            <img src="/github.svg" alt="github favicon" />
            Github
          </a>
        </div>
        <div>
          <a
            href={TWITTER_LINK}
            target="_blank"
            class="flex items-center gap-1 !text-[#fff]"
          >
            <img src="/twitter.svg" alt="github favicon" />

            Twitter
          </a>
        </div>
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
