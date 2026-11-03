import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 1250; // Fast, snappy 1.25s studio intro
    const start = performance.now();
    let rafId;
    let hideTimeout;

    const tick = (now) => {
      const elapsed = now - start;
      const raw = Math.min(elapsed / duration, 1);
      // Smooth easeOutQuart curve
      const eased = 1 - Math.pow(1 - raw, 4);
      const current = Math.round(eased * 100);
      setProgress(current);

      if (raw < 1) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        hideTimeout = window.setTimeout(() => {
          setVisible(false);
        }, 180);
      }
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      if (hideTimeout) window.clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="portfolio-preloader"
          initial={{ y: "0%" }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.78,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[120] flex flex-col justify-between overflow-hidden bg-[#030106] px-6 py-8 sm:px-12 sm:py-10 select-none"
        >
          {/* Ambient Midnight Purple Studio Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
            style={{
              background:
                "radial-gradient(circle, rgba(90, 24, 154, 0.42) 0%, rgba(42, 8, 82, 0.2) 55%, transparent 80%)",
            }}
          />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
            <span className="font-display text-lg font-semibold tracking-tight text-soft-white normal-case">
              Abu<span className="text-violet-400">.</span>
            </span>
            <span className="text-violet-300">
              PORTFOLIO // EDITION 2026
            </span>
          </div>

          {/* Center Editorial Reveal */}
          <div className="relative z-10 my-auto flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-violet-300"
            >
              FRONTEND DEVELOPER &amp; SOFTWARE ENGINEER
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-3 font-condensed text-5xl font-extrabold uppercase tracking-tight text-soft-white sm:text-7xl lg:text-8xl"
            >
              ABOOBACKER<span className="text-violet-400">.</span>
            </motion.div>

            {/* Ultra-thin White/Violet Progress Line */}
            <div className="mt-8 h-[1.5px] w-56 overflow-hidden rounded-full bg-white/10 sm:w-72">
              <div
                className="h-full w-full origin-left bg-gradient-to-r from-violet-500 via-white to-violet-300 transition-transform duration-75 ease-out"
                style={{
                  transform: `scaleX(${progress / 100})`,
                }}
              />
            </div>
          </div>

          {/* Bottom Progress Counter & Status */}
          <div className="relative z-10 flex items-end justify-between border-t border-white/10 pt-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 mr-2" />
              <span>INITIALIZING STUDIO EXPERIENCE</span>
            </div>

            <div className="font-condensed text-5xl font-extrabold leading-none tabular-nums tracking-tight text-soft-white sm:text-6xl">
              {String(progress).padStart(2, "0")}
              <span className="text-2xl text-violet-400 sm:text-3xl">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
