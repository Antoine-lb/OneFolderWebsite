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
  <!-- Main Title -->
  <h3
    class="title-font text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-[#44316d] to-[#6b4e9d] bg-clip-text text-transparent"
  >
    Tips, tricks and updates?
  </h3>

  <!-- Subtitle -->
  <p class="text-sm mb-6 text-[#44316d]/70 font-light">
    Get news about OneFolder (~2 months)
  </p>

  {#if feedbackMessage}
    <div
      class="text-sm mb-4 px-4 py-2 rounded-lg max-w-xs mx-auto"
      class:text-green-700={isSuccess}
      class:text-red-700={!isSuccess}
      class:bg-green-100={isSuccess}
      class:bg-red-100={!isSuccess}
    >
      {feedbackMessage}
    </div>
  {/if}

  <form
    bind:this={newsletterForm}
    on:submit={handleNewsletterSubmit}
    class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
  >
    <input
      type="email"
      name="email"
      placeholder="your@email.com"
      class="px-4 py-3 rounded-lg text-[#333] text-sm flex-1 min-w-0 border-2 border-[#44316d]/20 bg-white backdrop-blur-sm focus:border-[#ff5643] focus:outline-none transition-all shadow-sm"
      required
      disabled={isSubmitting}
    />
    <button
      type="submit"
      disabled={isSubmitting}
      class="cta-button bg-gradient-to-r from-[#ff5643] to-[#ff4030] text-white px-6 py-3 rounded-lg text-lg font-medium hover:from-[#ff4030] hover:to-[#ff5643] transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 w-auto sm:w-auto mx-auto sm:mx-0"
    >
      {#if isSubmitting}
        <div class="inline-flex items-center gap-2">
          <div
            class="animate-spin w-3 h-3 border-2 border-white border-t-transparent rounded-full"
          ></div>
          Signing up...
        </div>
      {:else}
        <span class="flex items-center gap-2">
          Sign up
          <span class="text-lg">✨</span>
        </span>
      {/if}
    </button>
  </form>

  <p class="text-xs text-[#44316d]/60 font-light">
    <span class="font-medium text-[#44316d]">{subscriberCount}</span> people
    have signed up for it. This number refreshes automatically,<br
      class="hidden sm:block"
    />
    don't believe me? Try it!
  </p>
</div>
