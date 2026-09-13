"use client";

import { locIndustries } from "@/app/lib/i18n";
import { useLang } from "./lang-context";
import Reveal from "./Reveal";

export default function Industries() {
  const { t, lang } = useLang();
  const industries = locIndustries(lang);
  return (
    <section className="bg-brand-cream py-20 md:py-28 border-t border-brand-ink/10">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="eyebrow text-brand-gold">{t("industries_label")}</span>
            <span className="h-px w-10 bg-brand-gold" />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 max-w-4xl mx-auto">
            {industries.map((ind, i) => (
              <span key={ind} className="flex items-center gap-5">
                <span className="font-serif text-xl md:text-2xl font-light text-brand-ink/80">
                  {ind}
                </span>
                {i < industries.length - 1 && (
                  <span className="w-1.5 h-1.5 rotate-45 bg-brand-gold/70 shrink-0" />
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
