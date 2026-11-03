import { SiReact, SiJavascript, SiTypescript, SiRedux, SiTailwindcss, SiVite } from "react-icons/si";

const orbitIcons = [SiJavascript, SiTypescript, SiRedux, SiTailwindcss, SiVite];

export default function SkillOrbit() {
  return (
    <div className="relative mx-auto grid h-[280px] w-[280px] place-items-center sm:h-[340px] sm:w-[340px]">
      {/* orbit rings */}
      <div className="absolute inset-0 animate-spin-slower rounded-full border border-dashed border-violet-500/25" />
      <div className="absolute inset-8 animate-spin-slow rounded-full border border-violet-500/15" style={{ animationDirection: "reverse" }} />

      {/* center node */}
      <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full border border-violet-400/30 bg-gradient-to-br from-violet-700 to-violet-950 shadow-[0_0_36px_rgba(38,13,77,0.75)]">
        <SiReact size={34} className="text-soft-white" />
      </div>

      {/* orbiting icons */}
      <div className="absolute inset-0 scale-[0.82] sm:scale-100">
        <div className="h-full w-full animate-spin-slower will-change-transform">
          {orbitIcons.map((Icon, i) => {
            const angle = (i / orbitIcons.length) * 2 * Math.PI;
            const radius = 140;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 grid h-11 w-11 place-items-center rounded-full border border-line bg-surface-2 text-violet-300 shadow-[0_4px_16px_rgba(10,3,20,0.85)]"
                style={{
                  transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
                }}
              >
                <div
                  className="animate-spin-slower will-change-transform"
                  style={{ animationDirection: "reverse" }}
                >
                  <Icon size={18} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
