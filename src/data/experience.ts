import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Eram Group",
    logo: "/companies/images.jpeg",
    location: "On-site",
    period: "Sep 2024 – Present",
    description:
      "Started as an intern and promoted to junior developer, building cross-platform mobile applications using Flutter with clean architecture.",
    roles: [
      {
        title: "Junior Flutter Developer",
        period: "Dec 2024 – Present",
        highlights: [
          "Developed Sukoon — a therapist booking platform with separate patient and doctor apps",
          "Built EramEX — an end-to-end delivery and logistics tracking app with real-time Google Maps integration",
          "Implemented state management using Cubit/Bloc pattern across multiple production apps",
          "Integrated Firebase services including authentication, push notifications, and analytics",
        ],
      },
      {
        title: "Flutter Developer Intern",
        period: "Sep 2024 – Dec 2024",
        highlights: [
          "Learned clean architecture patterns and Cubit state management in a production environment",
          "Contributed to mobile app features under senior developer guidance",
          "Built reusable UI components following the team's design system",
        ],
      },
    ],
    tags: ["Flutter", "Cubit", "Firebase", "REST API", "Google Maps"],
  },
  {
    company: "Blackstone eIT",
    logo: "/companies/8461d1c8f60e4ae7a569fb6e55d2ece7.jpg",
    location: "Dubai",
    period: "Oct 2025 – Jan 2026",
    description:
      "Internship at Blackstone eIT in Dubai, gaining international experience in mobile app development.",
    roles: [
      {
        title: "Flutter Developer Intern",
        period: "Oct 2025 – Jan 2026",
        highlights: [
          "Worked on Flutter mobile applications in a professional Dubai-based environment",
          "Collaborated with cross-functional teams on client-facing projects",
          "Applied clean architecture and state management best practices",
        ],
      },
    ],
    tags: ["Flutter", "Dart", "Cubit", "REST API"],
  },
];
