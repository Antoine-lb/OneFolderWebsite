<script>
  import { page } from "$app/stores";

  $: status = $page.status;
  $: message = $page.error?.message;

  // Get user-friendly error messages
  function getErrorMessage(status) {
    switch (status) {
      case 404:
        return "Page Not Found";
      case 500:
        return "Internal Server Error";
      case 503:
        return "Service Unavailable";
      default:
        return "Something went wrong";
    }
  }

  function getErrorDescription(status) {
    switch (status) {
      case 404:
        return "Sorry, the page you're looking for doesn't exist.";
      case 500:
        return "We encountered an unexpected error. Please try again later.";
      case 503:
        return "The service is temporarily unavailable. Please try again later.";
      default:
        return "An unexpected error occurred.";
    }
  }
</script>

<svelte:head>
  <title>Error {status} | OneFolder</title>
</svelte:head>

<div class="error-container">
  <div class="error-content">
    <h1 class="error-code title-font">{status}</h1>
    <h2 class="error-message">{getErrorMessage(status)}</h2>
    <p class="error-description">{getErrorDescription(status)}</p>

    {#if message && status !== 404}
      <details class="error-details">
        <summary>Error Details</summary>
        <p class="error-technical">{message}</p>
      </details>
    {/if}

    <div class="error-actions">
      <a href="/" class="btn-home">Go Home</a>
      <button onclick="history.back()" class="btn-back">Go Back</button>
    </div>
  </div>
</div>

<style>
  .error-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    padding: 2rem;
    text-align: center;
  }

  .error-content {
    max-width: 500px;
    width: 100%;
  }

  .error-code {
    font-size: 8rem;
    font-weight: 700;
    margin: 0;
    color: #ef4444;
    line-height: 1;
  }

  .error-message {
    font-size: 2rem;
    font-weight: 600;
    margin: 1rem 0;
    color: #374151;
  }

  .error-description {
    font-size: 1.125rem;
    color: #6b7280;
    margin: 1.5rem 0;
    line-height: 1.6;
  }

  .error-details {
    margin: 2rem 0;
    text-align: left;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  .error-details summary {
    cursor: pointer;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
  }

  .error-technical {
    font-family: "Courier New", monospace;
    font-size: 0.875rem;
    color: #ef4444;
    margin: 0.5rem 0 0 0;
    word-break: break-word;
  }

  .error-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }

  .btn-home,
  .btn-back {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
    cursor: pointer;
    font-size: 1rem;
    border: none;
  }

  .btn-home {
    background: #3b82f6;
    color: white;
  }

  .btn-home:hover {
    background: #2563eb;
    transform: translateY(-1px);
  }

  .btn-back {
    background: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
  }

  .btn-back:hover {
    background: #e5e7eb;
    transform: translateY(-1px);
  }

  @media (max-width: 640px) {
    .error-code {
      font-size: 6rem;
    }

    .error-message {
      font-size: 1.5rem;
    }

    .error-actions {
      flex-direction: column;
      align-items: center;
    }

    .btn-home,
    .btn-back {
      width: 100%;
      max-width: 200px;
    }
  }
</style>
