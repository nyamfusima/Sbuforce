import { BadgeCheck } from "lucide-react";
import { trustBadges } from "@/lib/company";

export function TrustTicker() {
  return (
    <div className="border-b border-white/10 bg-graphite py-6">
      <div className="shell flex flex-col items-center gap-4 md:flex-row">
        <p className="shrink-0 text-center text-xs tracking-[0.14em] text-primary-foreground/55 uppercase md:border-r md:border-white/10 md:pr-6 md:text-left">
          Registrations &amp; Compliance
        </p>
        <div
          className="relative w-full overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          <div className="ticker-track flex w-max items-center gap-10">
            {[...trustBadges, ...trustBadges].map((badge, i) => (
              <span
                key={`${badge}-${i}`}
                className="font-display flex items-center gap-2 text-xs tracking-[0.12em] text-primary-foreground/75 uppercase"
              >
                <BadgeCheck aria-hidden="true" className="size-3.5 text-gold" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
