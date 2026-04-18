import { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark") setIsDark(true);
  }, []);

  // Apply theme
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [isDark]);

  // ESC close modal
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setModalImage("");
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* THEME TOGGLE */}
      <button
        className="theme-toggle"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? "☾" : "☀"}
      </button>

      <div className="page">
        {/* HERO */}
        <header className="container hero card">
          <div className="hero-photo">
            <img
              src="/assets/images/profile-picture.jpg"
              alt="Ronald"
            />
          </div>

          <div className="hero-content">
            <h1>Ronald M. Soriano</h1>
            <h2 className="hero-role">Full-Stack Developer</h2>
            <p className="hero-tagline">
              Building practical web, automation, and IoT systems.
            </p>

            <a
              className="btn btn-primary"
              href="/files/SORIANO_RONALD_RESUME.pdf"
              target="_blank"
            >
              View Resume
            </a>
          </div>
        </header>

        {/* PROJECT */}
        <main className="container layout">
          <section className="main-column">
            <article className="card">
              <h3>Featured Project</h3>

              <div className="project-card">
                <div className="project-body">
                  <div className="project-header">
                    <h4>Yugobooth Photobooth</h4>

                    <button
                      className="project-link-button"
                      onClick={() =>
                        setModalImage("/assets/images/yugobooth.jpg")
                      }
                    >
                      View Photo &gt;
                    </button>
                  </div>

                  <p>
                    Automated photobooth system with payment, printing,
                    and QR download.
                  </p>
                </div>
              </div>
            </article>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="container footer">
          © 2026 Ronald M. Soriano
        </footer>
      </div>

      {/* MODAL */}
      {modalImage && (
        <div
          className="image-modal active"
          onClick={(e) => {
            if (e.target.classList.contains("image-modal")) {
              setModalImage("");
            }
          }}
        >
          <button
            className="image-modal-close"
            onClick={() => setModalImage("")}
          >
            ✕
          </button>

          <div className="image-modal-content">
            <img src={modalImage} alt="Preview" />
          </div>
        </div>
      )}
    </>
  );
}