import { IMAGES, whatsappLink } from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface">
      <div className="container-page grid gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-center lg:gap-16 lg:pb-24 lg:pt-24">
        <div className="lg:col-span-6">
          <span className="eyebrow">Servicio de instalación</span>
          <h1 className="h1 mt-4">
            Especialistas en instalación de{" "}
            <span className="text-accent">porcelanato y cerámico</span>
          </h1>
          <p className="lead mt-5 max-w-xl">
            Instalamos tu piso con precisión, orden y acabados limpios. Si ya
            tienes el material, te ayudamos a colocarlo correctamente.
          </p>
          <p className="mt-3 text-sm text-ink-subtle">
            No vendemos pisos. Nos especializamos en la instalación.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon />
              Cotizar por WhatsApp
            </a>
            <a href="#proceso" className="btn-secondary">
              Ver cómo trabajamos
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl bg-surface-alt shadow-card ring-1 ring-surface-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.hero}
              alt="Instalación profesional de porcelanato"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-ink shadow-sm ring-1 ring-surface-line">
              Instalación con sistema de nivelación
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
