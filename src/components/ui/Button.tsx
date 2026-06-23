import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "ghostLight" | "link" | "darkCta";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 font-display font-medium rounded-full transition-all duration-500 ease-aura will-change-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";

const variants: Record<Variant, string> = {
  primary: "bg-white text-black hover:bg-accent-orange hover:text-white",
  ghost:
    "border border-white/10 text-white/70 hover:text-white hover:border-white/30",
  ghostLight:
    "border border-white/20 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white",
  link: "text-white/50 hover:text-white",
  darkCta:
    "bg-black text-white border border-white/20 hover:bg-accent-orange hover:border-accent-orange",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
