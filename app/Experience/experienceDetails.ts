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
    "Zustand",
    "Ionic",
    "Capacitor",
    "Firebase",
  ],
  responsibilities: [
    "Engineered and deployed 10+ production-grade web and mobile applications using React.js, Ionic, and Capacitor, ensuring cross-platform stability and scalability.",
    "Architected a reusable UI component system using React and Tailwind CSS, enforcing consistent design language and reducing redundant styling across multiple projects.",
    "Built interactive 3D dashboards using Three.js to visualize complex real-time data, improving data interpretability for end users.",
    "Designed and integrated REST and MQTT API pipelines for real-time data synchronization across PPV's connected device ecosystem, achieving a 35–40% reduction in API response time.",
    "Implemented scalable client-side state management using Zustand, streamlining data flow and reducing component re-render overhead across large-scale applications.",
    "Integrated Firebase services including Authentication, Realtime Database, and Cloud Messaging (FCM) to enable secure user sessions, live data sync, and targeted push notifications.",
    "Leveraged Capacitor's native APIs to implement device-level features including camera access, GPS tracking, and push notifications for cross-platform mobile applications.",
    "Executed a comprehensive performance overhaul — implementing lazy loading, code splitting, and strategic caching — resulting in 35–40% faster page load times and a 30% reduction in bundle size.",
    "Enforced code quality standards through structured code reviews, established best practices, and maintained CI/CD pipelines for consistent and reliable deployments.",
    "Partnered with backend engineers and UI/UX designers in an agile workflow to deliver end-to-end, production-ready features with a focus on maintainability and technical precision.",
  ],
},
{
  id: 1,
  role: "Junior Developer",
  company: "Akkenam Technologies",
  duration: "May 2023 – Dec 2024",
  location: "Dindigul, Tamil Nadu, India",
  technologies: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "GraphQL Yoga",
    "MongoDB",
    "Redis",
    "Socket.io",
    "JWT",
    "Tailwind CSS",
    "Bootstrap",
  ],
  responsibilities: [
    // --- Backend (6 points) ---
    "Architected and maintained RESTful and GraphQL Yoga APIs using Node.js and Express.js, serving as the primary data layer for ERP systems and admin dashboards.",
    "Designed and implemented JWT-based authentication and role-based access control (RBAC) systems, securing API endpoints and managing granular user permissions across multiple applications.",
    "Integrated Socket.io to engineer real-time bidirectional communication features, enabling live data updates and event-driven interactions across web applications.",
    "Implemented Redis caching strategies for frequently accessed data and session management, reducing database load and achieving 20–30% improvement in API response times.",
    "Modeled and optimized MongoDB schemas for complex ERP and dashboard data structures, writing efficient aggregation pipelines to handle large-scale data queries.",
    "Engineered Express.js middleware layers for centralized error handling, request validation, and structured logging — improving API reliability and reducing debugging overhead across services.",

    // --- Frontend (3 points) ---
    "Built responsive, modular frontends using React.js and Next.js, leveraging SSR and SSG strategies to improve SEO performance and reduce initial page load times.",
    "Integrated REST and GraphQL APIs on the frontend using Axios interceptors and Apollo Client, implementing centralized error handling and optimistic UI updates for seamless UX.",
    "Contributed to an internal UI component library using React, Tailwind CSS, and Bootstrap — standardizing reusable patterns across projects and reducing frontend development time by 30%.",

    // --- Deployment (1 point) ---
    "Managed application deployments and environment configurations across development and production pipelines, ensuring zero-downtime releases and maintaining CI/CD best practices within the team.",
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
