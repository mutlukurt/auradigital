import { socials, type Social } from "@/lib/data";
import { cn } from "@/lib/utils";

const paths: Record<Social["icon"], React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  x: (
    <path
      d="M18 2h3l-7 8 8 12h-6l-5-7-6 7H2l8-9L2 2h6l4 6 6-6z"
      fill="currentColor"
      stroke="none"
    />
  ),
  linkedin: (
    <path
      d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.84-2.2 3.78-2.2 4 0 4.8 2.6 4.8 6V24h-4v-6.8c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V24h-4V8z"
      fill="currentColor"
      stroke="none"
    />
  ),
  behance: (
    <path
      d="M8.2 6.5c1.7 0 3 .8 3 2.6 0 1-.5 1.7-1.3 2.2 1.2.4 1.8 1.3 1.8 2.6 0 2-1.6 3-3.4 3H2V6.5h6.2zM4.5 9.4v1.6h3c.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.4-1H4.5zm0 3.4v1.8h3.2c1 0 1.5-.4 1.5-1.1 0-.8-.6-1.1-1.6-1.1H4.5zM22 13.6c0-2.4-1.4-4.4-4-4.4-2.5 0-4.2 1.9-4.2 4.4 0 2.6 1.6 4.4 4.3 4.4 2 0 3.4-1 3.8-2.6h-2.2c-.2.6-.8.9-1.6.9-1.1 0-1.8-.7-1.9-1.8H22zm-5.8-1.2c.1-1 .8-1.6 1.7-1.6 1 0 1.6.6 1.7 1.6h-3.4zM15 7h5v1.4h-5V7z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-3", className)} aria-label="Social media">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            {paths[s.icon]}
          </svg>
        </a>
      ))}
    </div>
  );
}
