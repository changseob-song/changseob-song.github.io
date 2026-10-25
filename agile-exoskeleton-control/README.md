# Agile Exoskeleton Control in Musculoskeletal Simulation

This standalone project page follows the visual structure of the Continual Online Personalization project page. It lives inside the personal website repository, with no homepage entry.

## URL and visibility

Live URL after GitHub Pages deployment:

https://changseob-song.github.io/agile-exoskeleton-control/

The HTML includes noindex, nofollow, and noarchive directives. These ask compliant search engines not to index the page; they do not make it private. Anyone with the URL or access to this public repository can view it. No homepage, navigation, sitemap, or root robots.txt changes are required.

## Content to finish

- Confirm the final title and affiliations. Author order supplied by Changseob: Changseob Song, Ilseung Park, Inseung Kang.
- Replace or refine the project description and conceptual framework using the actual implementation.
- Add project-specific demonstration videos.
- Add quantitative findings only when ready to share; there are no fabricated metrics, publication claims, or hardware-validation claims.
- Add a paper/preprint or citation only when it exists.

The copy is based on the supplied description: an adversarial motion prior trained on a small set of reference motion clips enables diverse locomotor behaviors across uneven terrain in musculoskeletal simulation. No assets from other research projects are presented as evidence for this work.

## Add videos

Put this project's MP4/WebM files in static/videos/ and optional poster images in static/images/.

Edit static/js/media.js. The four slots are overview, motion-prior, terrain, and exoskeleton. Example:

    terrain: {
      type: "video",
      src: "static/videos/uneven-terrain.mp4",
      poster: "static/images/uneven-terrain.jpg",
      caption: "Replace with the actual terrain and conditions shown."
    },

For YouTube, set type to "youtube" and src to the video URL or its 11-character ID. Privacy-enhanced embeds are used. Do not use a YouTube URL with type "video".

Leave src empty for slots that do not have media yet. They display "Video coming soon" and make no missing-file requests. Set caption to override a default caption. MP4/WebM players have controls, loop, and do not autoplay.

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
