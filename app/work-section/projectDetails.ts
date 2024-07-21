export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Dashboard",
    description:
      "I built a modern dashboard using Next.js, Tailwind CSS, and Shadcn UI. It features responsive design, sleek user interface components, and seamless integration for a smooth user experience.",
    technologies: ["Next", "Tailwind CSS", "Shadcn UI"],
    github: "https://github.com/Jay-Raam/Dashboard-Nextjs",
    demo: "https://dashboard-nextjs-jayasriraam.vercel.app/",
    image: require(".//../../public/projects/Screen 1.png"),
    available: true,
  },
  {
    id: 1,
    name: "Weather",
    description:
      "Discover the future of weather tracking with MY visually captivating app, blending precision data with intuitive design for aN unparalleled user experience",
    technologies: ["Next", "Tailwind css", "Shadcn UI"],
    github: "https://github.com/Jay-Raam/Nextjs-Weather-example",
    demo: "https://jayasriraam-weather.vercel.app/",
    image: require(".//../../public/projects/Screen 2.png"),
    available: true,
  },
  {
    id: 2,
    name: "Marvel",
    description:
      "Discover your favorite Marvel heroes and comics in a universe where epic battles and extraordinary powers collide. Join us to uncover the secrets and legends that define the Marvel Universe!",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/Jay-Raam/Marvel",
    demo: "marvel-jayasriraam.vercel.app",
    image: require(".//../../public/projects/Screen 3.png"),
    available: true,
  },
  {
    id: 3,
    name: "Downloader",
    description:
      "Explore boundless creativity with My gallery website, where every click unveils a world of captivating images and videos, perfect for inspiring your next project.",
    technologies: ["React", "Tailwind css"],
    github: "https://github.com/Jay-Raam/Image-Download",
    demo: "jay-raam.github.io/Image-Download/",
    image: require(".//../../public/projects/Screen 4.png"),
    available: true,
  },
  {
    id: 4,
    name: "Portfolio",
    description:
      "Your digital charisma with a mind-bending portfolio website that merges creativity with functionality, leaving visitors awestruck and eager for more.",
    technologies: ["Next", "Tailwind css", "Shadcn UI"],
    github: "https://github.com/Jay-Raam/Nextjs-Portfolio-shadcn",
    demo: "jayasriraam-protfolio.vercel.app/",
    image: require(".//../../public/projects/Screen 5.png"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Portfolio",
    description:
      "In this design project for Portfolio",
    technologies: ["UX Research", "UI Design", "Figma"],
    github: "",
    demo: "",
    image:  require(".//../../public/projects/New post 11.png"),
    available: true,
  },
  {
    id: 2,
    name: "Consultancy",
    description:
      "In this design project for Consultancy",
    technologies: ["UX Research", "UI Design", "Figma"],
    github: "",
    demo: "",
    image:  require(".//../../public/projects/New post 12.png"),
    available: true,
  },
  {
    id: 3,
    name: "Architecture",
    description:
      "In this design project for Architecture",
    technologies: ["UX Research", "UI Design", "Figma"],
    github: "",
    demo: "",
    image:
    require(".//../../public/projects/New post 13.png"),
    available: true,
  },
  {
    id: 4,
    name: "Aligners",
    description:
      "In this design project for aligners",
    technologies: ["UX Research", "UI Design", "Figma"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/New post 19.png"),
    available: true,
  },
];
