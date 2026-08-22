import { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/sbuforce-logo.png";
import { company } from "@/lib/company";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#sectors", label: "Sectors" },
  { href: "#trust", label: "Trust" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden border-b border-white/10 bg-graphite text-primary-foreground/70 lg:block">
        <div className="shell flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${company.phones[2].tel}`}
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Phone aria-hidden="true" className="size-3.5" />
              {company.phones[2].value}
            </a>
            <a
              href={`mailto:${company.emails[0]}`}
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Mail aria-hidden="true" className="size-3.5" />
              {company.emails[0]}
            </a>
          </div>
          <p className="flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="size-3.5 text-gold" />
            {company.address.short}
          </p>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-primary/95 backdrop-blur transition-shadow duration-300 supports-[backdrop-filter]:bg-primary/85 ${
          scrolled ? "border-white/10 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)]" : "border-white/0"
        }`}
      >
        <div className="shell flex h-18 items-center justify-between gap-4 py-3">
          <a href="#top" className="flex items-center gap-3" aria-label={`${company.name} home`}>
            <img
              src={logo}
              alt={`${company.name} winged shield logo`}
              width={56}
              height={47}
              className="h-11 w-auto"
            />
            <span className="font-display text-primary-foreground leading-none">
              <span className="block text-base font-semibold tracking-wide sm:text-lg">
                SbuForce
              </span>
              <span className="block text-[0.62rem] tracking-[0.3em] text-gold">Security</span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display relative py-1 text-xs tracking-[0.14em] text-primary-foreground/80 uppercase transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-gold hover:after:w-full"
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
              className="font-display inline-flex items-center gap-1.5 rounded-sm bg-gold px-4 py-2.5 text-xs tracking-[0.14em] text-gold-foreground uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold/85"
            >
              Request a Quote
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
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
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Mobile"
          aria-hidden={!open}
          className={`nav-collapse lg:hidden ${open ? "nav-collapse-open" : ""}`}
        >
          <div className="overflow-hidden">
            <div className="shell flex flex-col border-t border-white/10 bg-primary py-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  tabIndex={open ? undefined : -1}
                  onClick={() => setOpen(false)}
                  className="font-display border-b border-white/5 py-3.5 text-sm tracking-[0.14em] text-primary-foreground/85 uppercase transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 py-4">
                <a
                  href={`tel:${company.phones[0].tel}`}
                  tabIndex={open ? undefined : -1}
                  className="font-display inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 px-4 py-3 text-center text-xs tracking-[0.14em] text-primary-foreground uppercase"
                >
                  <Phone aria-hidden="true" className="size-3.5" />
                  Call {company.phones[0].value}
                </a>
                <a
                  href="#contact"
                  tabIndex={open ? undefined : -1}
                  onClick={() => setOpen(false)}
                  className="font-display inline-flex items-center justify-center gap-1.5 rounded-sm bg-gold px-4 py-3 text-center text-xs tracking-[0.14em] text-gold-foreground uppercase"
                >
                  Request a Quote
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
