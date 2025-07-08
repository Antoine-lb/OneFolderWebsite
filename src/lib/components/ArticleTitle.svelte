<script lang="ts">
  export let slug = "";
  export let title: string;

  const id = title
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s/g, "-");
</script>

{#if slug}
  <h3
    class=" text-xl md:text-2xl drop-shadow font-bold text-[#333]"
    class:large={!slug}
    {id}
  >
    {title}
  </h3>
{:else}
  <h1
    class="  text-2xl md:text-4xl drop-shadow font-bold text-[#333]"
    class:large={!slug}
    {id}
  >
    {title}
  </h1>
{/if}

<style>
  .large {
    margin-top: calc(var(--spacing-unit) * 12);
    font-size: 2.2rem;
  }
</style>
