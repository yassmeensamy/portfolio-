"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experiences } from "@/data/experience";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";

function getDurationMonths(period: string): string {
  const months: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
    Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
  };
  const parts = period.split(" – ");
  const parseDate = (s: string) => {
    if (s === "Present") return new Date();
    const [mon, yr] = s.split(" ");
    return new Date(Number(yr), months[mon] ?? 0);
  };
  const start = parseDate(parts[0]);
  const end = parseDate(parts[1]);
  const diff =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  if (diff < 1) return "1 mo";
  if (diff < 12) return `${diff} mos`;
  const yrs = Math.floor(diff / 12);
  const mos = diff % 12;
  if (mos === 0) return `${yrs} yr${yrs > 1 ? "s" : ""}`;
  return `${yrs} yr${yrs > 1 ? "s" : ""} ${mos} mo${mos > 1 ? "s" : ""}`;
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
          Career Journey
        </p>
        <h2 className="text-4xl font-bold text-foreground">
          Professional Experience
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 hidden h-full w-px md:block">
          <motion.div
            className="h-full w-full bg-gradient-to-b from-primary via-accent to-surface"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative md:pl-14"
            >
              {/* Timeline node */}
              <div className="absolute left-0 top-0 z-10 hidden md:block">
                <div className="relative flex h-[34px] w-[34px] items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-125" />
                  <span className="relative h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                </div>
              </div>

              {/* Card */}
              <div className="overflow-hidden rounded-2xl border border-surface/80 bg-white/60 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-md">
                {/* Top bar — company info */}
                <div className="flex items-center gap-4 border-b border-surface/60 bg-surface/20 px-6 py-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-surface/80 bg-white shadow-sm">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="flex items-center gap-1 text-lg font-bold text-foreground">
                      {exp.company}
                      <ArrowUpRight size={14} className="text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  {/* Total duration badge */}
                  <span className="hidden shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary sm:inline-block">
                    {getDurationMonths(exp.period)}
                  </span>
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>

                  {/* Roles */}
                  <div className="relative space-y-6">
                    {/* Inner timeline line for multi-role */}
                    {exp.roles.length > 1 && (
                      <div className="absolute left-[5px] top-3 h-[calc(100%-1.5rem)] w-px bg-surface" />
                    )}

                    {exp.roles.map((role, j) => (
                      <motion.div
                        key={`${role.title}-${role.period}`}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + j * 0.1 }}
                        className={exp.roles.length > 1 ? "relative pl-7" : ""}
                      >
                        {/* Inner role dot */}
                        {exp.roles.length > 1 && (
                          <div className="absolute left-0 top-1.5 flex h-[11px] w-[11px] items-center justify-center">
                            <span className={`h-2.5 w-2.5 rounded-full border-2 ${j === 0 ? "border-primary bg-primary" : "border-accent bg-background"}`} />
                          </div>
                        )}

                        {/* Role header */}
                        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h4 className="text-sm font-bold text-foreground">
                            {role.title}
                          </h4>
                          <span className="text-xs text-muted">
                            {role.period}
                          </span>
                          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
                            {getDurationMonths(role.period)}
                          </span>
                        </div>

                        {/* Role highlights */}
                        <ul className="space-y-2">
                          {role.highlights.map((highlight, k) => (
                            <motion.li
                              key={highlight}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: i * 0.05 + j * 0.05 + k * 0.03 }}
                              className="flex gap-3 text-sm text-foreground"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span className="leading-relaxed">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-surface/60 pt-5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-surface/80 bg-background px-3 py-1 text-xs font-medium text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Timeline end cap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative mt-12 hidden md:block"
        >
          <div className="absolute left-4 -translate-x-1/2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-surface bg-background text-xs text-muted">
              ...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
