<script lang="ts">
  import { onMount } from "svelte";

  const REPO_LINK = "https://github.com/PhotoFolder/OneFolder/releases/latest";
  const REPO_LINK_API =
    "https://api.github.com/repos/PhotoFolder/OneFolder/releases/latest";

  let windowsDownloadLink: HTMLElement | null;
  let macDownloadLink: HTMLElement | null;
  let linuxDownloadLink: HTMLElement | null;

  onMount(() => {
    windowsDownloadLink = document.getElementById("download-windows");
    macDownloadLink = document.getElementById("download-mac");
    linuxDownloadLink = document.getElementById("download-linux");
    highlightOSButton();
    setDownloadLinks();
  });
  // Highlight download button for user's platform
  function highlightOSButton() {
    var ua = navigator.userAgent;
    var link;
    if (ua.indexOf("Win") !== -1) {
      link = windowsDownloadLink;
    } else if (ua.indexOf("Mac") !== -1) {
      link = macDownloadLink;
    } else if (ua.indexOf("Linux") !== -1) {
      link = linuxDownloadLink;
    }
    if (link) {
      link.classList.remove("alt");
      link.classList.add("strong");
    }
  }

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
        asset.name.startsWith("OneFolder-") &&
        windowsDownloadLink &&
        macDownloadLink &&
        linuxDownloadLink
      ) {
        if (asset.name.endsWith(".exe")) {
          windowsDownloadLink.href = asset.browser_download_url;
        } else if (asset.name.endsWith(".dmg")) {
          macDownloadLink.href = asset.browser_download_url;
        } else if (asset.name.endsWith(".AppImage")) {
          linuxDownloadLink.href = asset.browser_download_url;
        }
      }
    }
  }
</script>

<div class="  flex flex-col justify-between">
  <div class="px-4">
    <!-- <img src="/landing/hero-image.webp" class=" mt-10 m-auto" alt="example of a plate" /> -->
    <img
      src="/hero-image-7.webp"
      alt="OneFolder logo"
      class="-mt-[1.5rem] md:-mt-8 m-auto w-[600px]"
    />
  </div>
  <h1 class="font-bold text-[#444] text-4xl text-center my-8">
    OneFolder <span
      class="font-bold text-[#e89b03] fill-[#fcb322] border-[#fcb322ca] px-3 pb-1 rounded-full inline-flex items-center border-2"
    >
      Beta

      <svg
        class="inline ml-2 h-8"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"
        /></svg
      >
    </span>
  </h1>

  <div class="flex flex-col items-center mt-12 gap-3">
    <a
      id="download-windows"
      href={REPO_LINK}
      class="inline-flex text-[#f3f3ec] p-2 px-3 hover:px-4 transition-all rounded-xl text-2xl items-center shadow-xl bg-[#FF5543]"
    >
      Download for Windows
    </a>
    <a
      class="inline-flex text-[#f3f3ec] p-2 px-3 hover:px-4 transition-all rounded-xl text-2xl items-center shadow-xl bg-[#FF5543]"
      id="download-mac"
      href={REPO_LINK}
    >
      Download for Mac
    </a>
    <p class="text-[#777] -mt-2 italic">intel/silicon</p>
    <p class="text-[#555555] mt-7 italic">comming very very soon:</p>

    <a
      id="download-linux"
      href={REPO_LINK}
      class="hidden bg-[#fff] !text-[#646464] border-2 border-[#7f7f7f] border-dashed p-2 px-3 rounded-xl text-2xl items-center cursor-progress"
    >
      Download for Linux
    </a>

    <a
      id="download-linux"
      class="inline-flex bg-[#fff] !text-[#646464] border-2 border-[#7f7f7f] border-dashed p-2 px-3 rounded-xl text-2xl items-center cursor-progress"
    >
      Download for Linux
    </a>

    <p class="text-[#555555] mt-8 italic">comming not so soon:</p>
    <div
      class="inline-flex bg-[#fff] text-[#646464] border-2 border-[#7f7f7f] border-dashed p-2 px-3 rounded-xl text-2xl items-center cursor-progress"
    >
      iOS App
    </div>
    <div
      class="inline-flex bg-[#fff] text-[#646464] border-2 border-[#7f7f7f] border-dashed p-2 px-3 rounded-xl text-2xl items-center cursor-progress"
    >
      Android App
    </div>
  </div>
</div>
