import type { CSSProperties } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";

/* =========================================================
   ICONS
========================================================= */

function MagnifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white lg:h-6 lg:w-6" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="m15 15 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white lg:h-6 lg:w-6" aria-hidden="true">
      <rect x="5" y="5.5" width="14" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M9 5.5V4h6v1.5M8.5 11h7M8.5 14.5h7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white lg:h-6 lg:w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.3 12.3 11 15l5-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   DATA
========================================================= */

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We dig into your data, systems, and process to find the real bottleneck.",
    icon: <MagnifyIcon />,
  },
  {
    number: "02",
    title: "Scope",
    description:
      "You get a clear scope, timeline, and flat-fee proposal. No surprises, no hourly guesswork.",
    icon: <ClipboardIcon />,
  },
  {
    number: "03",
    title: "Build",
    description:
      "I fix the system, document it, and make sure your team can run it without me.",
    icon: <CheckCircleIcon />,
  },
];

/* =========================================================
   SECTION
========================================================= */

export default function ServicesEngagement() {
  return (
    <section className="relative overflow-hidden bg-background pt-2 pb-14 sm:pb-16 lg:pb-[68px]">
      <Container>
        <div className="mx-auto max-w-[1100px]">
          {/* =================================================
              BLOCK 1 — HOW WE WORK TOGETHER
          ================================================== */}
          <ScrollReveal className="animate-fade-in rounded-t-[6px] border border-b-0 border-border bg-background-alt px-6 pt-6 pb-7 [--enter-y:12px] sm:px-8 lg:px-10 lg:pt-7 lg:pb-8">
            {/* Heading */}
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">
                HOW WE WORK TOGETHER
              </p>
              <h2 className="mt-2.5 text-[26px] leading-[1.1] text-foreground sm:text-[32px] lg:text-[36px]">
                A simple, clear engagement process.
              </h2>
            </div>

            {/* Steps */}
            <div className="relative mt-6 lg:mt-6">
              {/* Connector line + dots — desktop only */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-[16.667%] top-6 hidden h-px bg-border lg:block"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-6 left-1/3 hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage lg:block"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-6 left-2/3 hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage lg:block"
              />

              <ol className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
                {steps.map((step, index) => (
                  <li
                    key={step.number}
                    style={{ "--card-delay": `${index * 80}ms` } as CSSProperties}
                    className="animate-fade-in flex flex-col items-center text-center [--enter-y:8px]"
                  >
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary transition-transform duration-200 motion-safe:hover:scale-105 lg:h-12 lg:w-12">
                      {step.icon}
                    </div>

                    <h3
                      className="mt-4 text-[14px] leading-[1.3] text-foreground sm:text-[15px]"
                      style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}
                    >
                      {step.number}. {step.title}
                    </h3>

                    <p className="mt-2 max-w-[220px] text-[13px] leading-[1.55] text-muted-foreground sm:text-[14px]">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>

          {/* =================================================
              BLOCK 2 — DARK GREEN STATEMENT BAND
          ================================================== */}
          <ScrollReveal className="animate-fade-in relative overflow-hidden rounded-b-[6px] bg-primary px-6 py-7 [--enter-y:10px] sm:px-8 lg:px-10 lg:py-8">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:gap-10">
              {/* Left: botanical + statement */}
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left lg:items-center">
                <Image
                  src="/images/decoratives/potted-plant.png"
                  alt=""
                  aria-hidden="true"
                  width={1086}
                  height={1448}
                  className="animate-fade-in pointer-events-none hidden w-[110px] shrink-0 select-none opacity-45 [--card-delay:200ms] [--enter-y:0px] sm:block lg:w-[130px]"
                />

                <h3 className="text-[26px] leading-[1.18] text-white sm:text-[30px] lg:text-[34px]">
                  Better systems.
                  <br />
                  Stronger growth. Less stress.
                </h3>
              </div>

              {/* Right: copy + CTA */}
              <div
                style={{ "--card-delay": "120ms" } as CSSProperties}
                className="animate-fade-in flex flex-col items-center gap-4 text-center [--enter-y:8px] lg:items-start lg:text-left"
              >
                <p className="max-w-[280px] text-[14px] leading-[1.6] text-white/85 sm:text-[15px]">
                  You don&rsquo;t need more tools.
                  <br />
                  You need the right foundation
                  <br />
                  so everything you do actually works.
                </p>

                <ButtonLink
                  href={siteConfig.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="bg-white! text-primary! hover:bg-white/90!"
                >
                  {siteConfig.cta.label}
                </ButtonLink>
              </div>
            </div>
          </ScrollReveal>

          {/* =================================================
              BLOCK 3 — LIGHT FINAL CTA
          ================================================== */}
          <div className="mt-2.5">
            <ScrollReveal className="animate-fade-in relative overflow-hidden rounded-[6px] border border-border bg-background-alt px-6 py-5 [--enter-y:8px] sm:px-8 lg:px-10 lg:py-6">
              <Image
                src="/images/services/hero-botanical-sprig.png"
                alt=""
                aria-hidden="true"
                width={1086}
                height={1448}
                className="pointer-events-none absolute -left-6 top-1/2 z-0 hidden w-[110px] -translate-y-1/2 select-none opacity-30 sm:block lg:w-[130px]"
              />

              <div className="relative z-10 flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:pl-[80px] sm:text-left lg:pl-[110px]">
                <div>
                  <h3 className="text-[24px] leading-[1.2] text-foreground sm:text-[28px] lg:text-[30px]">
                    Not sure where to start?
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.55] text-muted-foreground sm:text-[15px]">
                    Let&rsquo;s figure it out together.
                  </p>
                </div>

                <div className="flex shrink-0 flex-col items-center gap-2 sm:items-end">
                  <ButtonLink
                    href={siteConfig.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                  >
                    {siteConfig.cta.label}
                  </ButtonLink>
                  <p className="text-[12px] text-muted-foreground">
                    No pressure. Just clarity.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
