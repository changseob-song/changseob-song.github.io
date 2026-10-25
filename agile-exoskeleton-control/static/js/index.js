(() => {
  "use strict";
  const media = window.AGILE_PROJECT_MEDIA || {};
  const safeUrl = (value) => {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const url = new URL(value, document.baseURI);
      return ["http:", "https:", "file:"].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  };
  const youtubeId = (value) => {
    if (/^[A-Za-z0-9_-]{11}$/.test(value)) return value;
    try {
      const url = new URL(value);
      const host = url.hostname.replace(/^www\./, "");
      let id;
      if (host === "youtu.be") id = url.pathname.split("/")[1];
      else if (["youtube.com", "m.youtube.com", "youtube-nocookie.com"].includes(host)) {
        id = url.searchParams.get("v") || url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1];
      }
      return /^[A-Za-z0-9_-]{11}$/.test(id || "") ? id : null;
    } catch { return null; }
  };
  document.querySelectorAll("[data-media]").forEach((slot) => {
    const config = media[slot.dataset.media];
    if (!config || !config.src) return;
    let element;
    if (config.type === "youtube") {
      const id = youtubeId(config.src);
      if (!id) return;
      element = document.createElement("iframe");
      element.src = "https://www.youtube-nocookie.com/embed/" + id;
      element.title = slot.getAttribute("aria-label");
      element.loading = "lazy";
      element.allow = "encrypted-media; picture-in-picture; fullscreen";
      element.allowFullscreen = true;
    } else {
      const src = safeUrl(config.src);
      if (!src) return;
      element = document.createElement("video");
      element.src = src;
      element.controls = true;
      element.loop = true;
      element.playsInline = true;
      element.preload = "metadata";
      element.setAttribute("aria-label", slot.getAttribute("aria-label"));
      const poster = safeUrl(config.poster);
      if (poster) element.poster = poster;
      element.addEventListener("error", () => {
        slot.querySelector(".placeholder-note").textContent = "Video is temporarily unavailable";
        element.remove();
        slot.querySelector(".media-placeholder").hidden = false;
      }, { once: true });
    }
    slot.querySelector(".media-placeholder").hidden = true;
    slot.append(element);
    if (config.caption) slot.closest("figure").querySelector("figcaption").textContent = config.caption;
  });
  const framework = media.framework;
  const frameworkUrl = safeUrl(framework?.src);
  if (frameworkUrl) {
    const image = document.getElementById("framework-image");
    image.addEventListener("error", () => { image.closest("figure").hidden = true; }, { once: true });
    image.src = frameworkUrl;
    if (framework.alt) image.alt = framework.alt;
    if (framework.caption) image.closest("figure").querySelector("figcaption").textContent = framework.caption;
    image.closest("figure").hidden = false;
  }
  const topLink = document.querySelector(".scroll-to-top");
  const updateTopLink = () => { topLink.hidden = window.scrollY < 500; };
  window.addEventListener("scroll", updateTopLink, { passive: true });
  updateTopLink();
})();

