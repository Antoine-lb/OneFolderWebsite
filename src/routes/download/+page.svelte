<script lang="ts">
  import { enhance } from "$app/forms";
  import { tick } from "svelte";
  export let data;
  export let form;

  import { YOUTUBE_PRESENTATION_VIDEO } from "$lib/constants";

  // State for the interactive download flow
  let showDownloadButtons = true;
  let showForm = false;
  let isSubmitting = false;

  // Function to handle download clicks
  async function handleDownload(url: string, platform: string) {
    // Track the download via API
    try {
      await fetch('/api/download-track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform: platform,
          userAgent: navigator.userAgent
        })
      });
    } catch (error) {
      console.error('Error tracking download:', error);
      // Don't prevent download if tracking fails
    }

    // Start the download on same page
    const link = document.createElement("a");
    link.href = url;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Update UI state immediately
    showDownloadButtons = false;
    showForm = true;

    // Wait for the form to render, then focus on first field
    await tick();
    const firstField = document.getElementById("currentlyUsing");
    if (firstField) {
      firstField.focus();
    }
  }
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

<div
  class="flex flex-col items-center gap-6 max-w-md w-full m-auto text-[#333]"
>
  <div class="bg-[#FDDEDE] text-center p-4 rounded">
    <p class="font-bold">Warning</p>
    <p class="font-light">
      No matter how battle tested a software can be, always have backups.
    </p>
  </div>
  <br />

  {#if showDownloadButtons}
    <button
      on:click={() => handleDownload(data.windows, "Windows")}
      class="cta-button w-full flex justify-center !text-white !no-underline px-3 py-3 text-xl hover:bg-[#ff5643e2] transition-all"
    >
      <img src="/windows.svg" alt="Windows" class="mr-1" />
      Download for Windows
    </button>

    <button
      on:click={() => handleDownload(data.mac, "Mac")}
      class="cta-button w-full flex justify-center !text-white !no-underline px-3 py-3 text-xl hover:bg-[#ff5643e2] transition-all"
    >
      <img src="/mac.svg" alt="Mac" class="mr-1" />
      Download for Mac
    </button>

    <button
      on:click={() => handleDownload(data.linux, "Linux")}
      class="cta-button w-full flex justify-center !text-white !no-underline px-3 py-3 text-xl hover:bg-[#ff5643e2] transition-all"
    >
      <img src="/linux.svg" alt="Linux" class="mr-1" />
      Download for Linux
    </button>
  {/if}
</div>

{#if showForm}
  <!-- Mailing List Form -->
  <div class="max-w-md w-full m-auto mt-2 px-4">
    <p class="text-center text-sm text-gray-600 mb-4">
      The download will start in a couple of seconds. If it doesn't work, reload
      the page or reach out to
      <a
        href="mailto:antoine@onefolder.app"
        class="text-[#ff5643] hover:underline">antoine@onefolder.app</a
      >
    </p>

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

    <form
      method="POST"
      action="?/subscribe"
      use:enhance={() => {
        isSubmitting = true;
        return async ({ update }) => {
          isSubmitting = false;
          await update();
        };
      }}
      class="space-y-6"
    >
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
        disabled={isSubmitting}
        class="w-full bg-[#ff5643] text-white py-3 px-4 rounded-md hover:bg-[#ff5643e2] transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {#if isSubmitting}
          <div class="inline-flex items-center gap-2">
            <div
              class="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"
            ></div>
            Submitting...
          </div>
        {:else}
          Submit
        {/if}
      </button>
    </form>
  </div>
{/if}

<br />
<br />
<br />
