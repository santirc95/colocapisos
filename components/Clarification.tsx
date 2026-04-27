import { whatsappLink } from "@/lib/config";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Clarification() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="h2 mt-3">
            Nos enfocamos en colocar, no en vender pisos
          </h2>
          <p className="lead mt-5">
            Si ya compraste tu porcelanato o cerámico, podemos ayudarte con la
            instalación. Si todavía estás evaluando qué material comprar, también
            podemos orientarte para evitar errores antes de colocarlo.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon />
              Hablar por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
