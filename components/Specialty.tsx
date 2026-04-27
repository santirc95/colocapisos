import { SPECIALTY_CARDS } from "@/lib/config";
import { Reveal } from "./Reveal";

export function Specialty() {
  return (
    <section
      id="especialidad"
      data-cta-section="especialidad"
      className="section bg-surface-alt"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl">
          <span className="eyebrow">Especialidad</span>
          <h2 className="h2 mt-3">
            Por qué el porcelanato y cerámico requieren una buena instalación
          </h2>
          <p className="lead mt-5">
            El resultado final no depende solo del material. Una mala
            instalación puede provocar desniveles, juntas irregulares, piezas
            mal alineadas o acabados poco limpios.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALTY_CARDS.map((card, idx) => (
            <article
              key={card.title}
              className="rounded-2xl border border-surface-line bg-white p-6 shadow-card"
            >
              <span className="text-xs font-semibold text-accent">
                0{idx + 1}
              </span>
              <h3 className="h3 mt-3">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
