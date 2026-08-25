import { Mail, Phone } from "lucide-react";
import { management } from "@/lib/company";
import { Reveal, RevealGroup } from "@/components/site/Reveal";
import sibusisoPhoto from "@/assets/sibusiso-nkosi.png";
import lindelwaPhoto from "@/assets/lindelwa-mafa.png";

/** Photos (background-removed cutouts) in the same order as `management` in company.ts, with intrinsic size for aspect-correct rendering. */
const teamPhotos = [
  { src: sibusisoPhoto, width: 525, height: 476 },
  { src: lindelwaPhoto, width: 375, height: 441 },
];

export function Team() {
  return (
    <section id="team" className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Our Team</p>
          <h2 className="mt-3 max-w-xl text-3xl font-bold sm:text-4xl">
            The people behind SbuForce
          </h2>
          <span className="gold-rule mt-5" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80">
            The two directors leading SbuForce Security's guarding, monitoring and technical
            operations.
          </p>
        </Reveal>

        <RevealGroup as="div" className="mt-10 grid gap-6 sm:grid-cols-2">
          {management.map((person, i) => (
            <div
              key={person.name}
              className="reveal-item border border-border bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-gold/40"
              style={{ "--reveal-i": i } as React.CSSProperties}
            >
              <div className="h-64 overflow-hidden rounded-sm bg-muted sm:h-72">
                <img
                  src={teamPhotos[i].src}
                  alt={`${person.name}, ${person.role} at SbuForce Security`}
                  width={teamPhotos[i].width}
                  height={teamPhotos[i].height}
                  loading="lazy"
                  className="size-full scale-110 object-contain object-bottom"
                />
              </div>
              <div className="mt-5 border-l-2 border-gold pl-4">
                <p className="text-lg font-semibold text-foreground">{person.name}</p>
                <p className="eyebrow mt-1">{person.role}</p>
                <a
                  href={`tel:${person.tel}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  <Phone aria-hidden="true" className="size-3.5 shrink-0" />
                  {person.cell}
                </a>
                <a
                  href={`mailto:${person.email}`}
                  className="mt-1.5 flex items-center gap-1.5 text-sm break-all text-muted-foreground transition-colors hover:text-gold"
                >
                  <Mail aria-hidden="true" className="size-3.5 shrink-0" />
                  {person.email}
                </a>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
