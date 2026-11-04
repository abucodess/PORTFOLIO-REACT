import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = ["A", "B", "O", "O", "B", "A", "C", "K", "E", "R"];

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const barRef = useRef(null);
  const sparkRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    // 1.6s smooth loading progression + 0.2s hold at 100%
    const duration = 1600;
    const start = performance.now();
    const animState = { rafId: 0, hideTimeout: 0 };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const updateDOM = (pct) => {
      const ratio = pct / 100;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${ratio})`;
      }
      if (sparkRef.current) {
        sparkRef.current.style.transform = `translate3d(${pct}%, -50%, 0)`;
        sparkRef.current.style.opacity = pct > 2 && pct < 99.5 ? "1" : "0";
      }
      if (counterRef.current) {
        counterRef.current.textContent = String(Math.round(pct)).padStart(
          3,
          "0"
        );
      }
    };

    const tick = (now) => {
      const elapsed = Math.max(0, now - start);
      const raw = Math.min(elapsed / duration, 1);

      // Silky cubic ease-in-out blended with linear so progress is steady and never jumps
      const easeInOut =
        raw < 0.5
          ? 4 * raw * raw * raw
          : 1 - Math.pow(-2 * raw + 2, 3) / 2;
      const blended = raw * 0.3 + easeInOut * 0.7;
      const pct = Math.min(100, Math.max(0, blended * 100));

      updateDOM(pct);

      if (raw < 1) {
        animState.rafId = window.requestAnimationFrame(tick);
      } else {
        updateDOM(100);
        animState.hideTimeout = window.setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = prevOverflow;
        }, 200);
      }
    };

    animState.rafId = window.requestAnimationFrame(tick);

    return () => {
      if (animState.rafId) window.cancelAnimationFrame(animState.rafId);
      if (animState.hideTimeout) window.clearTimeout(animState.hideTimeout);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="portfolio-preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          style={{
            willChange: "transform",
            background:
              "radial-gradient(circle at 50% 50%, rgba(44, 14, 88, 0.22) 0%, rgba(12, 4, 26, 0.12) 48%, #020105 80%), #020105",
          }}
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden select-none"
        >
          {/* Minimalist Precision Corner Hairlines */}
          <div
            className="pointer-events-none absolute inset-5 sm:inset-8"
            aria-hidden="true"
          >
            <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-white/25" />
            <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-white/25" />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-white/25" />
            <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-white/25" />
          </div>

          {/* Ultra-Minimal Center Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -16,
              transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center px-6"
          >
            {/* Subtle Monogram Dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 flex items-center gap-2"
            >
              <span className="h-1 w-1 rounded-full bg-violet-400 shadow-[0_0_10px_#8c66cc]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.42em] text-mist/75">
                PORTFOLIO
              </span>
              <span className="h-1 w-1 rounded-full bg-violet-400 shadow-[0_0_10px_#8c66cc]" />
            </motion.div>

            {/* Staggered Character Reveal — Whisper-Clean Architectural Typography */}
            <div
              className="flex items-center justify-center overflow-hidden py-1"
              aria-label="Aboobacker"
            >
              {LETTERS.map((char, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.04 + idx * 0.032,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block font-display text-lg font-medium tracking-[0.38em] text-soft-white sm:text-xl sm:tracking-[0.46em]"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Razor-Thin 1px Light Thread + Traveling White Spark */}
            <div className="relative mt-7 h-px w-48 bg-white/[0.08] sm:w-56">
              <div
                ref={barRef}
                className="h-full w-full origin-left bg-gradient-to-r from-violet-500/60 via-white to-violet-300"
                style={{
                  transform: "scaleX(0)",
                  willChange: "transform",
                }}
              />
              {/* Leading white light point */}
              <div
                ref={sparkRef}
                className="pointer-events-none absolute left-0 top-1/2 h-px w-full"
                style={{
                  transform: "translate3d(0%, -50%, 0)",
                  opacity: 0,
                  willChange: "transform, opacity",
                }}
              >
                <span className="block h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_10px_#ffffff,0_0_20px_#8c66cc]" />
              </div>
            </div>

            {/* Minimal Tabular Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="mt-4 flex items-center gap-1.5 font-mono text-[10px] tabular-nums tracking-[0.35em] text-mist/80"
            >
              <span ref={counterRef} className="text-soft-white/90">
                000
              </span>
              <span className="text-violet-400/80">/</span>
              <span className="text-mist/50">100</span>
            </motion.div>
          </motion.div>

          {/* Bottom 1px Architectural Horizon Edge */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/35 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

