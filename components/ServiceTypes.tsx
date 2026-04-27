import { SERVICE_TYPES } from "@/lib/config";
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
            <article
              key={service.title}
              className={[
                "relative rounded-2xl border p-7 transition",
                service.highlight
                  ? "border-ink/10 bg-white shadow-card"
                  : "border-dashed border-surface-line bg-surface-alt",
              ].join(" ")}
            >
              {service.highlight && (
                <span className="absolute right-5 top-5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                  Especialidad
                </span>
              )}
              <h3 className="text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
