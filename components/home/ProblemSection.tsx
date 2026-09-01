import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProblemItem from "@/components/home/ProblemItem";

function CompassIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 lg:h-7 lg:w-7"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14.5 9.5 13 13l-3.5 1.5L11 11l3.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 lg:h-7 lg:w-7"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M4.5 6.5 12 12.5l7.5-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DuplicateIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 lg:h-7 lg:w-7"
      aria-hidden="true"
    >
      <rect
        x="7"
        y="7"
        width="12"
        height="13"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M5 15V5.5A1.5 1.5 0 0 1 6.5 4H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrendDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 lg:h-7 lg:w-7"
      aria-hidden="true"
    >
      <path
        d="M4 7.5 9.5 13l3-3 7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M20 12.5V17h-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 lg:h-7 lg:w-7"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 lg:h-7 lg:w-7"
      aria-hidden="true"
    >
      <path
        d="M12 4.5c.6 3 2 4.4 5 5-3 .6-4.4 2-5 5-.6-3-2-4.4-5-5 3-.6 4.4-2 5-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 lg:h-7 lg:w-7"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="5.5"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="6"
        cy="17.5"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="18"
        cy="17.5"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M10.5 7 7.3 15.8M13.5 7l3.2 8.8M8 17.5h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const problems = [
  {
    icon: <CompassIcon />,
    text: "You want to expand into a new market or launch a new product, and you’re not sure who to go after first.",
  },
  {
    icon: <MailIcon />,
    text: "You bought a lead list and a third of it bounced.",
  },
  {
    icon: <DuplicateIcon />,
    text: "There are three versions of the same company in your CRM, and nobody fully trusts the reports anymore.",
  },
  {
    icon: <TrendDownIcon />,
    text: "Customers are quietly slipping away, and nobody’s tracking why.",
  },
  {
    icon: <ClockIcon />,
    text: "Follow up happens when somebody remembers to follow up.",
  },
  {
    icon: <SparkIcon />,
    text: "You’d like to start using AI tools, but you have a pretty good idea what would happen if you pointed one at your current data.",
  },
  {
    icon: <NetworkIcon />,
    text: "Everything works because you’re the one holding it together, and that doesn’t scale.",
  },
];

export default function ProblemSection() {
  const firstRow = problems.slice(0, 4);
  const secondRow = problems.slice(4);

  return (
    <section className="bg-background-alt pt-12 pb-11 lg:pt-14 lg:pb-12">
      <Container>
        {/* Heading */}
        <ScrollReveal className="animate-fade-in mx-auto max-w-[720px] text-center [--enter-y:12px]">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sage sm:text-sm">
            Something&rsquo;s Off
          </p>

          <h2 className="mt-2 text-[38px] leading-[1.03] text-foreground sm:text-[44px] md:text-[50px] lg:text-[56px]">
            You probably already know something&rsquo;s off.
          </h2>

          <p className="mt-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Maybe it sounds like one of these:
          </p>
        </ScrollReveal>

        {/* Mobile */}
        <ScrollReveal className="mt-6 sm:hidden">
          <ul className="divide-y divide-border">
            {problems.map((problem, index) => (
              <ProblemItem
                key={problem.text}
                icon={problem.icon}
                className="py-5"
                delay={index * 50}
              >
                {problem.text}
              </ProblemItem>
            ))}
          </ul>
        </ScrollReveal>

        {/* Tablet + Desktop */}
        <ScrollReveal className="mt-6 hidden sm:mt-7 sm:block">
          {/* First row — 4 */}
          <ul className="mx-auto grid max-w-[1080px] grid-cols-2 items-start gap-y-8 lg:grid-cols-4 lg:gap-y-0">
            {firstRow.map((problem, index) => (
              <ProblemItem
                key={problem.text}
                icon={problem.icon}
                divider={index !== firstRow.length - 1}
                delay={index * 50}
              >
                {problem.text}
              </ProblemItem>
            ))}
          </ul>

          {/* Second row — 3 */}
          <ul className="mx-auto mt-8 grid max-w-[810px] grid-cols-2 items-start gap-y-8 lg:grid-cols-3 lg:gap-y-0">
            {secondRow.map((problem, index) => (
              <ProblemItem
                key={problem.text}
                icon={problem.icon}
                divider={index !== secondRow.length - 1}
                delay={(index + 4) * 50}
              >
                {problem.text}
              </ProblemItem>
            ))}
          </ul>
        </ScrollReveal>

        {/* Closing */}
        {/* <div className="mx-auto mt-7 max-w-[700px] text-center sm:mt-8">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            None of that means you&rsquo;re behind. It means the system
            hasn&rsquo;t been built yet.{" "}
            <span className="font-display text-lg text-primary sm:text-xl">
              That part happens to be my favorite part.
            </span>
          </p>
        </div> */}
      </Container>
    </section>
  );
}