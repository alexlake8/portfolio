import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfile, getProjects } from "../api.js";

export default function HomePage() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([getProfile(), getProjects()])
      .then(([profileData, projectData]) => {
        setProfile(profileData);
        setProjects(projectData.projects || []);
      })
      .catch(() => setError("Could not load portfolio data. Check your backend deployment and VITE_API_BASE_URL."));
  }, []);

  const featured = projects[0];

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Full-Stack Developer | AI & Data Systems</p>
            <h1>Alexander Lake</h1>
            <p className="lead">
              Driven, creative, and reliable computer information systems student with an AI minor,
              focused on building polished web experiences, practical software systems, and explainable technical work.
            </p>

            <div className="button-row">
              <a className="button button-primary" href="#featured">Featured Project</a>
              <a className="button" href="mailto:alexclake1@gmail.com">Email Me</a>
              <a className="button button-subtle" href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
            </div>

            <div className="hero-stats">
              <div className="stat-card"><strong>Education</strong><span>Clemson University</span></div>
              <div className="stat-card"><strong>Expected Grad</strong><span>Spring 2026</span></div>
              <div className="stat-card"><strong>Focus</strong><span>AI, Data, Full-Stack</span></div>
            </div>
          </div>

          <aside className="profile-panel">
            <img className="profile-image" src="/alex-profile.jpg" alt="Alexander Lake portrait" />
            <div className="profile-info">
              <h2>Quick Overview</h2>
              <p>{profile?.summary || "Computer information systems student focused on software, AI, and data systems."}</p>
              <ul className="clean-list compact">
                <li><strong>Email:</strong> {profile?.email || "alexclake1@gmail.com"}</li>
                <li><strong>Phone:</strong> {profile?.phone || "(973) 271-5225"}</li>
                <li><strong>Location:</strong> {profile?.location || "Sparta, NJ / Clemson, SC"}</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {error && <section className="container section"><div className="card error-box">{error}</div></section>}

      {featured && (
        <section id="featured" className="container section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Featured</p>
              <h2>Project Spotlight</h2>
            </div>
            <p>Visible above the fold and one click away from the live link.</p>
          </div>

          <div className="project-card featured-project">
            <div className="project-copy">
              <span className="tag">{featured.type}</span>
              <h3>{featured.title}</h3>
              <p>{featured.tagline}</p>
              <p className="muted">{featured.summary}</p>
              <div className="stack">
                {featured.stack?.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </div>

            <div className="project-actions">
              <Link className="button" to={`/projects/${featured.slug}`}>View Project</Link>
              <a className="button button-primary" href={featured.liveUrl} target="_blank" rel="noreferrer">Live Demo</a>
              <a className="button button-subtle" href={featured.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      )}

      <section className="container section">
        <div className="section-heading">
          <div><p className="section-kicker">About</p><h2>Education & Technical Skills</h2></div>
        </div>

        <div className="two-col">
          <div className="card">
            <h3>Education</h3>
            <p><strong>{profile?.education?.school || "Clemson University"}</strong></p>
            <p>{profile?.education?.major || "Computer Information Systems"} Major</p>
            <p>{profile?.education?.minor || "Artificial Intelligence"} Minor</p>
            <p>{profile?.education?.dates || "2022-present"}</p>
            <p>Expected Graduation: {profile?.education?.graduation || "Spring 2026"}</p>
            <ul className="clean-list compact">
              {(profile?.education?.honors || []).map((item) => <li key={item}>{item}</li>)}
              {(profile?.education?.notes || []).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="card">
            <h3>Skills</h3>
            <p className="minor-heading">Languages</p>
            <div className="stack">
              {(profile?.skills?.languages || []).map((item) => <span key={item} className="chip">{item}</span>)}
            </div>

            <p className="minor-heading">Tools & Libraries</p>
            <div className="stack">
              {(profile?.skills?.tools || []).map((item) => <span key={item} className="chip">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div><p className="section-kicker">Experience</p><h2>Professional Experience</h2></div>
          <p>Highlights pulled directly from resume experience.</p>
        </div>

        <div className="timeline">
          {(profile?.experience || []).map((job) => (
            <article className="card timeline-card" key={`${job.company}-${job.title}`}>
              <div className="job-head">
                <div>
                  <h3>{job.title}</h3>
                  <p className="muted strongish">{job.company}</p>
                </div>
                <div className="job-meta">
                  <span>{job.location}</span>
                  <span>{job.dates}</span>
                </div>
              </div>
              <ul className="clean-list">
                {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <div><p className="section-kicker">More Work</p><h2>Additional Project Links</h2></div>
        </div>

        <div className="projects-grid">
          {projects.slice(1).map((project) => (
            <div className="card project-mini" key={project.slug}>
              <span className="tag subtle">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.tagline}</p>
              <div className="button-row">
                <a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">Open</a>
                <Link className="button button-subtle" to={`/projects/${project.slug}`}>Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div><h3>Alexander Lake</h3><p>Full-Stack Developer | AI & Data Systems</p></div>
          <div><p><strong>Email:</strong> alexclake1@gmail.com</p><p><strong>Phone:</strong> (973) 271-5225</p></div>
        </div>
      </footer>
    </main>
  );
}
