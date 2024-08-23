<script lang="ts">
  // import { base } from '$app/paths';
  import { CTA_URL, DISCORD_CHANNEl, GITHUB_LINK } from "$lib/constants";

  import YoutubeThumbnail from "$lib/components/YoutubeThumbnail.svelte";
  import DowloadPage from "$lib/DowloadPage.svelte";
</script>

<svelte:head>
  <title>MetaTagger - File Explorer for AI artist</title>
  <meta property="og:image" content="/banner.webp" />
</svelte:head>

<main class=" relative z-0">
  <br />

  <!-- HERO -->
  <!-- HERO -->
  <!-- HERO -->

  <img
    class="absolute top-0 z-0"
    src="/cover-image.webp"
    alt="a screenshot of the app"
  />

  <div class=" relative flex mt-5 m-auto justify-center !z-20">
    <div class="md:-mt-4 m-auto text-center">
      <p class=" text-7xl px-4 mt-5 space-mono-bold tracking-tighter">
        File explorer <br /> for
        <span class="space-mono-regular-italic custom-font-shadow"
          >AI artists</span
        >

        <br />
        <br />
        <YoutubeThumbnail />
      </p>
    </div>
  </div>

  <br />
  <br />
  <br />

  <div class="max-w-lg m-auto text-center text-xl">
    <p>
      OneFolder is a open source desktop app that reads images from your
      computer.
    </p>
    <br />
    <p>View the prompt and parameters used to generate the image.</p>
    <br />
    <p>Search and tag images.</p>
  </div>

  <br />
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
  <br />
  <div class="text-center underline mt-10 underline-offset-4">
    <a class="!text-white" href={DISCORD_CHANNEl} target="_blank"
      >💬 Join Discord</a
    >
    <br />
    <br />
    <a class="!text-white" href={GITHUB_LINK} target="_blank">
      ⭐️ Give us a star on Github</a
    >
  </div>
  <br />
  <br />
  <br />
  <br />
</main>

<style>
  @font-face {
    font-family: "Gaegu";
    src: url(/font/Gaegu/Gaegu-Bold.ttf) format("truetype");
  }

  main {
    /* background: #4a2e7e;
background: -webkit-linear-gradient(to right, #2a0845, #4a2e7e);
background: linear-gradient(to right, #2a0845, #4a2e7e); */
    background: #301d44; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #170320,
      #432662
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #170320,
      #432662
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: #eee;

    font-family: "Space Mono", monospace;
    font-weight: 400;
    font-style: normal;

    --dot-bg: #170320;
    --dot-color: #2f0444;
    --dot-size: 4px;
    --dot-space: 42px;
    background: linear-gradient(
          90deg,
          var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
          transparent 1%
        )
        center / var(--dot-space) var(--dot-space),
      linear-gradient(
          var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
          transparent 1%
        )
        center / var(--dot-space) var(--dot-space),
      var(--dot-color);
  }

  .cta-button {
    border-radius: 50px;
    background: #ff5543;
    box-shadow: 0px 0px 4px 2px rgba(255, 85, 67, 0.23),
      0px -1px 2px 2px rgba(22, 22, 22, 0.08) inset,
      0px 1px 2px 2px rgba(255, 255, 255, 0.12) inset;
  }

  .space-mono-bold {
    font-family: "Space Mono", monospace;
    font-weight: 700;
    font-style: normal;
  }

  .space-mono-regular-italic {
    font-family: "Space Mono", monospace;
    font-weight: 400;
    font-style: italic;
  }

  .custom-font-shadow {
    text-shadow: #fc0 1px 0 15px;
  }
</style>
