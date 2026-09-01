import type { CSSProperties } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

function DiscoverIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="m15 15 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ClarifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 3.5a5.5 5.5 0 0 0-3 10.1c.6.4.9 1 .9 1.7v.7h4.2v-.7c0-.7.3-1.3.9-1.7a5.5 5.5 0 0 0-3-10.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9.9 19h4.2M10.5 21h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m9.5 14.5 1.8-4.7 4.7-1.8-1.8 4.7-4.7 1.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function DeliverIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.3 12.3 11 15l5-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const steps = [
  {
    number: "01",
    icon: <DiscoverIcon />,
    title: "Discover",
    description: "We start with a deep dive into your business, goals, and what matters most.",
  },
  {
    number: "02",
    icon: <ClarifyIcon />,
    title: "Clarify",
    description: "I distill insights into clear priorities and a focused, actionable plan.",
  },
  {
    number: "03",
    icon: <DesignIcon />,
    title: "Design",
    description: "We build strategies and systems that fit your business and set you up for growth.",
  },
  {
    number: "04",
    icon: <DeliverIcon />,
    title: "Deliver",
    description: "I partner with you to implement, refine, and achieve meaningful results—together.",
  },
];

export default function AboutProcess() {
  return (
    <Section id="how-i-work" className="bg-background py-12 sm:py-18 lg:pt-14">
      <Container>
        <ScrollReveal className="animate-fade-in mx-auto mb-10 max-w-[640px] text-center [--enter-y:10px] lg:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage sm:text-sm">
            HOW I WORK
          </p>
          <h2 className="mt-3 text-[30px] leading-[1.15] text-foreground sm:text-[36px] lg:text-[42px]">
            Thoughtful process. Clear outcomes.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, index) => (
              <li
                key={step.number}
                style={{ "--card-delay": `${index * 80}ms` } as CSSProperties}
                className="animate-fade-in h-full rounded-[6px] border border-border bg-background-alt px-6 py-8 [--enter-y:10px] transition-transform duration-200 motion-safe:hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-light text-primary">
                    {step.icon}
                  </span>
                  <span className="font-display text-[15px] text-muted-foreground/70">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-[19px] leading-[1.2] text-foreground sm:text-[20px]">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-[13.5px] leading-[1.6] text-muted-foreground sm:text-[14px]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
