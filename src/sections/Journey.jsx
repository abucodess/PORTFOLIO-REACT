import { motion } from "framer-motion";
import {
  FiSearch,
  FiLayers,
  FiPenTool,
  FiCode,
  FiSend,
  FiArrowRight,
} from "react-icons/fi";
import { workProcess } from "../data/timeline";
import { resumePills } from "../data/skills";
import { getWhatsAppUrl } from "../data/profile";

const PROCESS_ICONS = [FiSearch, FiLayers, FiPenTool, FiCode, FiSend];

export default function Journey() {
  const whatsappHref = getWhatsAppUrl(
    "Hi Aboobacker! I'd love to discuss a freelance project with you."
  );

  return (
    <section
      id="journey"
      className="section-pad relative z-10 border-t border-white/10"
    >
      <div className="container-px mx-auto max-w-7xl">
        {/* 3-COLUMN ARCHITECTURAL GRID MATCHING REFERENCE IMAGE:
            Col 1: Experience, Education & Skills
            Col 2: 5-Step Work Process
            Col 3: Editorial Philosophy & Freelance CTA Card */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* COLUMN 1 (5 cols): EXPERIENCE, EDUCATION & SKILLS */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <h2 className="font-condensed text-2xl font-extrabold uppercase tracking-wide text-soft-white sm:text-3xl">
                EXPERIENCE &amp; EDUCATION
              </h2>

              <div className="mt-6 space-y-6">
                {/* Experience Item 1: BetterInu Internship */}
                <div className="border-b border-white/10 pb-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400">
                    EXPERIENCE
                  </span>
                  <div className="mt-2 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-base font-bold text-soft-white">
                      Frontend Developer Intern
                    </h3>
                    <span className="font-mono text-xs tabular-nums text-violet-400 whitespace-nowrap shrink-0">
                      Jan 2026 – Present
                    </span>
                  </div>
                  <p className="mt-0.5 font-mono text-xs text-mist">
                    BetterInu · Remote
                  </p>
                  <p className="mt-2.5 text-xs leading-relaxed text-mist">
                    Engineered responsive, mobile-friendly web interfaces using
                    React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Built
                    reusable React components and integrated REST APIs with
                    Axios in a collaborative Git/GitHub workflow.
                  </p>
                </div>

                {/* Education Item: BCA at Jain University */}
                <div className="border-b border-white/10 pb-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400">
                    EDUCATION
                  </span>
                  <div className="mt-2 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-base font-bold text-soft-white">
                      Bachelor of Computer Applications (BCA)
                    </h3>
                    <span className="font-mono text-xs tabular-nums text-violet-400 whitespace-nowrap shrink-0">
                      2026 – 2029
                    </span>
                  </div>
                  <p className="mt-0.5 font-mono text-xs text-mist">
                    JAIN (Deemed-to-be University) · Online Program
                  </p>
                </div>
              </div>

              {/* SKILLS GRID (Matches bordered skill matrix in reference image) */}
              <div className="mt-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400">
                  CORE TECHNICAL STACK
                </span>

                <div className="mt-3.5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {resumePills.slice(0, 12).map((skill) => (
                    <div
                      key={skill}
                      className="rounded-lg border border-white/12 bg-white/[0.02] px-3 py-2 text-center font-mono text-[10px] uppercase tracking-wider text-soft-white/90 transition-colors hover:border-violet-400/60 hover:bg-violet-500/10 whitespace-nowrap truncate"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2 (4 cols): 5-STEP WORK PROCESS WITH VERTICAL WHITE LIGHT LINE */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 lg:border-x lg:border-white/10 lg:px-7"
          >
            <h2 className="font-condensed text-2xl font-extrabold uppercase tracking-wide text-soft-white sm:text-3xl">
              WORK PROCESS
            </h2>

            <div className="relative mt-6 space-y-6">
              {/* Vertical connecting light line */}
              <div
                className="pointer-events-none absolute bottom-5 left-[39px] top-5 w-px bg-gradient-to-b from-violet-400 via-white/30 to-violet-500/40"
                aria-hidden="true"
              />

              {workProcess.map((item, idx) => {
                const Icon = PROCESS_ICONS[idx] || FiCode;
                return (
                  <div key={item.step} className="relative flex items-start gap-3.5">
                    <span className="w-5 pt-2 font-condensed text-lg font-extrabold tabular-nums text-violet-400 shrink-0">
                      {item.step}
                    </span>

                    <div className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-void text-soft-white shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                      <Icon size={14} className="text-violet-300" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-condensed text-base font-bold uppercase tracking-wider text-violet-400">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-mist">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* COLUMN 3 (3 cols): EDITORIAL QUOTE & FREELANCE CTA CARD (Matches right card in reference) */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between overflow-hidden rounded-2xl border border-violet-500/30 p-7 lg:col-span-3"
            style={{
              background:
                "radial-gradient(circle at 85% 20%, rgba(124, 58, 237, 0.42), transparent 60%), linear-gradient(165deg, #1a0b33 0%, #090612 65%, #050505 100%)",
            }}
          >
            <div>
              <span className="font-serif-editorial text-6xl leading-none text-violet-400">
                &ldquo;
              </span>

              <blockquote className="mt-2 font-display text-lg font-medium leading-snug text-soft-white">
                Good frontend engineering is not just how it looks — it is how
                fast, cleanly, and effortlessly it works for your users.
              </blockquote>

              <p className="mt-6 font-serif-editorial text-2xl italic text-soft-white/85">
                Aboobacker
              </p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-300">
                Frontend Developer &amp; Software Engineer
              </p>
            </div>

            <div className="mt-10 border-t border-white/15 pt-5">
              <p className="font-condensed text-sm font-bold uppercase tracking-wider text-soft-white">
                LET&apos;S CREATE
                <br />
                SOMETHING GREAT
                <br />
                TOGETHER
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="WhatsApp"
                className="group mt-4 inline-flex items-center gap-2 font-mono text-xs text-violet-300 transition-colors hover:text-white"
              >
                <span>Start a Conversation</span>
                <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
