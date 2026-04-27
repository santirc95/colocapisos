"use client";

import { useEffect, useRef, useState } from "react";
import {
  DEFAULT_CTA,
  HEADER_CTA_BY_SECTION,
  whatsappLink,
} from "@/lib/config";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function HeaderCTA() {
  const [activeId, setActiveId] = useState<string>("hero");
  const linkRef = useRef<HTMLAnchorElement>(null);

  // Shimmer once on mount.
  useEffect(() => {
    const el = linkRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add("shimmering");
    const t = window.setTimeout(() => el.classList.remove("shimmering"), 950);
    return () => window.clearTimeout(t);
  }, []);

  // Track which section is currently anchored under the sticky header.
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-cta-section]")
    );
    if (!sections.length) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-cta-section");
          if (!id) return;
          visibility.set(id, entry.intersectionRatio);
        });

        let bestId = activeId;
        let bestRatio = -1;
        for (const section of sections) {
          const id = section.getAttribute("data-cta-section");
          if (!id) continue;
          const ratio = visibility.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestRatio > 0) setActiveId(bestId);
      },
      {
        // Top sticky header is ~64px, ignore the bottom 55% of the viewport
        // so a section is "active" only once its top reaches the upper area.
        rootMargin: "-72px 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cta = HEADER_CTA_BY_SECTION[activeId] ?? DEFAULT_CTA;

  return (
    <a
      ref={linkRef}
      href={whatsappLink(cta.message)}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary btn-shine !px-4 !py-2 text-sm"
      data-active={activeId}
    >
      <WhatsAppIcon className="h-4 w-4" />
      <span
        key={`full-${cta.full}`}
        className="cta-label hidden sm:inline"
      >
        {cta.full}
      </span>
      <span key={`short-${cta.short}`} className="cta-label sm:hidden">
        {cta.short}
      </span>
    </a>
  );
}
