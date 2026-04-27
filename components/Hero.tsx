import { IMAGES, whatsappLink } from "@/lib/config";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="top"
      data-cta-section="hero"
      className="relative overflow-hidden bg-surface"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-brand-50 via-white to-white"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-brand-200/50 blur-3xl"
      />
      <div className="container-page grid gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-center lg:gap-16 lg:pb-24 lg:pt-24">
        <Reveal trigger="mount" y={20} className="lg:col-span-6">
          <span className="eyebrow">Servicio de instalación</span>
          <h1 className="h1 mt-4">
            Especialistas en instalación de{" "}
            <span className="text-gradient-sunset">
              porcelanato y cerámico
            </span>
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
        </Reveal>

        <Reveal trigger="mount" y={20} delay={0.15} className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-2xl bg-surface-alt shadow-card ring-1 ring-surface-line">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={IMAGES.hero.desktop}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES.hero.mobile}
                alt="Instalación de piso con sistema de nivelación"
                className="aspect-[4/5] w-full object-cover md:aspect-[5/4] lg:aspect-[4/3]"
              />
            </picture>
            <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-ink shadow-sm ring-1 ring-surface-line">
              Instalación con sistema de nivelación
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
