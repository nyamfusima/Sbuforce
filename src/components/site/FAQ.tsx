import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/company";
import { Reveal } from "@/components/site/Reveal";

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-24">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Common Questions</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
          <span className="gold-rule mt-5" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/85">
            Answers to what clients most often ask before requesting a quote. Can't find what you
            need? Get in touch directly.
          </p>
        </Reveal>

        <Reveal as="div" className="border border-border bg-card">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`item-${i}`}
                className={i === faqs.length - 1 ? "border-b-0 px-6 sm:px-8" : "px-6 sm:px-8"}
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline [&>svg]:text-gold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
