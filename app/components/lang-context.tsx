"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { UI, type Lang } from "@/app/lib/i18n";

type LangCtx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: string) => string;
};

const Ctx = createContext<LangCtx>({
  lang: "en",
  dir: "ltr",
  setLang: () => {},
  toggle: () => {},
  t: (k) => k,
});

export function useLang() {
  return useContext(Ctx);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // restore saved language on mount (one-time hydration-safe sync from localStorage)
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("jd-lang")) as Lang | null;
    if (saved === "ar" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(saved);
    }
  }, []);

  // reflect language on <html> and persist
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem("jd-lang", lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((p) => (p === "en" ? "ar" : "en")), []);
  const t = useCallback((key: string) => UI[lang][key] ?? UI.en[key] ?? key, [lang]);

  const dir = lang === "ar" ? "rtl" : "ltr";

  return <Ctx.Provider value={{ lang, dir, setLang, toggle, t }}>{children}</Ctx.Provider>;
}
