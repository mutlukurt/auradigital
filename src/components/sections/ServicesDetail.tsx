import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities } from "@/lib/data";

export function ServicesDetail() {
  return (
    <section id="other" className="bg-gray-100 py-24 text-ink-950 lg:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            tag="02 — Capabilities"
            dark
            className="max-w-3xl"
            title={
              <>
                Empowering Visionaries
                <br />
                to Create the Future.
              </>
            }
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.1} as="article">
              <div className="h-full rounded-xl border border-black/5 bg-white p-7 transition-all duration-500 ease-aura hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.25)] lg:p-9">
                <span className="mb-5 block font-display text-xs tracking-[0.2em] text-accent-orange">
                  {cap.num}
                </span>
                <h3 className="mb-2.5 text-xl text-ink-950">{cap.title}</h3>
                <p className="text-[#555]">{cap.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
