import AboutScene from "../components/AboutScene";

export default function AboutPage() {
  return (
    <section className="relative w-full min-h-[100svh] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Yazan</span>
            </h1>
            <p className="mt-5 text-gray-300 text-lg leading-relaxed">
              I’m a Full‑Stack Developer focused on building fast, accessible and delightful web apps. I blend design sense with engineering rigor, turning ideas into polished, scalable products.
            </p>
            <ul className="mt-6 space-y-3 text-gray-200">
              <li>• Expert with React, Next.js, TypeScript, Node</li>
              <li>• Solid foundations: clean architecture, testing, performance</li>
              <li>• 3D & interactive experiences using Three.js and R3F</li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="#projects" className="rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-gray-900 px-6 py-3 font-semibold hover:from-purple-300 hover:to-pink-300 transition-colors">View Projects</a>
              <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-white hover:border-white/40 hover:bg-white/5 transition-colors">Contact Me</a>
            </div>
          </div>
          <div>
            <AboutScene />
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl font-extrabold text-white">5+ yrs</div>
            <div className="text-gray-400">Building web experiences</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl font-extrabold text-white">20+</div>
            <div className="text-gray-400">Projects shipped</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl font-extrabold text-white">~100ms</div>
            <div className="text-gray-400">Core interactions latency</div>
          </div>
        </div>
      </div>
    </section>
  );
}


