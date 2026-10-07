import { useEffect, useRef } from "react";

/** Fades an element in once it scrolls into view. */
export function useReveal<T extends HTMLElement>(delayMs = 0) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
    el.style.transitionDelay = `${delayMs}ms`;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [delayMs]);
  return ref;
}
