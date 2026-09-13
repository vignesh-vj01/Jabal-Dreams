import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { ContactProvider } from "@/app/components/contact-context";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import Blueprint from "@/app/components/Blueprint";
import { getCategoryBySlug, slugify } from "@/app/lib/work";
import { projects } from "@/app/lib/projects";

export const dynamicParams = false;

function getProject(categorySlug: string, projectSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  const project = category?.projects.find((p) => p.slug === projectSlug);
  return category && project ? { category, project } : null;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    category: slugify(project.category),
    project: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; project: string }>;
}): Promise<Metadata> {
  const { category, project } = await params;
  const match = getProject(category, project);
  if (!match) return { title: "Work" };
  const cover = match.project.images[0];

  return {
    title: match.project.title,
    description: match.project.blurb,
    alternates: { canonical: `/work/${match.category.slug}/${match.project.slug}` },
    openGraph: {
      title: `${match.project.title} | Jabal Dreams`,
      description: match.project.blurb,
      images: [
        {
          url: cover.src,
          width: cover.w,
          height: cover.h,
          alt: `${match.project.title} by Jabal Dreams`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${match.project.title} | Jabal Dreams`,
      description: match.project.blurb,
      images: [cover.src],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ category: string; project: string }>;
}) {
  const { category, project } = await params;
  const match = getProject(category, project);
  if (!match) notFound();

  const { category: categoryMeta, project: item } = match;
  const others = categoryMeta.projects.filter((p) => p.slug !== item.slug).slice(0, 4);

  return (
    <ContactProvider>
      <Header onDark />
      <main>
        <header className="relative bg-brand-ink text-brand-cream pt-32 pb-16 md:pt-40 md:pb-20 grain overflow-hidden">
          <Blueprint className="text-brand-cream" />
          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
            <Link
              href={`/work/${categoryMeta.slug}#${item.slug}`}
              className="inline-flex items-center gap-2 eyebrow text-[9px] text-brand-cream/60 hover:text-brand-gold transition-colors mb-10"
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl:-scale-x-100" /> {categoryMeta.name}
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="eyebrow text-brand-gold">
                {item.client ? `${item.client} / ` : ""}
                {item.place} / {item.year}
              </span>
            </div>
            <h1 className="font-serif font-light text-5xl md:text-7xl leading-[1.02] max-w-4xl">
              {item.title}
            </h1>
            <p className="mt-7 text-brand-cream/60 max-w-2xl leading-relaxed">{item.description}</p>
          </div>
        </header>

        <section className="bg-brand-cream py-16 md:py-24">
          <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
            <div className="[column-fill:_balance] columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
              {item.images.map((image, index) => (
                <div
                  key={image.src}
                  className="relative mb-4 md:mb-5 block w-full overflow-hidden break-inside-avoid bg-brand-sand"
                >
                  <Image
                    src={image.src}
                    alt={`${item.title} image ${index + 1}`}
                    width={image.w}
                    height={image.h}
                    placeholder="blur"
                    blurDataURL={image.blur}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-brand-ink/5" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {others.length > 0 && (
          <section className="bg-brand-sand py-16 md:py-20 grain relative">
            <div className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
              <span className="eyebrow text-brand-gold">More in {categoryMeta.name}</span>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-ink/10 border border-brand-ink/10">
                {others.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/work/${categoryMeta.slug}/${other.slug}`}
                    className="group bg-brand-sand hover:bg-brand-cream transition-colors p-7"
                  >
                    <span className="eyebrow text-[8px] text-brand-gold">{other.year}</span>
                    <h2 className="font-serif text-2xl font-light leading-tight mt-3 group-hover:text-brand-gold transition-colors">
                      {other.title}
                    </h2>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Contact />
      </main>
      <Footer />
    </ContactProvider>
  );
}
