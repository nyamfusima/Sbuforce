import {
  UserRound,
  Footprints,
  Home,
  Siren,
  MonitorPlay,
  Cctv,
  BellRing,
  Zap,
  Fingerprint,
} from "lucide-react";
import installationsImage from "@/assets/installations.jpg";
import patrolVehicleHatchback from "@/assets/patrol-vehicle-hatchback.jpg";
import guardWithVehicle from "@/assets/guard-with-vehicle.jpg";
import patrolVehiclePolo from "@/assets/patrol-vehicle-polo.jpg";
import { serviceGroups, installations, cctvDetail } from "@/lib/company";
import { Reveal, RevealGroup } from "@/components/site/Reveal";

const groupIcons = [
  [UserRound, Footprints, Home, Siren],
  [MonitorPlay, Cctv, BellRing, Zap, Fingerprint],
] as const;

const fleetPhotos = [
  {
    src: patrolVehicleHatchback,
    width: 810,
    height: 1080,
    alt: "Marked SbuForce Security patrol vehicle",
    caption: "Marked vehicles for guarding and patrol contracts.",
  },
  {
    src: guardWithVehicle,
    width: 1200,
    height: 1600,
    alt: "SbuForce Security guard standing beside a marked patrol vehicle",
    caption: "Guards patrol in clearly marked vehicles.",
  },
  {
    src: patrolVehiclePolo,
    width: 640,
    height: 640,
    alt: "Marked SbuForce Security patrol vehicle parked on site",
    caption: "Response vehicles ready across our fleet.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Our Services</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            Comprehensive security solutions
          </h2>
          <span className="gold-rule mt-5" />
        </Reveal>

        {serviceGroups.map((group, groupIndex) => {
          const icons = groupIcons[groupIndex]!;
          const isPrimary = groupIndex === 0;
          return (
            <div key={group.title} className={groupIndex === 0 ? "mt-14" : "mt-16"}>
              <Reveal>
                <h3 className="text-2xl font-semibold">{group.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/60">{group.intro}</p>
                <span className="gold-rule mt-4" />
              </Reveal>

              {isPrimary ? (
                <>
                  <RevealGroup as="ul" className="mt-8 grid gap-4 sm:grid-cols-2">
                    {group.items.map((service, i) => {
                      const Icon = icons[i % icons.length]!;
                      return (
                        <li
                          key={service.title}
                          className="reveal-item border border-white/12 bg-graphite p-7 transition-all duration-200 hover:-translate-y-1 hover:border-gold/40"
                          style={{ "--reveal-i": i } as React.CSSProperties}
                        >
                          <Icon aria-hidden="true" className="size-6 text-gold" />
                          <h4 className="mt-5 text-lg font-semibold">{service.title}</h4>
                          {service.description && (
                            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                              {service.description}
                            </p>
                          )}
                        </li>
                      );
                    })}
                  </RevealGroup>

                  <RevealGroup as="div" className="mt-4 grid gap-4 sm:grid-cols-3">
                    {fleetPhotos.map((photo, i) => (
                      <figure
                        key={photo.alt}
                        className="reveal-item"
                        style={{ "--reveal-i": i } as React.CSSProperties}
                      >
                        <div className="aspect-[3/4] overflow-hidden rounded-sm bg-graphite">
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            width={photo.width}
                            height={photo.height}
                            loading="lazy"
                            className="size-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <figcaption className="mt-3 border-l-2 border-gold pl-4 text-sm text-primary-foreground/70">
                          {photo.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </RevealGroup>
                </>
              ) : (
                <RevealGroup
                  as="ul"
                  className="mt-8 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2"
                >
                  {group.items.map((service, i) => {
                    const Icon = icons[i % icons.length]!;
                    const isLastOdd = group.items.length % 2 === 1 && i === group.items.length - 1;
                    return (
                      <li
                        key={service.title}
                        className={`reveal-item bg-primary p-7 transition-colors hover:bg-graphite ${isLastOdd ? "sm:col-span-2" : ""}`}
                        style={{ "--reveal-i": i } as React.CSSProperties}
                      >
                        <Icon aria-hidden="true" className="size-6 text-gold" />
                        <h4 className="mt-5 text-lg font-semibold">{service.title}</h4>
                        {service.description && (
                          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                            {service.description}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </RevealGroup>
              )}
            </div>
          );
        })}

        <Reveal as="div" className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Installations, Maintenance and Repairs</h3>
            <span className="gold-rule mt-4" />
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {installations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-primary-foreground/80"
                >
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-3 border-l-2 border-gold pl-5">
              {cctvDetail.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-primary-foreground/70">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-sm">
            <img
              src={installationsImage}
              alt="Technician installing an outdoor CCTV camera and electric fencing on a perimeter wall"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
