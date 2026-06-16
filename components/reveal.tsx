"use client";

import { useState, useRef, useEffect } from "react";
import { useLenis } from "lenis/react";

export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const triggered = useRef(false);

  const trigger = () => {
    if (triggered.current) return;
    triggered.current = true;
    setVisible(true);
  };

  useLenis(() => {
    if (triggered.current || !ref.current) return;
    if (ref.current.getBoundingClientRect().top < window.innerHeight * 0.88) {
      trigger();
    }
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const check = () => {
      if (triggered.current) return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.88) trigger();
    };

    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition:
          "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}
