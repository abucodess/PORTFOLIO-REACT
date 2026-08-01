import { motion } from "framer-motion";
import SectionHeading from "../components/UI/SectionHeading";
import TiltCard from "../components/UI/TiltCard";
import SkillOrbit from "../components/UI/SkillOrbit";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative z-10">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-center">
          <SectionHeading
            eyebrow="Skills"
            title="A toolkit built for shipping, not just learning."
            description="From pixel-perfect interfaces to the backend that powers them — here's what I reach for, and what I'm reaching toward next."
          />
          <SkillOrbit />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (gi % 3) * 0.1 }}
            >
              <TiltCard className="group h-full p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-soft-white">
                    {group.label}
                  </h3>
                  <span className="font-mono text-xs text-violet-400">{group.eyebrow}</span>
                </div>

                <div className="flex flex-col gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill flex items-center gap-3 rounded-xl border border-transparent px-2 py-2 transition-colors hover:border-line hover:bg-violet-600/5"
                    >
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-2 text-violet-300 transition-transform duration-300 group-hover/skill:scale-110 group-hover/skill:text-violet-200">
                        <skill.icon size={17} />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm text-soft-white">{skill.name}</p>
                        <p className="truncate font-mono text-[11px] text-mist-dim opacity-0 transition-opacity duration-300 group-hover/skill:opacity-100">
                          {skill.exp}
                        </p>
                      </div>
                      <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-wider text-mist-dim">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
