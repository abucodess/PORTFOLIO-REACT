import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

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
  const [active, setActive] = useState("about");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observeSections = () => {
      const sections = links
        .map((l) => document.getElementById(l.id))
        .filter(Boolean);

      if (sections.length === 0) return undefined;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { rootMargin: "-40% 0px -45% 0px" }
      );

      sections.forEach((s) => observer.observe(s));
      return () => observer.disconnect();
    };

    const cleanup = observeSections();
    const timer = setTimeout(observeSections, 1200);
    return () => {
      cleanup?.();
      clearTimeout(timer);
    };
  }, []);

  const scrollTo = useCallback((id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = id;
    }
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[#050505]/80 py-3.5 backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-px mx-auto flex max-w-6xl items-center justify-between gap-8">
        {/* Zone 1: Brand "Abu." */}
        <button
          type="button"
          data-cursor="link"
          onClick={() => scrollTo("hero")}
          className="font-display text-xl font-semibold tracking-tight text-soft-white whitespace-nowrap shrink-0"
        >
          Abu<span className="text-violet-400">.</span>
        </button>

        {/* Zone 2: Pill Navigation matching reference image */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-1.5 backdrop-blur-md"
        >
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                type="button"
                data-cursor="link"
                onClick={() => scrollTo(link.id)}
                className={`relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-violet-600/25 text-soft-white shadow-[inset_0_1px_0_0_rgba(192,132,252,0.3)]"
                    : "text-mist hover:text-soft-white"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA button matching "Get the app ↗" pill in reference */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            data-cursor="button"
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-violet-500/40 bg-violet-600/90 px-5 py-2.5 text-xs font-medium text-soft-white shadow-[0_0_24px_rgba(124,58,237,0.4)] transition-all hover:bg-violet-500 whitespace-nowrap shrink-0"
          >
            <span>Let&apos;s Talk</span>
            <FiArrowUpRight size={14} />
          </button>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-soft-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass mx-4 mt-3 overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  type="button"
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
    </header>
  );
}
