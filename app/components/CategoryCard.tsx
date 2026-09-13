"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { CategoryMeta } from "@/app/lib/work";
import { catName, catNote } from "@/app/lib/i18n";
import { useLang } from "./lang-context";

function shuffle(n: number): number[] {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function CategoryCard({
  category,
  index,
}: {
  category: CategoryMeta;
  index: number;
}) {
  const { t, lang } = useLang();
  const reduceMotion = useReducedMotion();
  const name = catName(category.name, lang);
  const note = catNote(category.name, lang);
  const pool = category.images;
  // identity order for SSR/first paint (deterministic); shuffled on the client.
  const [order, setOrder] = useState<number[]>(() =>
    Array.from({ length: Math.max(pool.length, 1) }, (_, i) => i)
  );
  const [pos, setPos] = useState(0);

  useEffect(() => {
    if (pool.length <= 1 || reduceMotion) return;
    const to = setTimeout(() => setOrder(shuffle(pool.length)), 0);
    const interval = 3200 + index * 500 + Math.random() * 900;
    const t = setInterval(() => setPos((p) => p + 1), interval);
    return () => {
      clearTimeout(to);
      clearInterval(t);
    };
  }, [pool.length, index, reduceMotion]);

  const slot = pos % order.length;
  const current = pool[order[slot]] ?? pool[0];

  return (
    <Link href={`/work/${category.slug}`} className="group block">
      <div className="relative aspect-[5/6] overflow-hidden bg-brand-sand mb-5">
        <AnimatePresence>
          <motion.div
            key={current.src}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.07 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { opacity: { duration: 1.2, ease: "easeInOut" }, scale: { duration: 6, ease: "linear" } }
            }
          >
            <Image
              src={current.src}
              alt={category.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={current.blur}
              className="object-cover grayscale-[0.18] transition-[filter] duration-700 group-hover:grayscale-0"
            />
          </motion.div>
        </AnimatePresence>

        {/* overlays (static, above the shuffling images) */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/10 to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-brand-ink/5" />

        <div className="absolute top-5 end-5 w-11 h-11 rounded-full bg-brand-cream/90 flex items-center justify-center translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <ArrowUpRight className="w-4 h-4 rtl:-scale-x-100" />
        </div>

        {/* shuffle progress ticks */}
        {pool.length > 1 && (
          <div className="absolute top-5 start-5 flex gap-1.5">
            {pool.map((_, i) => (
              <span
                key={i}
                className="h-[3px] rounded-full transition-all duration-500"
                style={{
                  width: i === slot ? 16 : 6,
                  background: i === slot ? "var(--color-brand-gold)" : "rgba(245,242,237,0.45)",
                }}
              />
            ))}
          </div>
        )}

        <div className="absolute bottom-0 inset-x-0 p-6 text-brand-cream">
          <div className="flex items-center gap-3 mb-2">
            <span className="eyebrow text-[8px] text-brand-gold">
              {category.count} {category.count === 1 ? t("work_project") : t("work_projects")}
            </span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-light leading-tight">{name}</h3>
        </div>
      </div>
      <p className="text-brand-ink/55 text-[13px] leading-relaxed max-w-sm">{note}</p>
    </Link>
  );
}
