import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

const journeySteps = [
  {
    index: "01",
    title: "Portfolio & Corridor Discovery",
    description:
      "Review JDB's active development pipeline, prime DHA Lahore track record, Gwadar maritime positions, and upcoming Islamabad masterplans.",
  },
  {
    index: "02",
    title: "Institutional Due Diligence",
    description:
      "Access confidential project documentation, revenue clearance records, and masterplan timelines under standard non-disclosure.",
  },
  {
    index: "03",
    title: "Structuring & Allocation Alignment",
    description:
      "Determine investment structure — direct land title, development participation, or joint venture co-investment vehicle.",
  },
  {
    index: "04",
    title: "Executive Dialogue & Settlement",
    description:
      "Direct engagement with executive leadership to formalize participation and initiate long-term asset stewardship.",
  },
];

export function InvestmentJourney() {
  return (
    <section className="bg-navy-950 py-16 text-white md:py-36 border-t border-white/10">
      <div className="container-jdb">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <JDBMonogram className="h-4 w-4" color="#C5A880" />
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne">
                12 // Allocation Process
              </span>
            </div>

            <h2 className="mt-4 font-display text-display-3 font-normal tracking-tight text-white">
              A Disciplined Path to Participation
            </h2>

            <p className="mt-3 sm:mt-4 font-body text-xs sm:text-sm leading-relaxed text-slate-300">
              Structured to provide complete transparency, rigorous legal
              due-diligence, and discreet execution from first inquiry to title
              issuance.
            </p>

            <Link
              href="/invest/enquiry"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-champagne px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy-950 transition-all hover:bg-white"
            >
              <span>Initiate Confidential Inquiry</span>
              <span>→</span>
            </Link>
          </Reveal>

          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-3 sm:space-y-4">
              {journeySteps.map((step) => (
                <Reveal
                  key={step.index}
                  className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 rounded-xl sm:rounded-2xl border border-white/10 bg-navy-900/40 p-4 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-champagne/40 hover:bg-navy-900/80"
                >
                  <span className="font-mono text-xl sm:text-2xl font-normal text-champagne shrink-0 sm:w-12">
                    {step.index}
                  </span>

                  <div className="flex-1">
                    <h3 className="font-display text-lg text-white group-hover:text-champagne transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 font-body text-xs leading-relaxed text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

