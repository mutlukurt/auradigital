"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const figureY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const figureScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-950 pt-[72px]"
    >
      {/* background glow (solid blurred color) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute bottom-[-120px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-orange/40 blur-[80px]" />
      </div>

      {/* hero figure image — full-bleed background */}
      <motion.div
        style={{ y: figureY, scale: figureScale }}
        className="pointer-events-none absolute inset-0 z-[1]"
      >
        <Image
          src="/images/hero-figure.jpg"
          alt="Futuristic figure wearing a chrome cybernetic helmet with glowing data reflections in the visor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        {/* solid readability overlay */}
        <div className="absolute inset-0 bg-ink-950/65" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative z-[2] mx-auto w-full max-w-container px-5 text-center sm:px-8 lg:px-16"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-tag mb-6 block"
        >
          — Digital Studio · Est. 2026
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.8rem,9vw,8.5rem)] font-normal leading-[0.92] tracking-[-0.035em]"
        >
          UNLEASHING
          <br />
          <span className="text-white">DIGITAL</span> AURA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-[560px] text-[clamp(1rem,1.4vw,1.15rem)] text-white/80"
        >
          We craft immersive brands, experiences and futures for visionaries who
          refuse to blend in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <Button href="#work" variant="ghostLight" size="lg">
            View Work
          </Button>
          <Button href="#services" variant="link" size="lg">
            Explore Services <span aria-hidden="true">→</span>
          </Button>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2.5"
        aria-hidden="true"
      >
        <span className="font-display text-[0.65rem] tracking-[0.3em] text-white/70">
          SCROLL
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-white/40">
          <span className="animate-scroll-dot absolute left-0 top-0 h-1/2 w-full bg-accent-orange" />
        </span>
      </div>
    </section>
  );
}
