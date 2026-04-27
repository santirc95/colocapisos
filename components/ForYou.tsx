import { FOR_YOU_BULLETS, IMAGES } from "@/lib/config";
import { Reveal } from "./Reveal";

export function ForYou() {
  return (
    <section data-cta-section="foryou" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-6">
          <span className="eyebrow">Para quién</span>
          <h2 className="h2 mt-3">Este servicio es para ti si…</h2>
          <ul className="mt-8 space-y-4">
            {FOR_YOU_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-1 grid h-6 w-6 flex-none place-items-center rounded-full border border-accent text-accent"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.6a1 1 0 0 1-1.42.006l-3.5-3.5a1 1 0 1 1 1.414-1.415l2.79 2.79 6.79-6.88a1 1 0 0 1 1.42-.015Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-base text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={0.1}>
          <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-surface-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.process}
              alt="Detalle de instalación de cerámico"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
