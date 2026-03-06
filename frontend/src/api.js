const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:10000";

async function request(path) {
  const response = await fetch(`${API_BASE}${path}`);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}

export const getProfile = () => request("/api/profile");
export const getProjects = () => request("/api/projects");
export const getProject = (slug) => request(`/api/projects/${slug}`);
