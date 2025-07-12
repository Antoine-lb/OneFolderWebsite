<script lang="ts">
  import {
    CTA_URL,
    GITHUB_LINK,
    TWITTER_LINK,
    YOUTUBE_CHANNEL_URL,
  } from "$lib/constants";
  import NewsletterSignup from "./NewsletterSignup.svelte";

  export let posts: App.BlogPost[];
  export let subscriberCount: number;
</script>

<br />
<br />
<br />
<br />

<!-- Wave pattern above newsletter section -->
<div class="relative">
  <div
    class="absolute z-10 w-full overflow-hidden"
    style="top: -9px; height: 15px;"
  >
    <div
      class="w-full bg-repeat-x"
      style="height: 80px; background-image: url('/backgrounds/wave-with-border.svg'); background-size: auto 100%;"
    ></div>
  </div>
</div>

<!-- Newsletter Section - Above Footer -->
<div class="bg-[#FFFCEC] text-[#44316d] py-12">
  <div class="px-8 w-full max-w-4xl mx-auto">
    <NewsletterSignup initialCount={subscriberCount} />
  </div>
</div>

<!-- Wave pattern at bottom of newsletter section -->
<div class="relative">
  <div
    class="absolute z-10 w-full overflow-hidden"
    style="bottom: -9px; height: 15px;"
  >
    <div
      class="w-full bg-repeat-x"
      style="height: 60px; background-image: url('/backgrounds/wave-no-border.svg'); background-size: auto 100%; transform: translateY(-45px);"
    ></div>
  </div>
</div>

<footer
  class="flex text-white justify-center bg-[#44316d] py-14 relative footer-with-noise"
>
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
          Download 🌼
        </a>
      </div>
    </div>

    <!-- LINK -->
    <div
      class="flex text-left flex-col md:flex-row gap-8 justify-center mt-16 w-full"
    >
      <div class="flex flex-col justify-start text-left w-full">
        <p>From our blog:</p>
        {#each posts as post}
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
            <img src="/youtube.svg" alt="youtube favicon" />
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
            <img src="/twitter.svg" alt="twitter favicon" />
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

<style>
  .footer-with-noise::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/backgrounds/noise.png");
    background-repeat: repeat;
    opacity: 0.4;
    pointer-events: none;
  }
</style>
