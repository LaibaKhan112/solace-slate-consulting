import type { CSSProperties, ReactNode } from "react";

export type ServiceCardData = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

type ServiceCardProps = {
  service: ServiceCardData;
  featured?: boolean;
  delay?: number;
};

export default function ServiceCard({
  service,
  featured = false,
  delay = 0,
}: ServiceCardProps) {
  return (
    <article
      style={
        {
          "--card-delay": `${delay}ms`,
        } as CSSProperties
      }
      className={`
        animate-fade-in
        [--enter-y:12px]
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[6px]
        border
        transition-all
        duration-300
        ease-out
        motion-safe:hover:-translate-y-[3px]

        ${
          featured
            ? `
              min-h-[195px]
              border-sage/45
              bg-sage/[0.12]
              p-5
              hover:border-sage/75
              hover:bg-sage/[0.15]
              lg:min-h-[205px]
              xl:p-6
            `
            : `
              min-h-[185px]
              border-border
              bg-background-alt
              p-5
              hover:border-sage/55
              hover:bg-sage/[0.06]
              lg:min-h-[195px]
            `
        }
      `}
    >
      {/* Top accent */}
      <span
        aria-hidden="true"
        className={`
          absolute
          left-0
          top-0
          w-full
          transition-all
          duration-300

          ${
            featured
              ? "h-[3px] bg-primary/85 group-hover:bg-primary"
              : "h-[2px] bg-sage/70 group-hover:bg-primary/85"
          }
        `}
      />

      {/* Number + Icon */}
      <div className="flex items-start justify-between gap-4">
        <span
          className={`
            font-sans
            font-semibold
            tracking-[0.12em]

            ${
              featured
                ? "text-[13px] text-primary"
                : "text-xs text-sage"
            }
          `}
        >
          {service.number}
        </span>

        <span
          className={`
            flex
            shrink-0
            items-center
            justify-center
            rounded-full
            text-primary
            transition-all
            duration-300
            motion-safe:group-hover:-translate-y-0.5

            ${
              featured
                ? "h-11 w-11 bg-primary/10"
                : "h-10 w-10 bg-sage/15"
            }
          `}
        >
          {service.icon}
        </span>
      </div>

      {/* Title */}
      <h3
  className={`
    mt-3
    leading-[1.3]
    text-foreground

    ${
      featured
        ? "text-[19px] xl:text-[20px]"
        : "text-[17px]"
    }
  `}
  style={{
    fontFamily: "var(--font-display)",
    fontWeight: 700,
  }}
>
  {service.title}
</h3>

      {/* Description */}
      <p
        className={`
          mt-2
          text-muted-foreground

          ${
            featured
              ? "text-[14px] leading-[1.58]"
              : "text-[13px] leading-[1.55]"
          }
        `}
      >
        {service.description}
      </p>
    </article>
  );
}