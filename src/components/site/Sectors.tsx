import { company, sectors } from "@/lib/company";
import { Reveal, RevealGroup } from "@/components/site/Reveal";

export function Sectors() {
  return (
    <section id="sectors" className="bg-secondary py-20 sm:py-24">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Who We Protect</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Guarding suited to your type of site
          </h2>
          <span className="gold-rule mt-5" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85">
            We specialise in guarding the following environments, each with its own access, patrol
            and response requirements.
          </p>
        </Reveal>

        <RevealGroup as="ul" className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <li
              key={sector}
              className="reveal-item font-display border-l-2 border-gold bg-card px-5 py-4 text-sm tracking-wide uppercase transition-all duration-200 hover:-translate-y-0.5"
              style={{ "--reveal-i": i } as React.CSSProperties}
            >
              {sector}
            </li>
          ))}
        </RevealGroup>

        <Reveal as="div" className="mt-12 border border-border bg-card p-7">
          <h3 className="text-lg font-semibold">Where we operate</h3>
          <span className="gold-rule mt-3" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Our offices are based at {company.address.lines[0]}, {company.address.lines[1]},{" "}
            {company.address.lines[2]}, {company.address.lines[3]}. Contact our team to confirm
            coverage for your site.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
