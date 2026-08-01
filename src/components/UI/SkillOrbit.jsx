import { SiReact, SiPython, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";

const orbitIcons = [SiPython, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb];

export default function SkillOrbit() {
  return (
    <div className="relative mx-auto grid h-[280px] w-[280px] place-items-center sm:h-[340px] sm:w-[340px]">
      {/* orbit rings */}
      <div className="absolute inset-0 animate-spin-slower rounded-full border border-dashed border-violet-500/25" />
      <div className="absolute inset-8 animate-spin-slow rounded-full border border-violet-500/15" style={{ animationDirection: "reverse" }} />

      {/* center node */}
      <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-[0_0_50px_rgba(124,58,237,0.6)]">
        <SiReact size={34} className="text-soft-white" />
      </div>

      {/* orbiting icons */}
      <div className="absolute inset-0 animate-spin-slower">
        {orbitIcons.map((Icon, i) => {
          const angle = (i / orbitIcons.length) * 2 * Math.PI;
          const radius = 140;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 grid h-11 w-11 place-items-center rounded-full border border-line bg-surface-2 text-violet-300 shadow-[0_0_20px_rgba(124,58,237,0.25)]"
              style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
            >
              <div className="animate-spin-slower" style={{ animationDirection: "reverse" }}>
                <Icon size={18} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
