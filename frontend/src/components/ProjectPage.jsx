import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProject } from "../api.js";

export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getProject(slug).then((data) => setProject(data.project)).catch(() => setError("Project could not be loaded."));
  }, [slug]);

  if (error) return <main className="container section"><div className="card error-box">{error}</div></main>;
  if (!project) return <main className="container section"><div className="card">Loading project...</div></main>;

  return (
    <main className="container section">
      <Link className="back-link" to="/">← Back to Home</Link>

      <div className="card project-detail">
        <span className="tag">{project.type}</span>
        <h1>{project.title}</h1>
        <p className="lead-sm">{project.tagline}</p>
        <p>{project.summary}</p>

        <div className="stack">
          {(project.stack || []).map((item) => <span className="chip" key={item}>{item}</span>)}
        </div>

        <div className="button-row">
          <a className="button button-primary live-demo-btn" href={project.liveUrl} target="_blank" rel="noreferrer">🚀 Live Demo</a>
          <a className="button" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
      </div>
      </div>

      <div className="two-col top-gap">
        <div className="card">
          <h2>Role</h2>
          <p>{project.role}</p>
          <h3>Highlights</h3>
          <ul className="clean-list">
            {(project.highlights || []).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="card">
          <h2>Architecture Decision</h2>
          <p><strong>{project.architectureDecision?.title}</strong></p>
          <p>{project.architectureDecision?.summary}</p>
        </div>
      </div>
    </main>
  );
}
