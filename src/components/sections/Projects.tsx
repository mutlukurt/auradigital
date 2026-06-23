"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="work" className="bg-ink-950 pb-24 pt-10 lg:pb-36 lg:pt-14">
      <Container>
        <Reveal className="mb-12 text-center lg:mb-16">
          <span className="section-tag mb-5 block">
            PROJECTS • SELECTED WORK • 2026
          </span>
          <h2 className="text-[clamp(2.6rem,8vw,7rem)] font-black leading-[0.95] tracking-[-0.035em]">
            SHOWCASING
            <br />
            THE <span className="text-accent-orange">VIBRANCE.</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-16 lg:gap-28">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05} as="article">
              <ProjectRow project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectRow({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center gap-8 lg:gap-16",
        "lg:grid-cols-[1.3fr_1fr]",
        project.reverse && "lg:grid-cols-[1fr_1.3fr]",
      )}
    >
      <div
        className={cn(
          "relative aspect-[12/7] overflow-hidden rounded-2xl border border-white/10",
          project.reverse && "lg:order-2",
        )}
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-[1000ms] ease-aura hover:scale-[1.04]"
        />
      </div>

      <div className={cn("px-2", project.reverse && "lg:order-1")}>
        <span className="mb-4 block font-display text-xs tracking-[0.24em] text-accent-orange">
          {project.num}
        </span>
        <h3 className="mb-4 text-[clamp(2.2rem,4.5vw,3.6rem)] tracking-[-0.02em]">
          {project.name}
          <span className="text-accent-orange">.</span>
        </h3>
        <p className="mb-6 max-w-[440px] text-white/50">{project.description}</p>
        <div className="flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 px-4 py-2 font-display text-[0.72rem] uppercase tracking-[0.16em] text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
