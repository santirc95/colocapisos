import { TRUST_ITEMS } from "@/lib/config";

export function TrustBar() {
  return (
    <section className="border-y border-surface-line bg-surface-alt">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-12">
        {TRUST_ITEMS.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full bg-accent-soft text-accent"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.6a1 1 0 0 1-1.42.006l-3.5-3.5a1 1 0 1 1 1.414-1.415l2.79 2.79 6.79-6.88a1 1 0 0 1 1.42-.015Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
