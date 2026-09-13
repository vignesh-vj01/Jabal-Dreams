"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { CategoryMeta } from "@/app/lib/work";
import { categoryList } from "@/app/lib/work";
import { catName, catNote, locProject } from "@/app/lib/i18n";
import { useLang } from "./lang-context";
import Blueprint from "./Blueprint";

type LB = { p: number; i: number } | null;

function getFocusable(root: HTMLElement | null) {
  if (!root) return [];
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true");
}

export default function CategoryView({ category }: { category: CategoryMeta }) {
  const { t, lang } = useLang();
  const [lb, setLb] = useState<LB>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const lightboxOpenerRef = useRef<HTMLButtonElement | null>(null);
  const others = categoryList.filter((c) => c.slug !== category.slug);
  const projs = category.projects.map((p) => locProject(p, lang));
  const name = catName(category.name, lang);
  const note = catNote(category.name, lang);

  const close = useCallback(() => {
    setLb(null);
    window.setTimeout(() => lightboxOpenerRef.current?.focus(), 0);
  }, []);
  const next = useCallback(() => {
    setLb((s) => {
      if (!s) return s;
      const imgs = category.projects[s.p].images;
      return { ...s, i: (s.i + 1) % imgs.length };
    });
  }, [category]);
  const prev = useCallback(() => {
    setLb((s) => {
      if (!s) return s;
      const imgs = category.projects[s.p].images;
      return { ...s, i: (s.i - 1 + imgs.length) % imgs.length };
    });
  }, [category]);

  useEffect(() => {
    if (!lb) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key !== "Tab") return;
      const focusable = getFocusable(lightboxRef.current);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    lightboxCloseRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lb, close, next, prev]);

  const lbImg = lb ? category.projects[lb.p].images[lb.i] : null;

  return (
    <>
      {/* Category header */}
      <header className="relative bg-brand-ink text-brand-cream pt-32 pb-16 md:pt-40 md:pb-20 grain overflow-hidden">
        <Blueprint className="text-brand-cream" />
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 eyebrow text-[9px] text-brand-cream/60 hover:text-brand-gold transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5 rtl:-scale-x-100" /> {t("cat_all")}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="eyebrow text-brand-gold">
              {category.count} {category.count === 1 ? t("work_project") : t("work_projects")}
            </span>
          </div>
          <h1 className="font-serif font-light text-5xl md:text-7xl leading-[1.02] max-w-4xl">
            {name}
          </h1>
          {note && (
            <p className="mt-7 text-brand-cream/60 max-w-2xl leading-relaxed">{note}</p>
          )}
        </div>
      </header>

      {/* Projects */}
      <div className="bg-brand-cream">
        {category.projects.map((p, pIdx) => {
          const lp = projs[pIdx];
          return (
          <section
            key={p.slug}
            id={p.slug}
            className={`py-16 md:py-24 ${pIdx % 2 === 1 ? "bg-brand-sand grain relative" : ""}`}
            style={{ scrollMarginTop: "6rem" }}
          >
            <div className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-10">
                <div className="md:col-span-4">
                  <span className="font-serif text-sm text-brand-gold/70">
                    {String(pIdx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-serif font-light text-3xl md:text-4xl leading-tight mt-2">
                    <Link
                      href={`/work/${category.slug}/${p.slug}`}
                      className="hover:text-brand-gold transition-colors"
                    >
                      {lp.title}
                    </Link>
                  </h2>
                  <p className="eyebrow text-[9px] text-brand-stone mt-3 normal-case tracking-[0.15em]">
                    {lp.client ? `${lp.client} · ` : ""}
                    {lp.place} — {lp.year}
                  </p>
                </div>
                <div className="md:col-span-8 flex items-center">
                  <p className="text-brand-ink/65 leading-relaxed md:text-lg">{lp.description}</p>
                </div>
              </div>

              {/* Image grid */}
              <div className="[column-fill:_balance] columns-2 md:columns-3 gap-4 md:gap-5">
                {p.images.map((im, iIdx) => (
                  <motion.button
                    key={im.src}
                    type="button"
                    onClick={(e) => {
                      lightboxOpenerRef.current = e.currentTarget;
                      setLb({ p: pIdx, i: iIdx });
                    }}
                    aria-label={`Open ${lp.title} image ${iIdx + 1}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative mb-4 md:mb-5 block w-full overflow-hidden break-inside-avoid bg-brand-sand"
                  >
                    <Image
                      src={im.src}
                      alt={`${lp.title} — ${iIdx + 1}`}
                      width={im.w}
                      height={im.h}
                      placeholder="blur"
                      blurDataURL={im.blur}
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.04] grayscale-[0.1] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-brand-ink/0 group-hover:bg-brand-ink/15 transition-colors duration-500" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-brand-ink/5" />
                  </motion.button>
                ))}
              </div>
            </div>
          </section>
          );
        })}
      </div>

      {/* Other categories */}
      <section className="bg-brand-ink text-brand-cream py-16 md:py-20 grain relative">
        <div className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
          <span className="eyebrow text-brand-gold">{t("cat_continue")}</span>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-cream/10 border border-brand-cream/10">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                className="group bg-brand-ink hover:bg-brand-charcoal transition-colors p-7"
              >
                <span className="eyebrow text-[8px] text-brand-gold">
                  {c.count} {c.count === 1 ? t("work_project") : t("work_projects")}
                </span>
                <h3 className="font-serif text-2xl font-light leading-tight mt-3 group-hover:text-brand-gold transition-colors">
                  {catName(c.name, lang)}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lb && lbImg && (
          <motion.div
            ref={lightboxRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-brand-charcoal/96 backdrop-blur-sm flex items-center justify-center"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            <button
              ref={lightboxCloseRef}
              onClick={close}
              className="absolute top-5 end-5 z-10 p-3 text-brand-cream/70 hover:text-brand-gold transition-colors"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>
            {category.projects[lb.p].images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute start-3 md:start-8 z-10 p-3 text-brand-cream/60 hover:text-brand-gold transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-9 h-9 rtl:-scale-x-100" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute end-3 md:end-8 z-10 p-3 text-brand-cream/60 hover:text-brand-gold transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-9 h-9 rtl:-scale-x-100" />
                </button>
              </>
            )}
            <motion.div
              key={`${lb.p}-${lb.i}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[90vw] h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lbImg.src}
                alt={projs[lb.p].title}
                fill
                sizes="90vw"
                placeholder="blur"
                blurDataURL={lbImg.blur}
                className="object-contain"
              />
            </motion.div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <span id="lightbox-title" className="font-serif text-lg text-brand-cream/90">
                {projs[lb.p].title}
              </span>
              <span className="block eyebrow text-[9px] text-brand-gold mt-1">
                {String(lb.i + 1).padStart(2, "0")} /{" "}
                {String(category.projects[lb.p].images.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
