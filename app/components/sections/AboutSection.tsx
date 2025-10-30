import AboutScene from "../AboutScene";
import Reveal from "../Reveal";
import SectionAccents from "../SectionAccents";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 text-white">
      <SectionAccents variant="purple" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span></h2>
              <p className="mt-5 text-gray-300 text-lg leading-relaxed">I’m a passionate Full Stack Developer with hands-on experience in building modern, scalable web applications using React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. I enjoy turning ideas into real products with clean code, efficient APIs, and responsive design.
              </p><p className="mt-5 text-gray-300 text-lg leading-relaxed">I’ve worked on both solo and team projects, developing complete e-commerce platforms with features like authentication, Stripe payments, and admin dashboards. I value collaboration, continuous learning, and writing code that solves real problems and delivers great user experiences.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <AboutScene />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


