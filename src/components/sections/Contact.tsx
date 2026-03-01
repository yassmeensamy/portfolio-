"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    href: "mailto:yassmeensamy1@gmail.com",
    icon: Mail,
    label: "Email Me",
    detail: "yassmeensamy1@gmail.com",
  },
  {
    href: "https://github.com/yassmeensamy",
    icon: Github,
    label: "GitHub",
    detail: "yassmeensamy",
  },
  {
    href: "https://www.linkedin.com/in/yassmeen-samy-50b7851b8/",
    icon: Linkedin,
    label: "LinkedIn",
    detail: "Yassmeen Samy",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-3xl font-bold text-foreground">
          Get In Touch
        </h2>
        <p className="mb-10 max-w-md text-base leading-relaxed text-muted">
          I&apos;m currently open to new opportunities. Whether you have a
          project in mind or just want to connect, feel free to reach out.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-3">
        {contactLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-4 rounded-xl border border-surface bg-surface/40 p-5 transition-colors hover:border-primary/30"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <link.icon size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {link.label}
              </p>
              <p className="text-xs text-muted">{link.detail}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
