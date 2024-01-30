<script lang="ts">
  export let link: string;
</script>

<iframe
  src={`${link}&autoplay=1`}
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  class="h-[30rem] w-[50rem] m-auto"
/>
