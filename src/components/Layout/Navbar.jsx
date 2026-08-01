import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-px mx-auto flex max-w-6xl items-center justify-between">
        <button
          data-cursor="link"
          onClick={() => scrollTo("hero")}
          className="font-display text-lg font-semibold tracking-tight text-soft-white"
        >
          Abu<span className="text-violet-400">.</span>
        </button>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-2 md:flex ${
            scrolled ? "glass" : ""
          }`}
        >
          {links.map((link) => (
            <button
              key={link.id}
              data-cursor="link"
              onClick={() => scrollTo(link.id)}
              className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                active === link.id ? "text-soft-white" : "text-mist hover:text-soft-white"
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-violet-600/20"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </nav>

        <button
          data-cursor="button"
          onClick={() => scrollTo("contact")}
          className="hidden rounded-full border border-line px-5 py-2 font-mono text-xs uppercase tracking-wider text-soft-white transition-colors hover:border-violet-400/60 hover:text-violet-300 md:inline-flex"
        >
          Let&apos;s Talk
        </button>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-soft-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass mx-4 mt-3 overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="rounded-xl px-4 py-3 text-left font-mono text-sm uppercase tracking-wider text-mist hover:bg-violet-600/10 hover:text-soft-white"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
