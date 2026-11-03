export default function ProjectArtwork({ project, size = "card" }) {
  const isHero = size === "hero";
  const heightClass = isHero
    ? "min-h-[320px] sm:min-h-[440px]"
    : "h-56";

  if (project.previewType === "solex") {
    return (
      <div
        className={`relative w-full overflow-hidden bg-[#06020c] select-none ${heightClass}`}
      >
        <img
          src={project.coverImage || "/assets/aistudio/image_4c3822eb.png"}
          alt={`${project.title} interface preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,2,15,0.08) 0%, rgba(8,2,15,0.22) 55%, rgba(6,1,12,0.88) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-between px-4">
          <span className="inline-block rounded border border-white/20 bg-[#08020f]/85 px-2.5 py-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
            Storefront (Dark) + Admin (Light)
          </span>
          <span className="inline-flex items-center gap-1.5 rounded border border-violet-400/35 bg-[#08020f]/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-violet-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>5 Live Screens</span>
          </span>
        </div>
      </div>
    );
  }

  if (project.previewType === "fuwa") {
    return (
      <div
        className={`relative w-full overflow-hidden bg-[#0a0414] select-none ${heightClass}`}
      >
        <img
          src={project.coverImage || "/assets/aistudio/image_657aeda5.png"}
          alt={`${project.title} interface preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,2,15,0.12) 0%, rgba(8,2,15,0.28) 55%, rgba(6,1,12,0.88) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-between px-4">
          <span className="inline-block rounded border border-white/20 bg-[#08020f]/85 px-2.5 py-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
            TanStack Start · TypeScript
          </span>
          <span className="inline-flex items-center gap-1.5 rounded border border-emerald-400/30 bg-[#08020f]/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-emerald-300 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>3 Live Screens</span>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#06020b] select-none ${heightClass}`}
    >
      <img
        src={project.coverImage || "/assets/aistudio/image_f946f90b.png"}
        alt={`${project.title} interface preview`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,2,15,0.08) 0%, rgba(8,2,15,0.24) 55%, rgba(6,1,12,0.88) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-between px-4">
        <span className="inline-block rounded border border-white/20 bg-[#08020f]/85 px-2.5 py-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
          React.js · Tailwind · Vite
        </span>
        <span className="inline-flex items-center gap-1.5 rounded border border-amber-400/35 bg-[#08020f]/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-amber-300 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>2 Live Screens</span>
        </span>
      </div>
    </div>
  );
}
