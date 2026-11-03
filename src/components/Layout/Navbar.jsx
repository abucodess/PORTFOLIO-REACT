import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { getWhatsAppUrl } from "../../data/profile";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ isProjectPage = false, onExitProject }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const clickLockRef = useRef({ id: null, until: 0 });
  const whatsappHref = getWhatsAppUrl();

  useEffect(() => {
    let ticking = false;

    const updateNavState = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 24);

      if (isProjectPage) {
        setActive("projects");
        ticking = false;
        return;
      }

      const now = performance.now();
      if (clickLockRef.current.id !== null && now < clickLockRef.current.until) {
        setActive(clickLockRef.current.id);
        ticking = false;
        return;
      }

      if (scrollY < window.innerHeight * 0.35) {
        setActive("");
        ticking = false;
        return;
      }

      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
        setActive(links[links.length - 1].id);
        ticking = false;
        return;
      }

      const triggerLine = window.innerHeight * 0.38;
      let currentId = "";

      for (const link of links) {
        const el = document.getElementById(link.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          currentId = link.id;
        }
      }

      setActive(currentId);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavState);
        ticking = true;
      }
    };

    const onCustomNavigate = (e) => {
      const targetId = e.detail;
      if (!targetId) return;
      const normalized = targetId === "hero" ? "" : targetId;
      clickLockRef.current = { id: normalized, until: performance.now() + 900 };
      setActive(normalized);
    };

    updateNavState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("portfolio:navigate", onCustomNavigate);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("portfolio:navigate", onCustomNavigate);
    };
  }, [isProjectPage]);

  const scrollTo = useCallback(
    (id) => {
      setOpen(false);
      const normalized = id === "hero" ? "" : id;
      clickLockRef.current = { id: normalized, until: performance.now() + 900 };
      setActive(normalized);

      if (isProjectPage && onExitProject) {
        onExitProject(id);
        return;
      }

      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.hash = id;
      }
    },
    [isProjectPage, onExitProject]
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-0 outline-none transition-[background-color,padding,box-shadow] duration-200 ${
        scrolled
          ? "bg-[#050505]/90 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "bg-transparent py-6 shadow-none"
      }`}
    >
      <div className="container-px mx-auto flex max-w-6xl items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <button
          type="button"
          data-cursor="link"
          onClick={() => scrollTo("hero")}
          className="font-display text-xl font-semibold tracking-tight text-soft-white whitespace-nowrap shrink-0"
        >
          Abu<span className="text-violet-400">.</span>
        </button>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7"
        >
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                type="button"
                data-cursor="link"
                onClick={() => scrollTo(link.id)}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? "text-soft-white"
                    : "text-mist hover:text-soft-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-violet-400 transition-transform duration-200 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA redirecting to WhatsApp */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="WhatsApp"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-xs font-medium text-soft-white shadow-[0_0_24px_rgba(124,58,237,0.4)] transition-colors duration-200 hover:bg-violet-500 whitespace-nowrap shrink-0"
          >
            <FaWhatsapp className="text-sm text-emerald-300" />
            <span>Let&apos;s Talk</span>
            <FiArrowUpRight size={14} />
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-soft-white md:hidden"
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
            transition={{ duration: 0.2 }}
            className="glass mx-4 mt-3 overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {links.map((link) => {
                const isActive = active === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className={`rounded-xl px-4 py-3 text-left font-mono text-sm transition-colors ${
                      isActive
                        ? "bg-violet-600/20 text-soft-white"
                        : "text-mist hover:bg-violet-600/10 hover:text-soft-white"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-medium text-soft-white transition-colors hover:bg-violet-500 whitespace-nowrap"
              >
                <FaWhatsapp className="text-base text-emerald-300" />
                <span>Let&apos;s Talk on WhatsApp</span>
                <FiArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
