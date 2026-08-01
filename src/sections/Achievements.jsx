import { useMemo } from "react";
import { motion } from "framer-motion";
import { FiCode, FiGitBranch, FiLayers, FiTrendingUp } from "react-icons/fi";
import SectionHeading from "../components/UI/SectionHeading";

const badges = [
  { icon: FiCode, label: "Projects Completed", value: "3+" },
  { icon: FiGitBranch, label: "GitHub Repositories", value: "12+" },
  { icon: FiLayers, label: "Technologies Learned", value: "15+" },
  { icon: FiTrendingUp, label: "Coding Streak", value: "180d" },
];

function useHeatmap() {
  return useMemo(() => {
    return Array.from({ length: 17 * 7 }).map(() => {
      const r = Math.random();
      if (r > 0.82) return 3;
      if (r > 0.62) return 2;
      if (r > 0.4) return 1;
      return 0;
    });
  }, []);
}

const intensity = [
  "bg-surface-2",
  "bg-violet-900/70",
  "bg-violet-600/80",
  "bg-violet-400",
];

export default function Achievements() {
  const cells = useHeatmap();

  return (
    <section className="section-pad relative z-10">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Consistency compounds."
          description="A snapshot of the momentum behind the milestones — shipped work, and the daily reps that got me there."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="grid grid-cols-2 gap-5">
            {badges.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glow-border rounded-2xl border border-line bg-surface/60 p-6"
              >
                <b.icon className="text-violet-400" size={20} />
                <p className="mt-4 font-display text-2xl font-semibold text-soft-white">
                  {b.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-mist-dim">
                  {b.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glow-border flex flex-col justify-between rounded-2xl border border-line bg-surface/60 p-6"
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-wider text-mist-dim">
                Coding activity
              </p>
              <p className="font-mono text-[11px] text-mist-dim">last 17 weeks</p>
            </div>

            <div className="mt-5 grid grid-flow-col grid-rows-7 gap-1.5">
              {cells.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (i % 17) * 0.02 }}
                  className={`h-3 w-3 rounded-[3px] ${intensity[v]}`}
                />
              ))}
            </div>

            <div className="mt-5 flex items-center justify-end gap-2 font-mono text-[11px] text-mist-dim">
              Less
              {intensity.map((c, i) => (
                <span key={i} className={`h-3 w-3 rounded-[3px] ${c}`} />
              ))}
              More
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
