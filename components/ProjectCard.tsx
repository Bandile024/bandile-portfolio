import { ExternalLink, Star } from "lucide-react";
import type { GithubRepo } from "@/lib/github";

function toTitle(name: string) {
  return name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ProjectCard({ repo }: { repo: GithubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex h-full flex-col justify-between transition hover:border-accent"
    >
      <div>
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-ink group-hover:text-accent">
            {toTitle(repo.name)}
          </h3>
          <ExternalLink
            size={16}
            className="mt-1 shrink-0 text-muted group-hover:text-accent"
          />
        </div>
        <p className="text-sm text-muted">
          {repo.description || "No description provided yet."}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
        {repo.language && (
          <span className="rounded-full border border-border px-2.5 py-1">
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={13} /> {repo.stargazers_count}
        </span>
      </div>
    </a>
  );
}
