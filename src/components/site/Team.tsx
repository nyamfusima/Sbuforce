import { management } from "@/lib/company";
import { Reveal, RevealGroup } from "@/components/site/Reveal";
import sibusisoPhoto from "@/assets/sibusiso-nkosi.png";
import lindelwaPhoto from "@/assets/lindelwa-mafa.png";

/** Photos in the same order as `management` in company.ts. */
const teamPhotos = [sibusisoPhoto, lindelwaPhoto];

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

        <RevealGroup as="div" className="mt-10 flex flex-col gap-8 sm:flex-row sm:gap-1">
          {management.map((person, i) => (
            <div
              key={person.name}
              tabIndex={0}
              className="team-panel reveal-item outline-none"
              style={{ "--reveal-i": i } as React.CSSProperties}
            >
              <div className="h-72 overflow-hidden rounded-sm bg-graphite sm:h-96">
                <img
                  src={teamPhotos[i]}
                  alt={`${person.name}, ${person.role} at SbuForce Security`}
                  width={400}
                  height={500}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-4 border-l-2 border-gold pl-4">
                <p className="text-lg font-semibold">{person.name}</p>
                <p className="eyebrow mt-1">{person.role}</p>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
