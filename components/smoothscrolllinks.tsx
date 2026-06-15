"use client";

import { useLenis } from "lenis/react";
import { useEffect } from "react";

export default function SmoothScrollLinks() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href?.startsWith("#")) return;

      e.preventDefault();
      lenis.scrollTo(href);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}
