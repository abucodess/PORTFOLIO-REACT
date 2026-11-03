import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";

export default function TiltCard({ children, className = "", intensity = 8 }) {
  const ref = useRef(null);
  const rectRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [intensity, -intensity]),
    {
      stiffness: 240,
      damping: 26,
    }
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-intensity, intensity]),
    {
      stiffness: 240,
      damping: 26,
    }
  );

  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  const glowBg = useMotionTemplate`radial-gradient(260px circle at ${glowX} ${glowY}, rgba(131,56,236,0.22), transparent 70%)`;

  const isFinePointer = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(pointer: fine)").matches;

  const handleEnter = () => {
    if (!isFinePointer()) return;
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  };

  const handleMove = (e) => {
    if (!isFinePointer()) return;
    const rect = rectRef.current || ref.current?.getBoundingClientRect();
    if (!rect || !rect.width || !rect.height) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    rectRef.current = null;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`glow-border relative overflow-hidden rounded-2xl border border-white/10 bg-surface/80 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glowBg }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
