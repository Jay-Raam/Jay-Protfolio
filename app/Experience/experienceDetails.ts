export interface ExperienceProps {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  technologies: string[];
  responsibilities: string[];
}

export const workExperience = [
  {
    id: 0,
    role: "Junior Software Developer",
    company: "PPV Technology Pvt Ltd",
    duration: "Dec 2024 – Present",
    location: "Chennai, Tamil Nadu, India",
    technologies: [
      "React.js",
      "Node.js",
      "Three.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Ionic",
      "Capacitor",
      "Firebase",
    ],
    responsibilities: [
      "Developing and maintaining scalable web and mobile applications.",
      "Leading UI component design with Tailwind CSS / Bootstrap, and React for consistent design across projects.",
      "Integrating REST and MQTT APIs for real-time data synchronization across PPV’s ecosystem.",
      "Optimizing performance by implementing lazy loading, caching, and API-level improvements.",
      "Collaborating with backend and design teams to deliver end-to-end production-grade apps.",
    ],
  },
  {
    id: 1,
    role: "Junior Frontend Developer",
    company: "Akkenam Technologies",
    duration: "May 2023 – Dec 2024",
    location: "Dindigul, Tamil Nadu, India",
    technologies: [
      "React.js",
      "Redux",
      "Node.js",
      "Bootstrap",
      "Tailwind CSS",
      "MongoDB",
    ],
    responsibilities: [
      "Developed responsive and modular frontends for ERP and admin dashboards.",
      "Implemented role-based user access systems and optimized React component structure.",
      "Enhanced performance using code-splitting and route-based chunk loading.",
      "Integrated REST APIs with centralized Axios interceptors for clean error handling.",
      "Contributed to internal UI libraries that reduced future development time by 30%.",
    ],
  },
  {
    id: 2,
    role: "Freelance Frontend Developer",
    company: "Independent Projects",
    duration: "Jan 2022 – May 2023",
    location: "Dindigul, Tamil Nadu, India",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "React.js",
    ],
    responsibilities: [
      "Built responsive landing pages and SEO-optimized websites for local clients.",
      "Delivered clean, semantic HTML and modular CSS for maintainable web experiences.",
      "Ensured high accessibility standards (WCAG) and mobile-first performance.",
    ],
  },
];
