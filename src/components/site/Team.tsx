import { management } from "@/lib/company";
import { Reveal, RevealGroup } from "@/components/site/Reveal";
import sibusisoPhoto from "@/assets/sibusiso-nkosi.png";
import lindelwaPhoto from "@/assets/lindelwa-mafa.png";

/** Photos in the same order as `management` in company.ts. */
const teamPhotos = [sibusisoPhoto, lindelwaPhoto];

export function Team() {
  return (
    <section id="team" className="bg-secondary py-20 sm:py-24">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Our Team</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The people behind SbuForce</h2>
          <span className="gold-rule mt-5" />
        </Reveal>

        <RevealGroup
          as="div"
          className="mt-10 flex flex-col gap-1 overflow-hidden rounded-sm sm:h-[26rem] sm:flex-row"
        >
          {management.map((person, i) => (
            <div
              key={person.name}
              tabIndex={0}
              className="team-panel reveal-item group relative h-72 overflow-hidden bg-primary outline-none sm:h-full"
              style={{ "--reveal-i": i } as React.CSSProperties}
            >
              <img
                src={teamPhotos[i]}
                alt={`${person.name}, ${person.role} at SbuForce Security`}
                width={400}
                height={500}
                loading="lazy"
                className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-lg font-semibold text-white">{person.name}</p>
                <p className="eyebrow mt-1">{person.role}</p>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
