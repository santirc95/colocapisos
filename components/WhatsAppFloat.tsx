import { whatsappLink } from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full gradient-warm px-4 py-3 text-sm font-medium text-white shadow-lg shadow-brand-500/30 transition hover:brightness-110 sm:bottom-6 sm:right-6 sm:px-5"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Cotizar por WhatsApp</span>
    </a>
  );
}
