<script lang="ts">
  // import { base } from '$app/paths';
  import LandingBlock from "$lib/components/LandingBlock.svelte";
  import LearnMoreBlock from "$lib/components/LearnMoreBlock.svelte";
  import {
    CTA_URL,
    CANNY_URL,
    YOUTUBE_CHANNEL_URL,
    GITHUB_LINK,
    YOUTUBE_MAIN_VIDEO_EMBEDED,
  } from "$lib/constants";
  // import Navbar from "$lib/Navbar.svelte";

  import { writable } from "svelte/store";
  import Modal, { bind } from "$lib/components/Modal.svelte";
  import YoutubeVideo from "$lib/components/YoutubeVideo.svelte";
  const modal = writable(null);
  const showModal = () =>
    modal.set(
      bind(YoutubeVideo, {
        link: YOUTUBE_MAIN_VIDEO_EMBEDED,
      })
    );
</script>

<svelte:head>
  <title>OneFolder</title>
</svelte:head>

<Modal
  show={$modal}
  unstyled={true}
  classBg=" z-10 fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-orange-100/[.9]"
  classWindowWrap="relative  "
  classWindow="relative max-w-full  mx-auto bg-indigo-900"
  classContent="relative  overflow-auto"
  closeButton={false}
>
  <!-- HERO -->
  <!-- HERO -->
  <!-- HERO -->
  <div class="flex flex-col-reverse max-w-6xl mt-5 m-auto justify-center">
    <div class="md:-mt-4 m-auto text-center">
      <h1
        class="title-font z-0 text-7xl md:text-9xl drop-shadow-lg px-4 font-bold text-[#333]"
      >
        OneFolder
      </h1>

      <br />
      <br />
      <a
        class="cta-button !text-white !no-underline px-5 py-3 text-2xl hover:px-6 transition-all"
        href={CTA_URL}
      >
        Give it a try 🌼
      </a>
      <p class="mt-3 text-gray-500 italic">(open source)</p>
      <br />

      <p class="text-3xl text-[#333] px-4 mt-5">
        File explorer made for <br /> pictures. No more Google
        <br class="hidden md:block" /> Photos lock-in.
      </p>

      <br />
      <br />
      <button
        class="figma_video-button hover:bg-[#EDEFE9] transition-all"
        on:click={showModal}
      >
        <img src="/play.svg" alt="OneFolder logo" class="mr-1 fill-[#333]" />

        Everything explain in video
      </button>
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
      title="File Metadata"
      description="Tags, faces and locations are stored in the file's metadata. Your organisation belongs to you and stay with your files."
      thumbnail="/landing-v4-thumbnails/metadata.webp"
      alt="Screenshot of the app a bike with tags 'Bike', 'Santiago', 'Summer'."
    />
    <LandingBlock
      title="Tags"
      description="Tags allow you to store and find your images faster. You can also create your own hierarchy between tags."
      thumbnail="/landing-v4-thumbnails/tags.webp"
      alt="Screenshot of multiple images with tags"
    />
    <!-- <LandingBlock
      title="Description"
      description="All the information that doesn't fit in the file's metadata, can be stored in an additional description."
      thumbnail="/landing-v4-thumbnails/description.webp"
      alt="Old Photo with multiple people and a description of 'tate in hall au vin 1920"
    /> -->
    <LandingBlock
      title="Faces"
      description="You will be abble to add faces to your image's metadata. Soon, you could even automate face detection."
      thumbnail="/landing-v4-thumbnails/face.webp"
      alt="A dog (pug) with a selection of his face"
      wip={true}
    />
    <LandingBlock
      title="HEIC"
      description="Easily preview all your HEIC photos. If you want, you can even convert them easily into JPEG."
      thumbnail="/landing-v4-thumbnails/heic.webp"
      alt="Easily preview all your HEIC photos. If you want, you can even convert them easily into JPEG."
      wip={true}
    />
    <LandingBlock
      title="Calendar"
      description="This Calendar view gives you a new way to find your photos, closer to the way we live."
      thumbnail="/landing-v4-thumbnails/calendar.webp"
      alt="A calndar with December 2023 and multiple stacks of images to show when they were taken"
      wip={true}
    />
    <LandingBlock
      title="Map"
      description="Enjoy the map view to find your files at the same where they were created, thanks to file's metadata."
      thumbnail="/landing-v4-thumbnails/map.webp"
      alt="A map of Chile with multiple stack of images to show where they were taken"
      wip={true}
    />
  </div>

  <br />
  <br />

  <!-- <p class="title-font text-5xl text-center text-[#444]">
    Are you missing <br />
    something ?
  </p> -->

  <div class="flex justify-center">
    <a
      class="m-auto mt-5 inline-flex !no-underline p-2 px-3 hover:px-4 transition-all rounded-full text-xl items-center shadow border border-gray-300"
      href={CANNY_URL}
      target="_blank"
    >
      <img src="/icons/thumb-up.svg" alt="Thumb up hand" class="mr-1" />

      Vote for your most needed feature
    </a>
  </div>

  <br />
  <br />

  <!-- <p class="title-font text-3xl text-center text-[#444] mb-3">
    May be you should still
  </p>
  <div class="flex items-center flex-col">
    <a
      class="cta-button !text-white !no-underline px-5 py-3 text-2xl hover:px-6 transition-all"
      href={CTA_URL}
    >
      Give it a try 🌼
    </a>
    <p class=" text-gray-500 italic">(open source)</p>
    <br />
  </div> -->

  <br />
  <p class="text-center text-2xl font-semibold text-[#333]">Learn more</p>
  <br />
  <div class="grid md:grid-cols-2 gap-7 max-w-2xl m-auto p-2">
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
      description="Our code and our roadmap are public."
      thumbnail="/landing-v3-learn-more/github-contributions.svg"
      altThumbnail="A subset of a Github contribution graph"
      link={GITHUB_LINK}
    />
  </div>

  <style>
    .figma_video-button {
      display: inline-flex;
      padding: 10px var(--Section-Margin, 24px);

      justify-content: center;
      align-items: center;
      gap: var(--Element-Spacing, 8px);
      border-radius: 32px;
      border: 1px solid var(--Colors-Grey-400, #bcc3c8);
      box-shadow: 0px 0px 4px 2px rgba(22, 22, 22, 0.057),
        0px -1px 2px 2px rgba(22, 22, 22, 0.08) inset,
        0px 1px 2px 2px rgba(255, 255, 255, 0.12) inset;
    }
  </style>
</Modal>
