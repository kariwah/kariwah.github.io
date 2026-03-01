import "./App.css";

const projects = [
  {
    title: "Restoquiz",
    desc: "Sistema de encuestas/visitas con roles, ponderaciones y reportes.",
    tech: ["Django", "MySQL", "Materialize", "PDF"],
    links: {
      repo: "#",
      demo: "#",
    },
  },
  {
    title: "Sistema de pedidos (Tóner)",
    desc: "Pedidos por período con dashboards por rol y reportes.",
    tech: ["Django", "MySQL", "AJAX"],
    links: {
      repo: "#",
      demo: "#",
    },
  },
  {
    title: "Frontend React Dashboard",
    desc: "Dashboard con componentes, filtros y consumo de API.",
    tech: ["React", "Vite", "JS"],
    links: {
      repo: "#",
      demo: "#",
    },
  },
  {
    title: "Backend PHP (CRUD)",
    desc: "CRUD con autenticación y base de datos.",
    tech: ["PHP", "MySQL"],
    links: {
      repo: "#",
      demo: "#",
    },
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">kariwah</div>
        <nav className="navLinks">
          <a href="#skills">Skills</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <p className="tag">Full-Stack Developer</p>
          <h1>
            Construyo apps web con <span>React</span>, <span>HTML</span> y{" "}
            <span>Backend</span>.
          </h1>
          <p className="sub">
            Frontend: React • HTML/CSS/JS | Backend: Django • PHP | DB: MySQL •
            PostgreSQL
          </p>

          <div className="cta">
            <a className="btn primary" href="#projects">
              Ver proyectos
            </a>
            <a className="btn" href="https://github.com/kariwah" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href="#contact">
              Contacto
            </a>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="grid3">
            <div className="card">
              <h3>Frontend</h3>
              <p>HTML5 • CSS3 • JavaScript • React</p>
            </div>
            <div className="card">
              <h3>Backend</h3>
              <p>Django • PHP • APIs REST • Autenticación</p>
            </div>
            <div className="card">
              <h3>Base de datos</h3>
              <p>MySQL • PostgreSQL • Modelado relacional</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Proyectos</h2>
          <div className="grid2">
            {projects.map((p) => (
              <article className="card" key={p.title}>
                <div className="cardTop">
                  <h3>{p.title}</h3>
                  <p className="desc">{p.desc}</p>
                </div>

                <div className="chips">
                  {p.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="links">
                  <a className="link" href={p.links.repo} target="_blank" rel="noreferrer">
                    Repo
                  </a>
                  <a className="link" href={p.links.demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="note">
            Tip: reemplaza los <b>#</b> por los links reales de tus repos/demos.
          </p>
        </section>

        <section id="contact" className="section">
          <h2>Contacto</h2>
          <div className="card">
            <p>
              Escríbeme por correo o LinkedIn:
            </p>
            <div className="contactLinks">
              <a className="btn" href="mailto:tuemail@correo.com">tuemail@correo.com</a>
              <a className="btn" href="#" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} kariwah • Hecho con React + Vite</p>
        </footer>
      </main>
    </div>
  );
}