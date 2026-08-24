import type { Metadata } from "next";
import { Github } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { getGithubRepos } from "@/lib/github";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Projects pulled live from GitHub.",
};

// Server component — this runs on the server (and again on each
// revalidation window), so the fetch below never ships credentials or
// extra JS to the browser. This is what makes the page "dynamic":
// push a new repo to GitHub and it shows up here automatically, no
// code change required.
export default async function PortfolioPage() {
  const repos = await getGithubRepos();

  return (
    <section className="section">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects, pulled live from GitHub"
            description="This page fetches directly from the GitHub API, so every public repo I push shows up here automatically — no manual updates needed."
          />
        </AnimatedSection>

        {repos.length === 0 ? (
          <AnimatedSection className="card flex flex-col items-center gap-4 py-16 text-center">
            <Github size={28} className="text-accent" />
            <h3 className="font-display text-xl font-semibold">
              Projects are on the way
            </h3>
            <p className="max-w-md text-muted">
              I&apos;m actively pushing new project repos to GitHub — check
              back soon, or browse everything directly in the meantime.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github size={18} /> Visit my GitHub
            </a>
          </AnimatedSection>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <AnimatedSection key={repo.id} delay={(i % 3) * 0.08}>
                <ProjectCard repo={repo} />
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
