<script lang="ts">
  export let src: string;
  export let alt: string;
  export let caption: string;
  export let rotation = 0;

  // Generate a small random rotation between -3 and +3 degrees
  const randomRotation = (Math.random() - 0.5) * 6;
  const totalRotation = rotation + randomRotation;
</script>

<div class="flex justify-center p-10 px-20">
  <div
    class="photo-frame p-4 shadow-xl inline-block border border-gray-100"
    style="transform: rotate({totalRotation}deg);"
  >
    <img {src} {alt} />
    {#if caption}
      <span class="caption flex justify-center text-xl">
        {caption}
      </span>
    {/if}
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");

  .photo-frame {
    background-color: #ffffff;
    background-image: url("/backgrounds/subtle-dark-vertical.png");
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
  }

  .caption {
    font-family: "Caveat", cursive;
    color: #444;
  }
</style>
