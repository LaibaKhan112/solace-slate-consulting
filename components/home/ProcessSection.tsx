import type { CSSProperties } from "react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
      aria-hidden="true"
    >
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
      <path
        d="M8 13h3M8 16h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <circle
        cx="10.5"
        cy="10.5"
        r="6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m15 15 5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        d="M6 3.5h8l4 4V20.5H6V3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 3.5v4h4M9 12h6M9 15.5h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ToolsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        d="m5 4 4 4-2 2-4-4L5 4Zm14 14-4-4 2-2 4 4-2 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m14 4 2 2-9 9-2-2 9-9Zm-7 13-2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="m13 14 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="5.5"
        width="14"
        height="15"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 5.5V4h6v1.5M8.5 11h7M8.5 14.5h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const steps = [
  {
    number: "01",
    icon: <CalendarIcon />,
    title: "A 20-minute call",
    description:
      "No deck. I ask questions, you tell me what’s driving you crazy.",
  },
  {
    number: "02",
    icon: <SearchIcon />,
    title: "I look under the hood",
    description: "CRM, lists, and current process.",
  },
  {
    number: "03",
    icon: <DocumentIcon />,
    title: "Scope + flat quote",
    description: "No hourly surprises.",
  },
  {
    number: "04",
    icon: <ToolsIcon />,
    title: "I do the work",
    description: "With regular check-ins.",
  },
  {
    number: "05",
    icon: <ClipboardIcon />,
    title: "Documentation + handoff",
    description: "Your team can keep it clean without me.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-background-alt py-12 sm:py-14 lg:py-12 px-12">
      <Container>
        {/* Heading */}
        <ScrollReveal className="animate-fade-in mb-8 text-center [--enter-y:12px] lg:mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage sm:text-sm">
            How this usually goes
          </p>
        </ScrollReveal>

        {/* =========================
            DESKTOP PROCESS
        ========================== */}
        <ScrollReveal className="hidden lg:block">
        <ol className="lg:grid lg:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step.number}
              style={{ "--card-delay": `${index * 80}ms` } as CSSProperties}
              className="animate-fade-in relative min-w-0 pr-5 [--enter-y:8px] last:pr-0"
            >
              {/* Number + connecting line */}
              <div className="flex items-center">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-[12px] font-semibold text-white">
                  {step.number}
                </div>

                <div className="relative ml-3 h-px flex-1 bg-border">
                  {/* Arrow */}
                  {index !== steps.length - 1 && (
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground/65"
                    >
                      <path
                        d="M2 2.5 6 6l-4 3.5M6 6h4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="mt-5 flex items-start gap-4">
                <div className="shrink-0 text-primary">
                  {step.icon}
                </div>

                <div className="min-w-0">
                  <h3
                    className="text-[6px] leading-[1.3] text-foreground xl:text-[15px]"
                    style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[190px] text-[13px] leading-[1.65] text-muted-foreground xl:text-[14px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
        </ScrollReveal>

        {/* =========================
            MOBILE / TABLET PROCESS
        ========================== */}
        <ScrollReveal className="lg:hidden">
        <ol className="mx-auto max-w-2xl space-y-0">
          {steps.map((step, index) => (
            <li
              key={step.number}
              style={{ "--card-delay": `${index * 80}ms` } as CSSProperties}
              className="animate-fade-in relative grid grid-cols-[42px_1fr] gap-x-4 pb-8 [--enter-y:8px] last:pb-0"
            >
              {/* Vertical timeline */}
              <div className="relative flex justify-center">
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-[12px] font-semibold text-white">
                  {step.number}
                </div>

                {index !== steps.length - 1 && (
                  <div className="absolute top-9 bottom-0 left-1/2 w-px -translate-x-1/2 bg-border" />
                )}
              </div>

              {/* Mobile content */}
              <div className="pb-2">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 text-primary">
                    {step.icon}
                  </div>

                  <div>
                    <h3
                      className="text-[16px] leading-[1.3] text-foreground xl:text-[17px]"
                      style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-1.5 max-w-md text-[14px] leading-[1.6] text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
        </ScrollReveal>
      </Container>
    </section>
  );
}