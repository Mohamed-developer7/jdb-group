import Link from "next/link";
import { partnershipCategories } from "@/data/content";
import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export function StrategicPartnerships() {
  return (
    <section className="bg-[#F5F4EF] py-16 text-[#0F172A] md:py-36 border-t border-[#E8E6DF]">
      <div className="container-jdb">
        {/* Section Header */}
        <Reveal className="grid grid-cols-12 gap-6 sm:gap-8 border-b border-[#E2E0D8] pb-8 sm:pb-12">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-center gap-2.5">
              <JDBMonogram className="h-4 w-4" color="#BFA175" />
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BFA175]">
                13 // Strategic Alliances
              </span>
            </div>
            <h2 className="mt-4 font-display text-display-3 font-normal tracking-tight text-[#0F172A]">
              Institutional Partnerships &amp; Joint Ventures
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:self-end">
            <p className="font-body text-xs sm:text-base leading-relaxed text-[#475569]">
              Pakistan&apos;s evolving economic corridors demand credible,
              asset-backed counterparties. JDB Group structures high-value
              joint ventures with international developers, sovereign entities,
              GCC family offices, and institutional investors.
            </p>
            <div className="mt-4 sm:mt-6">
              <Link
                href="/strategic-partnerships/enquiry"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#BFA175] transition-colors hover:text-[#0F172A]"
              >
                <span className="border-b border-[#BFA175] pb-1 group-hover:border-[#0F172A]">
                  Initiate Partnership Dialogue
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Partnership Categories Grid */}
        <div className="mt-8 sm:mt-14 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnershipCategories.map((cat, idx) => (
            <Reveal
              key={cat.title}
              className="group flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[#E2E0D8] bg-white p-5 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#BFA175]/60 hover:shadow-xl"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-[#BFA175]">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-display text-lg text-[#0F172A]">
                  {cat.title}
                </h3>
                <p className="mt-2.5 font-body text-xs leading-relaxed text-[#64748B]">
                  {cat.description}
                </p>
              </div>

              <div className="mt-6 h-[1.5px] w-6 bg-[#E2E0D8] transition-all duration-300 group-hover:w-full group-hover:bg-[#BFA175]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

