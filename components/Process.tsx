import {
  IMAGES,
  PROCESS_STEPS,
  VISIT_WHATSAPP_MESSAGE,
  whatsappLink,
} from "@/lib/config";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Process() {
  return (
    <section
      id="proceso"
      data-cta-section="proceso"
      className="section bg-surface-alt"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2 className="h2 mt-3">Así trabajamos contigo</h2>
          <p className="lead mt-5">
            Para darte una cotización precisa y evitar errores, buscamos
            entender bien tu espacio antes de instalar.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-surface-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMAGES.installer}
                  alt="Instalador profesional listo para revisar tu espacio"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-medium text-ink shadow-sm ring-1 ring-surface-line">
                  <span
                    aria-hidden
                    className="grid h-5 w-5 flex-none place-items-center rounded-full gradient-warm text-white"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.6a1 1 0 0 1-1.42.006l-3.5-3.5a1 1 0 1 1 1.414-1.415l2.79 2.79 6.79-6.88a1 1 0 0 1 1.42-.015Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Visita e inspección sin compromiso
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal
            as="ol"
            className="space-y-4 lg:col-span-7"
            stagger={0.08}
            y={16}
          >
            {PROCESS_STEPS.map((step) => (
              <li
                key={step.step}
                className="flex gap-5 rounded-2xl border border-surface-line bg-white p-6 shadow-card sm:p-7"
              >
                <span className="grid h-10 w-10 flex-none place-items-center rounded-full gradient-warm text-sm font-semibold text-white">
                  {step.step}
                </span>
                <div>
                  <h3 className="h3">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={whatsappLink(VISIT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsAppIcon />
            Agendar revisión por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
