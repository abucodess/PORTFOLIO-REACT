import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/UI/SectionHeading";
import TiltCard from "../components/UI/TiltCard";
import SkillOrbit from "../components/UI/SkillOrbit";
import { skillGroups } from "../data/skills";

export default function Skills() {
  // Map of skillName -> tick counter so tapping triggers a 1.5s glow that slowly fades away
  const [glowingSkills, setGlowingSkills] = useState({});
  const timersRef = useRef({});

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      Object.values(timers).forEach((timerId) => clearTimeout(timerId));
    };
  }, []);

  const triggerSkillGlow = useCallback((skillName) => {
    if (timersRef.current[skillName]) {
      clearTimeout(timersRef.current[skillName]);
    }

    setGlowingSkills((prev) => ({
      ...prev,
      [skillName]: (prev[skillName] || 0) + 1,
    }));

    timersRef.current[skillName] = setTimeout(() => {
      setGlowingSkills((prev) => {
        const next = { ...prev };
        delete next[skillName];
        return next;
      });
      delete timersRef.current[skillName];
    }, 1500);
  }, []);

  return (
    <section id="skills" className="section-pad cv-auto relative z-10">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-center">
          <SectionHeading
            eyebrow="Skills"
            title="A toolkit built for shipping, not just learning."
            description="From pixel-perfect interfaces to the backend that powers them — tap any skill below to inspect."
          />
          <SkillOrbit />
        </div>

        {/* Responsive 3-Area Skill Cards: 1 col on mobile, balanced 2-col on tablet (3rd spans full width in 2-col subgrid), 3-col on desktop */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const isThirdCard = gi === 2;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: (gi % 3) * 0.08 }}
                className={`min-w-0 ${
                  isThirdCard ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <TiltCard className="group flex h-full flex-col p-4 sm:p-6">
                  {/* Top architectural hairline */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                  <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-3.5 sm:mb-5">
                    <h3 className="font-display text-base font-semibold text-soft-white sm:text-lg">
                      {group.label}
                    </h3>
                    <span className="shrink-0 rounded-md border border-violet-400/30 bg-violet-950/50 px-2 py-0.5 font-mono text-[11px] text-violet-300">
                      {group.eyebrow}
                    </span>
                  </div>

                  <div
                    className={`grid grid-cols-1 gap-2.5 ${
                      isThirdCard ? "md:grid-cols-2 lg:grid-cols-1" : ""
                    }`}
                  >
                    {group.skills.map((skill) => {
                      const glowTick = glowingSkills[skill.name];
                      const isGlowing = Boolean(glowTick);

                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onClick={() => triggerSkillGlow(skill.name)}
                          data-cursor="Tap"
                          className="group/skill relative flex w-full cursor-pointer items-center gap-3 overflow-hidden rounded-xl border border-white/[0.06] bg-[#06020d]/60 px-3 py-2.5 text-left transition-all duration-700 ease-out select-none hover:border-violet-400/40 hover:bg-violet-600/10 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                        >
                          {/* 1.5s Glowing Border + Box-Shadow + Radial Aura that slowly fades away */}
                          {isGlowing && (
                            <motion.span
                              key={glowTick}
                              initial={{ opacity: 1 }}
                              animate={{ opacity: [1, 0.82, 0.45, 0] }}
                              transition={{
                                duration: 1.5,
                                times: [0, 0.25, 0.65, 1],
                                ease: "easeOut",
                              }}
                              className="pointer-events-none absolute inset-0 rounded-xl border border-violet-300"
                              style={{
                                background:
                                  "radial-gradient(circle at 30% 50%, rgba(167, 139, 250, 0.38) 0%, rgba(131, 56, 236, 0.22) 55%, rgba(255, 255, 255, 0.06) 100%)",
                                boxShadow:
                                  "0 0 28px rgba(131, 56, 236, 0.8), 0 0 10px rgba(255, 255, 255, 0.45), inset 0 0 22px rgba(181, 131, 255, 0.35)",
                              }}
                            />
                          )}

                          {/* Skill Icon Box */}
                          <div
                            className={`relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-all duration-700 ease-out ${
                              isGlowing
                                ? "scale-105 bg-violet-500 text-white shadow-[0_0_18px_rgba(167,139,250,0.9)]"
                                : "bg-surface-2 text-violet-300 group-hover/skill:scale-105 group-hover/skill:text-violet-200"
                            }`}
                          >
                            <skill.icon size={17} />
                          </div>

                          {/* Skill Name + Subtitle (Always visible & responsive) */}
                          <div className="relative z-10 min-w-0 flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5">
                              <p
                                className={`text-xs font-medium leading-snug transition-colors duration-700 ease-out sm:text-sm ${
                                  isGlowing ? "text-white" : "text-soft-white"
                                }`}
                              >
                                {skill.name}
                              </p>
                              <span
                                className={`shrink-0 font-mono text-[9.5px] uppercase tracking-wider transition-colors duration-700 ease-out sm:text-[10px] ${
                                  isGlowing
                                    ? "font-semibold text-emerald-300"
                                    : "text-violet-300/80"
                                }`}
                              >
                                {skill.level}
                              </span>
                            </div>

                            <p
                              className={`mt-0.5 truncate font-mono text-[10.5px] transition-colors duration-700 ease-out sm:text-[11px] ${
                                isGlowing
                                  ? "text-violet-100"
                                  : "text-mist-dim group-hover/skill:text-mist"
                              }`}
                            >
                              {skill.exp}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
