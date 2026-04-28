import { VISIT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/config";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FinalCTA() {
  return (
    <section data-cta-section="finalcta" className="section gradient-soft">
      <div className="container-page">
        <Reveal className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-brand-100 bg-white p-10 text-center shadow-card sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl"
          />
          <h2 className="h2 relative">
            ¿Vas a instalar{" "}
            <span className="text-gradient-warm">porcelanato o cerámico</span>?
          </h2>
          <p className="lead mt-4">
            Agenda una revisión y recibe una cotización clara para tu proyecto.
          </p>
          <p className="mt-3 text-sm text-ink-subtle">
            Atendemos un número limitado de proyectos por semana.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={whatsappLink(VISIT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon />
              Agendar por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
