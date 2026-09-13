"use client";

import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Mail, MapPin, Phone, Send, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { company } from "@/app/lib/site";
import { locCompany } from "@/app/lib/i18n";
import { useLang } from "./lang-context";
import { Logo } from "./Logo";

type ContactCtx = { open: () => void; close: () => void };
const Ctx = createContext<ContactCtx>({ open: () => {}, close: () => {} });

function getFocusable(root: HTMLElement | null) {
  if (!root) return [];
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true");
}

export function useContact() {
  return useContext(Ctx);
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const { t, lang } = useLang();
  const c = locCompany(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const open = useCallback(() => {
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
    setStatus("idle");
    window.setTimeout(() => openerRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = getFocusable(dialogRef.current);
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
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const location = String(form.get("location") ?? "").trim();
    const details = String(form.get("details") ?? "").trim();
    const subject = `Jabal Dreams inquiry${name ? ` from ${name}` : ""}`;
    const body = [
      "New project inquiry from jabaldreams.com",
      "",
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Phone: ${phone || "-"}`,
      `Location: ${location || "-"}`,
      "",
      "Project details:",
      details || "-",
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("success");
  };

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="absolute inset-0 bg-brand-charcoal/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              ref={dialogRef}
              className="relative w-full max-w-2xl bg-brand-cream shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[92vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-dialog-title"
            >
              <div className="hidden md:flex w-[38%] bg-brand-ink text-brand-cream p-10 flex-col justify-between grain relative">
                <div className="relative">
                  <Logo variant="cream" className="mb-8" />
                  <h3 className="font-serif text-3xl leading-tight mb-4">{t("modal_sidebar_heading")}</h3>
                  <p className="text-[11px] leading-relaxed opacity-60 font-sans">
                    {t("modal_sidebar_body")}
                  </p>
                </div>
                <div className="space-y-3 relative">
                  <div className="flex items-center gap-3 opacity-70">
                    <Phone className="w-3 h-3 text-brand-gold shrink-0" />
                    <span className="text-[10px]" dir="ltr">{company.phones[0]}</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-70">
                    <Mail className="w-3 h-3 text-brand-gold shrink-0" />
                    <span className="text-[10px]" dir="ltr">{company.email}</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-70">
                    <MapPin className="w-3 h-3 text-brand-gold shrink-0" />
                    <span className="text-[10px]">{c.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex-grow p-8 md:p-11 relative">
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={close}
                  className="absolute top-5 end-5 p-2 hover:bg-brand-ink/5 rounded-full transition-colors"
                  aria-label="Close contact form"
                >
                  <X className="w-5 h-5" />
                </button>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-16"
                    aria-live="polite"
                  >
                    <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-brand-gold" />
                    </div>
                    <h3 id="contact-dialog-title" className="font-serif text-3xl mb-3">
                      {t("modal_success_heading")}
                    </h3>
                    <p className="text-sm opacity-50 font-sans leading-relaxed max-w-xs">
                      {t("modal_success_body")}
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <span className="eyebrow text-brand-gold">{t("modal_form_label")}</span>
                    <h3 id="contact-dialog-title" className="font-serif text-3xl mt-3 mb-8">
                      {t("modal_form_heading")}
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Field
                          id="contact-name"
                          name="name"
                          label={t("modal_name")}
                          type="text"
                          placeholder={t("modal_name_ph")}
                          autoComplete="name"
                        />
                        <Field
                          id="contact-email"
                          name="email"
                          label={t("modal_email")}
                          type="email"
                          placeholder={t("modal_email_ph")}
                          autoComplete="email"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Field
                          id="contact-phone"
                          name="phone"
                          label={t("modal_phone")}
                          type="tel"
                          placeholder="+968 0000 0000"
                          autoComplete="tel"
                          required={false}
                        />
                        <Field
                          id="contact-location"
                          name="location"
                          label={t("modal_location")}
                          type="text"
                          placeholder={t("modal_location_ph")}
                          autoComplete="address-level2"
                          required={false}
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-details"
                          className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40"
                        >
                          {t("modal_details")}
                        </label>
                        <textarea
                          id="contact-details"
                          name="details"
                          required
                          rows={3}
                          placeholder={t("modal_details_ph")}
                          className="w-full bg-transparent border-b border-brand-ink/15 py-2 focus:border-brand-gold outline-none transition-colors font-sans text-sm resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-brand-ink text-brand-cream py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-brand-gold transition-colors flex items-center justify-center gap-3 group disabled:opacity-50"
                      >
                        {t("modal_send")}
                        <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rtl:-scale-x-100" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}

function Field({
  id,
  name,
  label,
  type,
  placeholder,
  autoComplete,
  required = true,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-40">
        {label}
      </label>
      <input
        id={id}
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full bg-transparent border-b border-brand-ink/15 py-2 focus:border-brand-gold outline-none transition-colors font-sans text-sm"
      />
    </div>
  );
}
