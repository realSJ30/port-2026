export type Project = {
  title: string;
  description: string;
  tools: string[];
  image: string;
  site: string;
  github: string;
  type: "web" | "mobile";
};

export const projects: Project[] = [
  {
    title: "Rent Hub",
    description: "Comprehensive rental management system with seamless booking and billing.",
    tools: ["Next JS", "Tailwind", "Prisma", "Shadcn UI", "Supabase"],
    image: "/assets/works/rent-hub.png",
    site: "https://hub-three-zeta.vercel.app/",
    github: "https://github.com/realSJ30/hub",
    type: "web",
  },
  {
    title: "PlayPath",
    description: "Marketplace experience for buying and selling trading card game products.",
    tools: ["Next", "Auth JS", "Tailwind", "ShadCN", "Go"],
    image: "https://ik.imagekit.io/wny2krzo1/portfolio-assets/www.playpath.com_(iPhone%2014%20Pro%20Max)%20(1).png?updatedAt=1726539538904",
    site: "https://playpath.com",
    github: "#",
    type: "web",
  },
  {
    title: "Play",
    description: "Modern web application built with Next, Tailwind, and Supabase.",
    tools: ["Next", "Tailwind", "Supabase"],
    image: "https://ik.imagekit.io/wny2krzo1/portfolio-assets/play-enhanced?updatedAt=1705627122533",
    site: "https://play-sepia.vercel.app/",
    github: "https://github.com/realSJ30/play",
    type: "web",
  },
  {
    title: "Renta",
    description: "Rental platform built with Next, Tailwind, Prisma, and MongoDB.",
    tools: ["Next", "Tailwind", "Prisma", "MongoDB"],
    image: "https://ik.imagekit.io/wny2krzo1/portfolio-assets/renta-enhanced?updatedAt=1705627122719",
    site: "https://renta-kappa.vercel.app/",
    github: "https://github.com/realSJ30/renta",
    type: "web",
  },
  {
    title: "Twittle",
    description: "Social application concept with Prisma-backed web features.",
    tools: ["Next", "Tailwind", "Prisma", "MongoDB"],
    image: "https://ik.imagekit.io/wny2krzo1/portfolio-assets/twittle-enhanced?updatedAt=1705627122448",
    site: "https://twittle-app.vercel.app/",
    github: "https://github.com/realSJ30/twittle-app",
    type: "web",
  },
  {
    title: "My Menu",
    description: "Basic application for product inventory.",
    tools: ["Vite", "React", "Firebase", "Tailwind", "Shadcn"],
    image: "https://ik.imagekit.io/wny2krzo1/portfolio-assets/menu-app.png?updatedAt=1709199838252",
    site: "https://menu-app-nu-eight.vercel.app/",
    github: "https://github.com/realSJ30/menu-app",
    type: "web",
  },
  {
    title: "Ecommerce-Admin",
    description: "Admin site for an ecommerce application.",
    tools: ["Next", "Tailwind", "Prisma", "MongoDB", "Shadcn", "Stripe"],
    image: "https://ik.imagekit.io/wny2krzo1/portfolio-assets/ecom-admin.png?updatedAt=1709199838492",
    site: "https://ecom-admin-fawn.vercel.app/",
    github: "https://github.com/realSJ30/ecom-admin",
    type: "web",
  },
  {
    title: "Ecommerce",
    description: "Shop everything you need, hassle-free.",
    tools: ["Next", "Tailwind", "Prisma", "Shadcn"],
    image: "https://ik.imagekit.io/wny2krzo1/portfolio-assets/ecom-client.png?updatedAt=1709199838879",
    site: "https://ecom-client-lake.vercel.app/",
    github: "https://github.com/realSJ30/ecom-client",
    type: "web",
  },
  {
    title: "TrekUp",
    description: "Explore the mountains with TrekUp.",
    tools: ["React Native", "Mapbox"],
    image: "/assets/works/trekup.gif",
    site: "#",
    github: "#",
    type: "mobile",
  },
  {
    title: "Cafechaa",
    description: "Coffee landing experience built with React, Tailwind, and Framer Motion.",
    tools: ["React Vite", "Tailwind", "Framer"],
    image: "https://ik.imagekit.io/wny2krzo1/portfolio-assets/cafe-chaa1.jpeg",
    site: "https://cafechaa.vercel.app",
    github: "https://github.com/realSJ30/cafechaa",
    type: "web",
  },
  {
    title: "Foodmood",
    description: "Choose your favourite food recipes with Foodmood.",
    tools: ["React", "Tailwind", "Spoon Api"],
    image: "https://ik.imagekit.io/wny2krzo1/portfolio-assets/foodmood3.jpeg",
    site: "https://foodmood-seven.vercel.app",
    github: "https://github.com/realSJ30/foodmood",
    type: "web",
  },
  {
    title: "Sugo App",
    description: "An application for running errands.",
    tools: ["Flutter", "Firebase", "Google Map Api"],
    image: "/assets/works/sugo-light.gif",
    site: "#",
    github: "#",
    type: "mobile",
  },
];
