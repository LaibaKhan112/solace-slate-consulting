import type { CSSProperties, ReactNode } from "react";

export type ServiceDetailData = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  points: string[];
};

type ServiceDetailCardProps = {
  service: ServiceDetailData;
  delay?: number;
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4 shrink-0 text-primary"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M5.2 8.2 7 10l3.8-4.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceDetailCard({
  service,
  delay = 0,
}: ServiceDetailCardProps) {
  return (
    <article
      style={{ "--card-delay": `${delay}ms` } as CSSProperties}
      className="animate-fade-in [--enter-y:10px] group flex h-full flex-col rounded-md border border-border bg-background-alt p-5 transition-all duration-300 ease-out motion-safe:hover:-translate-y-[3px] hover:border-sage/60 hover:bg-sage/[0.06] lg:p-6"
    >
      {/* Number + icon badge */}
      <div className="flex items-start justify-between gap-3">
        <span className="pt-1.5 font-sans text-[13px] font-semibold tracking-[0.12em] text-primary">
          {service.number}
        </span>

        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage-light text-primary">
          {service.icon}
        </span>
      </div>

      {/* Title */}
      <h3
        className="mt-4 text-center text-[19px] leading-[1.25] text-foreground sm:text-[20px]"
        style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-center text-[13px] leading-[1.6] text-muted-foreground sm:text-[14px]">
        {service.description}
      </p>

      {/* Divider */}
      <div aria-hidden="true" className="mt-4 border-t border-border" />

      {/* Key points */}
      <ul className="mt-4 flex flex-col gap-2.5">
        {service.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-foreground/90"
          >
            <CheckIcon />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
