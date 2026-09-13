import { projects, categories, type Project } from "./projects";
import { categoryNotes } from "./site";

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export type CategoryMeta = {
  name: string;
  slug: string;
  note: string;
  count: number;
  cover: Project["images"][number];
  images: Project["images"];
  projects: Project[];
};

export const categoryList: CategoryMeta[] = categories.map((name) => {
  const inCat = projects.filter((p) => p.category === name);
  const cover =
    inCat.flatMap((p) => p.images).find((im) => im.orientation === "landscape") ??
    inCat[0]?.images[0];
  // pool for the shuffling card: up to 3 images per project, capped for performance
  const images = inCat.flatMap((p) => p.images.slice(0, 3)).slice(0, 10);
  return {
    name,
    slug: slugify(name),
    note: categoryNotes[name] ?? "",
    count: inCat.length,
    cover,
    images: images.length ? images : cover ? [cover] : [],
    projects: inCat,
  };
});

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categoryList.find((c) => c.slug === slug);
}
