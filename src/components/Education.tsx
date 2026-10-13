import { certifications, education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label mono reveal">~/education</p>
        <h2 className="reveal">Education &amp; certifications</h2>

        <div className="edu-grid">
          <article className="edu-card reveal delay-1">
            <p className="node-date mono">{education.dates}</p>
            <h3>{education.degree}</h3>
            <p className="edu-org">{education.org}</p>
            <p>{education.desc}</p>
            <ul className="tags mono">
              {education.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>

          <div className="cert-stack">
            {certifications.map((c, i) => (
              <article className={"cert-card reveal delay-" + (i === 0 ? 2 : 3)} key={c.title}>
                <div className="cert-seal mono" aria-hidden="true">
                  {c.seal}
                </div>
                <div>
                  <h3>{c.title}</h3>
                  <p className="edu-org">{c.org}</p>
                  <p className="cert-meta">{c.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
