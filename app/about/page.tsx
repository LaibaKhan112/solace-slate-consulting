import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import AboutProcess from "@/components/about/AboutProcess";
import AboutValues from "@/components/about/AboutValues";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Rachel | Solace & Slate Consulting",
  description:
    "Meet Rachel, founder of Solace & Slate Consulting — strategy with heart, and results that last.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutProcess />
      <AboutValues />
      <AboutCTA />
    </>
  );
}
