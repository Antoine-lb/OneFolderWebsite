<script lang="ts">
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

<div class="flex flex-col items-center gap-5 max-w-xs w-full m-auto">
  <div class="bg-[#FDDEDE] text-center p-2 rounded">
    <p class="font-bold">Warning before using OneFolder</p>
    <p class="font-light">
      No matter how battle tested a software can be, always have backups.
    </p>
  </div>

  <div class="h-[1.5px] bg-[#bbb] w-full" />

  <a
    id="download-windows"
    href={windowsLink}
    class="cta-button w-full flex justify-center !text-white !no-underline px-3 py-3 text-xl hover:bg-[#ff5643e2] transition-all"
  >
    <img src="/windows.svg" alt="OneFolder logo" class="mr-1" />
    Download for Windows
  </a>
  <a
    class="cta-button w-full flex justify-center !text-white !no-underline px-3 py-3 text-xl hover:bg-[#ff5643e2] transition-all"
    id="download-mac"
    href={macLink}
  >
    <img src="/mac.svg" alt="OneFolder logo" class="mr-1" />

    Download for Mac
  </a>

  <div class="h-[1.5px] bg-[#bbb] w-full" />

  <a
    id="download-linux"
    class="cta-button-off w-full flex justify-center !no-underline px-3 py-3 text-xl hover:bg-[#ff5643e2] transition-all"
  >
    Get notified when Linux is ready
  </a>
</div>
