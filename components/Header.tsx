import Link from "next/link";
import NavLinks from "./NavLinks";
import { profile } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-base/85 backdrop-blur">
      <div className="container-xl flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-lg font-bold text-ink">
            {profile.name}
          </span>
          <span className="font-mono text-xs text-muted group-hover:text-accent">
            {"/* " + profile.role + " */"}
          </span>
        </Link>
        <nav aria-label="Primary">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
