import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function isFinePointer() {
  if (typeof window === "undefined") return false;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return fine && !reduced;
}

export default function CustomCursor() {
  const [enabled] = useState(isFinePointer);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const dotX = useSpring(mx, { stiffness: 1000, damping: 50, mass: 0.15 });
  const dotY = useSpring(my, { stiffness: 1000, damping: 50, mass: 0.15 });

  const ringX = useSpring(mx, { stiffness: 260, damping: 24, mass: 0.4 });
  const ringY = useSpring(my, { stiffness: 260, damping: 24, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor");

    const handlePointerMove = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };

    const handlePointerOver = (e) => {
      const interactive = e.target?.closest?.("a, button, [data-cursor]");
      setHovered(Boolean(interactive));
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
    };
  }, [enabled, mx, my]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`rounded-full border transition-all duration-150 ${
            hovered
              ? "h-12 w-12 border-violet-400/80 bg-violet-500/10"
              : "h-8 w-8 border-violet-400/45 bg-transparent"
          }`}
        />
      </motion.div>

      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className={`h-1.5 w-1.5 rounded-full bg-violet-300 transition-transform duration-150 ${
            hovered ? "scale-0" : "scale-100"
          }`}
        />
      </motion.div>
    </div>
  );
}
