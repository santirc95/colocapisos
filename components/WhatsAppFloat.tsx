import { VISIT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(VISIT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar revisión por WhatsApp"
      title="Agendar revisión por WhatsApp"
      className="float-pulse fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full gradient-warm text-white shadow-lg transition hover:scale-110 hover:brightness-110 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  );
}
