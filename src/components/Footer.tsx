export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="mono footer-cmd">
          <span className="prompt">$</span> git commit -m "add portfolio"{" "}
          <span className="dim">&amp;&amp;</span> git push origin main
        </p>
        <p className="footer-meta">
          © {new Date().getFullYear()} Pheun Thannun · Built with React + TypeScript (Vite) ·
          No UI framework, hand-written CSS.
          <a href="#hero" className="back-top">
            Back to top ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
