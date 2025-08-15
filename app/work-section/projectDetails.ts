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

// .//../../public/projects/Screen 1.png

export const devProjects = [
  {
    id: 0,
    name: "AKB – Mobile",
    description:
      "A cross-platform devotional app delivering religious schedules. Push notifications keep users connected to rituals and festivals in real-time.",
    technologies: ["Ionic", "Capacitor", "Redux", "Firebase"],
    github: "#", // Add if available
    demo: "#", // Add live link if available
    image: require(".//../../public/projects/AKB.png"),
    available: true,
  },
  {
    id: 1,
    name: "AKB – Web",
    description:
      "An admin dashboard for managing devotional content, schedules, and push notifications. Features role-based access control for Admin, User, and Volunteer roles.",
    technologies: ["React.js", "Redux", "Firebase", "Chart.js"],
    github: "#",
    demo: "#",
    image: require(".//../../public/projects/AKB.png"),
    available: true,
  },
  {
    id: 2,
    name: "Cenpoilt – Mobile",
    description:
      "IoT-based mobile app for real-time monitoring and control of water distribution systems.",
    technologies: ["Ionic", "Capacitor", "Firebase", "MQTT"],
    github: "#",
    demo: "#",
    image: require(".//../../public/projects/cenpilot.png"),
    available: true,
  },
  {
    id: 3,
    name: "Cenpoilt – Web",
    description:
      "Centralized dashboard for managing IoT-enabled water distribution devices. Supports device registration, monitoring, and role-based user access.",
    technologies: ["React.js", "Redux", "Firebase", "Chart.js"],
    github: "#",
    demo: "#",
    image: require(".//../../public/projects/cenpilot.png"),
    available: true,
  },
  {
    id: 4,
    name: "Tiaano ERP",
    description:
      "A scalable ERP web app for manufacturing operations with modules for inventory management, production tracking, and sales/purchase workflows.",
    technologies: ["React.js","Tailwind", "Firebase", "Chart.js"],
    github: "#",
    demo: "#",
    image: require(".//../../public/projects/tiaano.png"),
    available: true,
  },
  {
    id: 7,
    name: "Siligreen",
    description:
      "A slick mobile app for live monitoring and controlling IoT systems via a custom online setup.",
    technologies: ["Ionic", "Capacitor", "Redux", "REST API"],
    github: "#", // Add if available
    demo: "#", // Add if available
    image: require(".//../../public/projects/siligreen.png"),
    available: true,
  },
  {
    id: 8,
    name: "Nayagi",
    description:
      "An admin front-end for Nayagi powerful server portal. Crafted to manage dynamic web app content—CMS, user access, and more—ensuring admins stay in control with ease and style.",
    technologies: ["React.js", "chaRt.js","Redux",  "Firebase"], 
    github: "#",
    demo: "#",
    image: require(".//../../public/projects/Nayagi.png"),
    available: true,
  },
  {
    id: 5,
    name: "MySmartAlign",
    description:
      "A responsive and SEO-friendly website for a dental aligner brand, ensuring mobile-first design and cross-browser compatibility.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "#",
    demo: "#",
    image: require(".//../../public/projects/mysmartalign.png"),
    available: true,
  },
  {
    id: 6,
    name: "Vipani ERP",
    description:
      "Customizable ERP for SMEs in manufacturing, retail, and distribution. Features multiuser process management, inventory, and workflow tracking.",
    technologies: ["React.js", "Tailwind", "MongoDB", "Node.js"],
    github: "#",
    demo: "#",
    image: require(".//../../public/projects/VIPANI.png"),
    available: true,
  },

];


export const designProjects = [
{
    id: 1,
    name: "PPV Technology Private Limited",
    description:
      "Junior Software Developer (Nov 2024 – Present) in Chennai, working on devotional, IoT, and ERP projects with a focus on UI/UX, performance optimization, and real-time data delivery.",
    technologies: [
      "React.js",
      "Ionic",
      "Capacitor",
      "Redux",
      "SCSS",
      "Firebase",
      "REST API",
      "MQTT",
      "Chart.js"
    ],
    github: "https://ppvgroups.com/",
    demo: "https://ppvgroups.com/",
    image: require(".//../../public/company2.png"),
    available: true,
  },
  {
    id: 2,
    name: "Akkenam Technologies",
    description:
      "Junior Developer (May 2023 – Nov 2024) in Dindigul, building ERP solutions and responsive websites, optimizing performance, scalability, and user experience.",
    technologies: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Express.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],
    github: "https://www.akkenamtechnologies.com/",
    demo: "https://www.akkenamtechnologies.com/",
    image: require(".//../../public/akkenam_symbol.jpg"),
    available: true,
  },
];
