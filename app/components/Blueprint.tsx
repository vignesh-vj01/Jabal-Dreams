"use client";

import { motion, useReducedMotion } from "motion/react";

// A clean architectural line grid — frame, grid and corner construction lines.
// The lines continuously draw and retract, but on a SINGLE shared rhythm with a
// uniform stagger, so the motion reads as one coherent wave instead of the old
// out-of-sync flicker. No circles, dots or arcs — just lines.

const LINES = [
  "M100 100 L900 100 L900 900 L100 900 Z", // frame
  "M100 300 L900 300", // grid
  "M100 600 L900 600",
  "M300 100 L300 900",
  "M600 100 L600 900",
  "M200 200 L400 400", // corner construction diagonals
  "M800 200 L600 400",
  "M200 800 L400 600",
  "M800 800 L600 600",
];

export default function Blueprint({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {LINES.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="currentColor"
            strokeWidth={1}
            strokeOpacity={0.13}
            vectorEffect="non-scaling-stroke"
            initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            animate={reduceMotion ? { pathLength: 1 } : { pathLength: [0, 1, 1, 0] }}
            transition={{
              duration: reduceMotion ? 0 : 9,
              times: [0, 0.42, 0.58, 1],
              ease: [0.45, 0, 0.55, 1],
              repeat: reduceMotion ? 0 : Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
