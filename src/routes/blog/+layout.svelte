<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<div class=" min-h-[80vh]">
  <nav class="flex flex-col md:flex-row justify-between max-w-[75ch] m-auto">
    <a href="/blog" class=" flex items-center justify-center">
      <img src="/logo.webp" alt="logo" class="w-20 md:w-24" />

      <p class="text-3xl md:text-4xl drop-shadow-lg pl-2 font-bold text-[#333]">
        OneFolder
      </p>
      <p class="text-3xl md:text-4xl drop-shadow-lg pl-2 text-[#555]">Blog</p>
    </a>
    <div class=" flex items-center justify-center">
      <a class="!text-blue-600" href="/blog">Back to Blog</a>
      <div class="mx-2">|</div>
      <a class="!text-blue-600" href="/">Back to home</a>
    </div>
  </nav>

  <div class=" min-h-screen">
    <div class="max-w-[75ch] m-auto items-center p-3">
      <slot />
    </div>
  </div>
</div>
