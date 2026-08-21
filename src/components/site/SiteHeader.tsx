import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/sbuforce-logo.png";
import { company } from "@/lib/company";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#compliance", label: "Compliance" },
  { href: "#sectors", label: "Sectors" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/85">
      <div className="shell flex h-18 items-center justify-between gap-4 py-3">
        <a href="#top" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <img src={logo} alt={`${company.name} winged shield logo`} width={56} height={47} className="h-11 w-auto" />
          <span className="font-display text-primary-foreground leading-none">
            <span className="block text-base font-semibold tracking-wide sm:text-lg">SbuForce</span>
            <span className="block text-[0.62rem] tracking-[0.3em] text-gold">Security</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs tracking-[0.14em] text-primary-foreground/80 uppercase transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phones[0].tel}`}
            className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-gold"
          >
            <Phone aria-hidden="true" className="size-4" />
            {company.phones[0].value}
          </a>
          <a
            href="#contact"
            className="font-display rounded-sm bg-gold px-4 py-2.5 text-xs tracking-[0.14em] text-gold-foreground uppercase transition-colors hover:bg-gold/85"
          >
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-sm border border-white/15 p-2 text-primary-foreground lg:hidden"
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-primary lg:hidden">
          <div className="shell flex flex-col py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display border-b border-white/5 py-3.5 text-sm tracking-[0.14em] text-primary-foreground/85 uppercase"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 py-4">
              <a
                href={`tel:${company.phones[0].tel}`}
                className="font-display rounded-sm border border-white/20 px-4 py-3 text-center text-xs tracking-[0.14em] text-primary-foreground uppercase"
              >
                Call {company.phones[0].value}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="font-display rounded-sm bg-gold px-4 py-3 text-center text-xs tracking-[0.14em] text-gold-foreground uppercase"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
