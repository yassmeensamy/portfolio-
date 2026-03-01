import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const socials = [
  { href: "mailto:yassmeensamy1@gmail.com", icon: MailIcon, label: "Email" },
  { href: "https://github.com/yassmeensamy", icon: GithubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/yassmeen-samy-50b7851b8/", icon: LinkedinIcon, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Yassmeen. Built with Next.js.
        </p>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-primary"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
