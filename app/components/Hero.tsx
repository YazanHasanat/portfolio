import Image from "next/image";

const ArrowIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Full-Stack Developer · BYTECH</div>
          <h1>
            I engineer<br />digital <em>experiences</em><br />that move.
          </h1>
          <p className="hero-lead">I&apos;m Yazan Alhassanat. I build responsive products where strong interfaces, reliable backend systems, and purposeful interaction work as one.</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#work">Enter selected work <ArrowIcon /></a>
            <a className="button button--ghost" href="/Yazan-Alhassanat-CV.pdf" download>Download CV</a>
          </div>
          <div className="hero-proof" aria-label="Professional highlights">
            <div><strong>React / Next</strong><span>interactive interfaces</span></div>
            <div><strong>Node / APIs</strong><span>full-stack systems</span></div>
            <div><strong>CMS / Admin</strong><span>content operations</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait of Yazan Alhassanat">
          <div className="photo-stage">
            <div className="photo-halo" />
            <Image src="/profile.jpg" alt="Yazan Alhassanat" fill priority sizes="(max-width: 960px) 92vw, 44vw" className="full-portrait-image" />
            <div className="photo-shade" />
            <div className="photo-grid" />
            <div className="photo-corner photo-corner--top"><span>PROFILE / 01</span><strong>FULL-STACK DEVELOPER</strong></div>
            <div className="photo-corner photo-corner--bottom"><span>STATUS</span><strong>BUILDING @ BYTECH</strong></div>
          </div>
          <div className="identity-card">
            <span className="identity-index">01</span>
            <div><small>DEVELOPER PROFILE</small><strong>Yazan Alhassanat</strong></div>
            <span className="identity-signal" />
          </div>
          <div className="orbit-copy">DESIGN / DEVELOP / DELIVER</div>
        </div>
      </div>
      <div className="tech-marquee" aria-label="Technology stack">
        <div><span>REACT</span><b>✦</b><span>NEXT.JS</span><b>✦</b><span>TYPESCRIPT</span><b>✦</b><span>NODE.JS</span><b>✦</b><span>MONGODB</span><b>✦</b><span>POSTGRESQL</span><b>✦</b><span>REACT</span><b>✦</b><span>NEXT.JS</span><b>✦</b></div>
      </div>
    </section>
  );
}
