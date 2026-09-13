"use client";

import { motion } from "motion/react";
import { Hammer, Landmark, Shapes, ArrowRight } from "lucide-react";
import { locCompany, locPills, heroHeadline } from "@/app/lib/i18n";
import Blueprint from "./Blueprint";
import HeroCollage from "./HeroCollage";
import { useContact } from "./contact-context";
import { useLang } from "./lang-context";

const pillIcons = [Shapes, Landmark, Hammer];

export default function Hero() {
  const { open } = useContact();
  const { t, lang } = useLang();
  const company = locCompany(lang);
  const pills = locPills(lang);
  const { headline, emph } = heroHeadline(lang);
  const [before, after] = headline.split(emph);

  return (
    <section id="top" className="relative min-h-screen bg-brand-cream overflow-hidden flex flex-col text-brand-ink">
      <Blueprint className="text-brand-ink" />

      <div className="relative z-10 flex-grow flex flex-col md:flex-row pt-24 md:pt-20">
        {/* Copy */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-16 2xl:px-24 md:pe-12 pt-10 pb-12 md:py-0 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-7">
              <span className="h-px w-12 bg-brand-gold" />
              <span className="eyebrow text-brand-gold">{company.location}</span>
            </div>

            <h1 className="font-serif font-light leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">
              {before}
              <span className="italic text-brand-gold">{emph}</span>
              {after}
            </h1>

            <p className="font-sans text-sm md:text-base text-brand-ink/65 max-w-md leading-relaxed mb-10">
              {t("hero_intro")}
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-5 mb-11">
              {pills.map((label, i) => {
                const Icon = pillIcons[i] ?? Shapes;
                return (
                  <div key={label} className="flex items-center gap-3">
                    <span className="p-2.5 border border-brand-ink/15 rounded-full">
                      <Icon className="w-4 h-4 text-brand-gold" strokeWidth={1.5} />
                    </span>
                    <span className="eyebrow text-[9px]">{label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-3 bg-brand-ink text-brand-cream px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-colors"
              >
                {t("hero_cta_work")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:-scale-x-100" />
              </a>
              <button
                type="button"
                onClick={open}
                className="inline-flex items-center justify-center gap-3 border border-brand-ink/25 px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:border-brand-ink transition-colors"
              >
                {t("hero_cta_project")}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Collage */}
        <div className="w-full md:w-1/2 relative min-h-[460px] md:min-h-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <HeroCollage />
            <div className="absolute inset-0 bg-brand-ink/10 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 end-6 md:end-10 bg-brand-cream/95 backdrop-blur-md p-8 shadow-2xl max-w-[290px]"
          >
            <span className="eyebrow text-brand-gold text-[9px]">{t("hero_ethos_label")}</span>
            <h2 className="font-serif text-2xl mt-3 mb-3 leading-snug">{company.tagline}</h2>
            <p className="font-sans text-[11px] leading-relaxed text-brand-ink/55">{t("hero_ethos_body")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
