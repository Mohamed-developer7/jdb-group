"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

type IntroPhase = "reveal" | "hold" | "exit" | "done";

export function IntroSequence() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<IntroPhase>("reveal");
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    // Only run intro on homepage
    if (pathname !== "/") {
      setPhase("done");
      return;
    }

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setPhase("done");
      return;
    }

    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    // Timeline:
    //  0.0s → reveal phase (elements animate in)
    //  2.0s → hold phase (everything visible, no movement)
    //  3.2s → exit phase (cinematic fade out + subtle scale)
    //  4.5s → done (homepage takes over)
    const holdTimer = setTimeout(() => setPhase("hold"), 2000);
    const exitTimer = setTimeout(() => setPhase("exit"), 3200);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 4600);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = "";
    };
  }, [pathname]);

  if (!mounted || phase === "done") return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="jdb-intro-v8"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
        style={{ backgroundColor: "#070B14" }}
        initial={{ opacity: 1 }}
        animate={{
          opacity: phase === "exit" ? 0 : 1,
        }}
        exit={{ opacity: 0 }}
        transition={{
          duration: phase === "exit" ? 1.4 : 0,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {/* Radial depth gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 45%, rgba(30,41,59,0.55) 0%, #070B14 70%)",
          }}
        />

        {/* Hairline border frame — understated luxury detail */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "clamp(16px, 3vw, 40px)",
            border: "0.5px solid rgba(191,161,117,0.18)",
            borderRadius: "clamp(12px, 2vw, 24px)",
          }}
        />

        {/* Corner accents */}
        {[
          { top: "clamp(16px,3vw,40px)", left: "clamp(16px,3vw,40px)" },
          { top: "clamp(16px,3vw,40px)", right: "clamp(16px,3vw,40px)" },
          { bottom: "clamp(16px,3vw,40px)", left: "clamp(16px,3vw,40px)" },
          { bottom: "clamp(16px,3vw,40px)", right: "clamp(16px,3vw,40px)" },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              ...pos,
              width: 14,
              height: 14,
              borderColor: "rgba(191,161,117,0.45)",
              borderStyle: "solid",
              borderWidth: 0,
              borderTopWidth: i < 2 ? "0.75px" : 0,
              borderBottomWidth: i >= 2 ? "0.75px" : 0,
              borderLeftWidth: i % 2 === 0 ? "0.75px" : 0,
              borderRightWidth: i % 2 === 1 ? "0.75px" : 0,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 + i * 0.05 }}
          />
        ))}

        {/* Central logo lockup */}
        <div className="relative z-10 flex flex-col items-center" style={{ gap: "clamp(16px, 3vw, 32px)" }}>

          {/* Monogram mark — fades in first */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              width: "clamp(56px, 11vw, 100px)",
              height: "clamp(56px, 11vw, 100px)",
            }}
          >
            <Image
              src="/images/brand/jdb-monogram-white.png"
              alt=""
              fill
              priority
              sizes="100px"
              className="object-contain pointer-events-none"
            />
          </motion.div>

          {/* Wordmark + subtitle — revealed as a vertical group */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
            style={{ gap: "clamp(6px, 1.2vw, 12px)" }}
          >
            {/* JDB GROUP */}
            <span
              className="font-display font-semibold text-white whitespace-nowrap"
              style={{
                fontSize: "clamp(1.4rem, 4.5vw, 3.2rem)",
                letterSpacing: "0.22em",
                lineHeight: 1,
              }}
            >
              JDB GROUP
            </span>

            {/* Champagne divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: "0.5px",
                width: "clamp(120px, 18vw, 240px)",
                backgroundColor: "#BFA175",
                opacity: 0.55,
                transformOrigin: "center",
              }}
            />

            {/* Subtitle lines — both always visible */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="flex flex-col items-center"
              style={{ gap: 3 }}
            >
              <span
                className="font-body font-medium uppercase text-center whitespace-nowrap"
                style={{
                  fontSize: "clamp(0.52rem, 1.1vw, 0.78rem)",
                  letterSpacing: "0.22em",
                  color: "rgba(191,161,117,0.8)",
                }}
              >
                International Real Estate
              </span>
              <span
                className="font-body font-medium uppercase text-center whitespace-nowrap"
                style={{
                  fontSize: "clamp(0.52rem, 1.1vw, 0.78rem)",
                  letterSpacing: "0.22em",
                  color: "rgba(191,161,117,0.8)",
                }}
              >
                &amp; Development Group
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Progress line at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "1.5px", backgroundColor: "#BFA175", opacity: 0.3, transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: phase === "exit" ? 1 : phase === "hold" ? 0.88 : 0.55 }}
          transition={{ duration: phase === "exit" ? 0.4 : 2.8, ease: "linear" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
