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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICE_TYPES.map((service) => (
            <a
              key={service.title}
              href={whatsappLink(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Cotizar instalación de ${service.title} por WhatsApp`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-surface-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0"
                />
                {service.highlight && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent shadow-sm ring-1 ring-surface-line">
                    Especialidad
                  </span>
                )}
                <span
                  aria-hidden
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white/95 text-brand-600 shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:rotate-12 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-brand-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-500/30"
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
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
