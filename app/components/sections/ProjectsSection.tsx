import Image from 'next/image';
import Reveal from "../Reveal";
import SectionAccents from "../SectionAccents";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 text-white">
      <SectionAccents variant="rose" />
      <div className="pointer-events-none absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:28px_28px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Reveal>
          <article className="group relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/20 via-fuchsia-400/10 to-pink-400/20 blur-2xl"></div>
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10 flex items-center justify-center bg-black/30">
                <Image src="/logo.png" alt="TECHNEST logo" width={560} height={315} className="w-auto h-24 sm:h-28 md:h-32 object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold">TECHNEST_E-COMMERCE</h3>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-300">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">React</span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Node</span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Mongo</span>
                </div>
                <p className="mt-3 text-gray-300">Modern e‑commerce with blazing navigation, real‑time cart, and secure checkout.</p>
              </div>
              <div className="mt-6 flex gap-3 flex-wrap">
                <a href="https://technest-nine.vercel.app/" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-gray-900 px-5 py-2.5 text-sm font-semibold hover:from-purple-300 hover:to-pink-300 transition-colors">
                  <span>Live Demo</span>
                </a>
                <a href="https://github.com/YazanHasanat/TECHNEST_E-COMMERCE" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm hover:border-white/40 hover:bg-white/5 transition-colors">
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </article>
          </Reveal>
          <Reveal delay={120}>
          <article className="group relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-rose-400/20 via-fuchsia-400/10 to-amber-300/20 blur-2xl"></div>
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10 flex items-center justify-center bg-black/30">
                <Image src="/logo3.png" alt="KIDDYJOY logo" width={560} height={315} className="w-auto h-24 sm:h-28 md:h-32 object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold">KIDDYJOY_E-COMMERCE</h3>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-300">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Next</span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Node</span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Postgresql</span>
                </div>
                <p className="mt-3 text-gray-300">Kid-friendly and engaging design, curated collections, and a frictionless checkout flow.</p>
              </div>
              <div className="mt-6 flex gap-3 flex-wrap">
                <a href="https://kiddyjoy.vercel.app/" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-gray-900 px-5 py-2.5 text-sm font-semibold hover:from-purple-300 hover:to-pink-300 transition-colors">
                  <span>Live Demo</span>
                </a>
                <a href="https://github.com/YazanHasanat/KIDDYJOY_E-COMMERCE" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm hover:border-white/40 hover:bg-white/5 transition-colors">
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


