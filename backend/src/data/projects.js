export const projects = [
  {
  slug: "battleship-api",
  title: "Battleship API",
  tagline: "Live multiplayer Battleship backend with persistent game state.",
  role: "Solo Full-Stack Project",
  type: "Featured Project",
  stack: ["Node.js", "Express", "REST API", "Render"],
  liveUrl: "https://three750final.onrender.com",
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
    slug: "assistive-visual-navigation",
    title: "Assistive Visual Navigation",
    tagline: "Research-driven assistive navigation work using AI and computer vision to help visually impaired users understand their surroundings.",
    role: "Research Contributor",
    type: "Featured Research Project",
    stack: ["Python", "PyTorch", "Computer Vision", "AI Research"],
    liveUrl: "https://arxiv.org/pdf/2601.07154",
    githubUrl: "https://arxiv.org/pdf/2601.07154",
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
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    tagline: "A custom portfolio built for polished presentation, live demos, and fast interview walkthroughs.",
    role: "Solo Full-Stack Project",
    type: "Portfolio",
    stack: ["React", "Vite", "Node.js", "Express", "Render"],
    liveUrl: "https://alexlake.xyz",
    githubUrl: "https://github.com/yourusername/alexlake-portfolio",
    summary:
      "A personal web platform designed to clearly communicate who I am, what I build, and how to quickly explore my work.",
    highlights: [
      "Professional home page with fast scanning and clear navigation",
      "Architecture notes for interview demos",
      "Structured to meet assignment checkpoints and job-search presentation needs"
    ],
    architectureDecision: {
      title: "Separating the UI and API",
      summary:
        "The frontend and backend are deployed separately so the interface can evolve independently from the data/API layer, which keeps deployment and debugging simpler."
    }
  }
];
