import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categoryList, getCategoryBySlug } from "@/app/lib/work";
import { ContactProvider } from "@/app/components/contact-context";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import CategoryView from "@/app/components/CategoryView";

export const dynamicParams = false;

export function generateStaticParams() {
  return categoryList.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Work" };
  return {
    title: `${cat.name} — Selected Work`,
    description: cat.note,
    alternates: { canonical: `/work/${cat.slug}` },
    openGraph: {
      title: `${cat.name} — Selected Work | Jabal Dreams`,
      description: cat.note,
      images: cat.cover
        ? [
            {
              url: cat.cover.src,
              width: cat.cover.w,
              height: cat.cover.h,
              alt: `${cat.name} selected work by Jabal Dreams`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${cat.name} — Selected Work | Jabal Dreams`,
      description: cat.note,
      images: cat.cover ? [cat.cover.src] : undefined,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  return (
    <ContactProvider>
      <Header onDark />
      <main>
        <CategoryView category={cat} />
        <Contact />
      </main>
      <Footer />
    </ContactProvider>
  );
}
