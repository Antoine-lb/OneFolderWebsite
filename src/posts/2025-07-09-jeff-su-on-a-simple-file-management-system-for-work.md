---
title: "Jeff Su on a simple file-management system for work"
description: "Jeff Su's opinionated Google Drive setup for work documents, balancing tidy structure with fast search through numbered folders and strategic file naming."
author: "OneFolder Team"
date: "2025-07-09"
published: true
tags: ["research"]
---

<script>
  import YoutubeEmbeddedVideo from '$lib/components/YoutubeEmbeddedVideo.svelte'
</script>

<YoutubeEmbeddedVideo src="https://www.youtube.com/embed/MM-MPS57qKA" title="Jeff Su - This Simple File Management System Changed My Life!" />

Jeff Su is one of my go-to productivity YouTubers, so I was curious how he wrangles files. In this May 2023 video he shares a very opinionated Google Drive setup built for _work_ documents rather than photos. The whole pitch is balancing tidy structure with fast search—no rabbit holes into theory.

If you live in Drive and mostly handle decks, spreadsheets, and meeting notes, his rules feel dead-simple. Photographers (or anyone who needs heavy metadata) will need extra layers.

## Tools mentioned

- **Google Drive** – the only storage platform he demos
- **Raycast / Alfred / Everything / Listary / Wox** – launchers that surface files (Raycast can read file metadata; I'll test that myself)

## Steps to follow

1. **Folder hierarchy**
   - Max **5 levels deep**; the 6th level must be files.
   - Each level can hold **up to 99 folders**, always named with two-digit brackets like `[01]`, `[23]`, `[99]` (which is always the archive).

2. **Top-level layout (his example)**
   - `[01] Personal`
   - `[02] Work`
   - `[03] Reference Docs`
   - `[04] QuickShare` (temporary copies to send out)
   - `[05] Backups`
   - `[99] Archive`

3. **File naming**
   - Use a leading date with _no_ dashes or spaces: `yyyymmdd_ProjectKeyword.ext` (`20250505_InboxZeroTraining.pptx`).
   - For non-dated stuff, rely on plain alphabetical names but stay consistent.

4. **Five file-management tips** he swears by
   1. "Organize files **where you'll use them**, not where you found them." - David Allen
   2. Leverage native search operators (e.g., `type:presentation` in Drive).
   3. Attach keywords in the file's **description/comments** field for faster lookup.
   4. Star only the handful of files you truly open every day (max 5).
   5. Know when to create a **shortcut** instead of copying shared files.

## Advice (extras worth noting)

- Keep `[99] Archive` handy—throw anything inactive in there so it's off your radar but still searchable.
- Over-optimising wastes time; pick a system and stick with it.
- Raycast (Mac) can surface files by those description keywords—adding them might be worth the effort.
- **User comment to remember:**

  > Using brackets `[ ]` in folder names breaks tab-completion in Windows PowerShell unless you add `-LiteralPath`. — @GoodKid

Take a look at the full 11-minute video for demos and keyboard-shortcut tours: [https://www.youtube.com/watch?v=MM-MPS57qKA](https://www.youtube.com/watch?v=MM-MPS57qKA).
