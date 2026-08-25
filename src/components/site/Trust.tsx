import { ShieldCheck, BadgeCheck } from "lucide-react";
import { compliance, trustBadges, sectors, serviceGroups, yearsOperating } from "@/lib/company";
import { Reveal, RevealGroup } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import guardEntrance from "@/assets/guard-entrance.jpg";
import patrolVehicleBmw from "@/assets/patrol-vehicle-bmw.jpg";
import guardPatrolVehicle from "@/assets/guard-patrol-vehicle.jpg";
import patrolVehicleHatchback from "@/assets/patrol-vehicle-hatchback.jpg";
import guardWithVehicle from "@/assets/guard-with-vehicle.jpg";
import patrolVehiclePolo from "@/assets/patrol-vehicle-polo.jpg";

const totalServices = serviceGroups.flatMap((group) => group.items).length;

const stats = [
  { target: yearsOperating, label: "Years of Experience" },
  { target: sectors.length, label: "Sectors We Guard" },
  { target: totalServices, label: "Security Services" },
];

const proofPhotos = [
  {
    src: guardEntrance,
    width: 960,
    height: 1280,
    alt: "SbuForce Security guard on duty in uniform at a client site",
    caption: "On duty in full SbuForce uniform.",
  },
  {
    src: patrolVehicleBmw,
    width: 720,
    height: 960,
    alt: "Marked SbuForce Security patrol vehicle",
    caption: "Marked response vehicle on call.",
  },
  {
    src: guardPatrolVehicle,
    width: 1200,
    height: 1600,
    alt: "SbuForce Security guard in a marked patrol vehicle",
    caption: "Guards patrol in clearly branded vehicles.",
  },
  {
    src: patrolVehicleHatchback,
    width: 810,
    height: 1080,
    alt: "Marked SbuForce Security patrol vehicle",
    caption: "Marked vehicles for site patrols.",
  },
  {
    src: guardWithVehicle,
    width: 1200,
    height: 1600,
    alt: "SbuForce Security guard standing beside a marked patrol vehicle",
    caption: "Contactable guards at every site.",
  },
  {
    src: patrolVehiclePolo,
    width: 640,
    height: 640,
    alt: "Marked SbuForce Security patrol vehicle parked on site",
    caption: "Fleet ready across our coverage area.",
  },
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
          <h3 className="text-lg font-semibold">Our Guards & Vehicles</h3>
          <span className="gold-rule mt-3" />
        </Reveal>
        <div
          className="relative mt-5 w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div className="gallery-track flex w-max items-start gap-5">
            {[...proofPhotos, ...proofPhotos].map((photo, i) => (
              <figure key={`${photo.alt}-${i}`} className="w-48 shrink-0 sm:w-56">
                <div className="aspect-[3/4] overflow-hidden rounded-sm bg-graphite">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 border-l-2 border-gold pl-3 text-xs text-primary-foreground/70">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <Reveal as="div" className="mt-14">
          <h3 className="text-lg font-semibold">Registrations & Compliance</h3>
          <span className="gold-rule mt-3" />
          <RevealGroup as="div" className="mt-5 flex flex-wrap gap-3">
            {trustBadges.map((badge, i) => (
              <span
                key={badge}
                className="reveal-item font-display inline-flex items-center gap-2 rounded-sm border border-white/15 bg-graphite px-4 py-2 text-xs tracking-[0.12em] text-primary-foreground/85 uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/40"
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
