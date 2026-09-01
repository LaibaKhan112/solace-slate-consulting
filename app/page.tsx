import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import RachelIntro from "@/components/home/RachelIntro";
import StatsSection from "@/components/home/StatsSection";
import ToolsSection from "@/components/home/ToolsSection";
import ProcessSection from "@/components/home/ProcessSection";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesOverview />
      <RachelIntro />
      <StatsSection />
      <ToolsSection />
      <ProcessSection />
      <HomeCTA />
    </>
  );
}
