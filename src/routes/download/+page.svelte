<script lang="ts">
  import { ALLUSION_DOWNLOAD_URL, ALLUSION_REPO_URL } from "$lib/constants";
</script>

<svelte:head>
  <title>OneFolder downloads moved</title>
</svelte:head>

<main class="download-page">
  <a class="brand-link" href="/">
    <img src="/favicon.svg" class="brand-link__icon" alt="OneFolder flower" />
    <span>OneFolder</span>
  </a>

  <section class="download-panel">
    <p class="download-panel__label">Project status</p>
    <h1>OneFolder downloads are no longer maintained</h1>
    <p>
      OneFolder is no longer maintained by us. If you are looking for a good
      alternative, use
      <a href={ALLUSION_REPO_URL} target="_blank" rel="noopener noreferrer"
        >RafaUC/Allusion</a
      >, an independently maintained fork.
    </p>
    <p>
      Downloads and ongoing support now come from that project, not from
      OneFolder. If you are porting an existing library or exports, double-check
      compatibility before moving important data.
    </p>

    <div class="download-actions">
      <a
        class="download-actions__primary"
        href={ALLUSION_DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open latest Allusion downloads
      </a>
      <a
        class="download-actions__secondary"
        href={ALLUSION_REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        View the Allusion fork
      </a>
    </div>
  </section>
</main>

<style>
  .download-page {
    align-items: center;
    background:
      radial-gradient(circle at top left, rgba(255, 85, 67, 0.12), transparent 32rem),
      #fcfbf5;
    color: #312b35;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    min-height: 100vh;
    padding: clamp(1.5rem, 5vw, 4rem) 1rem;
  }

  .brand-link {
    align-items: center;
    display: inline-flex;
    font-size: 1.35rem;
    gap: 0.55rem;
    justify-content: center;
  }

  .brand-link:hover {
    text-decoration: none;
  }

  .brand-link__icon {
    height: 2rem;
    width: 2rem;
  }

  .download-panel {
    background: #fff9e8;
    border: 1px solid rgba(68, 49, 109, 0.14);
    border-radius: 0.5rem;
    box-shadow:
      0 22px 60px rgba(49, 43, 53, 0.12),
      0 2px 12px rgba(49, 43, 53, 0.07);
    max-width: 42rem;
    padding: clamp(1.5rem, 5vw, 3rem);
  }

  .download-panel__label {
    color: #7a392f;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0;
    margin: 0 0 0.65rem;
    text-transform: uppercase;
  }

  h1 {
    color: #2e2633;
    font-size: clamp(2.1rem, 7vw, 4.4rem);
    font-weight: 800;
    letter-spacing: 0;
    line-height: 0.95;
    margin: 0 0 1.4rem;
  }

  p {
    font-size: 1.08rem;
    line-height: 1.6;
    margin: 0 0 1rem;
  }

  p a {
    color: #44316d;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 0.18em;
  }

  .download-actions {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-top: 1.8rem;
  }

  .download-actions__primary,
  .download-actions__secondary {
    border-radius: 999px;
    font-weight: 800;
    padding: 0.8rem 1.15rem;
    text-align: center;
  }

  .download-actions__primary {
    background: #44316d;
    color: #fffcec !important;
  }

  .download-actions__secondary {
    border: 1px solid rgba(68, 49, 109, 0.24);
    color: #44316d !important;
  }

  .download-actions__primary:hover,
  .download-actions__secondary:hover {
    text-decoration: none;
  }

  @media (max-width: 560px) {
    .download-actions {
      align-items: stretch;
      flex-direction: column;
    }
  }
</style>
