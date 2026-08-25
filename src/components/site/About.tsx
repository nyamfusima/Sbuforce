import staffOperations from "@/assets/staff-operations.jpg";
import { company, mission, vision } from "@/lib/company";
import { Reveal } from "@/components/site/Reveal";

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <Reveal>
          <p className="eyebrow">Our Company</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Who we are</h2>
          <span className="gold-rule mt-5" />
          <p className="mt-6 text-base leading-relaxed text-foreground/85">
            {company.name} was founded in {company.founded} by {company.founder}, and operates from
            Meadowdale, Germiston as a PSIRA-registered private security company.
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
        </Reveal>

        <Reveal as="figure" className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-sm">
            <img
              src={staffOperations}
              alt="SbuForce Security staff member at a workstation in the company's Meadowdale office"
              width={720}
              height={961}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
          <figcaption className="mt-3 border-l-2 border-gold pl-4 text-sm text-muted-foreground">
            Our control room has highly trained staff monitoring our clients' cameras 24/7 and can
            send out an armed response vehicle at a moment's notice.
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
