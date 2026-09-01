import type { CSSProperties } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <rect x="3.5" y="7.5" width="17" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3.5 13h17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 19c.5-3.5 2.7-5.5 5.5-5.5s5 2 5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 8.8a2.6 2.6 0 1 0 0-5.2M16 13.7c2.3.4 3.9 2.2 4.3 5.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 20s-7.5-4.6-9.6-9.4C1 7.3 2.9 4.5 6 4.2c2-.2 3.5.9 6 3.3 2.5-2.4 4-3.5 6-3.3 3.1.3 5 3.1 3.6 6.4C19.5 15.4 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const stats = [
  {
    icon: <BriefcaseIcon />,
    value: "12+",
    title: "Years of experience",
    description: "Leading strategy and operations initiatives across industries.",
  },
  {
    icon: <UsersIcon />,
    value: "200+",
    title: "Clients partnered",
    description: "From startups to established brands, across the U.S. and internationally.",
  },
  {
    icon: <TargetIcon />,
    value: "100%",
    title: "Client focus",
    description: "Every engagement is tailored to your goals, your business, your stage.",
  },
  {
    icon: <HeartIcon />,
    value: null,
    title: "Strategic and personal",
    description: "A calm, collaborative partner who’s as invested in your success as you are.",
  },
];

export default function AboutStats() {
  return (
    <Section className="bg-background-alt py-16 sm:py-18 lg:pt-14">
      <Container>
        <ScrollReveal className="animate-fade-in mx-auto mb-10 max-w-[640px] text-center [--enter-y:10px] lg:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage sm:text-sm">
            EXPERIENCE THAT MATTERS
          </p>
          <h2 className="mt-3 text-[30px] leading-[1.15] text-foreground sm:text-[36px] lg:text-[42px]">
            Rooted in experience. Focused on impact.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <ul className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-border">
            {stats.map((stat, index) => (
              <li
                key={stat.title}
                style={{ "--card-delay": `${index * 70}ms` } as CSSProperties}
                className="animate-fade-in flex flex-col items-center text-center [--enter-y:10px] lg:px-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-sage">
                  {stat.icon}
                </span>

                {stat.value && (
                  <p className="mt-4 font-display text-[38px] leading-none text-primary lg:text-[42px]">
                    {stat.value}
                  </p>
                )}

                <h3
                  className={`text-[13px] leading-[1.3] tracking-[0.06em] text-foreground uppercase sm:text-[14px] ${
                    stat.value ? "mt-2" : "mt-4"
                  }`}
                  style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}
                >
                  {stat.title}
                </h3>

                <p className="mt-2.5 max-w-[220px] text-[13.5px] leading-[1.6] text-muted-foreground sm:text-[14px]">
                  {stat.description}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
