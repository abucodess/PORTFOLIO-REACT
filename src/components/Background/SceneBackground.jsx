import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

export default function SceneBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void"
      aria-hidden="true"
    >
      {/* Atmospheric violet studio depth washes */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(124, 58, 237, 0.24), transparent 68%), radial-gradient(ellipse 55% 45% at 85% 90%, rgba(88, 28, 135, 0.16), transparent 65%), radial-gradient(ellipse 50% 40% at 12% 55%, rgba(168, 85, 247, 0.09), transparent 60%)",
        }}
      />

      {/* Architectural hairline grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 50% 35%, black, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 50% 35%, black, transparent 85%)",
        }}
      />

      {/* Animated White & Violet Light Streaks ("white lines coming from here and there") */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Horizontal Top Beam */}
        <div className="absolute inset-x-0 top-[18%] h-px bg-white/[0.04]">
          <div className="h-full w-1/3 animate-beam-x bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
        </div>

        {/* Horizontal Mid-Lower Beam (Reverse) */}
        <div className="absolute inset-x-0 top-[68%] h-px bg-white/[0.03]">
          <div className="h-full w-1/4 animate-beam-x-rev bg-gradient-to-r from-transparent via-violet-200/65 to-transparent shadow-[0_0_12px_rgba(216,180,254,0.8)]" />
        </div>

        {/* Vertical Left Architectural Guide Line */}
        <div className="absolute inset-y-0 left-[12%] hidden w-px bg-white/[0.04] lg:block">
          <div className="h-1/4 w-full animate-beam-y bg-gradient-to-b from-transparent via-white/65 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.75)]" />
        </div>

        {/* Vertical Right Architectural Guide Line */}
        <div className="absolute inset-y-0 right-[12%] hidden w-px bg-white/[0.04] lg:block">
          <div
            className="h-1/3 w-full animate-beam-y bg-gradient-to-b from-transparent via-violet-200/60 to-transparent"
            style={{ animationDelay: "3.5s" }}
          />
        </div>

        {/* Sweeping Diagonal & Curved White Light Lines */}
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-55"
        >
          <defs>
            <linearGradient id="whiteGlowLine1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="35%" stopColor="rgba(255,255,255,0.28)" />
              <stop offset="65%" stopColor="rgba(192,132,252,0.32)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <linearGradient id="whiteGlowLine2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="45%" stopColor="rgba(255,255,255,0.22)" />
              <stop offset="70%" stopColor="rgba(168,85,247,0.28)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          {/* Sweeping arc from top-left toward center-right */}
          <motion.path
            d="M -80 120 Q 520 340 1520 180"
            stroke="url(#whiteGlowLine1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 0.85, 0.25] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          {/* Sweeping arc from bottom-left toward upper-right */}
          <motion.path
            d="M -60 780 Q 680 460 1500 640"
            stroke="url(#whiteGlowLine2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 0.75, 0.2] }}
            transition={{
              duration: 7.5,
              delay: 1.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Lightweight starfield */}
      <ParticleField />
    </div>
  );
}
