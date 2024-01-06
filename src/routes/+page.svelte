<script lang="ts">
  // import { base } from '$app/paths';
  import LandingBlock from "$lib/components/LandingBlock.svelte";
  import LearnMoreBlock from "$lib/components/LearnMoreBlock.svelte";
  import {
    CTA_URL,
    CANNY_URL,
    YOUTUBE_URL,
    YOUTUBE_CHANNEL_URL,
    GITHUB_LINK,
  } from "$lib/constants";
  // import Navbar from "$lib/Navbar.svelte";
</script>

<svelte:head>
  <title>OneFolder</title>
</svelte:head>

<!-- HERO -->
<!-- HERO -->
<!-- HERO -->
<div class="flex flex-col-reverse max-w-6xl mt-5 m-auto justify-center">
  <div class="-mt-4 m-auto text-center">
    <h1 class="title-font text-9xl drop-shadow-lg px-4 font-bold text-[#333]">
      OneFolder
    </h1>

    <br />
    <br />
    <a
      class="cta-button !text-white !no-underline px-5 py-3 text-2xl hover:px-6 transition-all"
      href={CTA_URL}
      target="_blank"
    >
      Give it a try 🌼
    </a>
    <p class="mt-3 text-gray-500 italic">(free and open source)</p>
    <br />

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

<p class="title-font text-5xl text-center text-[#444]">
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

<br />
<br />

<p class="title-font text-3xl text-center text-[#444] mb-3">
  May be you should still
</p>
<div class="flex items-center flex-col">
  <a
    class="cta-button !text-white !no-underline px-5 py-3 text-2xl hover:px-6 transition-all"
    href={CTA_URL}
    target="_blank"
  >
    Give it a try 🌼
  </a>
  <p class=" text-gray-500 italic">(free and open source)</p>
  <br />
</div>

<br />
<p class="text-center text-2xl font-semibold text-[#333]">Learn more</p>
<br />
<div class="grid grid-cols-2 gap-6 max-w-2xl m-auto">
  <LearnMoreBlock
    headerImage="/landing-v3-learn-more/youtube.svg"
    altHeader="Youtube logo and icon"
    description="Discover all our project updates and our video tutorial."
    thumbnail="/landing-v3-learn-more/youtube-thumbnail.webp"
    altThumbnail="Two thumbnails from our youtube channel"
    link={YOUTUBE_CHANNEL_URL}
  />
  <LearnMoreBlock
    headerImage="/landing-v3-learn-more/github.svg"
    altHeader="Github logo and icon"
    description="Our code and our roadmap are public, and you can even contribute to them."
    thumbnail="/landing-v3-learn-more/github-contributions.svg"
    altThumbnail="A subset of a Github contribution graph"
    link={GITHUB_LINK}
  />
</div>
