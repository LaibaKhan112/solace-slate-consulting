import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceDetailCard, {
  type ServiceDetailData,
} from "@/components/services/ServiceDetailCard";

/* =========================================================
   ICONS
========================================================= */

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14.5 9.5 13 13l-3.5 1.5L11 11l3.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <rect x="9" y="3" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="16" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="15" y="16" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 8v4M6 16v-2h12v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="m4 11 16-7-6.8 16-2.1-6.1L4 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m11.1 13.9 4.3-4.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7.2c.5 2.6 1.7 3.8 4.3 4.3-2.6.5-3.8 1.7-4.3 4.3-.5-2.6-1.7-3.8-4.3-4.3 2.6-.5 3.8-1.7 4.3-4.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.5" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4.5 18c.5-3.2 2.3-5 4.5-5s4 1.8 4.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 14c2.8.1 4.5 1.5 5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   DATA — ROW 1 (01–04)
========================================================= */

const servicesRow1: ServiceDetailData[] = [
  {
    number: "01",
    title: "Market Evaluation & Expansion Strategy",
    description:
      "I identify the right market, audience, and channels before you spend, so expansion starts with evidence instead of guesswork.",
    icon: <CompassIcon />,
    points: [
      "Market & competitor analysis",
      "Ideal customer & positioning",
      "Channel & go-to-market strategy",
      "Expansion roadmap with priorities",
    ],
  },
  {
    number: "02",
    title: "Data Cleanup & CRM Organization",
    description:
      "I clean, standardize, enrich, and structure your CRM data so your strategy rests on information you can actually trust.",
    icon: <DatabaseIcon />,
    points: [
      "Data audit & deduplication",
      "Standardization & enrichment",
      "CRM setup & segmentation",
      "Reporting foundation & dashboards",
    ],
  },
  {
    number: "03",
    title: "Pipeline & Workflow Design",
    description:
      "I build pipeline stages, follow-up cadences, and reporting around how you really sell, so deals keep moving without relying on memory.",
    icon: <WorkflowIcon />,
    points: [
      "Pipeline architecture",
      "Stage definitions & SLAs",
      "Cadences & automation",
      "Forecasting & pipeline health",
    ],
  },
  {
    number: "04",
    title: "Customer Experience & Retention Strategy",
    description:
      "I uncover why customers leave, build win-back plays, and set early-warning signals so at-risk accounts can be saved sooner.",
    icon: <HeartIcon />,
    points: [
      "CX audit & journey mapping",
      "Win-back & reactivation flows",
      "Loyalty & retention programs",
      "Churn signals & risk tracking",
    ],
  },
];

/* =========================================================
   DATA — ROW 2 (05–07)
========================================================= */

const servicesRow2: ServiceDetailData[] = [
  {
    number: "05",
    title: "Outreach Campaigns",
    description:
      "I build LinkedIn, email, and phone outreach on clean data with clear messaging, sequencing, tracking, and follow-up.",
    icon: <SendIcon />,
    points: [
      "ICP-targeted messaging",
      "Multi-channel sequence design",
      "Deliverability & list hygiene",
      "Tracking, attribution & optimization",
    ],
  },
  {
    number: "06",
    title: "AI Readiness Prep",
    description:
      "I prepare your data, processes, and use cases so AI supports growth instead of amplifying the mess underneath it.",
    icon: <SparkIcon />,
    points: [
      "Use case discovery",
      "Data & workflow readiness",
      "Tool recommendations",
      "Implementation roadmap",
    ],
  },
  {
    number: "07",
    title: "Team Systems & Onboarding",
    description:
      "I turn your workflow into documented onboarding and training so your team can run the system confidently without depending on you.",
    icon: <TeamIcon />,
    points: [
      "Process documentation",
      "SOPs & playbooks",
      "Onboarding programs",
      "Training & accountability",
    ],
  },
];

/* =========================================================
   SECTION
========================================================= */

export default function ServicesMain() {
  return (
    <section id="services" className="relative overflow-hidden bg-background pt-14 pb-16 lg:pt-16 lg:pb-[68px]">
      <Container>
        {/* Heading */}
        <ScrollReveal className="animate-fade-in mx-auto max-w-[1000px] text-center [--enter-y:12px]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage sm:text-sm">
            WHAT I DO
          </p>

          <h2 className="mt-2.5 text-[32px] leading-[1.08] text-foreground sm:text-[38px] md:text-[44px] lg:text-[48px]">
            I work across the entire growth system—so nothing gets missed.
          </h2>

          <p className="mx-auto mt-3.5 text-center text-[15px] leading-[1.6] text-muted-foreground sm:text-base">
            From strategy to systems to execution, every piece is designed to
            help you grow with clarity and confidence.
          </p>
        </ScrollReveal>

        {/* Row 1 — 4 cards */}
        <ScrollReveal className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {servicesRow1.map((service, index) => (
            <ServiceDetailCard
              key={service.number}
              service={service}
              delay={index * 60}
            />
          ))}
        </ScrollReveal>

        {/* Row 2 — 3 cards, centered on desktop */}
        <ScrollReveal className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-auto lg:max-w-[78%] lg:grid-cols-3 lg:gap-5">
          {servicesRow2.map((service, index) => (
            <ServiceDetailCard
              key={service.number}
              service={service}
              delay={(index + 4) * 60}
            />
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}
