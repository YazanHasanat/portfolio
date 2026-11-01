import Reveal from "../Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell">
        <Reveal>
          <div className="contact-grid">
            <div><span className="section-kicker">04 / CONTACT</span><h2>Have a useful idea?<br /><em>Let&apos;s build it.</em></h2></div>
            <div className="contact-copy"><p>I&apos;m open to product-focused full-time roles, freelance projects, and conversations about thoughtful web experiences.</p><a className="email-link" href="mailto:yazanhassanat@gmail.com">yazanhassanat@gmail.com <span>↗</span></a><div className="social-links"><a href="https://www.linkedin.com/in/yazanalhasanat/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/YazanHasanat" target="_blank" rel="noreferrer">GitHub</a><a href="tel:+962796368214">+962 7 9636 8214</a></div></div>
          </div>
        </Reveal>
        <footer><span>© {new Date().getFullYear()} Yazan Alhassanat</span><span>Designed & built with intent.</span><a href="#home">Back to top ↑</a></footer>
      </div>
    </section>
  );
}
