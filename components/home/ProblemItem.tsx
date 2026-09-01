import type { CSSProperties, ReactNode } from "react";

type ProblemItemProps = {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
  divider?: boolean;
  delay?: number;
};

export default function ProblemItem({
  icon,
  children,
  className = "",
  divider = false,
  delay = 0,
}: ProblemItemProps) {
  return (
    <li
      style={{ "--card-delay": `${delay}ms` } as CSSProperties}
      className={`animate-fade-in group relative flex w-full flex-col items-center px-4 text-center [--enter-y:8px] sm:px-5 lg:px-6 ${className}`}
    >
      {/* Desktop divider */}
      {divider && (
        <span
          aria-hidden="true"
          className="absolute top-1.5 right-0 hidden h-[104px] w-px bg-border lg:block"
        />
      )}

      {/* Icon */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage-light text-primary transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
        {icon}
      </div>

      {/* Text */}
      <p className="mt-3.5 max-w-[230px] text-[15px] leading-[1.55] text-foreground">
        {children}
      </p>
    </li>
  );
}
