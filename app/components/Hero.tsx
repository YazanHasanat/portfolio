 'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const roles = ['Full‑Stack Developer', 'Frontend Engineer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [roleText, setRoleText] = useState<string>('');

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const typingSpeed = isDeleting ? 40 : 90;
    const timeout = setTimeout(() => {
      const nextText = isDeleting ? current.substring(0, charIndex - 1) : current.substring(0, charIndex + 1);
      setRoleText(nextText);
      setCharIndex((v) => (isDeleting ? v - 1 : v + 1));
      if (!isDeleting && nextText === current) {
        setTimeout(() => setIsDeleting(true), 900);
      } else if (isDeleting && nextText === '') {
        setIsDeleting(false);
        setRoleIndex((v) => (v + 1) % roles.length);
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const [parallax, setParallax] = useState<{ x1: number; y1: number; x2: number; y2: number }>({ x1: 0, y1: 0, x2: 0, y2: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / 40;
      const dy = (e.clientY - cy) / 40;
      setParallax({ x1: -dx, y1: -dy, x2: dx, y2: dy });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-purple-600/30 blur-3xl will-change-transform"
        style={{ transform: `translate3d(${parallax.x1}px, ${parallax.y1}px, 0)` }}
      ></div>
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-pink-500/20 blur-3xl will-change-transform"
        style={{ transform: `translate3d(${parallax.x2}px, ${parallax.y2}px, 0)` }}
      ></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-gray-200 backdrop-blur-md">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></span>
            Available for freelance and full-time roles
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">Yazan Al‑Hasanat</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
            {roleText && (
              <span className="block font-mono text-white/90">
                {roleText}
                <span className="ml-1 inline-block h-5 w-[2px] align-middle bg-white/80 animate-pulse"></span>
              </span>
            )}
            Building delightful, high‑performance web experiences with modern tooling and clean architecture.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-7 py-3 text-gray-900 font-semibold shadow-md hover:from-purple-300 hover:to-pink-300 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-white hover:border-white/40 hover:bg-white/10 transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-400">React • Next.js • Node • TypeScript • Postgresql • Mongodb</div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end h-96">
          <div className="relative h-full w-full max-w-lg group">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-purple-500/20 via-fuchsia-400/10 to-pink-400/20 blur-2xl"></div>
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image src="/profile.jpg" alt="Yazan Al-Hasanat portrait" fill sizes="(max-width: 1024px) 80vw, 500px" quality={90} priority className="object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-300/80 text-xs tracking-wider">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/70 animate-pulse"></span>
          SCROLL
        </div>
      </div>
    </section>
  );
}


