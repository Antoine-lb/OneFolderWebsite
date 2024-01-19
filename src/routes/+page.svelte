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
  <div class="md:-mt-4 m-auto text-center">
    <h1
      class="title-font text-7xl md:text-9xl drop-shadow-lg px-4 font-bold text-[#333]"
    >
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
    <p class="mt-3 text-gray-500 italic">(open source)</p>
    <br />

    <p class="text-3xl text-[#333] px-4 mt-5">
      File explorer made for <br /> pictures. No more Google
      <br class="hidden md:block" /> Photos lock-in.
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

<div class="grid md:grid-cols-2 gap-6 max-w-3xl m-auto p-2">
  <LandingBlock
    title="All in your file's metadata"
    description="Tags, faces and locations are stored in the file's metadata. Your organisation belongs to you and stay with your files."
    thumbnail="/landing-v3-thumbnails/metadata.webp"
    alt="Screenshot of the app a bike with tags 'Bike', 'Santiago', 'Summer'."
  />
  <LandingBlock
    title="Tags organization"
    description="Tags allow you to store and find your images faster. You can also create your own hierarchy between tags."
    thumbnail="/landing-v3-thumbnails/tags.webp"
    alt="Screenshot of multiple images with tags"
  />
  <LandingBlock
    title="Faces identification"
    description="You will be abble to add faces to your image's metadata. Soon, you could even automate face detection."
    thumbnail="/landing-v3-thumbnails/faces.webp"
    alt="A dog (pug) with a selection of his face"
  />
  <LandingBlock
    title="Additional description"
    description="All the information that doesn't fit in the file's metadata, can be stored in an additional description."
    thumbnail="/landing-v3-thumbnails/description.webp"
    alt="Old Photo with multiple people and a description of 'tate in hall au vin 1920"
  />
  <LandingBlock
    title="Calendar view"
    description="This Calendar view gives you a new way to find your photos, closer to the way we live."
    thumbnail="/landing-v3-thumbnails/calendar.webp"
    alt="A calndar with December 2023 and multiple stacks of images to show when they were taken"
  />
  <LandingBlock
    title="Map view"
    description="Enjoy the map view to find your files at the same where they were created, thanks to file's metadata."
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
  <p class=" text-gray-500 italic">(open source)</p>
  <br />
</div>

<br />
<p class="text-center text-2xl font-semibold text-[#333]">Learn more</p>
<br />
<div class="grid md:grid-cols-2 gap-6 max-w-2xl m-auto p-2">
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
