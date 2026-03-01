import { GithubIcon, LinkedinIcon, MailIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";

const socials = [
  { href: "mailto:yassmeensamy1@gmail.com", icon: MailIcon, label: "Email" },
  { href: "tel:+2001152258684", icon: PhoneIcon, label: "Phone" },
  { href: "https://wa.me/2001152258684", icon: MessageCircleIcon, label: "WhatsApp" },
  { href: "https://github.com/yassmeensamy", icon: GithubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/yassmeen-samy-50b7851b8/", icon: LinkedinIcon, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-foreground">
            Yassmeen Samy
          </p>
          <p className="text-xs text-muted">Cairo, Egypt</p>
        </div>
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
