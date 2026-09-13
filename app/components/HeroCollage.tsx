"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { projects } from "@/app/lib/projects";
import { slugify } from "@/app/lib/work";
import { projTitle } from "@/app/lib/i18n";
import { useLang } from "./lang-context";

type Tile = { src: string; w: number; h: number; blur: string; pslug: string; slug: string };

const POOL: Tile[] = projects.flatMap((p) =>
  p.images.map((im) => ({ ...im, pslug: p.slug, slug: slugify(p.category) }))
);

const COLS = 3;
const PER = 9;
const STEP = Math.max(1, Math.floor(POOL.length / PER));
const DURATIONS = [70, 52, 64];

function columnImages(ci: number): Tile[] {
  return Array.from({ length: PER }, (_, k) => POOL[(k * STEP + ci * 5) % POOL.length]);
}

export default function HeroCollage() {
  const { lang } = useLang();
  const reduceMotion = useReducedMotion();
  return (
    <div className="absolute inset-0 flex gap-1.5 px-1.5 bg-brand-ink/5">
      {Array.from({ length: COLS }).map((_, ci) => {
        const imgs = columnImages(ci);
        const loop = reduceMotion ? imgs : [...imgs, ...imgs];
        const up = ci % 2 === 0;
        return (
          <div key={ci} className="relative flex-1 overflow-hidden">
            <motion.div
              className="absolute inset-x-0 top-0 flex flex-col gap-1.5"
              animate={reduceMotion ? undefined : { y: up ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: DURATIONS[ci % DURATIONS.length], ease: "linear", repeat: Infinity }
              }
            >
              {loop.map((img, k) => {
                const title = projTitle(img.pslug, lang);
                return (
                <Link
                  key={`${ci}-${k}`}
                  href={`/work/${img.slug}/${img.pslug}`}
                  aria-label={title}
                  className="group relative block w-full overflow-hidden"
                  style={{ aspectRatio: `${img.w} / ${img.h}` }}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    sizes="18vw"
                    placeholder="blur"
                    blurDataURL={img.blur}
                    className="object-cover grayscale-[0.3] brightness-90 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-brand-ink/5 group-hover:ring-brand-gold/60 transition-colors duration-500" />
                  {/* project name — always shown, brightens on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-brand-ink/85 via-brand-ink/30 to-transparent">
                    <span className="block font-sans uppercase tracking-[0.16em] text-[8px] font-semibold leading-snug text-brand-cream/75 group-hover:text-brand-gold transition-colors duration-500">
                      {title}
                    </span>
                  </div>
                </Link>
                );
              })}
            </motion.div>
          </div>
        );
      })}

      {/* soft edge fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-cream to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-cream to-transparent z-10" />
    </div>
  );
}
