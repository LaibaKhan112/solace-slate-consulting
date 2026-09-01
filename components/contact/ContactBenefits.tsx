import type { CSSProperties } from "react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7.5V12l3.2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M20 4.5C14 4.7 8.6 6.5 6.4 10.7c-1.6 3.2-.3 6.1 2.4 7.3 3.2 1.4 6.5-.1 8.2-3.1C18.8 11.6 19.5 7.7 20 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5 20c2.5-4.7 6.1-7.6 11-9.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 8.8a2.8 2.8 0 1 1 3.5 2.7c1.7.5 2.9 1.9 3 3.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const benefits = [
  {
    icon: <ClockIcon />,
    title: "Quick response",
    description:
      "I personally read every message and typically respond within 1–2 business days.",
  },
  {
    icon: <LeafIcon />,
    title: "Thoughtful support",
    description:
      "You’ll get a real response from me—no automated replies, just real support.",
  },
  {
    icon: <UsersIcon />,
    title: "The right fit matters",
    description:
      "Not sure if we’re a fit? Let’s chat and find out if working together makes sense.",
  },
];

export default function ContactBenefits() {
  return (
    <section className="bg-background-alt py-7 sm:py-8 lg:py-9">
      <Container>
        <ScrollReveal
          className="
            animate-fade-in
            rounded-[8px]
            border
            border-border
            bg-background
            px-6
            py-7
            [--enter-y:10px]

            sm:px-8
            sm:py-8

            lg:px-10
            lg:py-9
          "
        >
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => (
              <li
                key={benefit.title}
                style={{ "--card-delay": `${index * 70}ms` } as CSSProperties}
                className={`
                  animate-fade-in
                  group
                  flex
                  flex-col
                  items-center
                  text-center
                  [--enter-y:8px]

                  ${index > 0 ? "sm:border-l sm:border-border sm:pl-6" : ""}
                `}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage-light text-primary transition-transform duration-200 motion-safe:group-hover:-translate-y-0.5">
                  {benefit.icon}
                </span>

                <h3 className="mt-3.5 text-[20px] leading-[1.2] text-foreground">
                  {benefit.title}
                </h3>

                <span aria-hidden="true" className="mt-2 h-px w-8 bg-[#b99a57]" />

                <p className="mt-3 max-w-[240px] text-[13.5px] leading-[1.6] text-muted-foreground">
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </Container>
    </section>
  );
}
