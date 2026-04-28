import { Reveal } from "./Reveal";

export function Confidence() {
  return (
    <section
      data-cta-section="confidence"
      className="section relative overflow-hidden bg-ink text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-600/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-rose-500/20 blur-3xl"
      />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            Nuestro enfoque
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Un enfoque{" "}
            <span className="text-gradient-warm">claro desde el inicio</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            Estamos construyendo un servicio enfocado en instalaciones bien
            hechas, claras y sin improvisación. Nuestro objetivo es que tengas
            certeza desde la cotización hasta la ejecución.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
