import Link from "next/link";
import { Facebook, Github, Twitter } from "lucide-react";
import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-xl flex flex-col items-center gap-6 py-14 text-center">
        <div>
          <p className="eyebrow mb-3">Let&apos;s build something</p>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            What&apos;s popping? Let&apos;s have a chat.
          </h2>
        </div>
        <Link href="/contact" className="btn-primary">
          Get in touch
        </Link>

        <div className="mt-4 flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition hover:text-accent"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-muted transition hover:text-accent"
          >
            <Twitter size={20} />
          </a>
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted transition hover:text-accent"
          >
            <Facebook size={20} />
          </a>
        </div>

        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
