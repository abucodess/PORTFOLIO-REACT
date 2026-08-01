import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: "#", label: "GitHub" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:hello@example.com", label: "Email" },
];

export default function Footer() {
  const scrollTop = () =>
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-line">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center gap-8 py-14 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl font-semibold text-soft-white">
            Abu<span className="text-violet-400">.</span>
          </span>
          <span className="font-mono text-xs text-mist-dim">
            © {new Date().getFullYear()} · Built with React
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              data-cursor="link"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-mist transition-colors hover:border-violet-400/60 hover:text-violet-300"
            >
              <Icon size={17} />
            </a>
          ))}

          <motion.button
            data-cursor="button"
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full bg-violet-600/15 text-violet-300 transition-colors hover:bg-violet-600/25"
          >
            <FiArrowUp size={17} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
