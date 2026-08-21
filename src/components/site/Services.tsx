import {
  UserRound,
  Footprints,
  MonitorPlay,
  Home,
  Siren,
  Cctv,
  BellRing,
  Zap,
  Fingerprint,
} from "lucide-react";
import installationsImage from "@/assets/installations.jpg";
import { services, installations, cctvDetail } from "@/lib/company";

const icons = [UserRound, Footprints, MonitorPlay, Home, Siren, Cctv, BellRing, Zap, Fingerprint] as const;

export function Services() {
  return (
    <section id="services" className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="shell">
        <p className="eyebrow">Our Services</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
          Comprehensive security solutions
        </h2>
        <span className="gold-rule mt-5" />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <li key={service.title} className="bg-primary p-7 transition-colors hover:bg-graphite">
                <Icon aria-hidden="true" className="size-6 text-gold" />
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                {service.description && (
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{service.description}</p>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Installations, Maintenance and Repairs</h3>
            <span className="gold-rule mt-4" />
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
              {installations.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-primary-foreground/80">
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
          <img
            src={installationsImage}
            alt="Technician installing an outdoor CCTV camera and electric fencing on a perimeter wall"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}
