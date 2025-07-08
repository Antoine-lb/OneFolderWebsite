<script lang="ts">
  export let src: string;
  export let title: string = "YouTube video player";
</script>

<div class="flex justify-center p-10 w-full">
  <div class="film-strip w-full">
    <!-- Top sprocket holes -->
    <div class="sprocket-row top">
      {#each Array(9) as _, i}
        <div class="sprocket-hole"></div>
      {/each}
    </div>

    <!-- Video container -->
    <div class="video-container">
      <iframe
        {src}
        {title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="video-frame"
      />
    </div>

    <!-- Bottom sprocket holes -->
    <div class="sprocket-row bottom">
      {#each Array(9) as _, i}
        <div class="sprocket-hole"></div>
      {/each}
    </div>
  </div>
</div>

<style>
  .film-strip {
    background-color: #1a1a1ae4;
    padding: 5px;
    border-radius: 2px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    /* max-width: 1200px; */
    position: relative;
  }

  .sprocket-row {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    margin: 4px 0;
  }

  .sprocket-hole {
    width: 20px;
    height: 18px;
    background-color: #f0f0f0;
    border-radius: 1px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  .video-container {
    margin: 6px 0;
    border: 0.5px solid #2a2a2a;
    border-radius: 4px;
    overflow: hidden;
  }

  .video-frame {
    width: 100%;
    aspect-ratio: 16/9;
    display: block;
  }

  /* Add some film grain texture */
  .film-strip::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      radial-gradient(
        circle at 25% 25%,
        rgba(255, 255, 255, 0.02) 1px,
        transparent 1px
      ),
      radial-gradient(
        circle at 75% 75%,
        rgba(255, 255, 255, 0.01) 1px,
        transparent 1px
      );
    background-size:
      4px 4px,
      6px 6px;
    pointer-events: none;
    border-radius: 2px;
  }
</style>
