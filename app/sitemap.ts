import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;
  return [
    { url: `${base}/`, lastModified: new Date() },
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}/`, lastModified: new Date() })),
  ];
}
