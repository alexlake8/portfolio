import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { projects } from "./data/projects.js";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((v) => v.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.length === 0) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("CORS not allowed"));
    },
  })
);

app.get("/", (req, res) => {
  res.json({
    name: "Alexander Lake Portfolio API",
    status: "ok",
    routes: ["/health", "/api/profile", "/api/projects", "/api/projects/:slug"],
  });
});

app.get("/health", (req, res) => res.json({ ok: true }));

app.get("/api/profile", (req, res) => {
  res.json({
    name: "Alexander Lake",
    headline: "Full-Stack Developer | AI & Data Systems",
    email: "alexclake1@gmail.com",
    phone: "(973) 271-5225",
    location: "Sparta, NJ / Clemson, SC",
    summary:
      "Driven, creative, and reliable graduate looking to continue in the field of computer science and artificial intelligence.",
    education: {
      school: "Clemson University",
      location: "Clemson, SC",
      graduation: "Spring 2026",
      dates: "2022-present",
      major: "Computer Information Systems",
      minor: "Artificial Intelligence",
      honors: ["President's List (Multiple Semesters)"],
      notes: ["Contributor of the Assistive Visual Navigation Project"]
    },
    skills: {
      languages: ["Python", "Java", "SQL", "C/C++"],
      tools: ["Jupyter Notebook", "Excel", "Power BI", "Postman", "Scikit-learn", "PyTorch"]
    },
    experience: [
      {
        company: "Seaside Business Improvement District",
        location: "Seaside Heights, NJ",
        title: "Business Analyst Intern",
        dates: "05/24-08/24",
        bullets: [
          "Identified and closed a billing loophole, increasing revenue by an estimated $4k per year",
          "Coordinated teams to execute large-scale events to increase town/resident engagement",
          "Developed several ideas for improving local proposals and community development"
        ]
      },
      {
        company: "SkyPath Private Wealth",
        location: "Short Hills, NJ",
        title: "Data Analyst Intern",
        dates: "05/23-08/23",
        bullets: [
          "Conducted data analysis on client financial records to support business insights, portfolio allocation, performance, and reporting",
          "Utilized Microsoft Excel, SharePoint, and Power BI to create interactive dashboards",
          "Developed and optimized SQL queries to manage, leverage, and maintain internal company databases"
        ]
      },
      {
        company: "Intrinsic Clinical Systems",
        location: "Schwenksville, PA",
        title: "IT Intern",
        dates: "05/21-08/21",
        bullets: [
          "Tested commercially used pharmaceutical resource management software services as part of the QA process, identifying bugs and helping to enhance functionality",
          "Documented and resolved UI bugs, improving user experience and reliability",
          "Collaborated with developers using Java and C++ in GitHub repositories"
        ]
      },
      {
        company: "Pharmica Consulting",
        location: "Sparta, NJ",
        title: "IT Intern",
        dates: "05/20-08/20",
        bullets: [
          "Conducted QA testing for software products, identifying and logging bugs",
          "Assisted in developing customer and training presentations by creating slides, recording demos, and describing system features",
          "Developed Java and Python scripts to support new feature enhancements"
        ]
      }
    ]
  });
});

app.get("/api/projects", (req, res) => res.json({ projects }));

app.get("/api/projects/:slug", (req, res) => {
  const project = projects.find((item) => item.slug === req.params.slug);
  if (!project) return res.status(404).json({ error: "Project not found" });
  res.json({ project });
});

app.listen(PORT, () => {
  console.log(`Portfolio API running on port ${PORT}`);
});
