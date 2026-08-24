import type { Metadata } from "next";
import { Github, Mail, MapPin, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bandile Ngwenya.",
};

const details = [
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Github, label: "GitHub", value: `github.com/${profile.githubUsername}`, href: profile.github },
];

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your project"
            description="Open to internships, freelance work, and collaborations. I aim to respond promptly to every inquiry."
          />
        </AnimatedSection>

        <div className="grid gap-10 md:grid-cols-2">
          <AnimatedSection className="space-y-4">
            {details.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="card flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface2 text-accent">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase text-muted">
                      {label}
                    </p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block transition hover:-translate-y-0.5"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
