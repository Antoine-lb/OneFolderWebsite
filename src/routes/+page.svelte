<script lang="ts">
  // import { base } from '$app/paths';
  import LandingBlock from "$lib/components/LandingBlock.svelte";
  import LearnMoreBlock from "$lib/components/LearnMoreBlock.svelte";
  import {
    CTA_URL,
    CANNY_URL,
    YOUTUBE_CHANNEL_URL,
    GITHUB_LINK,
    YOUTUBE_URL,
  } from "$lib/constants";
  // import Navbar from "$lib/Navbar.svelte";
</script>

<svelte:head>
  <title>OneFolder</title>
</svelte:head>

<div class="noise-background">
  <!-- HERO -->
  <!-- HERO -->
  <!-- HERO -->
  <div class="flex flex-col-reverse max-w-6xl m-auto justify-center">
    <div class="md:-mt-4 m-auto text-center">
      <h1
        class="title-font z-0 text-7xl md:text-9xl drop-shadow-lg px-4 font-bold text-[#333]"
      >
        OneFolder
      </h1>

      <br />

      <a
        class="figma_video-button hover:bg-[#EDEFE9] transition-all !no-underline"
        href={YOUTUBE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/play.svg" alt="OneFolder logo" class="mr-1 fill-[#333]" />
        Everything explain in video
      </a>
      <br />
      <br />
      <a
        class="cta-button !text-white !no-underline px-5 py-3 text-2xl hover:px-6 transition-all"
        href={CTA_URL}
      >
        Download 🌼
      </a>
      <p class="mt-3 text-gray-500 italic">(open source)</p>
      <br />

      <br />
      <br />
    </div>

    <div class="px-4 -md:-mr-14">
      <img
        src="/hero-image-7.webp"
        alt="OneFolder logo"
        class="-mt-[1.5rem] md:-mt-14 m-auto w-[450px]"
      />
    </div>
  </div>

  <!-- MANIFESTO SECTION -->
  <div class="paper-sheet max-w-2xl mx-auto my-8">
    <div class="px-8 py-8 text-center">
      <h2 class="title-font text-5xl font-bold text-[#333] mb-4">Manifesto</h2>
      <p class="text-xl text-gray-600 italic mb-8">
        Your files, your folder, forever.
      </p>

      <div class="text-left max-w-3xl m-auto space-y-6">
        <div>
          <h3 class="title-font text-3xl font-bold text-[#333] mb-2">
            File-Over-App
          </h3>
          <p class="text-gray-700">
            Your pictures live as ordinary image files—no proprietary library,
            no lock-in.
          </p>
        </div>

        <div>
          <h3 class="title-font text-3xl font-bold text-[#333] mb-2">
            One Source of Truth
          </h3>
          <p class="text-gray-700">
            Every photo you care about sits in a single folder you control. Back
            it up or sync it anywhere; the structure stays intact.
          </p>
        </div>

        <div>
          <h3 class="title-font text-3xl font-bold text-[#333] mb-2">
            Open Standards First
          </h3>
          <p class="text-gray-700">
            We read and write well-known metadata (EXIF / XMP) instead of
            inventing new formats. Any modern viewer can understand your photos
            today—and in 20 years.
          </p>
        </div>

        <div>
          <h3 class="title-font text-3xl font-bold text-[#333] mb-2">
            No Silent Overwrites
          </h3>
          <p class="text-gray-700">
            Edits never overwrite originals without your say-so. Your folder
            remains a reliable archive, not a guessing game.
          </p>
        </div>

        <div>
          <h3 class="title-font text-3xl font-bold text-[#333] mb-2">
            Future-Proof Freedom
          </h3>
          <p class="text-gray-700">
            Because the rules live in the files, you can switch tools, change
            clouds, or hand the folder to your grand-kids—and everything still
            works.
          </p>
        </div>
      </div>
    </div>
  </div>

  <br />
  <br />

  <!-- METHOD SECTION -->
  <div class="paper-sheet-purple max-w-2xl mx-auto my-8">
    <div class="px-8 py-8 text-center">
      <h2 class="title-font text-4xl font-bold text-[#333] mb-6">
        How should you organize your files?
      </h2>

      <p class="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
        The OneFolder method is a opinionated framework for keeping every
        picture safe, searchable and portable. It helps to answer questions
        like:
      </p>

      <div
        class="text-left md:text-center max-w-2xl m-auto space-y-1 mb-8 text-xl md:text-3xl"
      >
        <div class="title-font text-[#555]">
          what folder structure should I follow?
        </div>

        <div class="title-font text-[#555]">
          what should I do with duplicated photos?
        </div>

        <div class="title-font text-[#555]">
          should I keep the HEIC or transform to JPEG?
        </div>

        <div class="title-font text-[#555]">what is the best video format?</div>
      </div>

      <a
        href="/method"
        class=" inline-flex items-center px-6 py-3 text-lg md:text-2xl font-semibold text-purple-600 border-2 border-purple-400 rounded-full hover:bg-purple-50 transition-all !no-underline"
      >
        Learn the full method →
      </a>
    </div>
  </div>

  <br />
  <br />

  <br />
  <br />

  <!-- APP SECTION -->
  <div class="max-w-4xl m-auto px-4 text-center">
    <h2 class="title-font text-5xl font-bold text-[#333] mb-4">
      The OneFolder App
    </h2>
    <p class="text-xl text-gray-700 mb-4 max-w-xl mx-auto leading-relaxed">
      Our open-source desktop app automates the boring bits by scanning your
      folder to flag duplicates and missing dates, writing clean EXIF and XMP
      tags so every viewer shows the right info.
    </p>
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

  <!-- DOWNLOAD SECTION -->
  <div class="max-w-2xl mx-auto text-center px-4">
    <h2 class="title-font text-4xl font-bold text-[#333] mb-4">
      Ready to try OneFolder?
    </h2>
    <p class="text-lg text-gray-700 mb-6">
      Download our free, open-source app for Windows, Mac, and Linux.
    </p>

    <div class="flex flex-col gap-3 justify-center items-center">
      <a
        href={CTA_URL}
        class="cta-button !text-white !no-underline px-6 py-3 text-xl hover:px-7 transition-all inline-flex items-center"
      >
        <span class="mr-2">📥</span>
        Download Now
      </a>

      <a
        href="https://github.com/OneFolderApp/OneFolder"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors !no-underline"
      >
        View source code
      </a>
    </div>
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
</div>

<style>
  .noise-background {
    background-color: #fcfcfc;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .paper-sheet {
    background-color: #fffef5;
    background-image: url("https://www.transparenttextures.com/patterns/handmade-paper.png");
    border-radius: 2px;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06),
      0 0 0 1px rgba(0, 0, 0, 0.05);
    transform: rotate(-0.5deg);
    transition: transform 0.2s ease;
  }

  .paper-sheet:hover {
    transform: rotate(0deg);
  }

  .paper-sheet-purple {
    background-color: #f8ebfb;
    background-image: url("https://www.transparenttextures.com/patterns/handmade-paper.png");
    border-radius: 2px;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06),
      0 0 0 1px rgba(0, 0, 0, 0.05);
    transform: rotate(0.5deg);
    transition: transform 0.2s ease;
  }

  .paper-sheet-purple:hover {
    transform: rotate(0deg);
  }

  /* Mobile responsive styles */
  @media (max-width: 768px) {
    .paper-sheet,
    .paper-sheet-purple {
      transform: rotate(0deg) !important;
      margin-left: 0.75rem;
      margin-right: 0.75rem;
    }

    .paper-sheet:hover,
    .paper-sheet-purple:hover {
      transform: rotate(0deg) !important;
    }
  }

  .figma_video-button {
    display: inline-flex;
    padding: 10px var(--Section-Margin, 24px);

    justify-content: center;
    align-items: center;
    gap: var(--Element-Spacing, 8px);
    border-radius: 32px;
    border: 1px solid var(--Colors-Grey-400, #bcc3c8);
    box-shadow:
      0px 0px 4px 2px rgba(22, 22, 22, 0.057),
      0px -1px 2px 2px rgba(22, 22, 22, 0.08) inset,
      0px 1px 2px 2px rgba(255, 255, 255, 0.12) inset;
  }
</style>
