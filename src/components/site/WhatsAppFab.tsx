import { company } from "@/lib/company";
import { WhatsAppIcon } from "@/components/site/icons/WhatsAppIcon";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${company.phones[0].whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SbuForce Security on WhatsApp"
      className="[animation:fab-in_0.5s_cubic-bezier(0.16,1,0.3,1)_1s_both] fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-sm bg-gold px-4 py-3 text-gold-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold/85 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-5" />
      <span className="font-display hidden text-xs tracking-[0.14em] uppercase sm:inline">
        WhatsApp Us
      </span>
    </a>
  );
}
