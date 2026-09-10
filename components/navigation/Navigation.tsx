"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { JDBLogoNav, JDBMonogram } from "@/components/brand/JDBLogo";

const primaryLinks = [
  { href: "/developments", label: "Developments" },
  { href: "/land-bank", label: "Land Bank" },
  { href: "/invest", label: "Investment" },
  { href: "/strategic-partnerships", label: "Strategic Partnerships" },
  { href: "/company", label: "Company" },
  { href: "/international", label: "International" },
];

const menuGroups = [
  {
    label: "01 // Portfolio & Land",
    links: [
      { href: "/developments", label: "Selected Developments", desc: "Active & upcoming projects across Pakistan" },
      { href: "/land-bank", label: "Strategic Land Bank", desc: "High-conviction prime corridor holdings" },
      { href: "/locations", label: "Market Footprint", desc: "Lahore, Gwadar, Islamabad & Gilgit-Baltistan" },
    ],
  },
  {
    label: "02 // Capital & Partnerships",
    links: [
      { href: "/invest", label: "Investment Opportunities", desc: "Asset-backed, development-led value creation" },
      { href: "/strategic-partnerships", label: "Strategic Partnerships", desc: "Joint ventures, GCC & international capital" },
      { href: "/invest/enquiry", label: "Private Investor Enquiry", desc: "Direct confidential allocation dialogue" },
    ],
  },
  {
    label: "03 // Institution & Heritage",
    links: [
      { href: "/company", label: "About JDB Group", desc: "15+ years compounding track record" },
      { href: "/company/leadership", label: "Leadership & Vision", desc: "Executive leadership & strategic governance" },
      { href: "/international", label: "International Exposure", desc: "CPEC, China, UAE & UK relationships" },
      { href: "/insights", label: "Insights & Dispatch", desc: "Market perspectives & company updates" },
      { href: "/contact", label: "Contact & Headquarters", desc: "Direct dialogue & communication" },
    ],
  },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-architectural ${
          scrolled || open
            ? "bg-navy-950/95 py-2 sm:py-3.5 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl"
            : "bg-gradient-to-b from-navy-950/90 via-navy-950/30 to-transparent py-2.5 sm:py-5"
        }`}
      >
        <div className="container-jdb flex items-center justify-between gap-2 sm:gap-4">
          {/* Official JDB Brand Lockup */}
          <Link
            href="/"
            className="flex items-center shrink-0 transition-transform duration-300 hover:scale-[1.02] focus:outline-none"
            onClick={() => setOpen(false)}
          >
            <JDBLogoNav variant="light" size="sm" className="sm:hidden" />
            <JDBLogoNav variant="light" size="md" className="hidden sm:flex" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-6 xl:gap-9 lg:flex">
            {primaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative py-1 text-[11px] font-medium tracking-[0.16em] uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-champagne font-semibold"
                      : "text-slate-200/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-champagne transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Quick Enquire Action & Menu Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-3.5 shrink-0">
            <Link
              href="/invest/enquiry"
              className="inline-flex items-center gap-1 sm:gap-2 rounded-full border border-champagne/40 bg-champagne/10 px-2.5 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-champagne backdrop-blur-sm transition-all duration-300 hover:border-champagne hover:bg-champagne hover:text-navy-950 shrink-0"
            >
              <span>Enquire</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="jdb-menu"
              className="group flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.12em] sm:tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-300 hover:border-champagne/50 hover:bg-white/10 focus:outline-none shrink-0"
            >
              <span className="text-slate-300 group-hover:text-champagne transition-colors">
                {open ? "Close" : "Menu"}
              </span>
              <div className="relative flex h-2.5 w-3 sm:h-3 sm:w-3.5 flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-white transition-all duration-300 ${
                    open ? "translate-y-1 sm:translate-y-1.5 rotate-45 bg-champagne" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-white transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-white transition-all duration-300 ${
                    open ? "-translate-y-1 -rotate-45 bg-champagne" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="jdb-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-navy-950/98 pt-20 sm:pt-28 pb-10 text-white backdrop-blur-2xl"
          >
            <div className="container-jdb my-auto py-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-16">
                {menuGroups.map((group, gi) => (
                  <motion.div
                    key={group.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.06 * gi, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col"
                  >
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-champagne">
                      {group.label}
                    </span>
                    <div className="mt-5 flex flex-col divide-y divide-white/5">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="group flex flex-col py-3.5 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-display text-lg sm:text-xl tracking-tight text-white transition-colors duration-300 group-hover:text-champagne md:text-2xl">
                              {link.label}
                            </span>
                            <span className="text-xs text-stone-text opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-champagne">
                              →
                            </span>
                          </div>
                          <span className="mt-1 font-body text-xs text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                            {link.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Meta Ribbon */}
            <div className="container-jdb border-t border-white/10 pt-6">
              <div className="flex flex-col gap-4 text-xs tracking-wider text-slate-400 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <JDBMonogram className="h-5 w-5" color="#BFA175" />
                  <span className="uppercase text-slate-300 text-[11px] font-mono">
                    JDB Group · Real Estate Development &amp; Strategic Capital
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  <span>Lahore</span>
                  <span>·</span>
                  <span>Gwadar</span>
                  <span>·</span>
                  <span>Islamabad</span>
                  <span>·</span>
                  <span>Gilgit-Baltistan</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


