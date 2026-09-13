"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categoryList } from "@/app/lib/work";
import { projects } from "@/app/lib/projects";
import { useLang } from "./lang-context";
import Reveal from "./Reveal";
import CategoryCard from "./CategoryCard";

export default function Work({ showBrowseTile = true }: { showBrowseTile?: boolean }) {
  const { t } = useLang();
  const sub = t("work_sub")
    .replace("{n}", String(projects.length))
    .replace("{m}", String(categoryList.length));

  return (
    <section id="work" className="bg-brand-cream py-24 md:py-36">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-brand-gold" />
                <span className="eyebrow text-brand-gold">{t("work_label")}</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.08] max-w-2xl">
                {t("work_heading_plain")} <span className="italic">{t("work_heading_emph")}</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-brand-ink/55 text-sm max-w-xs leading-relaxed">
              {projects.length} {sub}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {categoryList.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.08}>
              <CategoryCard category={c} index={i} />
            </Reveal>
          ))}

          {showBrowseTile && (
            <Reveal delay={0.24}>
              <Link
                href="/work"
                className="group hidden lg:flex flex-col justify-between h-full min-h-[320px] border border-brand-ink/15 p-8 hover:bg-brand-ink hover:text-brand-cream transition-colors duration-500"
              >
                <span className="eyebrow text-brand-gold">{t("work_browse_label")}</span>
                <div>
                  <h3 className="font-serif text-3xl font-light leading-tight mb-3">
                    {t("work_browse_heading_plain")}{" "}
                    <span className="italic">{t("work_browse_heading_emph")}</span>.
                  </h3>
                  <span className="inline-flex items-center gap-2 eyebrow text-[9px]">
                    {t("work_browse_cta")} <ArrowUpRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
