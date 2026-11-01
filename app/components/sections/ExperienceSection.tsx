import Reveal from "../Reveal";

const roles = [
  {
    period: "FEB 2026 — PRESENT", company: "BYTECH", title: "Full-Stack Developer",
    points: [
      "Built interactive educational books and activities in React, including responsive multimedia and dynamic learning components.",
      "Developed BookPlatform and the BYTECH portfolio website, including CMS and admin dashboard workflows for content control.",
      "Contributed to AIM, a Next.js and Node.js printing-services platform, across feature delivery, debugging, responsive UI, and ongoing improvements.",
    ], tags: ["React", "Next.js", "Node.js", "CMS", "Responsive UI"],
  },
  {
    period: "NOV 2025 — JAN 2026", company: "Al-Istiqlal", title: "Full-Stack Developer Intern",
    points: [
      "Maintained and enhanced a medical clinic management system built with React, Node.js, and MongoDB.",
      "Updated UI components, delivered new functionality across clinic modules, and resolved frontend and backend issues.",
    ], tags: ["React", "Node.js", "MongoDB", "Debugging"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="content-section section-shell">
      <Reveal><div className="section-heading"><span className="section-kicker">02 / EXPERIENCE</span><h2>Work grounded in real products.</h2></div></Reveal>
      <div className="timeline">
        {roles.map((role, index) => (
          <Reveal key={role.company} delay={index * 100}>
            <article className="timeline-item">
              <div className="timeline-meta"><span>{role.period}</span><h3>{role.company}</h3></div>
              <div className="timeline-content"><h4>{role.title}</h4><ul>{role.points.map((point) => <li key={point}>{point}</li>)}</ul><div className="tag-list">{role.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="education-strip">
          <div><span className="section-kicker">EDUCATION</span><h3>Built on intensive training and an engineering foundation.</h3></div>
          <div className="education-list">
            <div><strong>Meraki Academy</strong><span>Full Stack Web Development · 500+ hours</span><small>May 2025 — Oct 2025</small></div>
            <div><strong>Jordan University of Science & Technology</strong><span>Bachelor of Engineering</span><small>Sep 2016 — Mar 2021</small></div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
