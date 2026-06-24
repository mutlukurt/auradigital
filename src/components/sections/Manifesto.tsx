import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Manifesto() {
  return (
    <section className="relative border-t border-white/5 bg-ink-950 py-24 text-center lg:py-36">
      <Container>
        <Reveal>
          <span className="section-tag mb-5 block">— Manifesto</span>
          <h2 className="text-[clamp(2.6rem,8vw,7rem)] font-normal leading-[0.95] tracking-[-0.035em]">
            OUR <span className="text-accent-orange">VIBRATION.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-[620px] text-lg text-white/70">
            We don&apos;t follow trends. We tune frequencies. Every project is
            engineered to resonate with the audiences that matter most to your
            future.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
