<script lang="ts">
  // MADE THIS COMPONENT SO THAT EARLY DOWNLOAD PAGE DOESNT REDIRECT TO FORM, WILL BECOME OBSOLETE AT SOME POINT
  import {
    CHECK_OUT_FORM,
    LINUX_WAILIST_URL,
    YOUTUBE_MAIN_VIDEO_EMBEDED,
  } from "$lib/constants";
  import { onMount } from "svelte";

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

  export let redirectToForm = true;

  const REPO_LINK = "https://github.com/PhotoFolder/OneFolder/releases/latest";
  const REPO_LINK_API =
    "https://api.github.com/repos/PhotoFolder/OneFolder/releases/latest";

  let windowsLink = REPO_LINK;
  let macLink = REPO_LINK;
  let linuxLink = REPO_LINK;

  let windowsLinkRaw =
    "https://github.com/OneFolderApp/OneFolder/releases/download/1.0.0/OneFolder-Setup-1.0.0.exe";
  let macLinkRaw =
    "https://github.com/OneFolderApp/OneFolder/releases/download/1.0.0/OneFolder-1.0.0.dmg";
  let linuxLinkRaw =
    "https://github.com/OneFolderApp/OneFolder/releases/download/1.0.0/OneFolder-1.0.0.AppImage";

  onMount(() => {
    setDownloadLinks();
  });

  async function setDownloadLinks() {
    const response = await fetch(REPO_LINK_API, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });
    const json = await response.json();
    const assets = json.assets;
    for (let i = 0; i < assets.length; i++) {
      const asset = assets[i];
      if (
        asset.content_type.startsWith("application") &&
        asset.name.startsWith("OneFolder-")
      ) {
        if (asset.name.endsWith(".exe")) {
          windowsLink = asset.browser_download_url;
        } else if (asset.name.endsWith(".dmg")) {
          macLink = asset.browser_download_url;
        } else if (asset.name.endsWith(".AppImage")) {
          linuxLink = asset.browser_download_url;
        }
      }
    }
  }
</script>

<Modal
  show={$modal}
  unstyled={true}
  classBg=" z-10 fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-orange-100/[.9]"
  classWindowWrap="relative  "
  classWindow="relative bg-indigo-900"
  classContent="relative  overflow-auto"
  closeButton={false}
>
  <header class="fixed flex justify-between w-full p-3">
    <a class=" flex items-center gap-2 !no-underline" href="/">
      <img src="/favicon.svg" class="h-8" alt="a small flower" />
      <span class="text-2xl text-[#333] font-light">OneFolder</span>
    </a>
  </header>

  <br />
  <br />
  <br />
  <div class="px-4">
    <!-- <img
      src="/hero-image-7.webp"
      alt="OneFolder logo"
      class="-mt-[1.5rem] md:-mt-[18rem] m-auto w-[600px]"
    /> -->
    <img src="/logo.webp" alt="OneFolder logo" class=" m-auto w-[100px]" />
  </div>
  <h1
    class="text-center title-font text-4xl md:text-7xl drop-shadow-lg px-4 font-bold text-[#333]"
  >
    OneFolder
  </h1>
  <h2 class="text-center font-bold text-2xl mt-12 mb-3 text-[#333]">
    Dowload Page
  </h2>

  <div
    class="flex flex-col items-center gap-6 max-w-md w-full m-auto text-[#333]"
  >
    <div class="bg-[#FDDEDE] text-center p-4 rounded">
      <p class="font-bold">Warning before using OneFolder</p>
      <p class="font-light">
        No matter how battle tested a software can be, always have backups.
      </p>
    </div>

    <div class="h-[1.5px] bg-[#bbb] w-full" />

    <a
      id="download-windows"
      href={windowsLinkRaw}
      on:click={() => {
        if (redirectToForm && window) {
          window?.open(CHECK_OUT_FORM, "_blank")?.focus();
        }
      }}
      class="cta-button w-full flex justify-center !text-white !no-underline px-3 py-3 text-xl hover:bg-[#ff5643e2] transition-all"
    >
      <img src="/windows.svg" alt="OneFolder logo" class="mr-1" />
      Download for Windows
    </a>
    <a
      class="cta-button w-full flex justify-center !text-white !no-underline px-3 py-3 text-xl hover:bg-[#ff5643e2] transition-all"
      id="download-mac"
      href={macLinkRaw}
      on:click={() => {
        if (redirectToForm && window) {
          window?.open(CHECK_OUT_FORM, "_blank")?.focus();
        }
      }}
    >
      <img src="/mac.svg" alt="OneFolder logo" class="mr-1" />

      Download for Mac
    </a>
    <a
      class="cta-button w-full flex justify-center !text-white !no-underline px-3 py-3 text-xl hover:bg-[#ff5643e2] transition-all"
      id="download-mac"
      href={linuxLinkRaw}
      on:click={() => {
        if (redirectToForm && window) {
          window?.open(CHECK_OUT_FORM, "_blank")?.focus();
        }
      }}
    >
      <img src="/linux.svg" alt="OneFolder logo" class="mr-1" />
      Download for Linux
    </a>

    <div class="h-[1.5px] bg-[#bbb] w-full" />

    <button on:click={showModal} class="!text-[#0290EC] font-bold"
      >See the presentation video</button
    >
  </div>

  <br />
  <br />
  <br />
</Modal>
