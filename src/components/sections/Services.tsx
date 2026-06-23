"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="relative bg-ink-950 py-20 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            tag="01 — Services"
            title={
              <>
                What we <span className="text-accent-orange">shape</span>
              </>
            }
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:gap-12 lg:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.12} as="article">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-800 transition-all duration-500 ease-aura hover:-translate-y-1.5 hover:border-white/20 hover:bg-ink-700">
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[800ms] ease-aura group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 font-display text-xs tracking-[0.2em] text-white backdrop-blur-sm">
          {service.index}
        </span>
      </div>
      <div className="p-7 lg:p-10">
        <h3 className="mb-3 text-2xl lg:text-3xl">{service.name}</h3>
        <p className="mb-6 text-white/70">{service.description}</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 font-display text-sm text-white transition-all duration-300 hover:gap-3 hover:text-accent-orange-soft"
        >
          Start project <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
