"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "Android", "iOS"],
  },
  {
    title: "State Management",
    skills: ["Riverpod", "Cubit / Bloc", "Provider"],
  },
  {
    title: "Testing & Quality",
    skills: ["E2E Testing", "Unit Testing", "Widget Testing"],
  },
  {
    title: "Backend & Tools",
    skills: ["REST API", "Firebase", "Git", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-10 text-3xl font-bold text-foreground">
          Skills & Technologies
        </h2>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border border-surface bg-surface/40 p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              {group.title}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="text-sm text-foreground">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
