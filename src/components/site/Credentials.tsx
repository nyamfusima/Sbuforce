import { BadgeCheck } from "lucide-react";
import { credentials, management } from "@/lib/company";

export function Credentials() {
  return (
    <section id="credentials" className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="shell">
        <p className="eyebrow">Registrations & Documents</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Credentials</h2>
        <span className="gold-rule mt-5" />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-primary-foreground/70">
          The following registrations and documents are included in our company profile and available on request.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c) => (
            <li key={c.label} className="border border-white/12 bg-graphite p-6">
              <BadgeCheck aria-hidden="true" className="size-5 text-gold" />
              <h3 className="mt-4 text-base font-semibold">{c.label}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{c.value}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 text-2xl font-semibold">Management</h3>
        <span className="gold-rule mt-4" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {management.map((person) => (
            <li key={person.name} className="border border-white/12 p-7">
              <h4 className="text-lg font-semibold">{person.name}</h4>
              <p className="eyebrow mt-1">{person.role}</p>
              <div className="mt-4 space-y-1 text-sm">
                <p>
                  <span className="text-primary-foreground/55">Cell: </span>
                  <a href={`tel:${person.tel}`} className="transition-colors hover:text-gold">
                    {person.cell}
                  </a>
                </p>
                <p className="break-all">
                  <span className="text-primary-foreground/55">Email: </span>
                  <a href={`mailto:${person.email}`} className="transition-colors hover:text-gold">
                    {person.email}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
