import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const drawStaticStarfield = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const count = width < 768 ? 16 : 28;
      for (let i = 0; i < count; i++) {
        // Deterministic pseudo-random distribution so resize is instant and stable
        const seedX = Math.sin((i + 1) * 12.9898) * 43758.5453;
        const seedY = Math.sin((i + 1) * 78.233) * 43758.5453;
        const rx = seedX - Math.floor(seedX);
        const ry = seedY - Math.floor(seedY);

        const x = rx * width;
        const y = ry * height;
        const r = (i % 3) * 0.45 + 0.55;
        const alpha = (i % 4) * 0.07 + 0.14;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle =
          i % 5 === 0
            ? `rgba(244, 241, 250, ${alpha})`
            : `rgba(140, 102, 204, ${alpha})`;
        ctx.fill();
      }
    };

    drawStaticStarfield();
    window.addEventListener("resize", drawStaticStarfield, { passive: true });

    return () => {
      window.removeEventListener("resize", drawStaticStarfield);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      aria-hidden="true"
    />
  );
}

