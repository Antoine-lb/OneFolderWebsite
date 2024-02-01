<script lang="ts">
  export let headerImage: string | undefined = undefined;
  export let altHeader: string;
  export let description: string;
  export let thumbnail: string | undefined = undefined;
  export let altThumbnail: string;
  export let link: string;
</script>

<div class="border border-gray-300 rounded-xl shadow p-5">
  {#if headerImage}
    <img src={headerImage} alt={altHeader} />
  {/if}
  <p class=" text-gray-700 my-3">{description}</p>

  {#if thumbnail}
    <img class="w-full" src={thumbnail} alt={altThumbnail} />
  {/if}
  <br />
  <a
    href={link}
    target="_blank"
    class="inline-flex items-center border border-gray-500 shadow border-full px-3 py-1 rounded-full font-semibold !no-underline hover:px-4 transition-all"
  >
    <img src="/arrow.svg" alt="OneFolder logo" class=" mx-1 h-4 fill-black" /> Visit</a
  >
</div>
