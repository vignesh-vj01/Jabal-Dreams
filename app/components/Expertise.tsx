"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Landmark,
  Shapes,
  Boxes,
  Brush,
  AudioLines,
  Waves,
  Ruler,
  Compass,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { locServices } from "@/app/lib/i18n";
import { useLang } from "./lang-context";
import Reveal from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  Landmark,
  Shapes,
  Boxes,
  Brush,
  AudioLines,
  Waves,
  Ruler,
  Compass,
};

export default function Expertise() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(0);
  const items = locServices(lang);

  return (
    <section id="expertise" className="bg-brand-sand py-24 md:py-36 grain relative">
      <div className="relative w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-10 bg-brand-gold" />
                <span className="eyebrow text-brand-gold">{t("expertise_label")}</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-serif font-light text-4xl md:text-5xl leading-[1.08] max-w-2xl">
                {t("expertise_heading_plain")}{" "}
                <span className="italic">{t("expertise_heading_emph")}</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-brand-ink/55 text-sm max-w-xs leading-relaxed">
              {t("expertise_sub")}
            </p>
          </Reveal>
        </div>

        <div className="border-t border-brand-ink/15">
          {items.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Landmark;
            const isOpen = open === i;
            const buttonId = `expertise-${s.id}-button`;
            const panelId = `expertise-${s.id}-panel`;
            return (
              <div key={s.id} className="border-b border-brand-ink/15">
                <button
                  id={buttonId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="group w-full flex items-center gap-5 md:gap-8 py-6 md:py-7 text-start"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="font-serif text-sm text-brand-gold/70 w-7 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`w-11 h-11 shrink-0 border flex items-center justify-center transition-colors ${
                      isOpen ? "border-brand-gold/60 bg-brand-cream" : "border-brand-ink/15"
                    }`}
                  >
                    <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.4} />
                  </span>
                  <h3
                    className={`flex-grow font-serif text-xl md:text-3xl font-light leading-tight transition-colors ${
                      isOpen ? "text-brand-ink" : "text-brand-ink/70 group-hover:text-brand-ink"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <Plus
                    className={`w-5 h-5 shrink-0 text-brand-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                    >
                      <div className="ps-0 md:ps-[80px] pb-9 grid md:grid-cols-12 gap-8">
                        <p className="md:col-span-5 text-brand-ink/65 leading-relaxed text-sm">
                          {s.blurb}
                        </p>
                        <div className="md:col-span-7">
                          <div className="eyebrow text-[9px] text-brand-stone mb-4">
                            {s.listLabel}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                            {s.items.map((it) => (
                              <div key={it} className="flex items-start gap-3">
                                <span className="mt-1.5 w-1 h-1 rotate-45 bg-brand-gold shrink-0" />
                                <span className="text-[13px] text-brand-ink/75 leading-snug">{it}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
