<script lang="ts">
  export let src: string;
  export let alt: string;
  export let caption: string;
  export let rotation = 0;
</script>

<div class="flex justify-center pb-7">
  <div class={`p-4  shadow-xl inline-block bg-[#efefef]`}>
    <img {src} {alt} />
    {#if caption}
      <span class="caption flex justify-center pt-4">
        {caption}
      </span>
    {/if}
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");
  .caption {
    font-family: "Caveat", cursive;
    color: #444;
  }
</style>
