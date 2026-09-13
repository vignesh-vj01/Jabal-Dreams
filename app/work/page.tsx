import type { Metadata } from "next";
import { ContactProvider } from "@/app/components/contact-context";
import Header from "@/app/components/Header";
import Work from "@/app/components/Work";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Blueprint from "@/app/components/Blueprint";
import { categoryList } from "@/app/lib/work";
import { projects } from "@/app/lib/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Browse Jabal Dreams portfolio categories spanning heritage, murals, events, sculpture, fabrication, scale models, and miniatures.",
  alternates: { canonical: "/work" },
};

export default function WorkIndexPage() {
  return (
    <ContactProvider>
      <Header onDark />
      <main>
        <section className="relative bg-brand-ink text-brand-cream pt-32 pb-16 md:pt-40 md:pb-20 grain overflow-hidden">
          <Blueprint className="text-brand-cream" />
          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="eyebrow text-brand-gold">
                {projects.length} projects / {categoryList.length} categories
              </span>
            </div>
            <h1 className="font-serif font-light text-5xl md:text-7xl leading-[1.02] max-w-4xl">
              Selected Work
            </h1>
            <p className="mt-7 text-brand-cream/60 max-w-2xl leading-relaxed">
              Explore the full Jabal Dreams portfolio by category, then open each category to view
              every project and its photographs.
            </p>
          </div>
        </section>
        <Work showBrowseTile={false} />
        <Contact />
      </main>
      <Footer />
    </ContactProvider>
  );
}
