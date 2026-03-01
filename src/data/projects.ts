import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "sukoon",
    title: "Sukoon",
    summary:
      "Therapist booking platform that connects patients with mental health specialists. Includes session scheduling, assessments, real-time analytics, and a dedicated doctor dashboard.",
    tags: ["Flutter", "Cubit", "Firebase", "REST API"],
    year: "2026",
    role: "Mobile Developer",
    impact: "24+ Patients Managed",
    featured: true,
    screenshots: [
      "/projects/sekoon/session.png",
      "/projects/sekoon/home.png",
      "/projects/sekoon/profile.png",
    ],
    links: {},
    apps: [
      {
        label: "Patient App",
        playStore: "#",
        appStore: "#",
      },
      {
        label: "Doctor App",
        playStore: "#",
        appStore: "#",
      },
    ],
  },
  {
    slug: "eramex",
    title: "EramEX",
    summary:
      "Delivery and logistics app for tracking shipments, managing courier routes, and handling package dispatch with real-time status updates.",
    tags: ["Flutter", "Cubit", "REST API", "Google Maps"],
    year: "2025",
    role: "Mobile Developer",
    impact: "End-to-end delivery flow",
    screenshots: [
      "/projects/ex/ex1.png",
      "/projects/ex/ex2.png",
      "/projects/ex/ex3.png",
    ],
    links: {},
    apps: [
      {
        label: "",
        playStore: "#",
        appStore: "#",
      },
    ],
  },
  {
    slug: "1k",
    title: "1K",
    summary:
      "Coffee loyalty program app that rewards customers with points, tracks purchase history, and offers exclusive deals and promotions.",
    tags: ["Flutter", "Cubit", "REST API", "Firebase"],
    year: "2025",
    role: "Mobile Developer",
    impact: "Loyalty rewards system",
    screenshots: [
      "/projects/1k/1k1.png",
      "/projects/1k/1k2.png",
      "/projects/1k/1k3.png",
    ],
    links: {},
    apps: [
      {
        label: "",
        playStore: "#",
        appStore: "#",
      },
    ],
  },
  {
    slug: "home-service",
    title: "Home Service",
    summary:
      "On-demand home maintenance app for booking plumbers, electricians, cleaners, and other service providers with scheduling and live tracking.",
    tags: ["Flutter", "Cubit", "REST API", "Firebase"],
    year: "2024",
    role: "Mobile Developer",
    impact: "Multi-service booking",
    screenshots: [
      "/projects/home/home2.png",
      "/projects/home/home3.png",
      "/projects/home/home4.png",
    ],
    links: {},
    apps: [
      {
        label: "",
        playStore: "#",
        appStore: "#",
      },
    ],
  },
];
