export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  roles: string[];
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Athikaalai Bhakthi – Mobile",
    description:
      "A cross-platform devotional mobile app that helps users begin their day with spiritual inspiration. Features real-time quote notifications, Tamil devotional mantras, temple schedules, and festival reminders. The app bridges technology and tradition, ensuring that every user stays connected to daily rituals wherever they are.",
    technologies: [
      "Ionic",
      "Capacitor",
      "SCSS",
      "Redux",
      "Firebase",
      "REST API",
    ],
    company: "PPV Technology Pvt Ltd",
    roles: [
      "Architected a scalable Ionic React front end integrated with Firebase, delivering real-time devotional updates and quotes.",
      "Implemented Redux for seamless state management across dynamic modules like Daily Quotes and Temple Timings.",
      "Integrated Firebase Cloud Messaging for push notifications and real-time event triggers.",
      "Optimized build performance for Android and iOS using Capacitor, reducing initial load times by 25%.",
      "Designed a simple yet elegant UI with SCSS for devotional consistency and intuitive navigation.",
    ],
    github: "#",
    demo: "#",
    image: require("../../public/projects/AKB.png"),
    available: true,
  },
  {
    id: 1,
    name: "Athikaalai Bhakthi – Web",
    description:
      "The web counterpart to the Athikaalai Bhakthi mobile app — an admin management system that controls devotional content, schedules, and user notifications. Built for temple admins and volunteers, the dashboard streamlines publishing updates, scheduling festivals, and managing push notifications through Firebase integration.",
    technologies: [
      "React.js",
      "Bootstrap",
      "Redux",
      "Firebase",
      "REST API",
    ],
    company: "PPV Technology Pvt Ltd",
    roles: [
      "Developed a responsive admin dashboard with React.js and Bootstrap, ensuring pixel-perfect UI alignment across breakpoints.",
      "Implemented secure role-based access (Admin, Volunteer, Viewer) to streamline responsibilities and prevent unauthorized access.",
      "Used Firebase Firestore for live content management and integrated push notification triggers.",
      "Optimized performance using React Lazy Loading and Suspense, improving page load time by 20%.",
      "Collaborated with backend developers to define REST endpoints for content synchronization and real-time dashboard metrics.",
    ],
    github: "#",
    demo: "#",
    image: require("../../public/projects/AKB.png"),
    available: true,
  },
  {
    id: 2,
    name: "Cenpoilt – Mobile",
    company: "PPV Technology Pvt Ltd",
    description:
      "An IoT-based water distribution management app that allows users to monitor, control, and automate pumps and valves across multiple stations in real time. The app connects to IoT devices using MQTT over WebSocket, visualizes telemetry data, and sends push alerts for pressure, flow, and system health metrics.",
    technologies: [
      "Ionic",
      "Capacitor",
      "SCSS",
      "Redux",
      "Firebase",
      "MQTT",
      "Chart.js",
    ],
    roles: [
      "Integrated MQTT for real-time telemetry updates and pump control via WebSocket protocols.",
      "Designed a responsive UI with modular components for device lists, alerts, and analytics dashboards.",
      "Built live charts using Chart.js to visualize flow rates, tank levels, and water usage patterns.",
      "Connected Firebase for authentication, notification handling, and data caching.",
      "Increased IoT command response speed by 45% through optimized event handling and async operations.",
    ],
    github: "#",
    demo: "#",
    image: require("../../public/projects/cenpilot.png"),
    available: true,
  },
  {
    id: 3,
    name: "Cenpoilt – Web",
    company: "PPV Technology Pvt Ltd",
    description:
      "The centralized web dashboard for the Cenpoilt IoT ecosystem. Provides an all-in-one admin interface for managing devices, monitoring live telemetry, analyzing reports, and assigning user permissions. The system ensures seamless coordination between IoT endpoints and operational users.",
    technologies: [
      "React.js",
      "Bootstrap",
      "Redux",
      "Firebase",
      "REST API",
      "Chart.js",
    ],
    roles: [
      "Engineered a clean and functional dashboard for device configuration and live telemetry visualization.",
      "Implemented real-time synchronization with MQTT broker through Firebase’s cloud messaging system.",
      "Built analytics components to show daily, weekly, and monthly system health trends.",
      "Enhanced application scalability and maintainability through modular Redux store design.",
      "Reduced admin data retrieval latency by 35% using optimized Firestore queries.",
    ],
    github: "#",
    demo: "#",
    image: require("../../public/projects/cenpilot.png"),
    available: true,
  },
  {
    id: 4,
    name: "Tiaano ERP",
    company: "PPV Technology Pvt Ltd",
    description:
      "A full-featured ERP web application built for a manufacturing firm to handle production, inventory, sales, and purchase workflows. The system integrates Firebase authentication and provides real-time dashboards with Chart.js visualizations for data-driven management.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Redux",
      "Firebase",
      "Chart.js",
      "REST API",
    ],
    roles: [
      "Designed and developed dynamic modules for inventory, production tracking, and employee task monitoring.",
      "Created a clean UI using Tailwind CSS for consistent UX across all internal modules.",
      "Integrated REST APIs for transaction workflows, ensuring smooth synchronization between modules.",
      "Built real-time charts and analytics panels with Chart.js for operational visibility.",
      "Reduced code redundancy by 30% via reusable Redux patterns and component abstraction.",
    ],
    github: "#",
    demo: "#",
    image: require("../../public/projects/tiaano.png"),
    available: true,
  },
    {
    id: 6,
    name: "Nayagi – Admin Web",
     company: "PPV Technology Pvt Ltd",
    description:
      "A powerful admin interface built for managing product, logistics, production, and finance data. Designed for enterprise users, this app ensures efficient data management with a modular structure and REST API communication architecture.",
    technologies: [
      "React.js",
      "Bootstrap",
      "Redux",
      "Chart.js",
      "REST API",
    ],
    roles: [
      "Developed a reusable component library for faster UI development cycles.",
      "Connected REST APIs using Axios with centralized interceptors for error handling.",
      "Implemented code-splitting and route-based lazy loading for optimal load speed.",
      "Streamlined cross-departmental workflows through integrated chart analytics.",
      "Improved API response time by 40% using request caching and optimized state updates.",
    ],
    github: "#",
    demo: "#",
    image: require("../../public/projects/Nayagi.png"),
    available: true,
  },
  {
    id: 8,
    name: "PPV ERP",
    company: "PPV Technology Pvt Ltd",
    description:
      "A modern in-house ERP solution for managing PPV’s internal operations — from tracking and billing to production analytics. Designed for performance, scalability, and seamless cross-department workflow automation.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Headless UI",
      "Chart.js",
    ],
    roles: [
      "Integrated Redux Toolkit for state logic.",
      "Engineered a modular ERP architecture to manage finance, HR, and project tracking within PPV.",
      "Built real-time dashboards with Chart.js to track productivity and billing metrics.",
      "Developed a secure authentication system and fine-grained role-based access control.",
      "Optimized queries in MongoDB and improved API throughput by 40% for faster load times.",
    ],
    github: "#",
    demo: "#",
    image: require("../../public/projects/ppverp.webp"),
    available: true,
  },
  {
  id: 9,
  name: "Siligreen – Mobile",
  company: "PPV Technology Pvt Ltd",
  description:
    "An IoT-powered mobile application built for the Siligreen IOT management system. The app enables users to monitor and control smart devices such as motors, tanks, and sensors in real time.",
  technologies: [
    "Ionic",
    "Capacitor",
    "Redux",
    "Firebase",
    "REST API",
    "MQTT",
  ],
  roles: [
    "Developed a cross-platform IoT mobile application using Ionic React and Capacitor for Android and iOS.",
    "Implemented Redux for seamless state management and live telemetry data tracking.",
    "Used Firebase for notifications, and device configuration storage.",
    "Optimized UI performance and reduced connection latency by 35% through efficient asynchronous updates.",
  ],
  github: "#",
  demo: "#",
  image: require("../../public/projects/siligreen.webp"),
  available: true,
},

  {
    id: 5,
    company: "Akkenam Technology",
    name: "Vipani ERP",
    description:
      "An enterprise resource planning platform tailored for small and medium-sized businesses. Supports offline data sync, multi-user role access, and live workflow tracking. Combines a modern React frontend with a Node.js + MongoDB backend for reliability and scale.",
    technologies: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    roles: [
      "Built ERP modules for sales, purchase, inventory, and employee management.",
      "Integrated Express REST APIs and MongoDB for secure data storage and retrieval.",
      "Enhanced user experience with route-based chunking and lazy loading.",
      "Collaborated on REST schema design for backend integration and data validation.",
      "Increased workflow efficiency by 35% via real-time dashboards and UI performance tweaks.",
    ],
    github: "#",
    demo: "#",
    image: require("../../public/projects/VIPANI.png"),
    available: true,
  },
  {
    id: 7,
    name: "MySmartAlign",
    company: "Akkenam Technology",
    description:
      "A clean, SEO-optimized website for a dental aligner brand designed to enhance visibility and user engagement. Focused on fast loading, accessible design, and strong mobile responsiveness to drive conversions for their clear aligner products.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    roles: [
      "Developed mobile-first responsive layouts ensuring accessibility and SEO readiness.",
      "Optimized HTML and asset loading for a 20% improvement in page speed.",
      "Integrated on-page SEO techniques including meta tagging and structured markup.",
      "Implemented smooth scroll animations and component-based layout structure.",
      "Ensured cross-browser compatibility for Chrome, Safari, and Edge.",
    ],
    github: "#",
    demo: "#",
    image: require("../../public/projects/mysmartalign.png"),
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
