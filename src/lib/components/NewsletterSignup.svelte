<script lang="ts">
  import { tick } from "svelte";

  export let initialCount: number = 0;

  let newsletterForm: HTMLFormElement;
  let feedbackMessage = "";
  let isSuccess = false;
  let isSubmitting = false;
  let subscriberCount = initialCount;

  async function handleNewsletterSubmit(event: Event) {
    event.preventDefault();
    isSubmitting = true;
    feedbackMessage = "";

    const formData = new FormData(newsletterForm);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        isSuccess = true;
        feedbackMessage = result.message;
        newsletterForm.reset();
        subscriberCount = subscriberCount + 1; // Update counter
      } else {
        isSuccess = false;
        feedbackMessage = result.error;
      }
    } catch (error) {
      isSuccess = false;
      feedbackMessage = "Something went wrong. Please try again.";
    } finally {
      isSubmitting = false;
    }
  }
</script>

<!-- Newsletter Signup -->
<div class="mb-6 text-center">
  <p class="text-sm mb-3 opacity-80">Get news about OneFolder (~2 months)</p>

  {#if feedbackMessage}
    <div
      class="text-sm mb-3"
      class:text-green-300={isSuccess}
      class:text-red-300={!isSuccess}
    >
      {feedbackMessage}
    </div>
  {/if}

  <form
    bind:this={newsletterForm}
    on:submit={handleNewsletterSubmit}
    class="flex flex-col sm:flex-row gap-2 max-w-xs mx-auto"
  >
    <input
      type="email"
      name="email"
      placeholder="your@email.com"
      class="px-3 py-2 rounded text-[#333] text-sm flex-1 min-w-0"
      required
      disabled={isSubmitting}
    />
    <button
      type="submit"
      disabled={isSubmitting}
      class="bg-[#ff5643] text-white px-4 py-2 rounded text-sm hover:bg-[#ff5643e2] transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {#if isSubmitting}
        <div class="inline-flex items-center gap-2">
          <div
            class="animate-spin w-3 h-3 border-2 border-white border-t-transparent rounded-full"
          ></div>
          Signing up...
        </div>
      {:else}
        Sign up
      {/if}
    </button>
  </form>

  <p class="text-xs opacity-60 mt-3">
    {subscriberCount} people have signed up for it. This number refreshes automatically,
    don't believe me? Try it!
  </p>
</div>
