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
          "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
          dark && "text-ink-900",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
