import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const barRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    // Minimum 1.75s loading duration (>1.5s as requested) + 0.25s hold at 100%
    const duration = 1750;
    const start = performance.now();
    let rafId = null;
    let hideTimeout = null;

    // Lock scroll while preloader is active to prevent layout shift/jank
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const updateDOM = (pct) => {
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${pct / 100})`;
      }
      if (counterRef.current) {
        counterRef.current.textContent = String(Math.round(pct)).padStart(
          2,
          "0"
        );
      }
    };

    const tick = (now) => {
      const elapsed = Math.max(0, now - start);
      const raw = Math.min(elapsed / duration, 1);

      // Smooth cubic ease-in-out blended with linear so progress feels steady and never jumps or glitches
      const easeInOut =
        raw < 0.5
          ? 4 * raw * raw * raw
          : 1 - Math.pow(-2 * raw + 2, 3) / 2;
      const blended = raw * 0.35 + easeInOut * 0.65;
      const pct = Math.min(100, Math.max(0, blended * 100));

      updateDOM(pct);

      if (raw < 1) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        updateDOM(100);
        hideTimeout = window.setTimeout(() => {
          setVisible(false);
          document.body.style.overflow = prevOverflow;
        }, 250);
      }
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      if (hideTimeout) window.clearTimeout(hideTimeout);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="portfolio-preloader"
          initial={{ opacity: 1, y: "0%" }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          style={{
            willChange: "transform",
            background:
              "radial-gradient(circle at 50% 50%, rgba(72, 18, 134, 0.28) 0%, rgba(22, 5, 42, 0.16) 45%, #030106 80%), #030106",
          }}
          className="fixed inset-0 z-[120] flex flex-col justify-between overflow-hidden px-6 py-8 sm:px-12 sm:py-10 select-none"
        >
          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/12 pb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
            <span className="font-display text-lg font-semibold tracking-tight text-soft-white normal-case">
              Abu<span className="text-violet-400">.</span>
            </span>
            <span className="text-violet-300">PORTFOLIO // EDITION 2026</span>
          </div>

          {/* Center Editorial Reveal */}
          <div className="relative z-10 my-auto flex flex-col items-center text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-300 sm:text-[11px]">
              FRONTEND DEVELOPER &amp; SOFTWARE ENGINEER
            </p>

            <div className="mt-3 font-condensed text-5xl font-extrabold uppercase tracking-tight text-soft-white sm:text-7xl lg:text-8xl">
              ABOOBACKER<span className="text-violet-400">.</span>
            </div>

            {/* Ultra-thin White/Violet Progress Line — driven directly by rAF ref without CSS transition conflict */}
            <div className="mt-8 h-[2px] w-60 overflow-hidden rounded-full bg-white/10 sm:w-80">
              <div
                ref={barRef}
                className="h-full w-full origin-left bg-gradient-to-r from-violet-500 via-white to-violet-300"
                style={{
                  transform: "scaleX(0)",
                  willChange: "transform",
                }}
              />
            </div>
          </div>

          {/* Bottom Progress Counter & Status */}
          <div className="relative z-10 flex items-end justify-between border-t border-white/12 pt-4">
            <div className="flex items-center font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>LOADING PORTFOLIO EXPERIENCE</span>
            </div>

            <div className="font-condensed text-5xl font-extrabold leading-none tabular-nums tracking-tight text-soft-white sm:text-6xl">
              <span ref={counterRef}>00</span>
              <span className="text-2xl text-violet-400 sm:text-3xl">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
