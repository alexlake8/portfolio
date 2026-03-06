import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import ArchitecturePage from "./components/ArchitecturePage.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="/">Alexander Lake</a>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/architecture">Architecture</NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
      </Routes>
    </div>
  );
}
