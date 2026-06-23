import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-7 w-7", className)}
      fill="none"
      aria-hidden="true"
    >
      <path d="M16 2 L30 28 H22 L16 14 L10 28 H2 Z" fill="#fff" />
    </svg>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandLogo />
      <span className="font-display text-base tracking-wide">
        AURA<span className="text-accent-orange">.</span>DIGITAL
      </span>
    </span>
  );
}
