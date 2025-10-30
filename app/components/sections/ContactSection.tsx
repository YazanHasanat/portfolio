import Reveal from "../Reveal";
import SectionAccents from "../SectionAccents";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 text-white">
      <SectionAccents variant="teal" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Contact</span></h2>
        <p className="mt-3 text-gray-300">Let’s build something great. Reach out and I’ll reply quickly.</p>
        <Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="mailto:yazanhassanat@gmail.com" className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors block">
              <div className="text-sm text-gray-400">Email</div>
              <div className="mt-1 font-semibold text-white break-all">yazanhassanat@gmail.com</div>
            </a>
            <a href="tel:+962796368214" className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors block">
              <div className="text-sm text-gray-400">Phone</div>
              <div className="mt-1 font-semibold text-white">+962 7 9636 8214</div>
            </a>
            <a href="https://www.linkedin.com/in/yazanalhasanat/" target="_blank" className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors block">
              <div className="text-sm text-gray-400">LinkedIn</div>
              <div className="mt-1 font-semibold text-white">/in/yazanalhasanat</div>
            </a>
            <a href="https://github.com/YazanHasanat" target="_blank" className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors block">
              <div className="text-sm text-gray-400">GitHub</div>
              <div className="mt-1 font-semibold text-white">github.com/YazanHasanat</div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


