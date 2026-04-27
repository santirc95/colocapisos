import { NAV_LINKS, SITE, whatsappLink } from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-surface-line bg-white/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-md gradient-warm text-white shadow-sm"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
              <path d="M2 4h7v7H2zM11 4h7v7h-7zM2 13h7v3H2zM11 13h7v3h-7z" />
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-tight text-ink">
            {SITE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !px-4 !py-2 text-sm"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Cotizar por WhatsApp</span>
          <span className="sm:hidden">Cotizar</span>
        </a>
      </div>
    </header>
  );
}
