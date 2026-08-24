import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import RequestForm from "@/components/RequestForm";

export const metadata: Metadata = {
  title: "Request a Service",
  description: "Request a website, dashboard, or AI-powered tool.",
};

export default function RequestPage() {
  return (
    <section className="section">
      <div className="container-xl max-w-2xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Request a service"
            title="Tell me about your project"
            description="Fill out the form below with as much detail as you can. I'll review it and get back to you promptly to discuss next steps."
          />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <RequestForm />
        </AnimatedSection>
      </div>
    </section>
  );
}
