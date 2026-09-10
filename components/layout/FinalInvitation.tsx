import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

export function FinalInvitation() {
  return (
    <section className="relative overflow-hidden bg-[#070B14] py-14 sm:py-24 text-white md:py-36">
      <div className="container-jdb">
        <Reveal className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 sm:p-12 lg:p-20 backdrop-blur-2xl shadow-2xl">
          <div className="absolute right-0 top-0 -translate-y-12 translate-x-12 opacity-5 pointer-events-none">
            <JDBMonogram className="h-48 w-48 sm:h-64 sm:w-64 lg:h-96 lg:w-96" color="#FFFFFF" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2.5">
              <JDBMonogram className="h-4 w-4 shrink-0" color="#BFA175" />
              <span className="font-body text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#BFA175]">
                14 // Direct Engagement
              </span>
            </div>

            <h2 className="mt-5 font-display text-display-2 font-normal tracking-tight text-white">
              The Groundwork is Set.
              <br />
              <span className="text-slate-300">Begin the Dialogue.</span>
            </h2>

            <p className="mt-4 sm:mt-6 font-body text-xs sm:text-base leading-relaxed text-slate-300 md:text-lg">
              Whether you are an institutional developer exploring joint ventures,
              a private family office allocating capital into prime land banks, or
              an international partner exploring Pakistan&apos;s economic
              corridors — our executive leadership is ready for a direct,
              confidential conversation.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-6">
              <Link
                href="/invest/enquiry"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#BFA175] px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#090E17] transition-all duration-300 hover:bg-white"
              >
                <span>Private Investor Allocation</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/strategic-partnerships/enquiry"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 sm:px-7 py-3.5 sm:py-4 text-xs font-medium uppercase tracking-[0.16em] sm:tracking-[0.18em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#BFA175] hover:bg-white/10 hover:text-[#BFA175]"
              >
                <span>Strategic Partnership Inquiry</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

