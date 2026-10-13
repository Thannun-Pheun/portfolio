import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./Icons";
import { useScrollSpy, useTheme } from "../hooks";

const LINKS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact", cta: true },
] as const;

const SPY_IDS: string[] = LINKS.map((l) => l.id);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const active = useScrollSpy(SPY_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="nav-inner">
        <a href="#hero" className="brand" aria-label="Pheun Thannun — home">
          <span className="brand-mark">&gt;_</span>
          <span className="brand-name">
            thannun<span className="brand-accent">.dev</span>
          </span>
        </a>

        <nav
          className={"nav-links" + (open ? " open" : "")}
          id="navLinks"
          aria-label="Primary"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={"#" + l.id}
              className={
                "nav-link" + ("cta" in l && l.cta ? " nav-cta" : "") + (active === l.id ? " active" : "")
              }
            >
              <span className="tilde">~/</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title="Light / dark theme"
          >
            <SunIcon />
            <MoonIcon />
          </button>
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="navLinks"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
