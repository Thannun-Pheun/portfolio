import { useRef } from "react";
import { skillBar, skillGroups } from "../data/content";
import { useInViewOnce } from "../hooks";
import { vars } from "../util";

export default function Skills() {
  const barRef = useRef<HTMLDivElement>(null);
  const inView = useInViewOnce(barRef, 0.35);

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <p className="section-label mono reveal">~/skills</p>
        <h2 className="reveal">Skills &amp; expertise</h2>

        <figure className="skillmap reveal delay-1">
          <figcaption className="skillmap-head mono">
            <span>skill_map</span>
            <span className="skillmap-hint">width = how much I've actually built with it</span>
          </figcaption>
          <div
            className={"linguist-bar bar-lg" + (inView ? " built" : "")}
            ref={barRef}
            aria-label="Relative skill breakdown"
            id="skillBar"
          >
            {skillBar.map((s) => (
              <span key={s.key} className="lg-seg" style={vars({ "--w": s.w + "%" })} data-lang={s.key} />
            ))}
          </div>
          <ul className="legend mono" aria-hidden="true">
            {skillBar.map((s) => (
              <li key={s.key}>
                <span className="lg-seg" style={vars({ "--w": "9px", height: "9px", borderRadius: "50%" })} data-lang={s.key} />
                {s.key}
              </li>
            ))}
          </ul>
        </figure>

        <div className="skill-groups">
          {skillGroups.map((g, i) => (
            <article className={"skill-card reveal delay-" + Math.min(i + 1, 3)} key={g.title}>
              <h3>
                <i className={"dot " + g.dot} />
                {g.title}
              </h3>
              <ul className="chip-list">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
