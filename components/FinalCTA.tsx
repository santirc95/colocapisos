import { whatsappLink } from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FinalCTA() {
  return (
    <section className="section gradient-soft">
      <div className="container-page">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-brand-100 bg-white p-10 text-center shadow-card sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl"
          />
          <h2 className="h2 relative">
            ¿Vas a instalar{" "}
            <span className="text-gradient-warm">porcelanato o cerámico</span>?
          </h2>
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
