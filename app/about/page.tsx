import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { about, profile, skillGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeading eyebrow="About me" title={`Hi, I'm ${profile.name}`} />
        </AnimatedSection>

        <div className="grid gap-12 md:grid-cols-3">
          <AnimatedSection className="md:col-span-2 space-y-5 text-muted">
            <p className="text-lg text-ink">{about.intro}</p>
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="card h-fit">
            <h3 className="font-display font-semibold text-accent">
              Quick facts
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase text-muted">Role</dt>
                <dd>{profile.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase text-muted">Based in</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase text-muted">Email</dt>
                <dd className="break-all">{profile.email}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase text-muted">GitHub</dt>
                <dd>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    github.com/{profile.githubUsername}
                  </a>
                </dd>
              </div>
            </dl>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16">
          <h3 className="font-display text-xl font-semibold mb-6">
            Skills &amp; focus areas
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="card">
                <h4 className="font-display font-semibold text-accent">
                  {group.title}
                </h4>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {group.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
