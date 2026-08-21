import { company, sectors } from "@/lib/company";

export function Sectors() {
  return (
    <section id="sectors" className="bg-secondary py-20 sm:py-24">
      <div className="shell">
        <p className="eyebrow">Specialising in Guarding of</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Sectors we guard</h2>
        <span className="gold-rule mt-5" />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <li
              key={sector}
              className="font-display border-l-2 border-gold bg-card px-5 py-4 text-sm tracking-wide uppercase"
            >
              {sector}
            </li>
          ))}
        </ul>

        <div className="mt-12 border border-border bg-card p-7">
          <h3 className="text-lg font-semibold">Where we operate</h3>
          <span className="gold-rule mt-3" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Our offices are based at {company.address.lines[0]}, {company.address.lines[1]},{" "}
            {company.address.lines[2]}, {company.address.lines[3]}. Contact our team to confirm coverage for your site.
          </p>
        </div>
      </div>
    </section>
  );
}
