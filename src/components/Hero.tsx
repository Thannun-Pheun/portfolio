import { profile, heroBar } from "../data/content";
import { usePrefersReducedMotion, useTypewriterLoop } from "../hooks";
import { vars } from "../util";
import { GitHubIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";
import profileImg from "../assets/images/nun.jpg";

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const typed = useTypewriterLoop(profile.name, !reduced); // screen readers: full name via aria-label on h1

  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal">{profile.eyebrow}</p>
          <h1 className={"reveal delay-1" + (reduced ? "" : " type-caret")} id="heroName" aria-label={profile.name}>
            <span aria-hidden="true">{typed}</span>
          </h1>
          <p className="hero-role reveal delay-1">
            {profile.roleHtml.plain1}
            <em>{profile.roleHtml.accent}</em>
            {profile.roleHtml.plain2}
          </p>
          <p className="lede reveal delay-2">{profile.lede}</p>

          <div className="hero-actions reveal delay-3">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>

          <ul className="hero-social reveal delay-4" aria-label="Contact and social links">
            <li>
              <a className="social-btn" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a className="social-btn" href={"mailto:" + profile.email} aria-label="Email">
                <MailIcon />
              </a>
            </li>
            <li>
              <a className="social-btn" href={"tel:" + profile.phoneHref} aria-label="Phone">
                <PhoneIcon />
              </a>
            </li>
            <li>
              <a
                className="social-btn"
                href="https://maps.google.com/?q=Battambang+Province"
                target="_blank"
                rel="noopener"
                aria-label="Location"
              >
                <PinIcon />
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-portrait reveal delay-1">
          <figure className="portrait-frame" aria-label="Portrait of Pheun Thannun">
            <div className="portrait">
              <div className="portrait-monogram" aria-hidden="true">
                PT
              </div>
              {/* Your photo: replace src/assets/images/profile.jpg (square, ≥600px) */}
              <img src={profileImg} alt="Pheun Thannun" onError={(e) => e.currentTarget.remove()} />
            </div>
            <figcaption className="portrait-caption mono">
              pheun-thannun.jpg <span>· square photo · Battambang</span>
            </figcaption>
            <div className="linguist-bar" aria-label="Primary languages in my public repositories">
              {heroBar.map((s) => (
                <span key={s.key} className="lg-seg" style={vars({ "--w": s.w + "%" })} data-lang={s.key} />
              ))}
            </div>
          </figure>
        </div>
      </div>
      <div className="hero-scroll mono" aria-hidden="true">
        <span>scroll</span>
        <i />
      </div>
    </section>
  );
}