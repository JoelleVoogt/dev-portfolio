export type Project = {
  slug: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  desktopImage: string;
  mobileImage: string;
  url: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    slug: "nextjs-dashboard",
    year: "2026",
    title: "Next.js dashboard",
    description: "Building a demo site with all the latest Next.js features.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    desktopImage: "/projects/nextjs-dashboard-desktop.png",
    mobileImage: "/projects/nextjs-dashboard-mobile.png",
    url: "https://start-building-with-next-js.vercel.app/",
    repoUrl: "https://github.com/JoelleVoogt/Start-building-with-Next.js",
  },
  {
    slug: "music-player",
    year: "2026",
    title: "Music Player",
    description: "Music player wtih mainly JavaScript for freeCodeCamp.",
    tags: ["JavaScript", "CSS", "HTML"],
    desktopImage: "/projects/music-player-desktop.png",
    mobileImage: "/projects/music-player-mobile.png",
    url: "https://music-player-pink-nine.vercel.app/",
    repoUrl: "https://github.com/JoelleVoogt/music-player",
  },
  {
    slug: "shopping-cart",
    year: "2026",
    title: "Shopping Cart",
    description: "Shopping cart with mainly JavaScript for freeCodeCamp.",
    tags: ["JavaScript", "CSS", "HTML"],
    desktopImage: "/projects/shopping-cart-desktop.png",
    mobileImage: "/projects/shopping-cart-mobile.png",
    url: "https://shopping-cart-omega-sand.vercel.app/",
    repoUrl: "https://github.com/JoelleVoogt/shopping-cart",
  },
  {
    slug: "dodge-the-meteor",
    year: "2026",
    title: "Dodge the Meteor",
    description: "Game built with Scratch for Harvard CS50.",
    tags: ["Scratch", "CS50"],
    desktopImage: "/projects/dodge-the-meteor-desktop.png",
    mobileImage: "/projects/dodge-the-meteor-mobile.png",
    url: "https://scratch.mit.edu/projects/1324363015/",
    repoUrl: "https://scratch.mit.edu/projects/1324363015/editor/",
  },
  {
    slug: "rock-paper-scissors",
    year: "2026",
    title: "Rock, Paper, Scissors",
    description: "A rock paper scissors game for The Odin Project.",
    tags: ["JavaScript", "CSS", "HTML"],
    desktopImage: "/projects/rock-paper-scissors-desktop.png",
    mobileImage: "/projects/rock-paper-scissors-mobile.png",
    url: "https://odin-rock-paper-scissor-ten.vercel.app/",
    repoUrl: "https://github.com/JoelleVoogt/odin-rock-paper-scissor",
  },
];
