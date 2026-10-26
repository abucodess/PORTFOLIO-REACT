import { motion } from "framer-motion";
import SectionHeading from "../components/UI/SectionHeading";
import AnimatedCounter from "../components/UI/AnimatedCounter";
import { stats } from "../data/timeline";

const WEEKS = 28;
const DAYS = 7;

// Deterministic contribution levels so React Compiler remains 100% pure
const HEATMAP_LEVELS = Array.from({ length: WEEKS }, (_, w) =>
  Array.from({ length: DAYS }, (_, d) => {
    const seed = Math.sin((w + 1) * 12.9898 + (d + 1) * 78.233) * 43758.5453;
    const r = seed - Math.floor(seed);
    const boost = w > WEEKS * 0.5 ? 0.18 : 0;
    const v = r + boost;
    if (v > 0.85) return 4;
    if (v > 0.65) return 3;
    if (v > 0.42) return 2;
    if (v > 0.22) return 1;
    return 0;
  })
);

const levelClass = [
  "bg-white/[0.04]",
  "bg-violet-950/80",
  "bg-violet-800/80",
  "bg-violet-600",
  "bg-violet-400 shadow-[0_0_8px_rgba(192,132,252,0.7)]",
];

export default function Achievements() {
  return (
    <section className="section-pad container-px relative cv-auto">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="05 / Consistency"
          title="Momentum built one commit at a time."
          subtitle="Numbers don't tell the whole story — but consistency always leaves a trail."
        />

        {/* Counters */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass glow-border rounded-3xl p-7"
            >
              <div className="font-display text-4xl font-bold tracking-tight text-soft-white sm:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-mist">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass glow-border mt-8 overflow-hidden rounded-3xl p-6 sm:p-8"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-violet-400">
                // Activity Matrix
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-soft-white">
                Daily Building &amp; Learning Streak
              </h3>
            </div>
            <a
              href="https://github.com/abubacker8593"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GitHub"
              className="font-mono text-xs text-violet-300 underline-offset-4 hover:underline"
            >
              @abubacker8593 ↗
            </a>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="inline-flex gap-1.5">
              {HEATMAP_LEVELS.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((lvl, dIdx) => (
                    <div
                      key={dIdx}
                      className={`h-3.5 w-3.5 rounded-[4px] transition duration-300 hover:scale-125 ${levelClass[lvl]}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-mist-dim">
            <span>Consistent shipping &amp; DSA practice</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              {levelClass.map((c, i) => (
                <span key={i} className={`h-2.5 w-2.5 rounded-xs ${c}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
