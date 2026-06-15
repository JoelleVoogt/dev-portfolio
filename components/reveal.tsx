"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useRef(false);

  const show = (el: HTMLDivElement, animate: boolean) => {
    revealed.current = true;
    if (!animate) el.style.transition = "none";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  };

  // Reveal on scroll via Lenis
  useLenis(() => {
    if (revealed.current) return;
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight - 160) {
      show(el, true);
    }
  });

  // Reveal immediately if already in viewport on mount
  useEffect(() => {
    const el = ref.current;
    if (!el || revealed.current) return;
    if (el.getBoundingClientRect().top < window.innerHeight - 160) {
      show(el, false);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        opacity: 0,
        transform: "translateY(48px)",
        transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}
