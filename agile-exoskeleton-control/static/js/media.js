/* Add only media belonging to this unpublished project.
 * Paths are relative to agile-exoskeleton-control/index.html.
 * Leave src empty to show a deliberate placeholder without broken requests.
 * type: "video" for MP4/WebM; "youtube" for a YouTube URL or video ID.
 * Full instructions: agile-exoskeleton-control/README.md.
 */
window.AGILE_PROJECT_MEDIA = {
  walking: { type: "video", src: "static/videos/walking.mp4", poster: "static/images/walking.jpg", caption: "Walking in musculoskeletal simulation." },
  running: { type: "video", src: "static/videos/running.mp4", poster: "static/images/running.jpg", caption: "Running in musculoskeletal simulation." },
  framework: { src: "", alt: "Overview of the agile exoskeleton control learning framework", caption: "" }
};
