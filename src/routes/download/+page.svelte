<script>
  export let data;
  let redirectToForm = true;

  import {
    CHECK_OUT_FORM,
    YOUTUBE_PRESENTATION_VIDEO,
  } from "$lib/constants";

  console.log(data)
</script>



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
      href={data.windows}
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
      href={data.mac}
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
      href={data.linux}
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

    <a href={YOUTUBE_PRESENTATION_VIDEO} target="_blank" class="!text-[#0290EC] font-bold"
      >See the presentation video</a
    >
  </div>

  <br />
  <br />
  <br />