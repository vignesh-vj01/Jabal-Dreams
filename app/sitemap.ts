import type { MetadataRoute } from "next";
import { categoryList, slugify } from "@/app/lib/work";
import { projects } from "@/app/lib/projects";

const baseUrl = "https://jabaldreams.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...categoryList.map((category) => ({
      url: `${baseUrl}/work/${category.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/work/${slugify(project.category)}/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
