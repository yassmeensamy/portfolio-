"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-8 text-3xl font-bold text-foreground">About Me</h2>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
          <p>
            I&apos;m a Flutter developer with a strong focus on building
            production-ready mobile applications. I specialize in state
            management with <span className="font-medium text-foreground">Riverpod</span> and{" "}
            <span className="font-medium text-foreground">Cubit</span>, clean
            architecture patterns, and seamless API integration.
          </p>
          <p>
            I believe great software is not just about writing code — it&apos;s
            about solving real problems with scalable, maintainable solutions.
            Every project I work on is built with{" "}
            <span className="font-medium text-foreground">testing</span>,{" "}
            <span className="font-medium text-foreground">performance</span>,
            and <span className="font-medium text-foreground">user experience</span>{" "}
            at its core.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
