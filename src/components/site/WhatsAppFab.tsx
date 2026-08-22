import { company } from "@/lib/company";
import { WhatsAppIcon } from "@/components/site/icons/WhatsAppIcon";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${company.phones[0].whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SbuForce Security on WhatsApp"
      className="[animation:fab-in_0.5s_cubic-bezier(0.16,1,0.3,1)_1s_both] fixed right-4 bottom-4 z-40 flex items-center justify-center drop-shadow-lg transition-transform duration-200 hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-12" />
    </a>
  );
}
