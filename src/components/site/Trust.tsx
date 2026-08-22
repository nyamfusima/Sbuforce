import { ShieldCheck, BadgeCheck } from "lucide-react";
import { compliance, trustBadges, sectors, serviceGroups, yearsOperating } from "@/lib/company";
import { Reveal, RevealGroup } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

const totalServices = serviceGroups.flatMap((group) => group.items).length;

const stats = [
  { target: yearsOperating, label: "Years of Experience" },
  { target: sectors.length, label: "Sectors We Guard" },
  { target: totalServices, label: "Security Services" },
];

export function Trust() {
  return (
    <section id="trust" className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Why Clients Trust Us</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            Screened guards, a registered company
          </h2>
          <span className="gold-rule mt-5" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            {compliance.intro}
          </p>
        </Reveal>

        <RevealGroup as="dl" className="mt-10 grid grid-cols-3 gap-6 border-y border-white/10 py-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal-item text-center sm:text-left"
              style={{ "--reveal-i": i } as React.CSSProperties}
            >
              <dd className="font-display text-4xl text-gold sm:text-5xl">
                <Counter target={stat.target} />
              </dd>
              <dt className="mt-2 text-xs tracking-[0.14em] text-primary-foreground/60 uppercase">
                {stat.label}
              </dt>
            </div>
          ))}
        </RevealGroup>

        <RevealGroup as="ul" className="mt-14 grid gap-4 sm:grid-cols-2">
          {compliance.points.map((point, i) => (
            <li
              key={point}
              className="reveal-item border border-white/12 bg-graphite p-6"
              style={{ "--reveal-i": i } as React.CSSProperties}
            >
              <ShieldCheck aria-hidden="true" className="size-5 text-gold" />
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85">{point}</p>
            </li>
          ))}
        </RevealGroup>

        <Reveal as="div" className="mt-14">
          <h3 className="text-lg font-semibold">Registrations & Compliance</h3>
          <span className="gold-rule mt-3" />
          <RevealGroup as="div" className="mt-5 flex flex-wrap gap-3">
            {trustBadges.map((badge, i) => (
              <span
                key={badge}
                className="reveal-item font-display inline-flex items-center gap-2 rounded-sm border border-white/15 bg-graphite px-4 py-2 text-xs tracking-[0.12em] text-primary-foreground/85 uppercase"
                style={{ "--reveal-i": i } as React.CSSProperties}
              >
                <BadgeCheck aria-hidden="true" className="size-3.5 text-gold" />
                {badge}
              </span>
            ))}
          </RevealGroup>
          <p className="mt-4 text-sm text-primary-foreground/55">
            Full registration and compliance documents are available on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
