export type ButtonVariant = "primary" | "outline";

const buttonBaseStyles =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium tracking-wide transition-[color,background-color,border-color,transform] duration-200 ease-out motion-safe:hover:-translate-y-px motion-safe:active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50";

const buttonVariantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-background-alt hover:border-primary",
};

export function buttonClassName(variant: ButtonVariant, className = "") {
  return `${buttonBaseStyles} ${buttonVariantStyles[variant]} ${className}`.trim();
}
