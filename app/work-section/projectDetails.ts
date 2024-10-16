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
    github: "https://github.com/Jay-Raam/Weather-Next.Js",
    demo: "https://weather-next-js-jayasriraam.vercel.app/",
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
    demo: "https://marvel-jayasriraam.vercel.app",
    image: require(".//../../public/projects/Screen 3.png"),
    available: true,
  },
  {
    id: 3,
    name: "Pixelplush",
    description:
      "Explore boundless creativity with My gallery website, where every click unveils a world of captivating images and videos, perfect for inspiring your next project.",
    technologies: ["React", "Tailwind css"],
    github: "https://github.com/Jay-Raam/PixelPlush",
    demo: "https://jayasriraampixelplush.vercel.app/unplush",
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
    demo: "https://jayasriraam-protfolio.vercel.app/",
    image: require(".//../../public/projects/Screen 5.png"),
    available: true,
  },
  {
    id: 5,
    name: "ComponentX",
    description:
      "We bring you cutting-edge tools and real-time data to help you navigate the stock market with confidence.",
    technologies: ["React", "Tailwind css", "Node.Js", "MongoDb" ],
    github: "https://github.com/Jay-Raam/ComponentX",
    demo: "https://jayasriraam-componentx.vercel.app/",
    image: require(".//../../public/projects/Screen 6.png"),
    available: true,
  },
  {
    id: 6,
    name: "Cinephile",
    description:
      " They remind us of the power of love and the boundless possibilities of imagination. Whether you’re looking to experience the highs and lows of romance or to escape to a world of magic and wonder",
    technologies: ["React", "Tailwind css", "Node.Js", "MongoDb" ],
    github: "https://github.com/Jay-Raam/Cinephile",
    demo: "https://cinephile-jay.vercel.app/",
    image: require(".//../../public/projects/Screen 7.png"),
    available: true,
  },
  {
    id: 7,
    name: "VolleyY",
    description:
      "If you're ready to break through your limits and experience the next level of athletic excellence, you’ve come to the right place.",
    technologies: ["Next.Js", "Tailwind css", "Node.Js", "MongoDb"],
    github: "https://github.com/Jay-Raam/VolleyY",
    demo: "https://volleyy-frontend.vercel.app/",
    image: require(".//../../public/projects/Screen 9.png"),
    available: true,
  },
  {
    id: 8,
    name: "Narratiq",
    description:
      "Narratiq, we believe that every book opens a door to a new world, and we're here to help you find the keys. ",
    technologies: ["React", "Tailwind css", "Node.Js", "MongoDb"],
    github: "https://github.com/Jay-Raam/Narratiq",
    demo: "https://narratiq.vercel.app/",
    image: require(".//../../public/projects/Screen 8.png"),
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
    github: "/",
    demo: "/",
    image:  require(".//../../public/projects/New post 11.png"),
    available: true,
  },
  {
    id: 2,
    name: "Consultancy",
    description:
      "In this design project for Consultancy",
    technologies: ["UX Research", "UI Design", "Figma"],
    github: "/",
    demo: "/",
    image:  require(".//../../public/projects/New post 12.png"),
    available: true,
  },
  {
    id: 3,
    name: "Architecture",
    description:
      "In this design project for Architecture",
    technologies: ["UX Research", "UI Design", "Figma"],
    github: "/",
    demo: "/",
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
    github: "/",
    demo: "/",
    image: require(".//../../public/projects/New post 19.png"),
    available: true,
  },
];
