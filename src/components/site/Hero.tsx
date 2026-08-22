import { ShieldCheck, ArrowUpRight } from "lucide-react";
import heroBackdrop from "@/assets/hero-backdrop.jpg";
import guardCutout from "@/assets/guard-cutout.png";
import { yearsOperating } from "@/lib/company";
import { Counter } from "@/components/site/Counter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      <img
        src={heroBackdrop}
        alt="Industrial business park access road with security boom gate at dusk"
        width={820}
        height={1104}
        className="absolute inset-0 -z-20 size-full object-cover opacity-60"
      />
      <div
        className="absolute inset-0 -z-20 bg-gradient-to-r from-primary via-primary/80 to-primary/20"
        aria-hidden="true"
      />
      <img
        src={guardCutout}
        alt="Security officer on duty responding on a two-way radio"
        width={434}
        height={359}
        className="pointer-events-none absolute right-0 bottom-12 -z-10 hidden h-[88%] w-auto object-contain object-bottom opacity-60 sm:right-4 md:block lg:right-12"
      />

      <div className="shell py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl [animation:hero-in_0.8s_cubic-bezier(0.16,1,0.3,1)_both]">
          <p className="eyebrow">PSIRA Registered Security Company</p>
          <h1 className="mt-5 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
            <span className="block">Security guard services</span>
            <span className="block text-gold">you can trust</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Whether your concerns are Corporate, Commercial, Industrial or Residential, we provide
            you with the ultimate in security and confidentiality you demand — creating the peace of
            mind you deserve.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="font-display inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm tracking-[0.14em] text-gold-foreground uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold/85"
            >
              Request a Quote
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <a
              href="#services"
              className="font-display inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 px-7 py-4 text-sm tracking-[0.14em] text-primary-foreground uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              View Our Services
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs tracking-[0.16em] text-primary-foreground/55 uppercase">
                Experience
              </dt>
              <dd className="font-display mt-1 text-xl">
                <Counter target={yearsOperating} suffix=" Years" />
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-primary-foreground/55 uppercase">
                Control Room
              </dt>
              <dd className="font-display mt-1 text-xl">
                <Counter target={24} suffix=" Hours" />
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-primary-foreground/55 uppercase">
                Based in
              </dt>
              <dd className="font-display mt-1 text-xl">Germiston, Gauteng</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/40">
        <div className="shell py-4 text-sm">
          <p className="flex items-center justify-center gap-2 text-primary-foreground/75 sm:justify-start">
            <ShieldCheck aria-hidden="true" className="size-4 text-gold" />
            All guarding contracts come with armed response for each site where our guards are
            deployed.
          </p>
        </div>
      </div>
    </section>
  );
}
