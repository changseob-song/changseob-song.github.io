# Agile Exoskeleton Control in Musculoskeletal Simulation

This standalone project page follows the visual structure of the Continual Online Personalization project page. It lives inside the personal website repository, with no homepage entry.

## URL and visibility

Live URL after GitHub Pages deployment:

https://changseob-song.github.io/agile-exoskeleton-control/

The HTML includes noindex, nofollow, and noarchive directives. These ask compliant search engines not to index the page; they do not make it private. Anyone with the URL or access to this public repository can view it. No homepage, navigation, sitemap, or root robots.txt changes are required.

## Content to finish

- Confirm the final title and affiliations. Author order supplied by Changseob: Changseob Song, Ilseung Park, Inseung Kang.
- The methods section follows the supplied training README's current v14 configuration (October 22, 2026). Update it as the implementation evolves.
- Walking and running demonstrations are included. Add more project-specific videos as needed.
- Add quantitative findings only when ready to share; there are no fabricated metrics, publication claims, or hardware-validation claims.
- Add a paper/preprint or citation only when it exists.

The copy is based on the supplied description: an adversarial motion prior trained on a small set of reference motion clips enables diverse locomotor behaviors across uneven terrain in musculoskeletal simulation. No assets from other research projects are presented as evidence for this work.

## Methods source and scope

The methods summary uses the current v14 pipeline and its supporting definitions in the user-supplied training README. Older experiment logs are not presented as current settings. Stage C's 1–1.5 billion frame budget is scheduled, not a claim of completion. Evaluation is explicitly described as using training terrain layouts.

The page includes the curriculum, PPO/training mechanics, additive reward terms, LSGAN AMP reward, discriminator update schedule, and hip equilibrium-angle command design. It does not claim a demonstrated metabolic benefit or hardware transfer for this unpublished project.

The supplied source describes controller commands, angle ranges, mode behavior, filtering, and torque limits but does not provide the complete mode-blending/gain equations. Those details are not invented. The stiffness K = 40 used in the README's diagnostic work calculation is not asserted to be a fully specified current controller gain.

## Add videos

Put this project's MP4/WebM files in static/videos/ and optional poster images in static/images/.

Edit static/js/media.js. The current slots are walking and running. Example:

    walking: {
      type: "video",
      src: "static/videos/walking.mp4",
      poster: "static/images/walking.jpg",
      caption: "Replace with the actual terrain and conditions shown."
    },

For YouTube, set type to "youtube" and src to the video URL or its 11-character ID. Privacy-enhanced embeds are used. Do not use a YouTube URL with type "video".

Set caption to override a default caption. MP4/WebM players have controls, loop, and do not autoplay. New media slots need matching data-media attributes in index.html.

## Current recordings

- Walking: first supplied recording, 23.72 seconds.
- Running: second supplied recording, 25.93 seconds.

The supplied MOV recordings were converted to H.264 MP4 with AAC audio, 1440-pixel width, 30 fps, and fast-start metadata. Duration, full frame, and audio are preserved. JPEG poster frames were extracted at 5 seconds. The original recordings were not modified.

Optional framework figure:

    framework: {
      src: "static/images/framework.png",
      alt: "Describe the actual framework diagram.",
      caption: "Describe the actual learning pipeline."
    }

## Edit the page

- index.html: title, contact/author area, prose, highlights, conceptual framework, video descriptions and status.
- static/css/index.css: appearance and responsive layout.
- static/js/media.js: media paths and captions.
- static/js/index.js: media rendering and back-to-top behavior.

Keep all paths relative to this project folder. The page has no package installation or build step and uses no external JavaScript or CSS.

## Preview

Serve the personal-site repository with a static HTTP server, then open /agile-exoskeleton-control/. For example:

    python3 -m http.server 8765 --bind 127.0.0.1

Do not add a homepage entry if this page should remain unlisted.

## Design attribution

Colors, typography treatment, cards, and page structure follow the Continual Online Personalization project page, built on the Academic Project Page Template. Research content belongs to the authors of this project; no publication or content license is asserted here.
