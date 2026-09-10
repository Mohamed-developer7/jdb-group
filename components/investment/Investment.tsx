import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

const assetClasses = [
  {
    title: "Prime Land Bank Acquisition",
    desc: "Acquiring strategic acreage positioned directly in the path of confirmed municipal and masterplanned growth.",
  },
  {
    title: "Joint Venture Development",
    desc: "Structured co-development models aligning private capital with JDB's on-the-ground construction and execution machinery.",
  },
  {
    title: "Capital Gateway Allocations",
    desc: "Strategic positioning in JDB's upcoming Islamabad International Airport masterplanned commercial and mixed-use development.",
  },
  {
    title: "Strategic Advisory & Wealth Stewardship",
    desc: "Discreet advisory for family offices and overseas investors seeking institutional exposure in Pakistan real estate.",
  },
];

export function Investment() {
  return (
    <section className="bg-[#FBFBF9] py-16 text-[#0F172A] md:py-36 border-t border-[#E8E6DF]">
      <div className="container-jdb">
        <div className="grid grid-cols-12 items-center gap-8 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <JDBMonogram className="h-4 w-4" color="#BFA175" />
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BFA175]">
                11 // Capital Deployment
              </span>
            </div>

            <h2 className="mt-4 font-display text-display-3 font-normal tracking-tight text-[#0F172A]">
              Real Estate as a High-Conviction Allocation
            </h2>

            <p className="mt-3 sm:mt-5 font-body text-xs sm:text-base leading-relaxed text-[#475569]">
              We work with a select cohort of private families, institutional
              partners, and diaspora investors. Rather than passive portal
              listings, we structure disciplined, asset-backed development
              allocations.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/invest/enquiry"
                className="group inline-flex items-center gap-2 rounded-full bg-[#090E17] px-6 sm:px-7 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#BFA175] hover:text-[#090E17]"
              >
                <span>Private Allocation Dialogue</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="/strategic-partnerships"
                className="text-xs uppercase tracking-[0.14em] text-[#64748B] transition-colors hover:text-[#0F172A]"
              >
                Strategic Partnerships
              </Link>
            </div>
          </Reveal>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 gap-3.5 sm:gap-4 sm:grid-cols-2">
              {assetClasses.map((item, idx) => (
                <Reveal
                  key={item.title}
                  className="group flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[#E2E0D8] bg-white p-5 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#BFA175]/60 hover:shadow-xl"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold text-[#BFA175]">
                      0{idx + 1}
                    </span>
                    <h3 className="mt-2.5 sm:mt-3 font-display text-base sm:text-lg text-[#0F172A]">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-body text-xs leading-relaxed text-[#64748B]">
                      {item.desc}
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

