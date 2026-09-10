"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("jdb_cookie_consent");
    if (!consent) {
      // Show consent banner after short delay
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("jdb_cookie_consent", "accepted");
    setShow(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("jdb_cookie_consent", "essential_only");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="region"
          aria-label="Cookie Preferences"
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-[9000] p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#070B14]/95 text-white backdrop-blur-xl shadow-2xl"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#BFA175] font-semibold">
                Privacy &amp; Cookie Notice
              </span>
              <button
                type="button"
                onClick={acceptEssential}
                aria-label="Close cookie banner"
                className="text-slate-400 hover:text-white text-xs p-1"
              >
                ✕
              </button>
            </div>

            <p className="font-body text-xs text-slate-300 leading-relaxed">
              JDB Group uses essential cookies for site performance and optional analytics cookies to optimize client stewardship. Read our{" "}
              <Link href="/cookie-policy" className="text-[#BFA175] underline underline-offset-2 hover:text-white">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#BFA175] underline underline-offset-2 hover:text-white">
                Privacy Policy
              </Link>.
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-full bg-[#BFA175] px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#070B14] hover:bg-white transition-colors"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={acceptEssential}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-white hover:border-[#BFA175] transition-colors"
              >
                Essential Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
