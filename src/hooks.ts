import { useEffect, useRef, useState, type RefObject } from "react";

export const THEME_KEY = "pt-theme"; // must match the boot script in index.html

/* ---------- reduced motion ---------- */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

/* ---------- light / dark theme ---------- */
export function useTheme(): { theme: string; toggle: () => void } {
  const [theme, setThemeState] = useState<string>(
    () => document.documentElement.getAttribute("data-theme") || "dark",
  );

  const apply = (next: string, persist: boolean) => {
    const root = document.documentElement;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("theme-fade");
      window.setTimeout(() => root.classList.remove("theme-fade"), 380);
    }
    root.setAttribute("data-theme", next);
    setThemeState(next);
    if (persist) {
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        /* private mode */
      }
    }
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(THEME_KEY);
      } catch {
        /* noop */
      }
      if (!saved) apply(e.matches ? "light" : "dark", false);
    };
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return { theme, toggle: () => apply(theme === "dark" ? "light" : "dark", true) };
}

/* ---------- reveal-on-scroll for every .reveal element ---------- */
export function useRevealOnScroll(): void {
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [reduced]);
}

/* ---------- scroll-spy: which section is current ---------- */
export function useScrollSpy(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const spy = () => {
      const pos = window.scrollY + window.innerHeight * 0.35;
      let current: string | null = null;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", spy, { passive: true });
    window.addEventListener("resize", spy);
    spy();
    return () => {
      window.removeEventListener("scroll", spy);
      window.removeEventListener("resize", spy);
    };
  }, [ids]);
  return active;
}

/* ---------- looping typewriter (type → hold → erase → repeat) ---------- */
export function useTypewriterLoop(text: string, enable: boolean): string {
  const [out, setOut] = useState(enable ? "" : text);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!enable) {
      setOut(text);
      return;
    }
    let pos = 0;
    let deleting = false;

    const tick = () => {
      if (document.hidden) {
        timer.current = window.setTimeout(tick, 500);
        return;
      }
      if (!deleting) {
        pos++;
        setOut(text.slice(0, pos));
        if (pos >= text.length) {
          timer.current = window.setTimeout(() => {
            deleting = true;
            tick();
          }, 2600);
        } else {
          const wait = text.charAt(pos - 1) === " " ? 220 : 85 + Math.random() * 70;
          timer.current = window.setTimeout(tick, wait);
        }
      } else {
        pos--;
        setOut(text.slice(0, pos));
        if (pos <= 0) {
          deleting = false;
          timer.current = window.setTimeout(tick, 750);
        } else {
          timer.current = window.setTimeout(tick, 38);
        }
      }
    };

    timer.current = window.setTimeout(tick, 500);
    return () => window.clearTimeout(timer.current);
  }, [text, enable]);

  return out;
}

/* ---------- fires once when the element scrolls into view ---------- */
export function useInViewOnce(ref: RefObject<HTMLElement | null>, threshold = 0.4): boolean {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold, inView]);
  return inView;
}
