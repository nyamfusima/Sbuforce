import { MessageCircle } from "lucide-react";
import { company } from "@/lib/company";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${company.phones[0].whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SbuForce Security on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-sm bg-gold px-4 py-3 text-gold-foreground shadow-lg transition-colors hover:bg-gold/85 sm:right-6 sm:bottom-6"
    >
      <MessageCircle aria-hidden="true" className="size-5" />
      <span className="font-display hidden text-xs tracking-[0.14em] uppercase sm:inline">WhatsApp Us</span>
    </a>
  );
}
