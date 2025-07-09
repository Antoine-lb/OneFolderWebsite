<script lang="ts">
  export let showBlogLink = true;
</script>

<div class="paper-sheet max-w-2xl mx-auto my-8">
  <div class="px-8 py-6 text-center">
    <h2 class="title-font text-2xl md:text-3xl font-bold text-[#333] mb-3">
      Welcome to our blog! 🌼
    </h2>
    <p class="text-lg text-gray-700 mb-4 leading-relaxed">
      OneFolder is an open-source desktop app that helps you organize your
      photos using tags, faces, and metadata — all stored directly in your files
      so your organization travels with your photos forever.
    </p>
    <a
      href="/"
      class="text-lg text-[#333] hover:text-[#555] transition-colors underline underline-offset-4 font-medium"
    >
      Learn more about OneFolder →
    </a>
    {#if showBlogLink}
      <br />
      <a
        href="/blog"
        class="text-base text-gray-600 hover:text-gray-800 transition-colors underline underline-offset-4 font-medium mt-2 inline-block"
      >
        or see other articles
      </a>
    {/if}
  </div>
</div>

<style>
  .paper-sheet {
    background-color: #fffef5;
    background-image: url("https://www.transparenttextures.com/patterns/handmade-paper.png");
    border-radius: 2px;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06),
      0 0 0 1px rgba(0, 0, 0, 0.05);
    transform: rotate(-0.8deg);
    transition: transform 0.2s ease;
  }

  .paper-sheet:hover {
    transform: rotate(0deg);
  }

  /* Mobile responsive styles */
  @media (max-width: 768px) {
    .paper-sheet {
      transform: rotate(0deg) !important;
      margin-left: 0.75rem;
      margin-right: 0.75rem;
    }

    .paper-sheet:hover {
      transform: rotate(0deg) !important;
    }
  }
</style>
