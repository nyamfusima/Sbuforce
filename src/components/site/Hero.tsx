import { ShieldCheck, Phone } from "lucide-react";
import heroImage from "@/assets/hero-guard.jpg";
import { company } from "@/lib/company";

export function Hero() {
  return (
    <section id="top" className="relative isolate bg-primary text-primary-foreground">
      <img
        src={heroImage}
        alt="SbuForce Security guard on duty at the access gate of an industrial business park"
        width={1600}
        height={1104}
        className="absolute inset-0 -z-10 size-full object-cover object-[60%_center] opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/85 to-primary/40" aria-hidden="true" />

      <div className="shell py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <p className="eyebrow">
            PSIRA No. {company.psiraNo} &nbsp;|&nbsp; Reg No. {company.regNo}
          </p>
          <h1 className="mt-5 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
            Security guard services you can <span className="text-gold">trust</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Whether your concerns are Corporate, Commercial, Industrial or Residential, we provide you with the ultimate
            in security and confidentiality you demand — creating the peace of mind you deserve.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="font-display rounded-sm bg-gold px-7 py-4 text-center text-sm tracking-[0.14em] text-gold-foreground uppercase transition-colors hover:bg-gold/85"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              className="font-display rounded-sm border border-white/25 px-7 py-4 text-center text-sm tracking-[0.14em] text-primary-foreground uppercase transition-colors hover:border-gold hover:text-gold"
            >
              View Our Services
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs tracking-[0.16em] text-primary-foreground/55 uppercase">Founded</dt>
              <dd className="font-display mt-1 text-xl">{company.founded}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-primary-foreground/55 uppercase">Control Room</dt>
              <dd className="font-display mt-1 text-xl">24 Hours</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-primary-foreground/55 uppercase">Based in</dt>
              <dd className="font-display mt-1 text-xl">Germiston, Gauteng</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/40">
        <div className="shell flex flex-col gap-3 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-primary-foreground/75">
            <ShieldCheck aria-hidden="true" className="size-4 text-gold" />
            All guarding contracts come with armed response for each site where our guards are deployed.
          </p>
          <a
            href={`tel:${company.phones[2].tel}`}
            className="flex items-center gap-2 text-primary-foreground transition-colors hover:text-gold"
          >
            <Phone aria-hidden="true" className="size-4 text-gold" />
            Office: {company.phones[2].value}
          </a>
        </div>
      </div>
    </section>
  );
}
