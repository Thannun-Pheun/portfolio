import type { CSSProperties } from "react";

/** Type-safe-ish helper for inline CSS custom properties. */
export const vars = (o: Record<string, string | number>): CSSProperties =>
  o as CSSProperties;
