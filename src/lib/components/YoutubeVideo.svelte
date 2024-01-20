<script lang="ts">
  export let link: string;
</script>

<div class="video-wrapper">
  <iframe
    src={`${link}&autoplay=1`}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    class="w-full h-[30rem]"
  />
</div>

<style>
  .video-wrapper {
    aspect-ratio: 16 / 9;
  }

  .video-wrapper iframe {
    width: 100%;
    height: 100%;
  }
</style>
