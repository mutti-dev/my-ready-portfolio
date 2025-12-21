"use client";

import { useEffect } from "react";

export default function ThemeInit() {
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    document.documentElement.setAttribute(
      "data-bs-theme",
      prefersDark ? "dark" : "light"
    );
  }, []);

  return null;
}
