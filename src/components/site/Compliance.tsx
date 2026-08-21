import { Check } from "lucide-react";
import { compliance } from "@/lib/company";

export function Compliance() {
  return (
    <section id="compliance" className="bg-background py-20 sm:py-24">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Compliance</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Why clients trust our guards</h2>
          <span className="gold-rule mt-5" />
          <p className="mt-6 text-base leading-relaxed text-foreground/85">{compliance.intro}</p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {compliance.points.map((point) => (
            <li key={point} className="border border-border bg-card p-6">
              <Check aria-hidden="true" className="size-5 text-gold" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
