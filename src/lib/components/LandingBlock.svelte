<script lang="ts">
  export let title: string;
  export let description: string;
  export let alt: string;
  export let thumbnail: string | undefined = undefined;
  export let wip: boolean = false;
</script>

<div class=" rounded-lg p-3 pb-5">
  {#if thumbnail}
    <img src={thumbnail} {alt} />
  {/if}
  <div class="flex items-center">
    <h3 class="text-3xl my-3 mt-4 font-semibold">
      {title}
    </h3>
    {#if wip}
      <p class="ml-3 mt-2 bg-[#CCF7FC] text-[#0D707E] p-1 rounded">
        Work in progress
      </p>
    {/if}
  </div>
  <p class=" text-gray-700">{description}</p>
</div>
