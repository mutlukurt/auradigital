import type { StaticImageData } from "next/image";

export type NavItem = { label: string; href: string };

export const brand = {
  name: "AURA.DIGITAL",
  tagline: "EMPOWERING VISIONARIES.",
  designer: "Mutlu",
  email: "hello@aura.digital",
  year: 2026,
};

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Other", href: "#other" },
];

export const headerActions: NavItem[] = [
  { label: "What's New", href: "#news" },
  { label: "Pricing", href: "#pricing" },
];

export const footerColumns: { heading: string; links: NavItem[] }[] = [
  {
    heading: "EXPLORE",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "What's New", href: "#news" },
    ],
  },
  {
    heading: "MORE PAGES",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Capabilities", href: "#other" },
      { label: "Case Studies", href: "#work" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "ABOUT",
    links: [
      { label: "Studio", href: "#about" },
      { label: "Team", href: "#about" },
      { label: "Journal", href: "#news" },
      { label: "Careers", href: "#contact" },
    ],
  },
  {
    heading: "OTHER",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
];

export type Service = {
  index: string;
  name: string;
  description: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    index: "01",
    name: "IMMERSIVE DESIGN",
    description:
      "Elevate your brand with captivating experiences that pull audiences into your world and never let go.",
    image: "/images/service-immersive.jpg",
    alt: "A hand holding a transparent AR tablet with glowing holographic data rising from the screen",
  },
  {
    index: "02",
    name: "DIGITAL REVITALIZATION",
    description:
      "Harness innovation for strategic brand growth — reimagining your presence for the next era of digital.",
    image: "/images/service-revitalization.jpg",
    alt: "An artist wearing a VR headset sculpting a glowing virtual sculpture in the air",
  },
];

export type Capability = {
  num: string;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    num: "01",
    title: "Strategic Branding",
    description:
      "Building a resonant identity that travels across mediums and stands the test of time.",
  },
  {
    num: "02",
    title: "Digital Presence",
    description:
      "Crafting unique platforms that convert attention into lasting, measurable engagement.",
  },
  {
    num: "03",
    title: "Visual Storytelling",
    description:
      "Moving hearts and minds through motion, film and artful narrative direction.",
  },
  {
    num: "04",
    title: "Innovation Lab",
    description:
      "Exploring new tech — spatial, AI and beyond — for breakthrough brand growth.",
  },
];

export type Project = {
  num: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  reverse?: boolean;
};

export const projects: Project[] = [
  {
    num: "01 / 03",
    name: "QUANTUM ARCH",
    description:
      "Nested futuristic structures engineered as a living brand architecture for a next-gen compute lab.",
    image: "/images/project-quantum.jpg",
    alt: "Nested interlocking futuristic architectural structures in orange-red gradient",
    tags: ["Branding", "3D", "Web"],
  },
  {
    num: "02 / 03",
    name: "ETHER FLOW",
    description:
      "Fluid, bio-architectural forms that became the visual language for a generative art platform.",
    image: "/images/project-ether.jpg",
    alt: "Fluid bio-architectural abstract forms in violet and amber gradients",
    tags: ["Identity", "Generative", "Motion"],
    reverse: true,
  },
  {
    num: "03 / 03",
    name: "VOID RIDER",
    description:
      "A sleek, aerodynamic hoverbike concept — the centerpiece of a cinematic brand launch for a mobility studio.",
    image: "/images/project-void.jpg",
    alt: "A sleek aerodynamic futuristic hoverbike floating above an orange-tinted ground",
    tags: ["Concept", "CGI", "Launch"],
  },
];

export type Social = {
  label: string;
  href: string;
  icon: "instagram" | "x" | "linkedin" | "behance";
};

export const socials: Social[] = [
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "X", href: "#", icon: "x" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Behance", href: "#", icon: "behance" },
];
