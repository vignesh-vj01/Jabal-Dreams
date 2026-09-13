"use client";

import { LogoMark } from "./LogoMark";
import { useLang } from "./lang-context";

type Variant = "ink" | "cream";

export function Logo({
  variant = "ink",
  className = "",
  markClassName = "h-10 md:h-12 w-auto",
  showWordmark = true,
}: {
  variant?: Variant;
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
}) {
  const { t } = useLang();
  const tone = variant === "cream" ? "text-brand-cream" : "text-brand-ink";
  const sub = variant === "cream" ? "text-brand-cream/55" : "text-brand-stone";
  return (
    <span className={`inline-flex items-center gap-3 ${tone} ${className}`}>
      <LogoMark className={markClassName} />
      {showWordmark && (
        <span className="leading-none">
          <span className="block font-sans uppercase tracking-[0.3em] text-[11px] font-semibold">
            Jabal Dreams
          </span>
          <span className={`block text-[8px] uppercase tracking-[0.35em] mt-1 ${sub}`}>
            {t("subbrand")}
          </span>
        </span>
      )}
    </span>
  );
}

export { LogoMark };
