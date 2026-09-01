import type { CSSProperties } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* =========================================================
   ICONS
========================================================= */

function EmpathyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 20s-7.5-4.6-9.6-9.4C1 7.3 2.9 4.5 6 4.2c2-.2 3.5.9 6 3.3 2.5-2.4 4-3.5 6-3.3 3.1.3 5 3.1 3.6 6.4C19.5 15.4 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IntegrityIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M12 3.5 19.5 6v6c0 4.5-3.2 7.5-7.5 8.5C7.7 19.5 4.5 16.5 4.5 12V6L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 12.3 11 14.8l4.5-5.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SustainabilityIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M20 4.5C13.5 4.7 8 6.8 6.1 11.2 4.8 14.3 6.2 17 8.8 18c3.2 1.3 6.3-.2 7.9-3.1C18.5 11.7 19.4 7.5 20 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="M5 20c2.2-4.4 5.5-7.4 10.5-9.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BalanceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   VALUES
========================================================= */

const values = [
  {
    icon: <EmpathyIcon />,
    title: "Empathy",
    description: "People first, always.",
  },
  {
    icon: <IntegrityIcon />,
    title: "Integrity",
    description: "Honest guidance you can count on.",
  },
  {
    icon: <SustainabilityIcon />,
    title: "Sustainability",
    description: "Strategies that grow with you.",
  },
  {
    icon: <BalanceIcon />,
    title: "Balance",
    description: "Success that supports your life, too.",
  },
];

/* =========================================================
   SECTION
========================================================= */

export default function AboutValues() {
  return (
    <section className="overflow-hidden border-y border-border bg-background-alt">
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div
            className="
              animate-fade-in
              flex
              items-center
              [--enter-y:10px]
              px-5
              py-10
              sm:px-8
              sm:py-12
              lg:min-h-[350px]
              lg:px-10
              lg:py-10
              xl:pl-[max(48px,calc((100vw-1280px)/2))]
              xl:pr-10
            "
          >
            <div className="w-full max-w-[650px]">
              {/* Eyebrow */}
              <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-sage sm:text-xs">
                MORE THAN A CONSULTANT
              </p>

              {/* Heading */}
              <h2
                className="
                  mt-2
                  text-[31px]
                  leading-[1.08]
                  text-foreground
                  sm:text-[35px]
                  lg:text-[38px]
                "
              >
                Values that guide.
                <br />

                <span className="text-sage italic">
                  A partner you can trust.
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-[560px]
                  text-[14px]
                  leading-[1.65]
                  text-muted-foreground
                  sm:text-[15px]
                "
              >
                I believe in building businesses&mdash;and relationships&mdash;on
                honesty, empathy, and integrity. When we work together, you can
                expect transparency, respect, and unwavering support.
              </p>

              {/* Values */}
              <ul
                className="
                  mt-7
                  grid
                  grid-cols-2
                  gap-y-7
                  sm:grid-cols-4
                  sm:gap-y-0
                "
              >
                {values.map((value, index) => (
                  <li
                    key={value.title}
                    style={
                      {
                        "--card-delay": `${index * 70}ms`,
                      } as CSSProperties
                    }
                    className={`
                      animate-fade-in
                      [--enter-y:8px]
                      pr-4
                      sm:px-4
                      sm:first:pl-0
                      sm:last:pr-0
                      ${
                        index > 0
                          ? "sm:border-l sm:border-border"
                          : ""
                      }
                    `}
                  >
                    {/* Icon */}
                    <span className="flex h-8 w-8 items-center justify-center text-sage">
                      {value.icon}
                    </span>

                    {/* Title */}
                    <h3
                      className="
                        mt-2
                        text-[13px]
                        leading-[1.25]
                        text-foreground
                      "
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 600,
                      }}
                    >
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-1
                        max-w-[125px]
                        text-[11px]
                        leading-[1.45]
                        text-muted-foreground
                        sm:text-[11.5px]
                      "
                    >
                      {value.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <div
            style={{ "--card-delay": "120ms" } as CSSProperties}
            className="
              animate-fade-in
              relative
              min-h-[300px]
              overflow-hidden
              [--enter-y:10px]
              sm:min-h-[360px]
              lg:min-h-[350px]
            "
          >
            <Image
              src="/images/about/about-values.png"
              alt="Greenery, stacked books and framed words representing clarity, strategy, growth and freedom"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="
                object-cover
                object-center
                lg:object-[52%_center]
              "
            />

            {/* Soft fade into left content */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                hidden
                w-20
                bg-gradient-to-r
                from-background-alt
                to-transparent
                lg:block
              "
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}