import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { brand } from "@/lib/data";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-ink-950 py-28 lg:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-orange/20 blur-[60px]" />
      <Container>
        <Reveal className="relative z-[1] text-center">
          <span className="section-tag mb-5 block">— Let&apos;s build</span>
          <h2 className="text-[clamp(1.9rem,8vw,7rem)] font-normal leading-[0.95] tracking-[-0.02em] break-keep">
            ARE YOU READY TO
            <br />
            ACTIVATE YOUR <span className="text-accent-orange">AURA?</span>
          </h2>
          <Button
            href={`mailto:${brand.email}`}
            variant="darkCta"
            size="lg"
            className="mt-9"
          >
            Get started
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
