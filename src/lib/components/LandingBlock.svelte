<script lang="ts">
  export let title: string;
  export let description: string;
  export let alt: string;
  export let thumbnail: string | undefined = undefined;
</script>

<div class="border border-gray-300 rounded-xl shadow p-5">
  {#if thumbnail}
    <img src={thumbnail} {alt} />
  {/if}
  <h3 class="text-3xl my-3 font-semibold">{title}</h3>
  <p class=" text-gray-700">{description}</p>
</div>
