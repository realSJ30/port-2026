import { ContactSection } from "@/components/custom/contact-section";
import { ExperienceSection } from "@/components/custom/experience-section";
import { HeroSection } from "@/components/custom/hero-section";
import { SiteHeader } from "@/components/custom/site-header";
import { SkillsSection } from "@/components/custom/skills-section";
import { WorksSection } from "@/components/custom/works-section";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl border-x border-border bg-paper">
      <SiteHeader />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <WorksSection />
        <ContactSection />
      </main>
    </div>
  );
}
