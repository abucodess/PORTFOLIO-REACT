import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  const displayRef = useRef(null);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(latest).toLocaleString() + suffix;
      }
    });
  }, [spring, suffix]);

  return (
    <motion.span ref={ref}>
      <span ref={displayRef}>0{suffix}</span>
    </motion.span>
  );
}
