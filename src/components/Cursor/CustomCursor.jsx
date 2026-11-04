import { useEffect, useRef, useState } from "react";

function isFinePointer() {
  if (typeof window === "undefined") return false;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return fine && !reduced;
}

export default function CustomCursor() {
  const [enabled] = useState(isFinePointer);
  const dotWrapRef = useRef(null);
  const ringWrapRef = useRef(null);
  const dotInnerRef = useRef(null);
  const ringInnerRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor");

    const state = {
      targetX: -100,
      targetY: -100,
      ringX: -100,
      ringY: -100,
      rafId: 0,
      running: false,
      hovered: false,
    };

    const tick = () => {
      state.ringX += (state.targetX - state.ringX) * 0.28;
      state.ringY += (state.targetY - state.ringY) * 0.28;

      if (ringWrapRef.current) {
        ringWrapRef.current.style.transform = `translate3d(${state.ringX.toFixed(
          1
        )}px, ${state.ringY.toFixed(1)}px, 0)`;
      }

      const dx = Math.abs(state.targetX - state.ringX);
      const dy = Math.abs(state.targetY - state.ringY);

      if (dx > 0.15 || dy > 0.15) {
        state.rafId = window.requestAnimationFrame(tick);
      } else {
        state.running = false;
      }
    };

    const handlePointerMove = (e) => {
      state.targetX = e.clientX;
      state.targetY = e.clientY;

      if (dotWrapRef.current) {
        dotWrapRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      if (!state.running) {
        state.running = true;
        state.rafId = window.requestAnimationFrame(tick);
      }
    };

    const handlePointerOver = (e) => {
      const nextHovered = Boolean(
        e.target?.closest?.("a, button, [data-cursor]")
      );
      if (nextHovered === state.hovered) return;
      state.hovered = nextHovered;

      if (ringInnerRef.current) {
        ringInnerRef.current.className = nextHovered
          ? "h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/80 bg-violet-500/15 transition-[width,height,background-color,border-color] duration-150"
          : "h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/45 bg-transparent transition-[width,height,background-color,border-color] duration-150";
      }
      if (dotInnerRef.current) {
        dotInnerRef.current.className = nextHovered
          ? "h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-violet-300 transition-transform duration-150"
          : "h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full bg-violet-300 transition-transform duration-150";
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });

    return () => {
      if (state.rafId) window.cancelAnimationFrame(state.rafId);
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={ringWrapRef}
        className="fixed left-0 top-0 will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          ref={ringInnerRef}
          className="h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/45 bg-transparent transition-[width,height,background-color,border-color] duration-150"
        />
      </div>

      <div
        ref={dotWrapRef}
        className="fixed left-0 top-0 will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          ref={dotInnerRef}
          className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 scale-100 rounded-full bg-violet-300 transition-transform duration-150"
        />
      </div>
    </div>
  );
}

