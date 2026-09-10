"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-navy-950 text-white rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4.5rem] z-10 shadow-2xl">
      {/* Full-bleed architectural background with cinematic multi-layer gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images.heroArchitecture}
            alt="JDB Group Architectural Development"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Obsidian Navy cinematic depth overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-champagne/10 via-transparent to-transparent opacity-50" />
      </div>

      {/* Top spacing spacer */}
      <div className="h-16 sm:h-24 md:h-32 shrink-0" />

      {/* Main Editorial Hero Content */}
      <div className="container-jdb relative z-10 py-3 sm:py-8 md:py-14 my-auto">
        <div className="max-w-4xl">
          {/* Subtle Institutional Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <JDBMonogram className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" color="#BFA175" />
            <span className="font-mono text-[9px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.24em] text-champagne">
              JDB Group · Honesty is the Best Policy
            </span>
          </motion.div>

          {/* Monumental Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 sm:mt-6 font-display text-display-1 font-normal tracking-tight text-white"
          >
            Land. Legacy.
            <br />
            <span className="text-white/95">Possibility.</span>
          </motion.h1>

          {/* Confident Sub-narrative & CTAs */}
          <div className="mt-3 sm:mt-6 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block font-body text-xs sm:text-base md:text-lg leading-relaxed text-slate-300 max-w-xl"
            >
              Real estate development and strategic capital allocation shaped by
              more than fifteen years of grounded execution across Lahore, Gwadar,
              Islamabad, and international investment corridors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4"
            >
              <Link
                href="/developments"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-5 sm:px-7 py-3 sm:py-3.5 font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-navy-950 transition-all duration-300 hover:bg-white hover:shadow-luxury shrink-0"
              >
                <span>Explore Developments</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/strategic-partnerships"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 sm:px-6 py-3 sm:py-3.5 font-body text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-300 hover:border-champagne/60 hover:bg-white/10 hover:text-champagne shrink-0"
              >
                <span>Strategic Partnerships</span>
              </Link>

              <Link
                href="/invest"
                className="inline-flex items-center justify-center sm:justify-start gap-1.5 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.12em] sm:tracking-[0.14em] text-slate-400 transition-colors hover:text-champagne"
              >
                <span>Investment Opportunities</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Grounded Credibility Bar at the Base */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="relative z-10 border-t border-white/[0.08] bg-navy-950/70 backdrop-blur-md shrink-0"
      >
        <div className="container-jdb flex flex-col gap-1.5 py-2.5 sm:py-3.5 text-[8.5px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.18em] text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2 sm:gap-6">
            <span className="font-semibold text-white">
              <span className="text-champagne">15+</span> Years Groundwork
            </span>
            <span className="text-white/20">|</span>
            <span className="text-slate-300">Prime Asset Bank</span>
            <span className="hidden text-white/20 sm:inline">|</span>
            <span className="hidden text-slate-300 sm:inline">Institutional Governance</span>
          </div>

          <div className="flex items-center justify-between gap-3 sm:gap-6 sm:justify-end">
            <span className="text-slate-300 font-mono text-[9px] sm:text-[11px] font-medium tracking-[0.16em] uppercase">
              PAKISTAN · UAE · UK · CHINA
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


