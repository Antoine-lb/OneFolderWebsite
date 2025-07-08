<script lang="ts">
  export let author: string;
  export let date: string;

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
</script>

<p class="mb-3 mt-2 py-5">
  <span class=" text-[#666] font-mono pl-1">{formattedDate}</span>
</p>
