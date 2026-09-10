import { Reveal } from "@/components/motion/Reveal";
import { JDBMonogram } from "@/components/brand/JDBLogo";

const stewardshipPrinciples = [
  {
    num: "01",
    title: "Principal-to-Principal Governance",
    desc: "Every substantial land allocation and joint venture is negotiated directly with executive leadership, ensuring strategic alignment, zero broker friction, and total clarity.",
  },
  {
    num: "02",
    title: "Institutional Title & Due Diligence",
    desc: "Every asset in the JDB portfolio undergoes rigorous legal, land revenue, and municipal verification — maintaining a flawless 15-year delivery and transfer record.",
  },
  {
    num: "03",
    title: "Absolute Discretion",
    desc: "We serve a close network of high-net-worth families, diaspora leaders, and institutional partners who require confidential deal structuring and tailored capital deployment.",
  },
  {
    num: "04",
    title: "Intergenerational Asset Value",
    desc: "We develop and secure land not for transient speculative cycles, but for enduring capital preservation and long-term urban utility.",
  },
];

export function ClientTrust() {
  return (
    <section className="bg-[#FBFBF9] py-16 text-[#0F172A] md:py-36 border-t border-[#E8E6DF]">
      <div className="container-jdb">
        <Reveal className="max-w-2xl">
          <div className="flex items-center gap-2.5">
            <JDBMonogram className="h-4 w-4" color="#BFA175" />
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BFA175]">
              10 // Client Trust &amp; Stewardship
            </span>
          </div>

          <h2 className="mt-4 font-display text-display-3 font-normal tracking-tight text-[#0F172A]">
            Principles of Long-Term Partnership
          </h2>

          <p className="mt-3 sm:mt-5 font-body text-xs sm:text-base leading-relaxed text-[#475569]">
            In real estate, credibility is earned through market cycles. Our
            relationships span over a decade of repeat transactions, joint
            ventures, and asset stewardship.
          </p>
        </Reveal>

        <div className="mt-8 sm:mt-16 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:gap-8">
          {stewardshipPrinciples.map((item) => (
            <Reveal
              key={item.num}
              className="group flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[#E2E0D8] bg-white p-5 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#BFA175]/60 hover:shadow-xl"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-[#BFA175]">
                  {item.num} // PRINCIPLE
                </span>
                <h3 className="mt-4 font-display text-xl text-[#0F172A] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-[#64748B]">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#F2F1EC] pt-4 text-[11px] uppercase tracking-wider text-[#64748B]">
                <span>Verified JDB Standard</span>
                <span className="text-[#BFA175] font-mono font-semibold">100%</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

