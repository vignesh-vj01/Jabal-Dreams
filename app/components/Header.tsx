"use client";

import { motion, AnimatePresence } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useContact } from "./contact-context";
import { useLang } from "./lang-context";
import { Logo } from "./Logo";

const links = [
  { key: "nav_work", href: "/#work" },
  { key: "nav_expertise", href: "/#expertise" },
  { key: "nav_studio", href: "/#studio" },
];

function getFocusable(root: HTMLElement | null) {
  if (!root) return [];
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true");
}

export default function Header({ onDark = false }: { onDark?: boolean }) {
  const { open } = useContact();
  const { t, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    window.setTimeout(() => menuButtonRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = getFocusable(menuRef.current);
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
  }, [menuOpen, closeMenu]);

  const cream = onDark && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          cream ? "text-brand-cream" : "text-brand-ink"
        } ${
          scrolled ? "bg-brand-cream/85 backdrop-blur-md border-b border-brand-ink/10" : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Jabal Dreams — home">
            <Logo variant={cream ? "cream" : "ink"} />
          </Link>

          <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[10px] uppercase tracking-[0.25em] font-semibold relative group"
              >
                {t(l.key)}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button
              type="button"
              onClick={toggle}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold hover:text-brand-gold transition-colors"
              aria-label="Switch language"
            >
              <Globe className="w-3.5 h-3.5" strokeWidth={1.6} />
              {t("lang_toggle")}
            </button>
            <button
              type="button"
              onClick={open}
              className={`text-[10px] uppercase tracking-[0.25em] font-bold px-5 py-3 border transition-colors ${
                cream
                  ? "border-brand-cream/40 hover:bg-brand-cream hover:text-brand-ink"
                  : "border-brand-ink/25 hover:bg-brand-ink hover:text-brand-cream"
              }`}
            >
              {t("nav_contact")}
            </button>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={menuRef}
            className="fixed inset-0 z-[60] bg-brand-ink text-brand-cream flex flex-col md:hidden grain"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="px-8 h-20 flex items-center justify-between">
              <Logo variant="cream" markClassName="h-8 w-auto" />
              <button ref={closeButtonRef} type="button" onClick={closeMenu} aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-grow flex flex-col justify-center gap-2 px-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="font-serif text-5xl font-light py-2 hover:text-brand-gold transition-colors"
                >
                  {t(l.key)}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * links.length + 0.1 }}
                onClick={() => {
                  setMenuOpen(false);
                  open();
                }}
                className="font-serif text-5xl font-light py-2 text-start text-brand-gold"
              >
                {t("nav_contact")}
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * (links.length + 1) + 0.1 }}
                onClick={toggle}
                className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] font-semibold text-brand-cream/70 hover:text-brand-gold transition-colors"
              >
                <Globe className="w-4 h-4" strokeWidth={1.6} />
                {t("lang_toggle")}
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
