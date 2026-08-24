// Fetches public repositories straight from the GitHub REST API so the
// Portfolio page updates itself whenever a new project is pushed to
// GitHub — no manual edits to the site needed.
//
// Docs: https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  updated_at: string;
};

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Bandile024";

export async function getGithubRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`,
      {
        headers: { Accept: "application/vnd.github+json" },
        // Revalidate once an hour (Next.js ISR) instead of refetching on
        // every request, and instead of never updating like a static export.
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return [];

    const repos: GithubRepo[] = await res.json();

    // Hide forks and the special "username/username" profile-README repo.
    return repos
      .filter((repo) => !repo.fork && repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase())
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
  } catch {
    // Network issue, rate limit, etc. — fail soft, page shows the empty state.
    return [];
  }
}
