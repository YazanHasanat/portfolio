"use client";

import { useEffect, useState } from "react";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Work", "#work"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Yazan Alhassanat, home">
          <span>YA</span>
          <span className="wordmark__text">Yazan Alhassanat</span>
        </a>
        <div className="nav-links" aria-label="Desktop navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a className="nav-cta" href="/Yazan-Alhassanat-CV.pdf" download>Download CV</a>
        </div>
        <button className="menu-button" type="button" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
          <span /><span />
        </button>
      </nav>
      {isOpen && (
        <div className="mobile-menu">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setIsOpen(false)}>{label}</a>)}
          <a href="/Yazan-Alhassanat-CV.pdf" download onClick={() => setIsOpen(false)}>Download CV</a>
        </div>
      )}
    </header>
  );
}
