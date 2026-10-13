import { useState, type FormEvent } from "react";
import { profile } from "../data/content";
import { GitHubIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMPTY: FormState = { name: "", email: "", message: "" };
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [invalid, setInvalid] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    message: false,
  });
  const [note, setNote] = useState<{ text: string; ok: boolean }>({
    text: "Opens your email app, pre-filled — no data leaves this page.",
    ok: false,
  });

  const set = (k: keyof FormState) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setInvalid((v) => ({ ...v, [k]: false }));
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const bad = {
      name: form.name.trim() === "",
      email: !emailOk(form.email.trim()),
      message: form.message.trim() === "",
    };
    setInvalid(bad);
    if (bad.name || bad.email || bad.message) {
      setNote({ text: "Please fill in every field (and check the email format).", ok: false });
      return;
    }
    const subject = "Portfolio message from " + form.name.trim();
    const body = form.message.trim() + "\n\n— " + form.name.trim() + " (" + form.email.trim() + ")";
    window.location.href =
      "mailto:" + profile.email +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
    setNote({ text: "Your email app should now be open with the message ready to send.", ok: true });
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <p className="section-label mono reveal">~/contact</p>
        <h2 className="reveal">Let's build something</h2>
        <p className="section-intro reveal delay-1">
          Internship, junior role, or a project that needs a careful pair of hands — the
          fastest reply comes by email.
        </p>

        <div className="contact-grid">
          <div className="contact-info reveal delay-1">
            <a className="contact-row" href={"mailto:" + profile.email}>
              <span className="contact-ico"><MailIcon /></span>
              <span>
                <strong>Email</strong>
                <span className="mono">{profile.email}</span>
              </span>
            </a>
            <a className="contact-row" href={"tel:" + profile.phoneHref}>
              <span className="contact-ico"><PhoneIcon /></span>
              <span>
                <strong>Phone</strong>
                <span className="mono">{profile.phone}</span>
              </span>
            </a>
            <div className="contact-row">
              <span className="contact-ico"><PinIcon /></span>
              <span>
                <strong>Location</strong>
                <span className="mono">{profile.location}</span>
              </span>
            </div>
            <a className="contact-row" href={profile.github} target="_blank" rel="noopener">
              <span className="contact-ico"><GitHubIcon /></span>
              <span>
                <strong>GitHub</strong>
                <span className="mono">Thannun-Pheun</span>
              </span>
            </a>
          </div>

          <form className="contact-form reveal delay-2" onSubmit={onSubmit} noValidate>
            <div className={"field" + (invalid.name ? " invalid" : "")}>
              <label className="mono" htmlFor="cf-name">name</label>
              <input id="cf-name" type="text" autoComplete="name" placeholder="Your name"
                     value={form.name} onChange={set("name")} />
            </div>
            <div className={"field" + (invalid.email ? " invalid" : "")}>
              <label className="mono" htmlFor="cf-email">email</label>
              <input id="cf-email" type="email" autoComplete="email" placeholder="you@example.com"
                     value={form.email} onChange={set("email")} />
            </div>
            <div className={"field" + (invalid.message ? " invalid" : "")}>
              <label className="mono" htmlFor="cf-msg">message</label>
              <textarea id="cf-msg" rows={5} placeholder="What would you like to build together?"
                        value={form.message} onChange={set("message")} />
            </div>
            <button type="submit" className="btn btn-primary btn-wide">Send message</button>
            <p className={"form-note mono" + (note.ok ? " ok" : "")} role="status" aria-live="polite">
              {note.text}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
