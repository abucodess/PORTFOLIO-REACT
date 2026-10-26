import ParticleField from "./ParticleField";

export default function SceneBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void" aria-hidden="true">
      {/* GPU-friendly static atmospheric radial washes */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 55% at 50% -5%, rgba(124, 58, 237, 0.22), transparent 65%), radial-gradient(ellipse 60% 50% at 85% 95%, rgba(88, 28, 135, 0.16), transparent 65%), radial-gradient(ellipse 55% 45% at 15% 60%, rgba(168, 85, 247, 0.08), transparent 60%)",
        }}
      />

      {/* Subtle architectural grid masked toward the center */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168, 85, 247, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 75% 55% at 50% 25%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 55% at 50% 25%, black, transparent 80%)",
        }}
      />

      {/* Lightweight starfield */}
      <ParticleField />
    </div>
  );
}
