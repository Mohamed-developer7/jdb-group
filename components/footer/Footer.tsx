import Link from "next/link";
import { JDBLogo, JannatHeritageBadge } from "@/components/brand/JDBLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white border-t border-white/10 pt-14 sm:pt-20 pb-10">
      <div className="container-jdb">
        {/* Top Branding & Heritage Row */}
        <div className="grid grid-cols-12 gap-6 sm:gap-10 border-b border-white/10 pb-8 sm:pb-16">
          <div className="col-span-12 lg:col-span-5">
            <Link href="/" className="inline-block focus:outline-none">
              <JDBLogo variant="light" size="md" />
            </Link>

            <p className="mt-6 max-w-sm font-body text-xs leading-relaxed text-slate-400 sm:text-sm">
              Guided by our foundational principle —{" "}
              <strong className="text-champagne font-medium">
                Honesty is the Best Policy
              </strong>
              . An international real estate development and strategic capital group
              built on 15+ years of grounded execution.
            </p>

            {/* Heritage Notice & Direct Contact */}
            <div className="mt-8 flex flex-col gap-3 rounded border border-white/10 bg-navy-900/50 p-4 max-w-sm">
              <div className="flex items-center gap-3.5">
                <JannatHeritageBadge className="h-10 w-10 shrink-0" />
                <div className="text-[11px] text-slate-300 font-body leading-tight">
                  <span className="font-semibold text-white uppercase tracking-wider block">
                    Heritage Division
                  </span>
                  Jannat Developers &amp; Builders · Est. 2009
                </div>
              </div>
              <div className="border-t border-white/10 pt-2.5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                <a href="mailto:jdbsays@gmail.com" className="hover:text-champagne transition-colors">
                  jdbsays@gmail.com
                </a>
                <a href="tel:+923211116000" className="hover:text-champagne transition-colors">
                  +92 321 1116000
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="col-span-6 sm:col-span-3 lg:col-span-2 lg:col-start-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-champagne block mb-4">
              Portfolio
            </span>
            <ul className="space-y-3 font-body text-xs text-slate-300">
              <li>
                <Link href="/developments" className="transition-colors hover:text-champagne">
                  Developments
                </Link>
              </li>
              <li>
                <Link href="/land-bank" className="transition-colors hover:text-champagne">
                  Strategic Land Bank
                </Link>
              </li>
              <li>
                <Link href="/locations" className="transition-colors hover:text-champagne">
                  Growth Corridors
                </Link>
              </li>
              <li>
                <Link href="/projects/lahore" className="transition-colors hover:text-champagne">
                  Lahore Core
                </Link>
              </li>
              <li>
                <Link href="/projects/gwadar" className="transition-colors hover:text-champagne">
                  Gwadar Port
                </Link>
              </li>
              <li>
                <Link href="/projects/islamabad" className="transition-colors hover:text-champagne">
                  Islamabad Masterplan
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-champagne block mb-4">
              Capital &amp; Alliances
            </span>
            <ul className="space-y-3 font-body text-xs text-slate-300">
              <li>
                <Link href="/invest" className="transition-colors hover:text-champagne">
                  Investment Philosophy
                </Link>
              </li>
              <li>
                <Link href="/strategic-partnerships" className="transition-colors hover:text-champagne">
                  Strategic Partnerships
                </Link>
              </li>
              <li>
                <Link href="/international" className="transition-colors hover:text-champagne">
                  International &amp; CPEC
                </Link>
              </li>
              <li>
                <Link href="/invest/enquiry" className="transition-colors hover:text-champagne">
                  Private Allocation
                </Link>
              </li>
              <li>
                <Link href="/strategic-partnerships/enquiry" className="transition-colors hover:text-champagne">
                  Joint Venture Inquiry
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-3 lg:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-champagne block mb-4">
              Institution
            </span>
            <ul className="space-y-3 font-body text-xs text-slate-300">
              <li>
                <Link href="/company" className="transition-colors hover:text-champagne">
                  About JDB Group
                </Link>
              </li>
              <li>
                <Link href="/company/leadership" className="transition-colors hover:text-champagne">
                  Executive Leadership
                </Link>
              </li>
              <li>
                <Link href="/insights" className="transition-colors hover:text-champagne">
                  Insights &amp; Dispatch
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-champagne">
                  Headquarters &amp; Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Market Bar & Copyright */}
        <div className="pt-8 flex flex-col gap-6 text-[10px] sm:text-[11px] text-slate-400 font-mono sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-300">
            <span>LAHORE // DHA</span>
            <span className="text-slate-600">·</span>
            <span>GWADAR // PORT</span>
            <span className="text-slate-600">·</span>
            <span>ISLAMABAD // CAPITAL</span>
            <span className="text-slate-600">·</span>
            <span>GILGIT-BALTISTAN // NORTH</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="hover:text-champagne transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/terms" className="hover:text-champagne transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/cookie-policy" className="hover:text-champagne transition-colors">
              Cookie Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/refund-policy" className="hover:text-champagne transition-colors">
              Refund Policy
            </Link>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span>© {currentYear} JDB Group. All rights reserved.</span>
            <Link href="/" className="hover:text-champagne transition-colors">
              Back to Top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

