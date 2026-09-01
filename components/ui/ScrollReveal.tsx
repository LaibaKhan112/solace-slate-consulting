"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Thin scroll-triggered reveal wrapper around the .animate-fade-in gate in
 * globals.css. Toggles a data-reveal attribute directly on its DOM node
 * (no React state, no re-render) and only once it has mounted client-side —
 * so content stays visible by default if JS never runs. Observes once, then
 * unobserves — the reveal only ever plays once.
 */
export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.setAttribute("data-reveal", "true");
      return;
    }

    el.setAttribute("data-reveal", "false");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-reveal", "true");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
