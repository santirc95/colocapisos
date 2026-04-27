import { FAQS } from "@/lib/config";
import { Reveal } from "./Reveal";

export function FAQ() {
  return (
    <section id="faq" data-cta-section="faq" className="section">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="h2 mt-3">Lo que la gente nos pregunta</h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-surface-line border-y border-surface-line">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="text-base font-medium text-ink">{faq.q}</span>
                <span
                  aria-hidden
                  className="grid h-7 w-7 flex-none place-items-center rounded-full border border-surface-line text-ink-muted transition group-open:rotate-45 group-open:border-ink group-open:text-ink"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M9 4h2v12H9zM4 9h12v2H4z" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
