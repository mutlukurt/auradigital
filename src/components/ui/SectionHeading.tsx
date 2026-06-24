import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  tag?: string;
  title: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  tag,
  title,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center mx-auto",
        className,
      )}
    >
      {tag && (
        <span
          className={cn(
            "section-tag mb-5 block",
            dark && "text-white/60",
          )}
        >
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "text-[clamp(1.75rem,6vw,3.75rem)] font-normal tracking-tight break-keep",
          dark && "text-ink-900",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
