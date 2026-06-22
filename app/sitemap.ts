import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://whatthepuch.com",
      lastModified: new Date(),
    },
    {
      url: "https://whatthepuch.com/for-sale",
      lastModified: new Date(),
    },
  ];
}