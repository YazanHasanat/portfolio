import Reveal from "../Reveal";

const projects = [
  {
    index: "01",
    code: "AIM",
    name: "AIM",
    category: "Printing services platform",
    description:
      "A Next.js and Node.js platform for printing services. I contributed to feature development, debugging, responsive design, and ongoing system improvements.",
    tags: ["Next.js", "Node.js", "Responsive UI", "Debugging"],
    live: "https://aim-website-seven.vercel.app/en",
    visual: "aim",
  },
  {
    index: "02",
    code: "BOOK",
    name: "BookPlatform",
    category: "Educational platform",
    description:
      "A deployed learning platform serving student and teacher experiences, supported by content workflows and a full CMS/admin dashboard.",
    tags: ["React", "CMS", "Admin dashboard", "Deployment"],
    visual: "book",
    live: "https://bookplatform.netlify.app/",
  },
  {
    index: "03",
    code: "IBOOK",
    name: "Interactive Books",
    category: "Interactive learning",
    description:
      "Responsive educational books and activities built in React, combining multimedia content with dynamic learning components.",
    tags: ["React", "Multimedia", "Dynamic UI", "Responsive"],
    live: "https://right-g1-test.vercel.app/",
    visual: "interactive",
  },
  {
    index: "04",
    code: "BYTECH",
    name: "BYTECH Website",
    category: "Portfolio & content system",
    description:
      "A company portfolio experience connected to CMS and admin dashboard tooling for managing and controlling website content.",
    tags: ["CMS", "Admin dashboard", "Content", "Full-stack"],
    live: "https://bytechwebsite.netlify.app/",
    visual: "bytech",
  },
];

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 5h5v5M19 5l-9 9M19 13v6H5V5h6" />
  </svg>
);

function ProjectVisual({ type, code }: { type: string; code: string }) {
  return (
    <div
      className={`project-visual project-visual--${type}`}
      aria-hidden="true"
    >
      <div className="visual-toolbar">
        <span />
        <span />
        <span />
        <b>{code}.SYSTEM</b>
      </div>
      <div className="visual-stage">
        <div className="visual-orbit">
          <i />
          <i />
          <i />
        </div>
        <div className="visual-panel visual-panel--a">
          <small>MODULE_01</small>
          <span />
        </div>
        <div className="visual-panel visual-panel--b">
          <small>LIVE DATA</small>
          <span />
          <span />
        </div>
        <div className="visual-panel visual-panel--c">
          <strong>{code}</strong>
          <small>ONLINE</small>
        </div>
      </div>
      <div className="visual-footer">
        <span>BUILD / DEPLOY / ITERATE</span>
        <b>● LIVE SYSTEM</b>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="content-section projects-section section-shell"
    >
      <Reveal>
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-kicker">03 / BYTECH PROJECTS</span>
            <h2>Systems I&apos;ve helped bring to life.</h2>
          </div>
          <p>
            Four real projects from my professional experience: learning tools,
            content platforms, and full-stack systems built for practical use.
          </p>
        </div>
      </Reveal>

      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 80}>
            <article className="project-card">
              <div className="project-media">
                <span className="project-index">PROJECT / {project.index}</span>
                <ProjectVisual type={project.visual} code={project.code} />
              </div>
              <div className="project-copy">
                <div className="project-topline">
                  <span className="project-category">{project.category}</span>
                  <span>BYTECH · 2026</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      View live project <ExternalIcon />
                    </a>
                  ) : (
                    <span className="company-project">
                      Company project <i /> Shipped work
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
