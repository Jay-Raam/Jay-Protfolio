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
    name: "Nayagi – E-commerce & Admin Platform",
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
    image: require("../../public/projects/LOGO-01.svg"),
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
  image: require("../../public/projects/sili.png"),
  available: true,
  },
{
  id: 6,
  name: "Paarambhariya – E-commerce & Admin Platform",
  company: "PPV Technology Pvt Ltd",
  description:
    "A full-scale e-commerce and enterprise admin platform built for Paarambhariya, covering the entire business lifecycle — from storefront and order management to production, logistics, finance, and analytics. Designed for enterprise users with role-based access control, modular architecture, and a high-performance React.js frontend powered by Zustand state management and REST API integration.",
  technologies: [
    "React.js",
    "Tailwind CSS",
    "Zustand",
    "Chart.js",
    "REST API",
    "Axios",
  ],
  roles: [
    // --- Frontend (4 points) ---
    "Engineered a modular, scalable frontend using React.js and Tailwind CSS across production modules.",
    "Architected a reusable component library with React.js and Tailwind CSS, standardizing design patterns and UI interactions across all modules — significantly reducing development overhead for new feature additions.",
    "Implemented Zustand for lightweight, scalable client-side state management — streamlining cross-module data flow, minimizing unnecessary re-renders, and maintaining predictable state across complex admin workflows.",

    // --- Data & Performance (2 points) ---
    "Built dynamic analytics dashboards using Chart.js to visualize sales trends, production metrics, logistics performance, and finance summaries — enabling data-driven decision-making for enterprise admin users.",
    "Executed a frontend performance overhaul via code splitting, route-based lazy loading, and Axios-level request caching — achieving a 40% improvement in API response times and significantly faster page load across modules.",

    // --- Access & Features (2 points) ---
    "Implemented role-based access control (RBAC) on the frontend, enforcing granular permission boundaries across admin, manager, and staff roles — restricting module visibility and action capabilities per user type.",
    "Developed file upload and export functionality across Product, Finance, and Reports modules — supporting bulk data imports, invoice generation, and CSV/Excel exports for enterprise-level data management workflows.",
  ],
  github: "#",
  demo: "#",
  image: require("../../public/projects/parambariya.svg"),
  available: true,
},

{
  id: 5,
  company: "Akkenam Technology",
  name: "Vipani ERP",
  description:
    "A full-scale enterprise resource planning platform built for small and medium-sized businesses, encompassing 12 production modules — Inventory, HR, Payroll, Finance, CRM, Purchase, Sales, Reports, Settings, User Management, Appointments, and Production. Features real-time collaboration, role-based access control, and a high-performance backend powered by Node.js, GraphQL Yoga, MongoDB, and Redis.",
  technologies: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "GraphQL Yoga",
    "MongoDB",
    "Redis",
    "Socket.io",
    "JWT",
  ],
  roles: [
    // --- Backend (6 points) ---
    "Engineered a full-scale ERP backend using Node.js, Express.js, and GraphQL Yoga — designing modular resolvers and schema definitions across 12 production modules including Inventory, HR, Payroll, Finance, CRM, Purchase, Sales, Reports, Appointments, and Production.",
    "Implemented JWT-based authentication with refresh token rotation and granular role-based access control (RBAC), securing all API endpoints and enforcing permission boundaries across User Management and Settings modules for multi-user ERP workflows.",
    "Integrated GraphQL subscriptions and Socket.io to deliver real-time bidirectional updates across live Sales, CRM, and Production workflow dashboards — enabling instant data propagation across concurrent user sessions.",
    "Deployed Redis for session management and query-level caching across high-traffic modules (Inventory, Sales, Reports), combined with MongoDB indexing and aggregation pipeline optimization — achieving 35–40% improvement in overall API response times.",
    "Architected MongoDB schemas for complex relational data structures across Payroll, Finance, Purchase, and HR modules — writing optimized aggregation pipelines to handle large-scale transactional and analytical queries.",
    "Built Express.js middleware layers for centralized request validation, structured error handling, and audit logging — ensuring API consistency, traceability, and reliability across all 12 ERP service endpoints.",

    // --- Frontend (1 point) ---
    "Developed a responsive, modular ERP frontend using React.js and Next.js with Tailwind CSS, integrating GraphQL APIs via Apollo Client for seamless data flow across all 12 production modules.",
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
    "A full-scale dental ecosystem platform covering the entire dental business lifecycle — from patient-facing website and appointment booking to clinic admin dashboards, mobile apps for patients and doctors, treatment progress tracking, and internal ERP modules including Sales, Purchase, HR, and Inventory. Built with a high-performance Next.js frontend and a robust Node.js + GraphQL Yoga + MongoDB backend, with real-time updates via Socket.io and Firebase push notifications.",
  technologies: [
    "Next.js",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "GraphQL Yoga",
    "MongoDB",
    "Redis",
    "Socket.io",
    "JWT",
    "Firebase",
  ],
  roles: [
    // --- Backend (5 points) ---
    "Architected a multi-service backend using Node.js, Express.js, and GraphQL Yoga to power a full dental ecosystem.",
    "Implemented JWT-based authentication with role-based access control (RBAC) across patient, doctor, clinic admin, and internal staff roles — securing all API endpoints and enforcing strict permission boundaries per user type.",
    "Integrated Socket.io for real-time bidirectional communication across appointment status updates, treatment progress notifications, and live admin dashboard data — ensuring instant sync across web and mobile clients.",
    "Deployed Redis caching for high-frequency GraphQL queries and session management, alongside MongoDB indexing and aggregation pipeline optimization — achieving 35–40% reduction in API response times across the ecosystem.",
    "Configured Firebase Cloud Messaging (FCM) alongside a custom Node.js notification service to deliver targeted push notifications to patient and doctor mobile apps for appointment reminders, treatment updates, and alerts.",

    // --- Frontend (2 points) ---
    "Built a SEO-optimized, mobile-first patient-facing website using Next.js with SSR and SSG strategies, integrating GraphQL APIs via Apollo Client for dynamic content across product catalog, appointment booking, and treatment tracking pages.",
    "Developed a comprehensive clinic admin dashboard and doctor-facing interface using React.js and Tailwind CSS, enabling real-time workflow management across appointments, patient records, and internal ERP modules.",

    // --- Deployment (1 point) ---
    "Managed end-to-end deployment of the MySmartAlign ecosystem across web, admin, and API services — configuring environment variables, maintaining CI/CD pipelines, and ensuring zero-downtime production releases for the full dental platform.",
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
