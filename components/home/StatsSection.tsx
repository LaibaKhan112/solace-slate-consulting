import type { CSSProperties } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="15"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3.5 9.5h17M8 3.5v3M16 3.5v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle
        cx="9"
        cy="8.5"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
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

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="m12 3.5 2.5 5.3 5.7.7-4.2 4 1.1 5.7L12 16.4l-5.1 2.8 1.1-5.7-4.2-4 5.7-.7L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M4 20V10M10 20V4M16 20v-7M20 20v-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.5 20h17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M5 4.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 3.5 6.1 1.5 1.5 0 0 1 5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const stats = [
  {
    icon: <CalendarIcon />,
    value: "15+",
    label: "Years organizing operations across six industries",
  },
  {
    icon: <UsersIcon />,
    value: "30+",
    label: "Accounts managed concurrently",
  },
  {
    icon: <StarIcon />,
    value: "95%",
    label: "Client retention",
  },
  {
    icon: <ChartIcon />,
    value: "25%",
    label: "Lift in appointment-setting after data/process overhaul",
  },
  {
    icon: <PhoneIcon />,
    value: "500–800",
    label: "Dials per day in a past life",
    compact: true,
  },
];

export default function StatsSection() {
  return (
    <Section className="bg-primary pt-12! pb-12! sm:pt-11! sm:pb-11! lg:pt-10! lg:pb-10!">
      <Container>
        <ScrollReveal>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-y-9 lg:grid-cols-5 lg:gap-x-0 lg:gap-y-0 lg:divide-x lg:divide-white/15">
          {stats.map((stat, index) => (
            <li
              key={stat.label}
              style={
                {
                  "--card-delay": `${index * 60}ms`,
                } as CSSProperties
              }
              className={`animate-fade-in [--enter-y:8px] flex flex-col items-center justify-center text-center lg:px-6 ${
                index === stats.length - 1
                  ? "col-span-2 sm:col-span-1"
                  : ""
              }`}
            >
              {/* Icon + Number */}
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="text-white/80"
                >
                  {stat.icon}
                </span>

                <p
                  className={`font-display leading-none text-white ${
                    stat.compact
                      ? "text-[29px] lg:text-[33px]"
                      : "text-[36px] lg:text-[40px]"
                  }`}
                >
                  {stat.value}
                </p>
              </div>

              {/* Label */}
              <p className="mt-2 max-w-[175px] text-[13px] leading-[1.5] text-white/72 sm:text-[14px]">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
        </ScrollReveal>
      </Container>
    </Section>
  );
}