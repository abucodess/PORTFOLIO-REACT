import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown, FiDownload } from "react-icons/fi";
import MagneticButton from "../components/UI/MagneticButton";
import TerminalWindow from "../components/Terminal/TerminalWindow";

const HeroScene = lazy(() => import("../components/Background/HeroScene"));

const roles = [
  "Full Stack Developer",
  "AI Engineer, in progress",
  "React Developer",
  "CSE Student",
];

const NAME = "Abubacker";

function useTypewriter(words, { typeSpeed = 65, deleteSpeed = 35, pause = 1600 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  const nameLetters = NAME.split("");

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="container-px relative z-10 mx-auto grid max-w-6xl gap-16 py-32 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
      <div className="flex flex-col items-start gap-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="flex items-center gap-3 rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-mist"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          Available for opportunities
        </motion.p>

        <h1 className="font-display text-[13vw] font-semibold leading-[0.95] tracking-tight text-soft-white sm:text-[9vw] lg:text-[6.4rem]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="block"
            >
              Hi, I&apos;m
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <span className="block text-gradient">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "120%", rotate: 8, opacity: 0 }}
                  animate={{ y: "0%", rotate: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.4 + i * 0.045,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </span>
        </h1>

        <div className="h-9 font-mono text-lg text-violet-300 sm:text-xl">
          <span>{typed}</span>
          <span className="inline-block h-5 w-[2px] translate-y-1 animate-blink bg-violet-400" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="max-w-lg text-balance text-mist"
        >
          I build modern web applications, explore artificial intelligence, and
          craft digital experiences that are fast, beautiful, and user-friendly —
          constantly learning, constantly shipping.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            as="a"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </MagneticButton>
          <MagneticButton as="a" href="/resume.pdf" download variant="ghost">
            <FiDownload /> Resume
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex items-center gap-4 pt-2"
        >
          {[
            { icon: FiGithub, href: "#", label: "GitHub" },
            { icon: FiLinkedin, href: "#", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              data-cursor="link"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-mist transition-colors hover:border-violet-400/60 hover:text-violet-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <TerminalWindow />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-mist-dim"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
