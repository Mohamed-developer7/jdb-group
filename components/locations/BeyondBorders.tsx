import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

const internationalCorridors = [
  {
    code: "AE",
    city: "DUBAI",
    country: "United Arab Emirates",
    nature: "Strategic Real Estate Collaboration",
    detail:
      "Strategic relationship and collaboration with Misbah Properties, connecting Gulf-based family offices and overseas capital with premium development assets in Pakistan.",
  },
  {
    code: "CN",
    city: "BEIJING",
    country: "China",
    nature: "CPEC Trade Corridor Strategic Alignment",
    detail:
      "Executive engagement with Chinese enterprises and infrastructure stakeholders along the CPEC economic corridor, reinforced by participation in the NDU International CPEC Workshop.",
  },
  {
    code: "GB",
    city: "LONDON",
    country: "United Kingdom",
    nature: "International Advisory & Diaspora Network",
    detail:
      "Advisory relationships with UK-based private investors and diaspora capital seeking disciplined, asset-backed land allocation and development governance.",
  },
  {
    code: "PK",
    city: "LAHORE · ISLAMABAD · GWADAR",
    country: "Pakistan",
    nature: "Operational Core & Development Machinery",
    detail:
      "Direct land bank ownership, spatial masterplanning, and turnkey development execution across Pakistan's primary growth corridors.",
  },
];

export function BeyondBorders() {
  return (
    <section className="bg-bone py-16 text-navy-950 md:py-36 border-t border-stone-border">
      <div className="container-jdb">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <JDBMonogram className="h-4 w-4" color="#0A0E17" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne-dark">
                06 // International Network
              </span>
            </div>

            <h2 className="mt-4 font-display text-display-2 font-normal tracking-tight text-navy-950">
              Rooted in Pakistan.{" "}
              <span className="text-slate-500">Connected Globally.</span>
            </h2>

            <p className="mt-3 sm:mt-5 font-body text-xs sm:text-base leading-relaxed text-slate-600">
              While our operational development machinery is firmly anchored in Pakistan,
              JDB Group&apos;s strategic perspective and capital networks extend into
              the GCC, China, and the United Kingdom.
            </p>

            <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl border border-stone-border bg-white p-5 sm:p-6 shadow-card">
              <span className="font-mono text-[10px] uppercase tracking-wider text-champagne-dark block">
                Cross-Border Perspective
              </span>
              <p className="mt-2 font-body text-xs leading-relaxed text-slate-600">
                Experience, market exposure, and strategic relationships bridging
                domestic execution with international real estate standards.
              </p>
            </div>
          </Reveal>

          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-3.5 sm:space-y-4">
              {internationalCorridors.map((item) => (
                <Reveal
                  key={item.code}
                  className="group rounded-xl sm:rounded-2xl border border-stone-border bg-white p-5 sm:p-7 shadow-card transition-all duration-300 hover:border-champagne/60 hover:shadow-luxury"
                >
                  <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-champagne-dark shrink-0">
                        [{item.code}]
                      </span>
                      <h3 className="font-display text-xl text-navy-950">
                        {item.country}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 break-all sm:break-normal">
                      {item.city}
                    </span>
                  </div>

                  <p className="mt-2 font-mono text-xs font-medium uppercase tracking-wider text-champagne-dark">
                    {item.nature}
                  </p>

                  <p className="mt-2 font-body text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.detail}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


