"use client";

import { company } from "@/app/lib/site";
import { locCompany } from "@/app/lib/i18n";
import { useLang } from "./lang-context";
import { Logo } from "./Logo";

const nav = [
  { key: "nav_work", href: "/#work" },
  { key: "nav_expertise", href: "/#expertise" },
  { key: "nav_studio", href: "/#studio" },
  { key: "nav_contact", href: "/#contact" },
];

export default function Footer() {
  const { t, lang } = useLang();
  const c = locCompany(lang);

  return (
    <footer className="bg-brand-cream text-brand-ink border-t border-brand-ink/10">
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <Logo variant="ink" className="mb-6" markClassName="h-12 w-auto" />
          <p className="font-serif text-2xl italic text-brand-gold max-w-sm leading-snug">{c.tagline}</p>
          <p className="text-brand-ink/55 text-sm mt-5 max-w-sm leading-relaxed">
            {t("footer_desc_plain")} {c.location}.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow text-[9px] text-brand-stone mb-5">{t("footer_explore")}</div>
          <ul className="space-y-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-brand-ink/70 hover:text-brand-gold transition-colors">
                  {t(n.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow text-[9px] text-brand-stone mb-5">{t("footer_get_in_touch")}</div>
          <ul className="space-y-3 text-sm text-brand-ink/70">
            <li>
              <a href={`mailto:${company.email}`} dir="ltr" className="hover:text-brand-gold transition-colors">
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                dir="ltr"
                className="inline-block hover:text-brand-gold transition-colors"
              >
                {company.phones[0]}
              </a>
            </li>
            <li className="text-brand-ink/45 leading-relaxed">
              {c.street}، {c.country}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-ink/10">
        <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-ink/30">
            © {new Date().getFullYear()} {company.legalName}. {t("footer_rights")}
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-brand-ink/30">
            CR {company.cr} · {t("footer_crafted")}
          </span>
        </div>
      </div>
    </footer>
  );
}
