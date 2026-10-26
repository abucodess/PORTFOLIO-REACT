import { motion } from "framer-motion";
import { FiMapPin, FiBookOpen } from "react-icons/fi";
import SectionHeading from "../components/UI/SectionHeading";
import AnimatedCounter from "../components/UI/AnimatedCounter";
import { stats } from "../data/timeline";

export default function About() {
  return (
    <section id="about" className="section-pad cv-auto relative z-10">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Building things that feel intentional."
          description="A closer look at who I am, what I'm learning, and what I've already shipped."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* Profile card with original /images/profile.jpg and no switch portrait feature */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glow-border relative overflow-hidden rounded-3xl border border-line bg-surface/70"
          >
            <div className="absolute -right-16 -top-16 z-0 h-56 w-56 rounded-full bg-violet-600/20 blur-[80px]" />

            {/* Original photo */}
            <div className="relative aspect-[4/3.9] w-full overflow-hidden">
              <img
                src="/images/profile.jpg"
                alt="Abubacker, smiling, seated"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
                style={{ filter: "grayscale(0.35) contrast(1.08) saturate(1.1)" }}
              />
              <div
                className="absolute inset-0 mix-blend-color"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(124,58,237,0.55), rgba(88,28,135,0.65))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-violet-900/10" />
            </div>

            <div className="relative flex flex-col gap-6 p-8 pt-6">
              <div>
                <p className="font-display text-xl font-semibold text-soft-white">
                  Abubacker
                </p>
                <p className="font-mono text-xs text-violet-300">
                  @ Betterinu
                </p>
              </div>

              <p className="text-mist">
                I&apos;m passionate about building modern web applications,
                exploring artificial intelligence, and creating digital
                experiences that are fast, beautiful, and user-friendly.
                I&apos;m constantly learning and building projects that
                challenge my skills.
              </p>

              <div className="flex flex-col gap-3 border-t border-line pt-5 font-mono text-xs text-mist">
                <div className="flex items-center gap-2">
                  <FiBookOpen className="text-violet-400" />
                  BCA • Jain University (Online)
                </div>
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-violet-400" />
                  Kerala, India
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats + focus */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glow-border rounded-2xl border border-line bg-surface/60 p-6"
                >
                  <p className="font-display text-3xl font-semibold text-soft-white sm:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-mist-dim">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glow-border rounded-2xl border border-line bg-surface/60 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-violet-400">
                Currently
              </p>
              <p className="mt-3 text-mist">
                Deepening my full-stack skills toward{" "}
                <span className="text-soft-white">Python &amp; Django</span>,
                while studying the fundamentals of{" "}
                <span className="text-soft-white">machine learning</span> — the
                bridge between where I am and where I&apos;m headed as an AI
                engineer.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
