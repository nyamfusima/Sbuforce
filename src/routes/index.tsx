import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Sectors } from "@/components/site/Sectors";
import { Trust } from "@/components/site/Trust";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { serviceGroups, faqs } from "@/lib/company";

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
          areaServed: "Gauteng, South Africa",
          serviceType: serviceGroups.flatMap((group) => group.items.map((item) => item.title)),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
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
        <Sectors />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
