import './style.css'
export default function Portfolio() {

  return (

      <div className="pf-scroll">
     
        <main className="pf-wrap">
          {/* Top Nav */}
          <header className="pf-nav">
            <div className="pf-brand">Ilyas Shalihin</div>
            <nav className="pf-links" aria-label="Primary">
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          {/* Hero */}
          <section className="pf-hero card glass">
            <h1 className="pf-ttl">
              <span>Experienced</span>
              <br />
              <span>Front-End Developer</span>
            </h1>
            <p className="pf-sub">
              React • TypeScript • R3F/Drei • CSS (Grid/Flex) • Java (in progress)
            </p>

            <div className="chips">
              <span className="chip">React</span>
              <span className="chip">TypeScript</span>
              <span className="chip">R3F</span>
              <span className="chip">Drei</span>
              <span className="chip">CSS</span>
            </div>

            <div className="cta-row">
              <a className="btn primary" href="#contact">Contact Me</a>
              <a className="btn" href="#projects">View Projects</a>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="pf-section card glass">
            <h2 className="sec-h">Skills</h2>
            <div className="pill-row">
              {["React", "TypeScript", "R3F", "Drei", "CSS", "Node.js", "Spring Boot (learning)"].map(s => (
                <span key={s} className="pill">{s}</span>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="pf-section card glass">
            <h2 className="sec-h">Projects</h2>

            <div className="grid">
              <article className="project">
                <div className="thumb thumb-a" aria-hidden />
                <h3>3D Portfolio Room</h3>
                <p>Interactive WebGL room built with R3F/Drei.</p>
                <div className="tags">
                  <span>React</span><span>R3F</span>
                </div>
              </article>

              <article className="project">
                <div className="thumb thumb-b" aria-hidden />
                <h3>E-Commerce Platform</h3>
                <p>Full-stack app with product browsing and cart.</p>
                <div className="tags">
                  <span>React</span><span>Node.js</span>
                </div>
              </article>

              <article className="project">
                <div className="thumb thumb-c" aria-hidden />
                <h3>Task Management App</h3>
                <p>Kanban-style productivity tool for teams.</p>
                <div className="tags">
                  <span>React</span><span>TypeScript</span>
                </div>
              </article>
            </div>
          </section>

          {/* About + Contact */}
          <section className="pf-section pf-about-grid">
            <div className="card glass">
              <h2 className="sec-h">About Ilyas</h2>
              <p>
                Front-end developer with 6+ years shipping production UI/UX.
                Currently expanding into Java & Spring Boot while mastering
                immersive 3D interfaces.
              </p>
              <p className="motto">Less friction, more delight.</p>
            </div>

            <div id="contact" className="card glass contact">
              <h2 className="sec-h">Let’s Build Something Together</h2>
              <a className="btn primary wide" href="mailto:you@example.com">Contact Me</a>
              <div className="social">
                <a href="https://github.com/yourname" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
                <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
                <a href="https://x.com/yourname" target="_blank" rel="noreferrer" aria-label="Twitter / X">X</a>
              </div>
            </div>
          </section>

          <footer className="pf-foot">© 2025 Ilyas Shalihin</footer>
        </main>
      </div>

  );
}
