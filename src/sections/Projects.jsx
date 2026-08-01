import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../components/UI/SectionHeading";
import TiltCard from "../components/UI/TiltCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative z-10">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects that shipped, not just prototypes."
          description="Each one solved a real problem — for a real user, or for myself learning something new."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="group flex h-full flex-col" intensity={8}>
                {/* animated preview */}
                <div className="relative h-44 overflow-hidden border-b border-line">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-25 transition-opacity duration-500 group-hover:opacity-45`}
                  />
                  <div className="absolute inset-0 opacity-40 transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 40%), linear-gradient(rgba(168,85,247,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.25) 1px, transparent 1px)",
                      backgroundSize: "auto, 28px 28px, 28px 28px",
                    }}
                  />
                  <span className="absolute right-4 top-4 font-mono text-4xl font-bold text-soft-white/10">
                    {project.index}
                  </span>
                  <span className="absolute bottom-4 left-5 font-display text-xl font-semibold text-soft-white">
                    {project.title}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6">
                  <p className="flex-1 text-sm text-mist">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 border-t border-line pt-5">
                    <a
                      href={project.github}
                      data-cursor="link"
                      className="flex items-center gap-2 font-mono text-xs text-mist transition-colors hover:text-soft-white"
                    >
                      <FiGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      data-cursor="link"
                      className="ml-auto flex items-center gap-1 font-mono text-xs text-violet-300 transition-colors hover:text-violet-200"
                    >
                      Live <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
