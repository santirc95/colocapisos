import { SERVICE_TYPES, whatsappLink } from "@/lib/config";
import { Reveal } from "./Reveal";

export function ServiceTypes() {
  return (
    <section data-cta-section="services" className="section">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl">
          <span className="eyebrow">Servicios</span>
          <h2 className="h2 mt-3">Tipos de instalación que realizamos</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SERVICE_TYPES.map((service) => (
            <a
              key={service.title}
              href={whatsappLink(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Cotizar instalación de ${service.title} por WhatsApp`}
              className={[
                "group relative flex flex-col rounded-2xl border p-7 pr-16 transition duration-300",
                service.highlight
                  ? "border-ink/10 bg-white shadow-card hover:-translate-y-1 hover:shadow-lg"
                  : "border-dashed border-surface-line bg-surface-alt hover:-translate-y-1 hover:border-solid hover:border-brand-200 hover:bg-white hover:shadow-card",
              ].join(" ")}
            >
              {service.highlight && (
                <span className="self-start rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                  Especialidad
                </span>
              )}
              <h3
                className={[
                  "text-xl font-semibold text-ink",
                  service.highlight ? "mt-4" : "",
                ].join(" ")}
              >
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>

              <span
                aria-hidden
                className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-brand-200 bg-white text-brand-600 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-12 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-brand-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-500/30"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M4 12 L12 4" />
                  <path d="M5.5 4 L12 4 L12 10.5" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
