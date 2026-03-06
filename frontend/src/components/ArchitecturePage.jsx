import React from "react";
import { Link } from "react-router-dom";

export default function ArchitecturePage() {
  return (
    <main className="container section">
      <Link className="back-link" to="/">← Back to Home</Link>

      <div className="section-heading">
        <div><p className="section-kicker">Interview Ready</p><h1>Architecture Notes</h1></div>
        <p>Designed so you can explain one technical decision quickly in a demo.</p>
      </div>

      <div className="two-col">
        <div className="card">
          <h2>Decision 1: Separate Frontend and Backend</h2>
          <p>
            I split the portfolio into a React frontend and an Express backend so each service can be deployed independently on Render.
            This makes the interface easier to iterate on while keeping profile and project data organized behind API routes.
          </p>
          <ul className="clean-list">
            <li>Cleaner deployment flow</li>
            <li>Simpler debugging and environment management</li>
            <li>Easy future migration to a database or CMS</li>
          </ul>
        </div>

        <div className="card">
          <h2>Decision 2: Resume Data as Structured API Content</h2>
          <p>
            Instead of hard-coding every line of content directly in the UI, resume and project content is exposed through API endpoints.
            That makes the frontend simpler and allows updates without reshaping the whole page.
          </p>
          <ul className="clean-list">
            <li>Reusable content across multiple sections</li>
            <li>Better separation of presentation and data</li>
            <li>Easy expansion for new projects later</li>
          </ul>
        </div>
      </div>

      <div className="card top-gap">
        <h2>60-Second Demo Path</h2>
        <ol className="number-list">
          <li>Open the home page and introduce who you are.</li>
          <li>Click the featured project and show the live paper/demo link.</li>
          <li>Explain one architecture decision from this page.</li>
          <li>Open the GitHub repo to show the code structure.</li>
        </ol>
      </div>
    </main>
  );
}
