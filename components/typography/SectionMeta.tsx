interface SectionMetaProps {
  index?: string;
  label: string;
  className?: string;
}

// Uppercase metadata is used only where it functions as real wayfinding
// (a sequence number, a section label in a dense grid) — not stacked above
// every headline by default.
export function SectionMeta({ index, label, className = "" }: SectionMetaProps) {
  return (
    <div className={`flex items-baseline gap-3 font-body text-meta uppercase text-brass ${className}`}>
      {index && <span className="tabular-nums">{index}</span>}
      <span>{label}</span>
    </div>
  );
}
