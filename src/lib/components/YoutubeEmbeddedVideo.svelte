<script lang="ts">
  export let src: string;
  export let title: string = "YouTube video player";
</script>

<div class="flex justify-center pb-7">
  <div class="w-full max-w-4xl">
    <div class="aspect-video w-full shadow-xl">
      <iframe
        {src}
        {title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="w-full h-full rounded-lg"
      />
    </div>
  </div>
</div>
