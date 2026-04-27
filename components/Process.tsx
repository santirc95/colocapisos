import { PROCESS_STEPS, whatsappLink } from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Process() {
  return (
    <section id="proceso" className="section bg-surface-alt">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow">Proceso</span>
          <h2 className="h2 mt-3">Así cotizamos tu instalación</h2>
        </div>

        <ol className="mt-12 grid gap-4 lg:grid-cols-5">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.step}
              className="flex h-full flex-col rounded-2xl border border-surface-line bg-white p-6 shadow-card"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sm font-semibold text-white">
                {step.step}
              </span>
              <p className="mt-4 text-sm font-medium leading-snug text-ink">
                {step.title}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <WhatsAppIcon />
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
}
