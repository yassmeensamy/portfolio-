"use client";

import Link from "next/link";
import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/yassmeensamy", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/yassmeen-samy-50b7851b8/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:yassmeensamy1@gmail.com", icon: Mail, label: "yassmeensamy1@gmail.com" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top micro bar */}
      <div className="hidden bg-foreground md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-end gap-5 px-6 py-1.5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] text-background/60 transition-colors hover:text-background"
            >
              <social.icon size={12} />
              <span className="hidden lg:inline">{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="border-b border-surface bg-background/95 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-4">
          {/* Desktop links — centered */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Resume — pinned right */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-6 hidden rounded-md bg-primary px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90 md:inline-block"
          >
            Resume
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "overflow-hidden border-t border-surface transition-all duration-300 md:hidden",
            open ? "max-h-80" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-md bg-primary px-5 py-2 text-sm font-semibold text-background"
            >
              Resume
            </a>
            <div className="flex gap-4 border-t border-surface pt-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
