import ParticleField from "./ParticleField";

export default function SceneBackground() {
  return (
    <>
      {/* Background Stage: Deep Midnight Purple Atmosphere + Zero-CPU CSS White Light Lines */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void"
        aria-hidden="true"
      >
        {/* Deep Midnight Purple studio depth washes */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 55% at 50% 0%, rgba(34, 9, 68, 0.34), transparent 70%), radial-gradient(ellipse 60% 50% at 88% 88%, rgba(22, 5, 46, 0.28), transparent 68%), radial-gradient(ellipse 55% 45% at 10% 52%, rgba(28, 7, 56, 0.2), transparent 62%)",
          }}
        />

        {/* Subtle architectural hairline grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px)",
            backgroundSize: "104px 104px",
            maskImage:
              "radial-gradient(ellipse 85% 70% at 50% 35%, black, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 70% at 50% 35%, black, transparent 85%)",
          }}
        />

        {/* Hardware-accelerated White Light Beams */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Horizontal Top White Beam */}
          <div className="absolute inset-x-0 top-[18%] h-px bg-white/[0.03]">
            <div className="h-full w-1/4 animate-beam-x bg-gradient-to-r from-transparent via-white/75 to-transparent will-change-transform" />
          </div>

          {/* Horizontal Lower White Beam (Reverse) */}
          <div className="absolute inset-x-0 top-[72%] h-px bg-white/[0.025]">
            <div className="h-full w-1/4 animate-beam-x-rev bg-gradient-to-r from-transparent via-white/55 to-transparent will-change-transform" />
          </div>

          {/* Vertical Left Architectural White Line */}
          <div className="absolute inset-y-0 left-[8%] hidden w-px bg-white/[0.03] lg:block">
            <div className="h-1/4 w-full animate-beam-y bg-gradient-to-b from-transparent via-white/65 to-transparent will-change-transform" />
          </div>

          {/* Vertical Right Architectural White Line */}
          <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/[0.03] lg:block">
            <div
              className="h-1/4 w-full animate-beam-y bg-gradient-to-b from-transparent via-white/55 to-transparent will-change-transform"
              style={{ animationDelay: "4s" }}
            />
          </div>

          {/* Static Architectural Guide Curves (Zero main-thread repaint cost) */}
          <svg
            viewBox="0 0 1440 900"
            fill="none"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full opacity-45"
          >
            <path
              d="M -60 140 C 420 360, 980 60, 1500 260"
              stroke="rgba(255,255,255,0.045)"
              strokeWidth="1"
            />
            <path
              d="M 1500 720 C 960 500, 480 820, -60 620"
              stroke="rgba(255,255,255,0.035)"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Lightweight starfield */}
        <ParticleField />
      </div>

      {/* TINY WHITE LINE GOING AROUND THE ENTIRE WEBSITE (Fixed Viewport Perimeter Frame, 100% GPU-composited) */}
      <div
        className="pointer-events-none fixed inset-1.5 z-40 overflow-hidden rounded-xl border border-white/[0.08] sm:inset-3 sm:rounded-2xl"
        aria-hidden="true"
      >
        {/* Subtle precision corner ticks */}
        <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-white/40" />
        <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-white/40" />
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-white/40" />
        <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-white/40" />

        {/* TOP EDGE TINY WHITE TRACER */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] overflow-hidden">
          <div className="h-full w-1/4 animate-perimeter-top bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_8px_#ffffff] will-change-transform" />
        </div>

        {/* RIGHT EDGE TINY WHITE TRACER */}
        <div className="absolute inset-y-0 right-0 w-[1.5px] overflow-hidden">
          <div className="h-1/4 w-full animate-perimeter-right bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_8px_#ffffff] will-change-transform" />
        </div>

        {/* BOTTOM EDGE TINY WHITE TRACER */}
        <div className="absolute inset-x-0 bottom-0 h-[1.5px] overflow-hidden">
          <div className="h-full w-1/4 animate-perimeter-bottom bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_8px_#ffffff] will-change-transform" />
        </div>

        {/* LEFT EDGE TINY WHITE TRACER */}
        <div className="absolute inset-y-0 left-0 w-[1.5px] overflow-hidden">
          <div className="h-1/4 w-full animate-perimeter-left bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_8px_#ffffff] will-change-transform" />
        </div>
      </div>
    </>
  );
}
