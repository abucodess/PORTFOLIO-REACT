import { useRef } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  as: Tag = "button",
  variant = "primary",
  className = "",
  cursorType = "button",
  ...props
}) {
  const ref = useRef(null);
  const MotionTag = typeof Tag === "string" ? motion[Tag] || motion.button : motion(Tag);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-mono text-sm tracking-wide transition-colors duration-300 will-change-transform";
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
      className="inline-block transition-transform duration-200 ease-out"
      style={{ transitionTimingFunction: "cubic-bezier(0.2, 1, 0.3, 1)" }}
      ref={ref}
    >
      <MotionTag
        data-cursor={cursorType}
        data-magnetic="true"
        whileTap={{ scale: 0.94 }}
        className={`${base} ${styles[variant]} ${className}`}
        {...props}
      >
        {children}
      </MotionTag>
    </span>
  );
}
