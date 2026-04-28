import { VISIT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/config";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Clarification() {
  return (
    <section data-cta-section="clarification" className="section">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="h2 mt-3">
            Nos enfocamos en instalar, no en vender pisos
          </h2>
          <p className="lead mt-5">
            Nos especializamos en la instalación de pisos. No vendemos
            materiales, pero podemos orientarte para elegirlos correctamente y
            evitar errores antes de colocarlo.
          </p>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Nos enfocamos principalmente en porcelanato y cerámico, donde el
            detalle hace toda la diferencia.
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
