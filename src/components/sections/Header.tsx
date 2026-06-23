"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";
import { nav, headerActions } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-400",
        scrolled
          ? "border-white/10 bg-black/90 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "border-white/5 bg-black/70 backdrop-blur-lg",
      )}
    >
      <Container as="div" className="flex h-[72px] items-center justify-between gap-8">
        <a href="#top" aria-label="AURA DIGITAL home" className="shrink-0">
          <BrandMark />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative font-display text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-accent-orange transition-all duration-400 ease-aura group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          {headerActions.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contact" size="sm">
            Get Started
          </Button>
        </div>

        <button
          className="flex flex-col gap-[5px] rounded-lg p-2.5 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={cn(
              "h-0.5 w-6 bg-white transition-all duration-400",
              menuOpen && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-white transition-all",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-white transition-all duration-400",
              menuOpen && "-translate-y-[7px] -rotate-45",
            )}
          />
        </button>
      </Container>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-navigation"
      className={cn(
        "flex flex-col gap-5 border-b border-white/10 bg-ink-950 px-5 pb-8 sm:px-8 lg:hidden",
        "transition-all duration-500 ease-aura overflow-hidden",
        open ? "max-h-[600px] py-6 opacity-100" : "max-h-0 py-0 opacity-0",
      )}
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      {[...nav, ...headerActions].map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="font-display text-lg text-white/80"
        >
          {item.label}
        </a>
      ))}
      <Button href="#contact" className="mt-2 self-start" onClick={onClose}>
        Get Started
      </Button>
    </div>
  );
}
