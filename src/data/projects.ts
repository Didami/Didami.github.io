export interface Project {
  id: number;
  name: string;
  category: string;
  period: string;
  description: string;
  technologies: string[];
  images: string[];
  ctaTitle: string;
  href: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: '"Outfiter"',
    category: "Smart Closet App",
    period: "2021 - 2023",
    description:
      "Outfiter is an iOS mobile application that allows users to add photos of their clothing items. An algorithm based on color combinations then suggests outfits, making it easier to decide what to wear and get the most out of their wardrobe.",
    technologies: ["Swift", "UIKit", "CoreML", "Firebase", "Sketch"],
    images: [
      "/images/projects/outfiter/1.png",
      "/images/projects/outfiter/2.png",
      "/images/projects/outfiter/3.png",
    ],
    ctaTitle: "View in the App Store",
    href: "https://apps.apple.com/app/outfiter/id6466315015",
  },
  {
    id: 2,
    name: "UNIRENTA - Cotizador",
    category: "Quotation tool for a leasing company",
    period: "2024 - 2025",
    description:
      "UNIRENTA is a Mexican leasing company that provides financing solutions for businesses and individuals. I developed a cross-platform quotation application that automates the leasing calculation process, generates personalized PDF quotations, manages customer and sales representative information, and email workflow.",
    technologies: ["Flutter", "Firebase", "Sketch"],
    images: [
      "/images/projects/unirenta/1.png",
      "/images/projects/unirenta/2.png",
    ],
    ctaTitle: "View in the App Store",
    href: "https://apps.apple.com/mx/app/unirenta-cotizador/id6736962455",
  },
  {
    id: 3,
    name: '"Along"',
    category: "Book Tracker App",
    period: "2026 - Present",
    description:
      "Along is a mobile application designed to help readers build consistent reading habits and keep track of their literary journey. It allows users to log reading sessions, monitor their progress, take notes, and visualize their reading activity, making it easier to stay motivated and develop a more intentional relationship with reading.",
    technologies: ["Flutter", "Supabase", "Sketch"],
    images: [
      "/images/projects/along/1.png",
      "/images/projects/along/2.png",
      "/images/projects/along/3.png",
    ],
    ctaTitle: "Visit Landing Page",
    href: "https://along-site.web.app/",
  },
];
