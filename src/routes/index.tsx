import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Compliance } from "@/components/site/Compliance";
import { Sectors } from "@/components/site/Sectors";
import { Credentials } from "@/components/site/Credentials";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const title = "SbuForce Security | Guarding, CCTV & Armed Response";
const description =
  "SbuForce Security provides guarding, monitored patrols, 24 hour control room, armed response, CCTV and off-site monitoring. PSIRA registered. Based in Germiston, Gauteng.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SecurityService",
          name: "SbuForce Security",
          legalName: "SBUFORCE SECURITY (PTY) LTD",
          foundingDate: "2020",
          url: "https://www.sbuforcesecurity.co.za",
          telephone: ["+27787984296", "+27731766553", "+27113955709"],
          email: "nkosi@sbuforcesecurity.co.za",
          address: {
            "@type": "PostalAddress",
            streetAddress: "437 Sam Green Street, Tunney Industrial Meadowdale",
            addressLocality: "Germiston",
            postalCode: "1400",
            addressRegion: "Gauteng",
            addressCountry: "ZA",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Compliance />
        <Sectors />
        <Credentials />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
