"use client";

import Image from "next/image";
import { projects } from "@/app/lib/projects";
import { services, industries } from "@/app/lib/site";
import { locCompany } from "@/app/lib/i18n";
import { useLang } from "./lang-context";
import Reveal from "./Reveal";

const portrait =
  projects.flatMap((p) => p.images).find((im) => im.orientation === "portrait") ??
  projects[0].images[0];

export default function About() {
  const { t, lang } = useLang();
  const company = locCompany(lang);
  const stats = [
    { value: `${services.length}`, label: t("about_stat_disciplines") },
    { value: `${industries.length}`, label: t("about_stat_industries") },
    { value: t("about_stat_value_muscat"), label: t("about_stat_based") },
  ];

  return (
    <section id="studio" className="relative bg-brand-cream py-24 md:py-36 grain overflow-hidden">
      <div className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <div className="md:col-span-5 relative">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={portrait.src}
                alt="Jabal Dreams"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                placeholder="blur"
                blurDataURL={portrait.blur}
                className="object-cover grayscale-[0.12]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-brand-ink/10" />
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="eyebrow text-brand-gold">{t("about_label")}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.08] mb-8">
              {t("about_heading_plain")} <span className="italic">{t("about_heading_emph")}</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-brand-ink/65 leading-relaxed mb-5 max-w-2xl">{company.intro}</p>
          </Reveal>
          <Reveal delay={0.13}>
            <p className="text-brand-ink/65 leading-relaxed mb-5 max-w-2xl">{company.intro2}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-brand-ink/65 leading-relaxed mb-10 max-w-2xl">{company.intro3}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-3 gap-6 border-t border-brand-ink/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl md:text-4xl font-light text-brand-gold">{s.value}</div>
                  <div className="eyebrow text-[9px] text-brand-stone mt-2 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
