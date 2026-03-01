"use client";

import { motion } from "framer-motion";

const techPills = [
  "Flutter",
  "Dart",
  "Riverpod",
  "Cubit",
  "REST API",
  "Firebase",
  "Testing",
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Glow accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(139,46,46,0.08)_0%,transparent_70%)] blur-[40px]" />

      {/* Vertical line accent */}
      <div className="pointer-events-none absolute left-12 top-0 h-full w-px bg-[linear-gradient(to_bottom,transparent,rgba(232,213,206,0.6)_30%,rgba(232,213,206,0.6)_70%,transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl gap-14 px-6 pb-10 pt-14 lg:pt-16">
        {/* Left column */}
        <div className="flex-[1.2]">
          <motion.div
            {...fadeUp(0)}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/6 px-[18px] py-[7px] text-[11px] font-semibold text-primary"
          >
            <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-primary" />
            Available for work
          </motion.div>

          <motion.p
            {...fadeUp(0.1)}
            className="mb-3 text-sm font-medium tracking-wider text-muted"
          >
            HELLO, I&apos;M
          </motion.p>

          <motion.h1
            {...fadeUp(0.15)}
            className="mb-6 bg-[linear-gradient(135deg,#2A1210_0%,#8B2E2E_60%,#CC736B_100%)] bg-clip-text text-5xl font-bold leading-[1.04] tracking-tight text-transparent sm:text-6xl"
          >
            Yassmeen Samy.
            <br />
            Flutter Developer.
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="mb-8 max-w-md text-base leading-relaxed text-muted"
          >
            I build{" "}
            <strong className="font-semibold text-foreground">
              scalable mobile applications
            </strong>{" "}
            with clean architecture, Riverpod, and a relentless focus on{" "}
            <strong className="font-semibold text-foreground">
              performance
            </strong>{" "}
            and user experience.
          </motion.p>

          <motion.div {...fadeUp(0.35)} className="flex gap-3">
            <a
              href="#projects"
              className="rounded-[10px] bg-primary px-7 py-3.5 text-[13px] font-semibold text-background transition-opacity hover:opacity-90"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="rounded-[10px] border border-primary/20 bg-primary/4 px-7 py-3.5 text-[13px] font-semibold text-primary transition-colors hover:bg-primary/8"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right column — About */}
        <motion.div
          {...fadeUp(0.3)}
          className="hidden flex-[0.8] flex-col justify-center lg:flex"
        >
          <p className="mb-4 text-[10px] font-bold tracking-[2.5px] text-accent">
            ABOUT ME
          </p>
          <p className="mb-6 text-sm leading-[1.8] text-muted">
            Mobile engineer specializing in{" "}
            <strong className="font-semibold text-foreground">Riverpod</strong>{" "}
            and{" "}
            <strong className="font-semibold text-foreground">Cubit</strong> for
            state management, clean architecture patterns, and seamless{" "}
            <strong className="font-semibold text-foreground">
              API integration
            </strong>
            . Building software that solves real problems.
          </p>
          <div className="flex flex-wrap gap-2">
            {techPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-primary/10 bg-primary/4 px-4 py-1.5 text-[11px] font-medium text-primary"
              >
                {pill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile about (shown below on small screens) */}
      <motion.div
        {...fadeUp(0.4)}
        className="relative z-10 mx-auto max-w-6xl border-t border-surface px-6 pb-8 pt-6 lg:hidden"
      >
        <p className="mb-3 text-[10px] font-bold tracking-[2.5px] text-accent">
          ABOUT ME
        </p>
        <p className="mb-5 text-sm leading-[1.8] text-muted">
          Mobile engineer specializing in{" "}
          <strong className="font-semibold text-foreground">Riverpod</strong>{" "}
          and{" "}
          <strong className="font-semibold text-foreground">Cubit</strong> for
          state management, clean architecture patterns, and seamless{" "}
          <strong className="font-semibold text-foreground">
            API integration
          </strong>
          .
        </p>
        <div className="flex flex-wrap gap-2">
          {techPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-primary/10 bg-primary/4 px-4 py-1.5 text-[11px] font-medium text-primary"
            >
              {pill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
