<script lang="ts">
  import { onMount } from 'svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;

    onMount(() => {
        window.location.replace("/download");
    })
</script>