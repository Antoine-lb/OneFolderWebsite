<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<div class="min-h-[80vh]">
  <!-- Blue header background spanning full width -->
  <div style="background-color: rgb(49, 57, 251);" class="w-full">
    <nav
      class="flex flex-col md:flex-row justify-between max-w-[75ch] m-auto py-2 px-3"
    >
      <a href="/" class="flex items-center justify-center !no-underline">
        <img src="/logo_flower_orange.png" alt="OneFolder logo" class="w-8" />
        <p
          class="title-font text-3xl md:text-4xl drop-shadow-lg pl-2 font-bold text-white"
        >
          OneFolder
        </p>
      </a>
      <div class="flex items-center justify-center">
        <a
          class="!text-blue-100 hover:!text-white transition-colors"
          href="/blog">See all articles</a
        >
      </div>
    </nav>
  </div>

  <!-- Wave pattern outside blue background -->
  <div
    class="w-full h-8 bg-repeat-x"
    style="background-image: url('/backgrounds/blue-wave.svg'); background-size: auto 100%;"
  ></div>

  <!-- Main content area with textured background -->
  <div class="min-h-screen blog-background">
    <div class="max-w-[75ch] m-auto items-center p-3">
      <slot />
    </div>
  </div>
</div>

<style>
  .blog-background {
    background-color: #ffffff;
    background-image: url("https://www.transparenttextures.com/patterns/tex2res5.png");
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  }
</style>
