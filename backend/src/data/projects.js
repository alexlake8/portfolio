export const projects = [
  {
  slug: "battleship-api",
  title: "Battleship API",
  tagline: "Live multiplayer Battleship backend with persistent game state.",
  role: "Solo Full-Stack Project",
  type: "Featured Project",
  stack: ["Node.js", "Express", "REST API", "Render"],
  liveUrl: "https://three750final-1.onrender.com",
  githubUrl: "https://github.com/alexlake8/3750final",
  summary:
    "Battleship API is a live multiplayer backend that lets players create accounts, start and join games, place ships, take turns firing shots, and view match history and player stats. What makes it interesting is that it handles real game flow instead of just CRUD, including turn order, elimination, and winner tracking. A key architecture decision was designing clean REST endpoints backed by persistent game state to ensure consistency across requests.",
  highlights: [
    "Supports multiplayer game creation and joining",
    "Tracks ships, turns, shots, winners, and player stats",
    "Deployed live on Render for real API interaction"
  ],
  architectureDecision: {
    title: "Persistent game-state REST design",
    summary:
      "The API is structured around clear resource endpoints and persisted game state so each request updates the same shared match consistently across players and turns."
  }
},
  {
    slug: "movie-collection-manager",
    title: "Movie Collection Manager",
    tagline: "A hosted web app for tracking and managing a personal movie collection.",
    role: "Solo Full-Stack Project",
    type: "Full-Stack Web App",
    stack: ["JavaScript", "Frontend", "Backend API", "Render"],
    liveUrl: "https://alexlakesolo3-1.onrender.com/",
    githubUrl: "https://github.com/alexlake8/AlexLakeSolo3",
    summary:
      "Movie Collection Manager is a full-stack web app for organizing a personal movie library through a deployed frontend connected to a live backend service. It demonstrates practical CRUD-style app development, hosted frontend/backend deployment, and a clean user-facing interface. The project is included as supporting portfolio work beneath the main Battleship API spotlight.",
    highlights: [
      "Hosted frontend on Render as a static site",
      "Connects to a live backend web service",
      "Designed for managing and viewing movie collection data"
    ],
    architectureDecision: {
      title: "Separate static frontend and backend service",
      summary:
        "Deploying the frontend as a static Render site and the backend as a web service keeps the user interface separate from the API, making each part easier to update, test, and redeploy independently."
    }
  },
  {
    slug: "assistive-visual-navigation",
    title: "Assistive Visual Navigation",
    tagline: "Research-driven assistive navigation work using AI and computer vision to help visually impaired users understand their surroundings.",
    role: "Research Contributor",
    type: "Featured Research Project",
    stack: ["Python", "PyTorch", "Computer Vision", "AI Research"],
    liveUrl: "https://arxiv.org/pdf/2601.07154",
    githubUrl: "https://github.com/AIS-Clemson/VisionGPT",
    summary:
      "Contributed to Clemson University's Assistive Visual Navigation Project, focused on applied AI and scene understanding for assistive technology.",
    highlights: [
      "Contributed to a research-backed assistive navigation project",
      "Worked with AI and computer vision concepts relevant to real-world accessibility",
      "Helped support a project documented in an academic paper"
    ],
    architectureDecision: {
      title: "Using computer vision for assistive awareness",
      summary:
        "A camera-based AI pipeline makes sense for navigation because it can extract object, scene, and spatial context from the user's environment and translate it into useful guidance."
    }
  }
];
