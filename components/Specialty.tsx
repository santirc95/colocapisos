import { SPECIALTY_BULLETS } from "@/lib/config";
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
            instalación puede provocar desniveles, juntas irregulares o
            acabados poco limpios.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <ul className="grid gap-4 sm:grid-cols-2">
            {SPECIALTY_BULLETS.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 rounded-xl border border-surface-line bg-white p-4"
              >
                <span
                  aria-hidden
                  className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-accent-soft text-accent"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.6a1 1 0 0 1-1.42.006l-3.5-3.5a1 1 0 1 1 1.414-1.415l2.79 2.79 6.79-6.88a1 1 0 0 1 1.42-.015Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-base font-medium text-ink">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
