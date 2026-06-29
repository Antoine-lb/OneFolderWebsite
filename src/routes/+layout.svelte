<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import { ALLUSION_DOWNLOAD_URL, ALLUSION_REPO_URL } from "$lib/constants";
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

<section class="maintenance-banner">
  <div class="maintenance-banner__inner">
    <div>
      <p class="maintenance-banner__eyebrow">Project status</p>
      <p class="maintenance-banner__copy">
        OneFolder is no longer maintained. If you are looking for a maintained
        alternative, use
        <a href={ALLUSION_REPO_URL} target="_blank" rel="noopener noreferrer"
          >RafaUC/Allusion</a
        >. Downloads are provided by that project, not by OneFolder. If you are
        porting data, double-check that your existing library and exports are
        compatible before moving anything important.
      </p>
    </div>
    <a
      class="maintenance-banner__button"
      href={ALLUSION_DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Allusion
    </a>
  </div>
</section>

<main>
  <slot />
</main>

<Footer posts={data.posts} />

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

  .maintenance-banner {
    background: #fff3d8;
    border-bottom: 1px solid rgba(68, 49, 109, 0.16);
    color: #2e2633;
    padding: 0.9rem 1rem;
    position: relative;
    z-index: 20;
  }

  .maintenance-banner__inner {
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 72rem;
  }

  .maintenance-banner__eyebrow {
    color: #7a392f;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0;
    margin: 0 0 0.2rem;
    text-transform: uppercase;
  }

  .maintenance-banner__copy {
    font-size: 0.98rem;
    line-height: 1.45;
    margin: 0;
  }

  .maintenance-banner__copy a {
    color: #44316d;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 0.18em;
  }

  .maintenance-banner__button {
    background: #44316d;
    border-radius: 999px;
    color: #fffcec !important;
    flex: 0 0 auto;
    font-weight: 700;
    padding: 0.7rem 1rem;
    text-align: center;
  }

  .maintenance-banner__button:hover {
    background: #342451;
    text-decoration: none;
  }

  @media (max-width: 760px) {
    .maintenance-banner__inner {
      align-items: flex-start;
      flex-direction: column;
    }

    .maintenance-banner__button {
      width: 100%;
    }
  }
</style>
