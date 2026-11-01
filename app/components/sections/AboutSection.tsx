import Reveal from "../Reveal";

const groups = [
  { number: "01", title: "Frontend", text: "React, Next.js, TypeScript, JavaScript, HTML, CSS, Material UI, responsive design" },
  { number: "02", title: "Backend", text: "Node.js, Express.js, RESTful APIs, authentication, JWT, API integration" },
  { number: "03", title: "Data & delivery", text: "MongoDB, PostgreSQL, Git, GitHub, Postman, Vercel, Render, Cloudinary" },
];

export default function AboutSection() {
  return (
    <section id="about" className="content-section section-shell">
      <Reveal>
        <div className="section-heading section-heading--split">
          <div><span className="section-kicker">01 / ABOUT</span><h2>Engineering with the user in mind.</h2></div>
          <p>I build interactive web applications, educational platforms, and content management systems. My work sits between thoughtful interface design and dependable backend engineering, with accessibility and performance treated as product requirements.</p>
        </div>
      </Reveal>
      <div className="skill-grid">
        {groups.map((group, index) => (
          <Reveal key={group.title} delay={index * 90}>
            <article className="skill-card"><span>{group.number}</span><h3>{group.title}</h3><p>{group.text}</p></article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
