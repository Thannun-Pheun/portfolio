import { aboutCoordination, aboutClosing, aboutIntro, aboutOrgLinks, quickFacts } from "../data/content";

/** Renders {cfi}/{ddd} placeholders in the coordination paragraph as live links. */
function withOrgLinks(text: string) {
  const parts = text.split(/\{(cfi|ddd)\}/);
  return parts.map((part, i) => {
    const key = i % 2 === 1 ? part : null;
    if (key === "cfi")
      return (
        <a key={i} href={aboutOrgLinks.cfi.url} target="_blank" rel="noopener">
          <strong>{aboutOrgLinks.cfi.name}</strong>
        </a>
      );
    if (key === "ddd")
      return (
        <a key={i} href={aboutOrgLinks.ddd.url} target="_blank" rel="noopener">
          <strong>{aboutOrgLinks.ddd.name}</strong>
        </a>
      );
    return part;
  });
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label mono reveal">~/about</p>
        <div className="about-grid">
          <div className="about-copy">
            <h2 className="reveal">
              Project mindset. <br />
              <span className="accent">Developer habits.</span>
            </h2>
            <p className="reveal delay-1">{aboutIntro}</p>
            <p className="reveal delay-1">{withOrgLinks(aboutCoordination)}</p>
            <p className="reveal delay-2">{aboutClosing}</p>
          </div>

          <dl className="quickfacts mono reveal delay-2" aria-label="Quick facts">
            {quickFacts.map((f) => (
              <div className="fact" key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.url ? <a href={f.url} target="_blank" rel="noopener">{f.v}</a> : f.v}</dd>
              </div>
            ))}
            <div className="fact">
              <dt>status</dt>
              <dd className="open-to">
                <i />
                Open to internships &amp; junior roles
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
