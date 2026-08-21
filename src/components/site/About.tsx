import controlRoom from "@/assets/control-room.jpg";
import { company, mission, vision } from "@/lib/company";

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div>
          <p className="eyebrow">Our Company</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Who we are</h2>
          <span className="gold-rule mt-5" />
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            {company.name} was founded in {company.founded} by {company.founder}, and operates from Meadowdale,
            Germiston. We are a registered private security company — Enterprise Number {company.regNo} and Company
            PSIRA No. {company.psiraNo}.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Mission Statement</h3>
              <span className="gold-rule mt-3" />
              {mission.map((p) => (
                <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold">Vision Statement</h3>
              <span className="gold-rule mt-3" />
              {vision.map((p) => (
                <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        <figure className="lg:sticky lg:top-28">
          <img
            src={controlRoom}
            alt="Operator monitoring client CCTV cameras in the SbuForce Security 24 hour control room"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full rounded-sm object-cover"
          />
          <figcaption className="mt-3 border-l-2 border-gold pl-4 text-sm text-muted-foreground">
            Our control room has highly trained staff monitoring our clients' cameras 24/7 and can send out an armed
            response vehicle at a moment's notice.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
