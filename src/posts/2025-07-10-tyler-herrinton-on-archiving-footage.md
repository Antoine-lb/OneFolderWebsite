---
title: "Tyler Herrinton on archiving footage (The ULTIMATE Footage Archiving System for Filmmakers)"
description: "Tyler Herrinton's reliable, cost-effective archiving system for video projects, focusing on redundancy and scaling across years of footage."
author: "OneFolder Team"
date: "2025-07-10"
published: true
tags: ["research", "professional photography"]
---

<script>
  import YoutubeEmbeddedVideo from '$lib/components/YoutubeEmbeddedVideo.svelte'
</script>

<YoutubeEmbeddedVideo src="https://www.youtube.com/embed/ZzrnzjCQ4w8" title="Tyler Herrinton - The ULTIMATE Footage Archiving System for Filmmakers" />

This video is from Tyler Herrinton, a wedding filmmaker sharing his full editing and archiving setup for video projects. The system is designed to be reliable, cost-effective in the long term, and scale across years of footage. While it's targeted at filmmakers, the general structure could apply to any media-heavy workflow. He focuses a lot on redundancy, and how to keep projects accessible without keeping everything live on fast storage.

## Tools mentioned

- **Western Digital MyBook** → used as fast editing drives (in pairs)
- **Drobo** → RAID drive used as a mid-term archive for finished projects
- **Bare desktop hard drives** → long-term storage, used in duplicate
- **Hard drive toaster** → for reading bare drives
- **Chronosync** → software to automatically mirror one editing drive to another
- **Backblaze** (mentioned later) → added as a fail-safe cloud backup for all drives

## Steps to follow

1. Import footage to **Editing Drive 1**, using a fixed folder structure:
   - `Footage`, `Project`, `Audio`, `Effects & Stills`, `Export`, `PluralEyes`

2. Use **Chronosync** to mirror Editing Drive 1 to **Editing Drive 2** (daily or more)
3. When project is delivered, move the full project folder to **Drobo**
4. At end of the year, transfer everything from Drobo to two **bare drives**
5. Store one drive locally, and one offsite (e.g. a friend's house)
6. Wipe Drobo and editing drives — ready for the next year's work

## Advice

- Use duplicate drives throughout the process: editing drives and archive drives both
- RAID drives are not fast enough for editing, but perfect for bulk storage
- Set up a simple but consistent folder structure inside every project
- The "toaster" setup lets you cheaply expand long-term storage without buying full enclosures
- Use a cloud service like Backblaze if you want an additional offsite backup
- Offloading footage once a year makes room for new projects without losing access to old ones

You can watch the full video here: [https://www.youtube.com/watch?v=ZzrnzjCQ4w8](https://www.youtube.com/watch?v=ZzrnzjCQ4w8). Tyler's system is focused on video production, but parts of it are useful for anyone archiving large media collections.
