import { useRef } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  as = "button",
  variant = "primary",
  className = "",
  cursorType = "button",
  ...props
}) {
  const ref = useRef(null);
  const MotionComponent = as === "a" ? motion.a : motion.button;

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-mono text-sm tracking-wide transition-colors duration-200 will-change-transform whitespace-nowrap shrink-0";
  const styles = {
    primary:
      "bg-violet-600 text-soft-white shadow-[0_0_30px_rgba(124,58,237,0.45)] hover:bg-violet-500",
    ghost:
      "border border-line text-soft-white hover:border-violet-400/60 hover:text-violet-300",
  };

  return (
    <span
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block transition-transform duration-150 ease-out"
      ref={ref}
    >
      <MotionComponent
        data-cursor={cursorType}
        data-magnetic="true"
        whileTap={{ scale: 0.96 }}
        className={`${base} ${styles[variant]} ${className}`}
        {...props}
      >
        {children}
      </MotionComponent>
    </span>
  );
}
