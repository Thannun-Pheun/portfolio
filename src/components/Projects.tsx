import { projects, type Project } from "../data/content";
import { RepoIcon } from "./Icons";
import { vars } from "../util";
import bookingImg from "../assets/images/projects/booking-system.jpg";
import shoeImg from "../assets/images/projects/shoe-store.jpg";
import portImg from "../assets/images/projects/my-portfolio.jpg";

const SCREENSHOTS = {
  booking: bookingImg,
  shoeStore: shoeImg,
  myPortfolio: portImg,
} as const;

const DOT_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  Vue: "#41b883",
  CSS: "#a874ad",
  HTML: "#e34c26",
};

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className={"repo reveal" + (p.featured ? " repo-featured delay-1" : " delay-2")}>
      {p.featured && <div className="pin-badge mono">★ pinned</div>}
      <header className="repo-head">
        <RepoIcon className="repo-ico" />
        <h3 className="repo-name mono">
          {p.owner} / <strong>{p.repo}</strong>
        </h3>
      </header>
      {p.eyebrow && <p className="repo-year mono">{p.eyebrow}</p>}
      {p.screenshot && (
        <div className="repo-preview">
          <img src={SCREENSHOTS[p.screenshot]} alt={p.repo + " application screenshot"} loading="lazy" />
        </div>
      )}
      <p className="repo-desc">{p.desc}</p>
      <ul className="tags mono">
        {p.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <footer className="repo-foot">
        <div className="langs mono" aria-label="Primary languages">
          {p.langs.map((l) => (
            <span key={l.key}>
              <i style={vars({ "--c": DOT_COLORS[l.key] ?? "#34d399" })} />
              {l.key}
            </span>
          ))}
        </div>
        <div className="repo-links">
          {p.links.map((link) =>
            link.href ? (
              <a key={link.label} className="btn-mini" href={link.href} target="_blank" rel="noopener">
                {link.label}
              </a>
            ) : (
              <span key={link.label} className="btn-mini btn-muted" title="Not deployed yet">
                {link.label}
              </span>
            ),
          )}
        </div>
      </footer>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label mono reveal">~/projects</p>
        <div className="projects-head reveal">
          <h2>Pinned &amp; shipped</h2>
          <a className="all-repos mono" href="https://github.com/Thannun-Pheun?tab=repositories" target="_blank" rel="noopener">
            all 12 repositories <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="repo-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
