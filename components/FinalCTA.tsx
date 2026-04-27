import { whatsappLink } from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FinalCTA() {
  return (
    <section className="section bg-surface-alt">
      <div className="container-page">
        <div className="mx-auto max-w-3xl rounded-3xl border border-surface-line bg-white p-10 text-center shadow-card sm:p-14">
          <h2 className="h2">¿Vas a instalar porcelanato o cerámico?</h2>
          <p className="lead mt-4">
            Cuéntanos sobre tu proyecto y recibe una cotización clara por
            WhatsApp.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
