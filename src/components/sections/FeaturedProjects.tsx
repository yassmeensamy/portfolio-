"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project, AppLink } from "@/types";

function MockupFan({ screenshots }: { screenshots: string[] }) {
  if (screenshots.length === 0) {
    return (
      <div className="relative flex h-[160px] w-[180px] items-center justify-center">
        {/* Back left placeholder */}
        <div className="absolute z-[1] h-[140px] w-[70px] -translate-x-12 -rotate-12 scale-[0.85] rounded-xl border-[3px] border-white/40 bg-white/10 opacity-70" />
        {/* Front center placeholder */}
        <div className="absolute z-[2] h-[140px] w-[70px] rounded-xl border-[3px] border-white/40 bg-white/10" />
        {/* Back right placeholder */}
        <div className="absolute z-[1] h-[140px] w-[70px] translate-x-12 rotate-12 scale-[0.85] rounded-xl border-[3px] border-white/40 bg-white/10 opacity-70" />
      </div>
    );
  }

  const [left, center, right] = [
    screenshots[0],
    screenshots[1] ?? screenshots[0],
    screenshots[2] ?? screenshots[0],
  ];

  return (
    <div className="relative flex h-[160px] w-[180px] items-center justify-center">
      {/* Back left */}
      <div className="absolute z-[1] h-[140px] w-[70px] -translate-x-12 -rotate-12 scale-[0.85] overflow-hidden rounded-xl border-[3px] border-white/50 bg-white opacity-70 shadow-lg">
        <img src={left} alt="" className="h-full w-full object-cover object-top" />
      </div>
      {/* Front center */}
      <div className="absolute z-[2] h-[140px] w-[70px] overflow-hidden rounded-xl border-[3px] border-white/50 bg-white shadow-xl">
        <img src={center} alt="" className="h-full w-full object-cover object-top" />
      </div>
      {/* Back right */}
      <div className="absolute z-[1] h-[140px] w-[70px] translate-x-12 rotate-12 scale-[0.85] overflow-hidden rounded-xl border-[3px] border-white/50 bg-white opacity-70 shadow-lg">
        <img src={right} alt="" className="h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}

const gradients = [
  "bg-gradient-to-br from-primary to-accent",
  "bg-gradient-to-br from-accent to-surface",
  "bg-gradient-to-br from-foreground to-primary",
];

function AppDownloadRow({ app }: { app: AppLink }) {
  return (
    <div className="flex items-center gap-2">
      {app.label && (
        <span className="min-w-[80px] text-[11px] font-semibold text-muted">
          {app.label}
        </span>
      )}
      {app.playStore && (
        <a
          href={app.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-[11px] font-semibold text-background transition-colors hover:bg-accent"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.48c-.36-.17-.58-.54-.58-.96V1.48c0-.42.22-.79.58-.96l11.83 11.48L3.18 23.48zm1.39-22.2L15.73 12 4.57 22.72 14.9 13.2l.83-.8-11.16-11.12zm13.52 11.62l-2.52-1.46L17.9 12l-2.33 1.56 2.52 1.46 2.22-1.28c.4-.24.4-.84 0-1.08l-2.22-1.28zm-3.74-2.17L5.07.82l12.61 7.28-3.33 2.63z"/></svg>
          Play Store
        </a>
      )}
      {app.appStore && (
        <a
          href={app.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border-[1.5px] border-foreground px-3 py-1.5 text-[11px] font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          App Store
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-surface bg-surface/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(42,18,16,0.1)] hover:border-primary/30">
        {/* Thumbnail area */}
        <div
          className={`relative flex items-center justify-center ${gradients[index % gradients.length]}`}
          style={{ aspectRatio: "16/10" }}
        >
          {project.featured && (
            <span className="absolute left-3 top-3 z-[3] rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-background">
              Featured
            </span>
          )}
          <span className="absolute right-3 top-3 z-[3] rounded-md bg-foreground/70 px-2.5 py-1 text-[11px] font-semibold text-background backdrop-blur-sm">
            {project.year}
          </span>
          <div className="transition-transform duration-300 group-hover:scale-105">
            <MockupFan screenshots={project.screenshots} />
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-1 flex-col gap-2.5 p-5 pt-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            {project.role}
          </span>
          <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
          <p className="flex-1 text-sm leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="flex items-center gap-1.5 text-[13px] font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {project.impact}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-surface bg-background px-3 py-1 text-[11px] font-semibold text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.apps.length > 0 && (
            <div className="mt-1 flex flex-col gap-2">
              {project.apps.map((app) => (
                <AppDownloadRow key={app.label || "default"} app={app} />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex items-end justify-between"
      >
        <h2 className="text-3xl font-bold text-foreground">
          Featured Projects
        </h2>
        <Link
          href="/projects"
          className="hidden items-center gap-1 text-sm font-medium text-primary transition-opacity hover:opacity-80 sm:flex"
        >
          View all <ArrowRight size={14} />
        </Link>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <Link
        href="/projects"
        className="mt-8 flex items-center justify-center gap-1 text-sm font-medium text-primary sm:hidden"
      >
        View all projects <ArrowRight size={14} />
      </Link>
    </section>
  );
}
