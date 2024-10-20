import { MetadataRoute } from "next";

export default function Manifest(): MetadataRoute.Manifest {
  return {
    name: "Adrian Iskra - Front-end Developer, UI & UX Designer Portfolio",
    short_name: "Adrian's Portfolio",
    icons: [
      {
        src: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#feffff",
    background_color: "#feffff",
    display: "standalone",
  };
}
