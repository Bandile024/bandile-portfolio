import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Q&A",
  description: "Frequently asked questions about working with Bandile Ngwenya.",
};

export default function QnaPage() {
  return (
    <section className="section">
      <div className="container-xl max-w-3xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Q&A"
            title="Frequently asked questions"
            description="Answers to the things people usually ask before starting a project."
          />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <FaqAccordion />
        </AnimatedSection>
      </div>
    </section>
  );
}
