import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "../components/UI/SectionHeading";
import { timeline } from "../data/timeline";

const typeBadge = {
  education: "bg-blue-500/10 text-blue-300 border-blue-400/20",
  milestone: "bg-amber-500/10 text-amber-300 border-amber-400/20",
  project: "bg-violet-500/10 text-violet-300 border-violet-400/20",
  current: "bg-emerald-500/10 text-emerald-300 border-emerald-400/20",
};

export default function Journey() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="journey" className="section-pad container-px relative cv-auto">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 / Journey"
          title="An unconventional path — chosen on purpose."
          subtitle="Real growth happens when you take ownership of your learning. Here's how my story unfolded."
        />

        <div ref={ref} className="relative mx-auto max-w-4xl">
          {/* Center line */}
          <div className="absolute top-2 bottom-2 left-4 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute top-2 bottom-2 left-4 w-px bg-gradient-to-b from-violet-400 via-violet-500 to-fuchsia-500 shadow-[0_0_16px_rgba(168,85,247,0.8)] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start`}
                >
                  <div className="w-full pl-12 md:w-1/2 md:px-10 md:pl-10">
                    <div className="glass glow-border rounded-2xl p-6 transition hover:border-violet-500/40">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs font-semibold text-violet-400">
                          {item.year}
                        </span>
                        <span
                          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${typeBadge[item.type]}`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-soft-white">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 font-mono text-xs text-mist">
                        {item.place}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-mist">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Node */}
                  <div className="absolute top-6 left-4 -translate-x-1/2 md:left-1/2">
                    <div className="relative flex h-4 w-4 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
                      <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-violet-300 bg-violet-600" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
