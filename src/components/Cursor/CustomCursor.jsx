import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

let burstId = 0;

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default"); // default | link | button | text
  const [bursts, setBursts] = useState([]);
  const [ripples, setRipples] = useState([]);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  // dot: near-instant
  const dotX = useSpring(mx, { stiffness: 1200, damping: 60, mass: 0.2 });
  const dotY = useSpring(my, { stiffness: 1200, damping: 60, mass: 0.2 });

  // ring: elastic lag, "magnetic" feel
  const ringX = useSpring(mx, { stiffness: 220, damping: 20, mass: 0.6 });
  const ringY = useSpring(my, { stiffness: 220, damping: 20, mass: 0.6 });

  const magnetTarget = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(fine);
    if (fine) document.documentElement.classList.add("custom-cursor");
    return () => document.documentElement.classList.remove("custom-cursor");
  }, []);

  const updateVariant = useCallback((target) => {
    const el = target.closest?.("[data-cursor]");
    if (!el) {
      setVariant("default");
      magnetTarget.current = null;
      return;
    }
    setVariant(el.dataset.cursor);
    magnetTarget.current = el.dataset.magnetic === "true" ? el : null;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;

      if (magnetTarget.current) {
        const rect = magnetTarget.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
        const pull = Math.max(0, 1 - dist / 140);
        x = e.clientX + (cx - e.clientX) * pull * 0.4;
        y = e.clientY + (cy - e.clientY) * pull * 0.4;
      }

      mx.set(x);
      my.set(y);
      updateVariant(e.target);
    };

    const handleClick = (e) => {
      const id = burstId++;
      const particles = Array.from({ length: 8 }).map((_, i) => ({
        angle: (i / 8) * Math.PI * 2 + Math.random() * 0.5,
        distance: 24 + Math.random() * 26,
      }));
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      setBursts((b) => [...b, { id, x: e.clientX, y: e.clientY, particles }]);

      setTimeout(() => {
        setRipples((r) => r.filter((rp) => rp.id !== id));
        setBursts((b) => b.filter((bp) => bp.id !== id));
      }, 700);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [enabled, mx, my, updateVariant]);

  if (!enabled) return null;

  const isLink = variant === "link";
  const isButton = variant === "button";
  const isText = variant === "text";

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            width: isButton ? 72 : isLink ? 56 : isText ? 90 : 40,
            height: isButton ? 72 : isLink ? 56 : isText ? 34 : 40,
            opacity: isText ? 0 : 1,
            borderRadius: isText ? 8 : 999,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="rounded-full border border-violet-400/70"
          style={{
            boxShadow:
              "0 0 24px rgba(168,85,247,0.35), inset 0 0 18px rgba(168,85,247,0.15)",
          }}
        />
      </motion.div>

      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            scale: isButton || isLink ? 0 : 1,
            backgroundColor: "#c084fc",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="h-2 w-2 rounded-full"
          style={{ boxShadow: "0 0 10px rgba(192,132,252,0.9)" }}
        />
      </motion.div>

      {/* Click ripples */}
      {ripples.map((r) => (
        <motion.div
          key={r.id}
          initial={{ opacity: 0.6, scale: 0.2 }}
          animate={{ opacity: 0, scale: 2.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed left-0 top-0 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/60"
          style={{ x: r.x, y: r.y }}
        />
      ))}

      {/* Particle bursts */}
      {bursts.map((b) =>
        b.particles.map((p, i) => (
          <motion.div
            key={`${b.id}-${i}`}
            initial={{
              x: b.x,
              y: b.y,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: b.x + Math.cos(p.angle) * p.distance,
              y: b.y + Math.sin(p.angle) * p.distance,
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300"
            style={{ boxShadow: "0 0 8px rgba(216,180,254,0.9)" }}
          />
        ))
      )}
    </div>
  );
}
