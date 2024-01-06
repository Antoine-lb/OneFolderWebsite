<script lang="ts">
  // import { base } from '$app/paths';
  import LandingBlock from "$lib/components/LandingBlock.svelte";
  import { CTA_URL, CANNY_URL } from "$lib/constants";
  // import Navbar from "$lib/Navbar.svelte";
</script>

<svelte:head>
  <title>OneFolder</title>
</svelte:head>

<!-- HERO -->
<!-- HERO -->
<!-- HERO -->
<div class="flex flex-col-reverse max-w-6xl mt-5 m-auto justify-center">
  <div class="md:mt-10 m-auto text-center">
    <h1 class="title-font text-8xl drop-shadow-lg px-4 font-bold text-[#333]">
      OneFolder
    </h1>

    <div class="pl-4 mt-8 md:mt-3">
      <a
        class="m-auto mt-5 inline-flex font-bold !text-[#f3f3ec] !no-underline p-2 px-3 hover:px-4 transition-all rounded-full text-2xl items-center shadow-xl bg-[#FF5543]"
        href={CTA_URL}
        target="_blank"
      >
        Get early access
        <img src="/arrow.svg" alt="OneFolder logo" class=" ml-2 rounded" />
      </a>
      <br />
      <br />
    </div>

    <p class="text-3xl text-[#333] px-4 mt-5">
      File explorer made for <br /> pictures. No more Google <br /> Photos lock-in.
    </p>
  </div>

  <div class="px-4 -md:-mr-14">
    <!-- <img src="/landing/hero-image.webp" class=" mt-10 m-auto" alt="example of a plate" /> -->
    <img
      src="/hero-image-7.webp"
      alt="OneFolder logo"
      class="-mt-[1.5rem] md:-mt-14 m-auto w-[450px]"
    />
  </div>
</div>

<br />
<br />
<br />

<div class="grid grid-cols-2 gap-6 max-w-5xl m-auto">
  <LandingBlock
    title="All in your file's metadata"
    description="Tags, faces and locations are not in a separate database. They are stored in the file's metadata. OneFolder runs locally, but you can sync your files with any cloud provider or on a USB drive. You can do everything with your files, they are yours!"
    thumbnail="/landing-v3-thumbnails/metadata.webp"
    alt="Screenshot of the app a bike with tags 'Bike', 'Santiago', 'Summer'."
  />
  <LandingBlock
    title="Tags organization"
    description="Tags allow you to store and find your images faster. No more waste of time to decide which folder is the best, or create copies. All of that without losing your hierarchy organization."
    thumbnail="/landing-v3-thumbnails/tags.webp"
    alt="Screenshot of multiple images with tags"
  />
  <LandingBlock
    title="Faces identification"
    description="You can add faces to your image's metadata. Soon, you could even automate face detection. The same as Google or Apple do, but without losing privacy and full control."
    thumbnail="/landing-v3-thumbnails/faces.webp"
    alt="A dog (pug) with a selection of his face"
  />
  <LandingBlock
    title="Additional description"
    description="All the information that doesn't fit in the file's metadata (following the standard), can be stored in an additional description. Like that, you will never forget a story or an anecdote attached to a memory."
    thumbnail="/landing-v3-thumbnails/description.webp"
    alt="Old Photo with multiple people and a description of 'tate in hall au vin 1920"
  />
  <LandingBlock
    title="Calendar view"
    description="Add more depth to your file storage with this Calendar view. Another way to store and find our photos, closer to the way we live."
    thumbnail="/landing-v3-thumbnails/calendar.webp"
    alt="A calndar with December 2023 and multiple stacks of images to show when they were taken"
  />
  <LandingBlock
    title="Map view"
    description="Enjoy the map view to find your files at the same where they were created. OneFolder gives you the perfect box to store your memories."
    thumbnail="/landing-v3-thumbnails/map.webp"
    alt="A map of Chile with multiple stack of images to show where they were taken"
  />
</div>

<br />
<br />

<p class="title-font text-5xl text-center text-[#333]">
  Are you missing <br />
  something ?
</p>

<div class="flex justify-center">
  <a
    class="m-auto mt-5 inline-flex !no-underline p-2 px-3 hover:px-4 transition-all rounded-full text-xl items-center shadow border border-gray-300"
    href={CANNY_URL}
    target="_blank"
  >
    Share my dream feature
  </a>
</div>

<p class="title-font text-3xl text-center text-[#333]">
  May be you should still
</p>
