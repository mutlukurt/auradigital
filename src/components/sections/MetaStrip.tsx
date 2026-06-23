import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function MetaStrip() {
  return (
    <section id="news" className="border-t border-white/5 bg-ink-800 py-14">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            <MetaItem
              label="What's New"
              text="AURA Innovation Lab now exploring spatial brand experiences."
              href="#contact"
            />
            <div id="pricing">
              <MetaItem
                label="Pricing"
                text="Engagements start from sprint-based to full retainer."
                href="#contact"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function MetaItem({
  label,
  text,
  href,
}: {
  label: string;
  text: string;
  href: string;
}) {
  return (
    <div>
      <span className="mb-2.5 block font-display text-xs uppercase tracking-[0.24em] text-accent-orange">
        {label}
      </span>
      <p className="text-white/80">
        {text}{" "}
        <a
          href={href}
          className="border-b border-accent-orange pb-px text-white transition-colors hover:text-accent-orange-soft"
        >
          Read more →
        </a>
      </p>
    </div>
  );
}
