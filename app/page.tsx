import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProfilePanel from "@/components/ProfilePanel";
import SectionHeading from "@/components/SectionHeading";
import { heroStats, profile, skillGroups, about } from "@/data/site";

export default function HomePage() {
  return (
    <>
      {/* HERO ---------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="container-xl relative grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
          <AnimatedSection>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              I turn data into decisions, and ideas into effective softwares.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">
              Hi, I&apos;m {profile.name} — based in {profile.location}, building
              at the intersection of data analysis, artificial intelligence and machine learning, and modern web
              development.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/request" className="btn-primary">
                Request a service <ArrowRight size={18} />
              </Link>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={18} /> View GitHub
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="flex justify-center md:justify-end md:-mt-48">
            <ProfilePanel />
          </AnimatedSection>
        </div>
      </section>

      {/* FOCUS AREAS ----------------------------------------------------- */}
      <section className="section">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="What I do"
              title="Where Data, AI, and web development meet"
              description="Three lenses I bring to every project — often combined, since the most useful tools tend to need all three."
            />
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-3">
            {about.focusAreas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.1} className="card">
                <span className="font-mono text-xs text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{area.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS ------------------------------------------------------ */}
      <section className="section border-t border-border bg-surface/40">
        <div className="container-xl">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Toolkit"
              title="Skills & tools I work with"
            />
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, i) => (
              <AnimatedSection key={group.title} delay={i * 0.08} className="card">
                <h3 className="font-display font-semibold text-accent">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {group.tools.map((tool) => (
                    <li key={tool} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent2" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA ------------------------------------------------------------ */}
      <section className="section">
        <div className="container-xl">
          <AnimatedSection className="card flex flex-col items-center gap-6 border-accent/30 bg-gradient-to-br from-surface to-surface2 py-16 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="max-w-xl text-muted">
              Whether it&apos;s a custom website, a data dashboard, or an
              AI tool — tell me about it and I&apos;ll get back to you
              promptly.
            </p>
            <Link href="/request" className="btn-primary">
              Request a service <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
