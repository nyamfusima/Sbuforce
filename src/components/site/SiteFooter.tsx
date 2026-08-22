import logo from "@/assets/sbuforce-logo.png";
import { company } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-primary py-12 text-primary-foreground">
      <div className="shell grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <img
            src={logo}
            alt={`${company.name} logo`}
            width={72}
            height={61}
            loading="lazy"
            className="h-14 w-auto"
          />
          <p className="font-display mt-4 text-lg">{company.legalName}</p>
          <p className="mt-2 text-xs text-primary-foreground/60">
            PSIRA Registered Security Company
          </p>
        </div>

        <nav aria-label="Footer" className="text-sm">
          <h2 className="eyebrow">Site</h2>
          <ul className="mt-4 space-y-2 text-primary-foreground/75">
            <li>
              <a href="#about" className="hover:text-gold">
                About
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-gold">
                Team
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gold">
                Services
              </a>
            </li>
            <li>
              <a href="#sectors" className="hover:text-gold">
                Sectors
              </a>
            </li>
            <li>
              <a href="#trust" className="hover:text-gold">
                Trust
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-gold">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-sm text-primary-foreground/75">
          <h2 className="eyebrow">Contact</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={`tel:${company.phones[0].tel}`} className="hover:text-gold">
                {company.phones[0].value}
              </a>
            </li>
            <li>
              <a href={`tel:${company.phones[2].tel}`} className="hover:text-gold">
                {company.phones[2].value}
              </a>
            </li>
            <li className="break-all">
              <a href={`mailto:${company.emails[0]}`} className="hover:text-gold">
                {company.emails[0]}
              </a>
            </li>
            <li>{company.address.short}</li>
          </ul>
        </div>
      </div>

      <div className="shell mt-10 border-t border-white/10 pt-6 text-xs text-primary-foreground/50">
        &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
