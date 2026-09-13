"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Props = {
  /** position of the emblem within its section */
  position?: "center-right" | "center" | "bottom-left" | "top-right";
  size?: string; // tailwind width classes
  opacity?: number;
  blend?: boolean; // multiply blend (for light backgrounds)
  className?: string;
};

const POS: Record<string, string> = {
  "center-right": "top-1/2 right-[-10%] -translate-y-1/2",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "bottom-left": "bottom-[-12%] left-[-8%]",
  "top-right": "top-[-10%] right-[-8%]",
};

export default function Watermark({
  position = "center-right",
  size = "w-[62vw] max-w-[620px]",
  opacity = 0.08,
  blend = true,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-7, 7]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        style={{
          y: reduceMotion ? undefined : y,
          rotate: reduceMotion ? undefined : rotate,
          scale: reduceMotion ? undefined : scale,
          opacity,
          backgroundImage: "url('/brand/firefly.webp')",
        }}
        className={`absolute ${POS[position]} ${size} aspect-square bg-no-repeat bg-contain bg-center ${
          blend ? "mix-blend-multiply" : ""
        }`}
      />
    </div>
  );
}
