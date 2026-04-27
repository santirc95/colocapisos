"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
  trigger?: "scroll" | "mount";
  as?: "div" | "ol" | "ul";
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.7,
  stagger = 0,
  trigger = "scroll",
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        return;

      const targets =
        stagger > 0
          ? gsap.utils.toArray<HTMLElement>(el.children)
          : el;

      gsap.from(targets, {
        y,
        opacity: 0,
        duration,
        ease: "power3.out",
        delay,
        stagger: stagger > 0 ? stagger : undefined,
        ...(trigger === "scroll"
          ? {
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            }
          : {}),
      });
    },
    { scope: ref }
  );

  if (as === "ol") {
    return (
      <ol
        ref={ref as React.RefObject<HTMLOListElement>}
        className={className}
      >
        {children}
      </ol>
    );
  }
  if (as === "ul") {
    return (
      <ul
        ref={ref as React.RefObject<HTMLUListElement>}
        className={className}
      >
        {children}
      </ul>
    );
  }
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
}
