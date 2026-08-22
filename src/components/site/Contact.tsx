import { useState } from "react";
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";
import { company, serviceOptions } from "@/lib/company";
import { Reveal, RevealGroup } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/icons/WhatsAppIcon";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Service required: ${data.get("service")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    setSent(true);
    window.location.href = `mailto:${company.emails[0]}?cc=${company.emails[1]}&subject=${encodeURIComponent(
      "Website quote request",
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="bg-background py-20 sm:py-24">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Contact Details</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Request a quote</h2>
          <span className="gold-rule mt-5" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Tell us about your site and the service you require. Our team will come back to you with
            a quotation.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-5 border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs font-semibold tracking-[0.12em] uppercase">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-xs font-semibold tracking-[0.12em] uppercase"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-semibold tracking-[0.12em] uppercase">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="text-xs font-semibold tracking-[0.12em] uppercase"
              >
                Service required
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-xs font-semibold tracking-[0.12em] uppercase"
              >
                Your requirement
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            </div>

            <button
              type="submit"
              className="font-display inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-4 text-sm tracking-[0.14em] text-gold-foreground uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold/85"
            >
              Request a Quote
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </button>
            {sent && (
              <p role="status" className="text-sm text-muted-foreground">
                Your email application is opening with your details. If it does not open, email us
                directly at {company.emails[0]}.
              </p>
            )}
            <a
              href={`https://wa.me/${company.phones[0].whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display flex items-center justify-center gap-2 rounded-sm border border-input px-6 py-4 text-sm tracking-[0.14em] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-gold"
            >
              <WhatsAppIcon className="size-4" />
              Chat on WhatsApp
            </a>
          </form>
        </Reveal>

        <RevealGroup as="div" className="space-y-8">
          <div
            className="reveal-item border border-border bg-card p-7"
            style={{ "--reveal-i": 0 } as React.CSSProperties}
          >
            <h3 className="text-lg font-semibold">Telephone</h3>
            <span className="gold-rule mt-3" />
            <ul className="mt-4 space-y-3 text-sm">
              {company.phones.map((phone) => (
                <li key={phone.value} className="flex items-start gap-3">
                  <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>
                    <a
                      href={`tel:${phone.tel}`}
                      className="font-medium transition-colors hover:text-gold"
                    >
                      {phone.value}
                    </a>
                    <span className="block text-xs text-muted-foreground">{phone.label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="reveal-item border border-border bg-card p-7"
            style={{ "--reveal-i": 1 } as React.CSSProperties}
          >
            <h3 className="text-lg font-semibold">Email & Web</h3>
            <span className="gold-rule mt-3" />
            <ul className="mt-4 space-y-3 text-sm">
              {company.emails.map((email) => (
                <li key={email} className="flex items-start gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />
                  <a
                    href={`mailto:${email}`}
                    className="break-all transition-colors hover:text-gold"
                  >
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Globe aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />
                <a
                  href={`https://${company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {company.website}
                </a>
              </li>
            </ul>
          </div>

          <div
            className="reveal-item border border-border bg-card p-7"
            style={{ "--reveal-i": 2 } as React.CSSProperties}
          >
            <h3 className="text-lg font-semibold">Address</h3>
            <span className="gold-rule mt-3" />
            <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                {company.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
