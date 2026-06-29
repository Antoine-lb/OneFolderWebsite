<script lang="ts">
  import { onMount } from "svelte";
  import { ALLUSION_DOWNLOAD_URL } from "$lib/constants";

  onMount(() => {
    window.location.replace(ALLUSION_DOWNLOAD_URL);
  });
</script>
