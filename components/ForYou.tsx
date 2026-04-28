import { FOR_YOU_POINTS, IMAGES } from "@/lib/config";
import { Reveal } from "./Reveal";

export function ForYou() {
  return (
    <section
      data-cta-section="foryou"
      className="py-16 md:py-24 lg:py-28"
    >
      <div className="container-page grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
        <Reveal>
          <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-surface-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.installation}
              alt="Instalación de piso con detalle de juntas y nivelación"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] md:aspect-[4/5] lg:aspect-[4/5]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-md">
            <span className="eyebrow">Para quién</span>
            <h2 className="h2 mt-3">Este servicio es para ti si:</h2>

            <ul className="mt-8 space-y-5">
              {FOR_YOU_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <svg
                    aria-hidden
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1.5 h-4 w-4 flex-none text-accent"
                  >
                    <path d="M5 10.5 8.5 14 15 6.5" />
                  </svg>
                  <span className="text-base leading-relaxed text-ink">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
