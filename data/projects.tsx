export type Project = {
  slug: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  desktopImage: string;
  mobileImage: string;
  url: string;
};

export const projects: Project[] = [
  {
    slug: "nextjs-dashboard",
    year: "2026",
    title: "Next.js dashboard",
    description:
      "Learning the foundations of Next.js by building a demo site with all the latest features.",
    tags: ["Next.js", "TypeScript", "JavaScript"],
    desktopImage: "/projects/nextjs-dashboard-desktop.png",
    mobileImage: "/projects/nextjs-dashboard-mobile.png",
    url: "https://start-building-with-next-js.vercel.app/",
  },
  {
    slug: "dodge-the-meteor",
    year: "2026",
    title: "Dodge the Meteor",
    description: "Game built in Scratch with Harvard CS50.",
    tags: ["Scratch", "CS50"],
    desktopImage: "/projects/dodge-the-meteor-desktop.png",
    mobileImage: "/projects/dodge-the-meteor-mobile.png",
    url: "https://scratch.mit.edu/projects/1324363015/",
  },
  {
    slug: "rock-paper-scissors",
    year: "2026",
    title: "Rock, Paper, Scissors",
    description: "A rock paper scissors game with The Odin Project.",
    tags: ["JavaScript", "CSS", "HTML"],
    desktopImage: "/projects/rock-paper-scissors-desktop.png",
    mobileImage: "/projects/rock-paper-scissors-mobile.png",
    url: "https://odin-rock-paper-scissor-ten.vercel.app/",
  },
  {
    slug: "music-player",
    year: "2026",
    title: "Music Player",
    description: "Music player build wtih mainly JavaScript with freeCodeCamp.",
    tags: ["JavaScript", "CSS", "HTML"],
    desktopImage: "/projects/music-player-desktop.png",
    mobileImage: "/projects/music-player-mobile.png",
    url: "https://music-player-pink-nine.vercel.app/",
  },
  {
    slug: "shopping-cart",
    year: "2026",
    title: "Shopping Cart",
    description:
      "An interactive shopping cart built with mainly JavaScript from the freeCodeCamp training.",
    tags: ["JavaScript", "CSS", "HTML"],
    desktopImage: "/projects/shopping-cart-desktop.png",
    mobileImage: "/projects/shopping-cart-mobile.png",
    url: "https://shopping-cart-omega-sand.vercel.app/",
  },
];
