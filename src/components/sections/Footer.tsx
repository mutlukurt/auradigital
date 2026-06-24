import { Container } from "@/components/ui/Container";
import { BrandMark } from "@/components/ui/BrandMark";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { brand, footerColumns } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black pb-8 pt-16 lg:pt-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <a href="#top" aria-label="AURA DIGITAL home" className="mb-5 inline-flex">
              <BrandMark />
            </a>
            <p className="font-body text-xs tracking-[0.22em] text-white/70">
              {brand.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-8">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h2 className="mb-5 font-body text-xs tracking-[0.24em] text-white/60">
                  {col.heading}
                </h2>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block py-1.5 text-sm text-white/80 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/70">
            © {brand.year} {brand.name}. All rights reserved. Designed by{" "}
            <span className="font-body font-bold text-white">{brand.designer}</span>.
          </p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
