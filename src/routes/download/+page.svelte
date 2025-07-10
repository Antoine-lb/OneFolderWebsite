<script>
  import { enhance } from "$app/forms";
  export let data;
  export let form;
  let redirectToForm = true;

  import { CHECK_OUT_FORM, YOUTUBE_PRESENTATION_VIDEO } from "$lib/constants";
</script>

<header class="fixed flex justify-between w-full p-3">
  <a class=" flex items-center gap-2 !no-underline" href="/">
    <img src="/favicon.svg" class="h-8" alt="a small flower" />
    <span class="text-2xl text-[#333] font-light">OneFolder</span>
  </a>
</header>

<br />
<br />
<br />
<div class="px-4">
  <img src="/logo.webp" alt="OneFolder logo" class=" m-auto w-[100px]" />
</div>
<h1
  class="text-center title-font text-4xl md:text-7xl drop-shadow-lg px-4 font-bold text-[#333]"
>
  OneFolder
</h1>
<h2 class="text-center font-bold text-2xl mt-12 mb-3 text-[#333]">
  Dowload Page
</h2>

<div
  class="flex flex-col items-center gap-6 max-w-md w-full m-auto text-[#333]"
>
  <div class="bg-[#FDDEDE] text-center p-4 rounded">
    <p class="font-bold">Warning before using OneFolder</p>
    <p class="font-light">
      No matter how battle tested a software can be, always have backups.
    </p>
  </div>

  <div class="h-[1.5px] bg-[#bbb] w-full"></div>

  <a
    id="download-windows"
    href={data.windows}
    on:click={() => {
      if (redirectToForm && window) {
        window?.open(CHECK_OUT_FORM, "_blank")?.focus();
      }
    }}
    class="cta-button w-full flex justify-center !text-white !no-underline px-3 py-3 text-xl hover:bg-[#ff5643e2] transition-all"
  >
    <img src="/windows.svg" alt="OneFolder logo" class="mr-1" />
    Download for Windows
  </a>
  <a
    class="cta-button w-full flex justify-center !text-white !no-underline px-3 py-3 text-xl hover:bg-[#ff5643e2] transition-all"
    id="download-mac"
    href={data.mac}
    on:click={() => {
      if (redirectToForm && window) {
        window?.open(CHECK_OUT_FORM, "_blank")?.focus();
      }
    }}
  >
    <img src="/mac.svg" alt="OneFolder logo" class="mr-1" />

    Download for Mac
  </a>
  <a
    class="cta-button w-full flex justify-center !text-white !no-underline px-3 py-3 text-xl hover:bg-[#ff5643e2] transition-all"
    id="download-mac"
    href={data.linux}
    on:click={() => {
      if (redirectToForm && window) {
        window?.open(CHECK_OUT_FORM, "_blank")?.focus();
      }
    }}
  >
    <img src="/linux.svg" alt="OneFolder logo" class="mr-1" />
    Download for Linux
  </a>
</div>

<!-- Mailing List Form -->
<div class="max-w-md w-full m-auto mt-12 px-4">
  <h3 class="text-center font-bold text-2xl mb-6 text-[#333]">
    Time for questions?
  </h3>

  {#if form?.success}
    <div
      class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center"
    >
      {form.message}
    </div>
  {:else if form?.error}
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center"
    >
      {form.error}
    </div>
  {/if}

  <form method="POST" action="?/subscribe" use:enhance class="space-y-6">
    <div>
      <label
        for="currentlyUsing"
        class="block text-sm font-medium text-[#333] mb-2"
      >
        What are you using now to store and sort your files?
      </label>
      <textarea
        id="currentlyUsing"
        name="currentlyUsing"
        placeholder="Tell us about your current workflow..."
        rows="3"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5643] focus:border-transparent text-[#333]"
      ></textarea>
    </div>

    <div>
      <label
        for="howDidYouHear"
        class="block text-sm font-medium text-[#333] mb-2"
      >
        How did you land on our website?
      </label>
      <input
        id="howDidYouHear"
        name="howDidYouHear"
        type="text"
        placeholder="Search engine, social media, friend recommendation..."
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5643] focus:border-transparent text-[#333]"
      />
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-[#333] mb-2">
        Enter your email if you want news from us (~2 months)
      </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="your@email.com"
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff5643] focus:border-transparent text-[#333]"
      />
    </div>

    <button
      type="submit"
      class="w-full bg-[#ff5643] text-white py-3 px-4 rounded-md hover:bg-[#ff5643e2] transition-all font-medium"
    >
      Submit
    </button>
  </form>
</div>

<br />
<br />
<br />
