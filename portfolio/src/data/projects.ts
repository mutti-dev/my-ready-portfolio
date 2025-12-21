export const projects = [
  {
    title: "AI CRM System",
    description: "Customer Relationship Management platform augmented with AI to automate workflows, score leads and surface actionable insights for sales and support teams.",
    features: [
      "Lead and contact management",
      "AI-powered lead scoring and next-action suggestions",
      "Automated outreach (email/SMS) and templates",
      "Dashboards and analytics for pipeline health",
      "Import/export and third-party integrations"
    ],
    tech: ["JavaScript", "Python", "React"],
    github: "https://github.com/mutti-dev/AI-CRM-SYSTEM"
  },
  {
    title: "Mehfil — Social Events & Community App",
    description: "Mobile/web app for creating, discovering and joining cultural gatherings (mehfils). Provides event creation, invites, real-time chat and media sharing to help communities organize meetups.",
    features: [
      "User authentication and profiles",
      "Event creation, invites and RSVP management",
      "Real-time chat and notifications",
      "Photo/video upload and media gallery",
      "Discover nearby events and filters"
    ],
    tech: ["JavaScript", "React Native", "Socket.io", "Firebase"],
    github: "https://github.com/mutti-dev/Mehfil_App"
  },
  {
    title: "Mehfil Server — Backend API & Real-time Services",
    description: "Node.js backend powering the Mehfil app: provides REST APIs, authentication, media storage, and real-time messaging for event and community features.",
    features: [
      "RESTful API endpoints for events, users and media",
      "Authentication and role-based access",
      "WebSocket-based real-time chat and presence",
      "Media upload, storage and CDN-ready endpoints",
      "Admin endpoints and basic analytics"
    ],
    tech: ["JavaScript", "Node.js", "Express", "Socket.io"],
    github: "https://github.com/mutti-dev/Mehfil_Server"
  },
  {
    title: "Servezy — Service Marketplace Mobile App",
    description: "Cross-platform mobile app for discovering and booking local service providers with scheduling, provider profiles and in-app communication.",
    features: [
      "Service provider discovery and search",
      "Booking, scheduling and calendar integration",
      "Provider profiles, reviews and ratings",
      "In-app messaging and push notifications",
      "Secure checkout and payment handling"
    ],
    tech: ["TypeScript", "React Native", "Kotlin (native modules)", "Swift (native modules)"],
    github: "https://github.com/mutti-dev/servezy-app"
  },
  {
    title: "E-Commerce & Inventory Platform",
    description: "Scalable online store and inventory management system that streamlines product cataloging, ordering and stock control for retailers.",
    features: [
      "User authentication and authorization",
      "Product catalog with search, categories and filters",
      "Secure payment integration (e.g., Stripe)",
      "Admin dashboard for inventory and order management",
      "Order lifecycle and basic reporting"
    ],
    tech: ["JavaScript", "React.js", "Node.js", "MySQL", "Stripe"],
    github: "https://github.com/mutti-dev/eci-system",
  },
  {
    title: "Formsio — Dynamic Form Builder",
    description: "Web application to design, render and collect submissions from dynamic forms. Includes builder UI, validation, storage and export capabilities.",
    features: [
      "Drag-and-drop form builder and reusable templates",
      "Field validation and conditional logic",
      "Submission storage, viewing and export (CSV/JSON)",
      "Embeddable forms and webhook integrations",
      "Role-based access for form management"
    ],
    tech: ["JavaScript", "React", "Node.js"],
    github: "https://github.com/mutti-dev/formsio"
  },
  {
    title: "Realtime Chat",
    description: "A real-time messaging application with WebSocket-based communication and analysis notebooks for testing/insights — supports rooms, presence indicators, and message history for collaborative chat experiences.",
    features: [
      "Real-time messaging using WebSockets / Socket.io",
      "Chat rooms, presence/typing indicators, and message history",
      "File/image sharing and basic moderation tools",
      "Jupyter Notebook-based analytics/demos for conversation data"
    ],
    tech: ["JavaScript", "Socket.io", "Node.js", "Jupyter Notebook"],
    github: "https://github.com/mutti-source/realtime-chat"
  },
  {
    title: "Geofence Project",
    description: "A JavaScript-based geofencing system that detects device location and triggers actions when entering or leaving defined geographic areas — useful for location-aware notifications, access control, and location-triggered workflows.",
    features: [
      "Define and manage multiple geofences (circle/polygon)",
      "Real-time location tracking and enter/exit detection",
      "Customizable actions/notifications on geofence events",
      "Lightweight admin UI for creating and testing geofences"
    ],
    tech: ["JavaScript", "Leaflet.js", "Node.js"],
    github: "https://github.com/mutti-source/geofence_project"
  }
];
