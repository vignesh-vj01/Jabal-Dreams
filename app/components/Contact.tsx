"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/app/lib/site";
import { locCompany } from "@/app/lib/i18n";
import { useContact } from "./contact-context";
import { useLang } from "./lang-context";
import Reveal from "./Reveal";
import Blueprint from "./Blueprint";
import Watermark from "./Watermark";

export default function Contact() {
  const { open } = useContact();
  const { t, lang } = useLang();
  const c = locCompany(lang);

  return (
    <section id="contact" className="relative bg-brand-sand py-24 md:py-36 grain overflow-hidden">
      <Blueprint className="text-brand-ink" />
      <Watermark position="center-right" size="w-[70vw] max-w-[680px]" opacity={0.09} />
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 2xl:px-24 grid md:grid-cols-12 gap-14">
        <div className="md:col-span-7">
          <Reveal>
            <div className="flex items-center gap-4 mb-7">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="eyebrow text-brand-gold">{t("contact_label")}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif font-light text-5xl md:text-7xl leading-[1.05] mb-10">
              {t("contact_heading_plain")} <span className="italic">{t("contact_heading_emph")}</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <button
              type="button"
              onClick={open}
              className="group inline-flex items-center gap-4 bg-brand-ink text-brand-cream px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold transition-colors"
            >
              {t("contact_cta")}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform rtl:-scale-x-100" />
            </button>
          </Reveal>
        </div>

        <div className="md:col-span-5 md:pt-3">
          <Reveal delay={0.15}>
            <div className="space-y-7">
              <Row icon={<Phone className="w-4 h-4 text-brand-gold" />} label={t("contact_row_phone")}>
                {company.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    dir="ltr"
                    className="block hover:text-brand-gold transition-colors"
                  >
                    {p}
                  </a>
                ))}
              </Row>
              <Row icon={<Mail className="w-4 h-4 text-brand-gold" />} label={t("contact_row_email")}>
                <a href={`mailto:${company.email}`} dir="ltr" className="hover:text-brand-gold transition-colors">
                  {company.email}
                </a>
              </Row>
              <Row icon={<MapPin className="w-4 h-4 text-brand-gold" />} label={t("contact_row_studio")}>
                <span>{c.street}</span>
                <span className="block">{c.country}</span>
                <span className="block text-brand-ink/40 text-[11px] mt-2">
                  CR {company.cr} · P.O. Box {company.poBox} · P.C {company.pc}
                </span>
              </Row>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 border-b border-brand-ink/10 pb-6">
      <div className="w-10 h-10 border border-brand-ink/20 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="eyebrow text-[9px] text-brand-stone mb-2">{label}</div>
        <div className="font-sans text-sm leading-relaxed text-brand-ink/80">{children}</div>
      </div>
    </div>
  );
}
