import { useEffect, useRef } from "react";
import ParticleField from "./ParticleField";

export default function SceneBackground() {
  const spotRef = useRef(null);

  useEffect(() => {
    const handle = (e) => {
      if (spotRef.current) {
        spotRef.current.style.setProperty("--spot-x", `${e.clientX}px`);
        spotRef.current.style.setProperty("--spot-y", `${e.clientY}px`);
      }
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-void">
      {/* base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(124,58,237,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_100%,rgba(88,28,135,0.16),transparent_60%)]" />

      {/* animated grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)",
        }}
      />

      {/* floating blurred orbs */}
      <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] animate-float-slow rounded-full bg-violet-700/25 blur-[110px]" />
      <div className="absolute right-[-6rem] top-1/3 h-[24rem] w-[24rem] animate-float rounded-full bg-fuchsia-600/15 blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 h-[22rem] w-[22rem] animate-float-slow rounded-full bg-violet-500/15 blur-[100px]" style={{ animationDelay: "-3s" }} />

      {/* particle field */}
      <ParticleField />

      {/* mouse-reactive spotlight */}
      <div
        ref={spotRef}
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(168,85,247,0.08), transparent 70%)",
        }}
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
