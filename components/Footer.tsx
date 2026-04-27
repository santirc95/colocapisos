import { SITE, whatsappLink } from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="border-t border-surface-line bg-white">
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-ink">{SITE.name}</p>
            <p className="mt-2 text-sm text-ink-muted">
              {SITE.shortDescription}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-subtle">
              Contacto
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-subtle">
              Zona de servicio
            </p>
            <p className="mt-3 text-sm text-ink">{SITE.area}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-surface-line pt-6 text-xs text-ink-subtle sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </p>
          <p>{SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}
