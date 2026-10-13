import { experiences } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <p className="section-label mono reveal">~/experience</p>
        <h2 className="reveal">Experience &amp; leadership</h2>
        <p className="section-intro reveal delay-1">
          My history, one commit at a time — community work, and professional delivery.
        </p>

        <ol className="graph reveal delay-1">
          {experiences.map((x) => (
            <li className="node" key={x.badge}>
              <div className={"node-dot" + (x.now ? " node-dot-current" : "")} aria-hidden="true">
                <i />
              </div>
              <article className="xp-card">
                <header className="xp-head">
                  <div className="xp-badge mono" aria-hidden="true">
                    {x.badge}
                  </div>
                  <div className="xp-headtext">
                    <h3>{x.role}</h3>
                    <p className="xp-org">
                      <a href={x.orgUrl} target="_blank" rel="noopener">
                        {x.org}
                      </a>{" "}
                      · {x.orgNote}
                    </p>
                  </div>
                  <span className={"xp-date mono" + (x.now ? " xp-date-now" : "")}>{x.dates}</span>
                </header>
                <p className="xp-desc">{x.desc}</p>
                <div className="xp-grid">
                  {x.points.map((pt) => (
                    <div className="xp-item" key={pt.h}>
                      <h4>{pt.h}</h4>
                      <p>{pt.p}</p>
                    </div>
                  ))}
                </div>
                <ul className="tags mono">
                  {x.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <a className="xp-foot" href={x.foot.href} target="_blank" rel="noopener">
                  {x.foot.label} <span className="arr" aria-hidden="true">→</span>
                </a>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
