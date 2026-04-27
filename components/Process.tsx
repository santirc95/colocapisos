import {
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

        <Reveal as="ol" className="mt-12 space-y-4" stagger={0.08} y={16}>
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

        <div className="mt-10 flex justify-center">
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
