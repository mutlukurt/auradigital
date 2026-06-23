"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "li" | "span";
};

const variants: Variants = {
  hidden: (y: number) => ({ opacity: 0, y }),
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      custom={y}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
