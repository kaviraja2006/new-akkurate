"use client";

import { useEffect } from "react";

export default function ScrollToTopOnLoad() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const reset = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    reset();
    requestAnimationFrame(reset);
  }, []);

  return null;
}
