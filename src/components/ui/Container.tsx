import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
  id?: string;
};

export function Container({
  children,
  className,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn("mx-auto w-full max-w-container px-5 sm:px-8 lg:px-16", className)}
    >
      {children}
    </Tag>
  );
}
