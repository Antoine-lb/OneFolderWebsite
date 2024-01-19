<script lang="ts">
  import { CTA_URL, LINUX_WAILIST_URL } from "$lib/constants";
  import { onMount } from "svelte";

  const REPO_LINK = "https://github.com/PhotoFolder/OneFolder/releases/latest";
  const REPO_LINK_API =
    "https://api.github.com/repos/PhotoFolder/OneFolder/releases/latest";

  let windowsLink = REPO_LINK;
  let macLink = REPO_LINK;
  let linuxLink = REPO_LINK;

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

<div class="px-4">
  <img
    src="/hero-image-7.webp"
    alt="OneFolder logo"
    class="-mt-[1.5rem] md:-mt-[18rem] m-auto w-[600px]"
  />
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
    href={windowsLink}
    on:click={() => {
      if (window) {
        window?.open(CTA_URL, "_blank")?.focus();
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
    href={macLink}
    on:click={() => {
      if (window) {
        window?.open(CTA_URL, "_blank")?.focus();
      }
    }}
  >
    <img src="/mac.svg" alt="OneFolder logo" class="mr-1" />

    Download for Mac
  </a>

  <div class="h-[1.5px] bg-[#bbb] w-full" />

  <a
    id="download-linux"
    href={LINUX_WAILIST_URL}
    target="_blank"
    class="rounded-full border-2 border-[#888] border-dashed !text-[#333] w-full flex justify-center !no-underline px-3 py-3 text-xl hover:bg-[#e9e9e9] transition-all"
  >
    Get notified when Linux is ready
  </a>
</div>
