import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../components/UI/SectionHeading";
import { timeline } from "../data/timeline";

gsap.registerPlugin(ScrollTrigger);

const typeColor = {
  education: "bg-blue-400",
  milestone: "bg-violet-400",
  project: "bg-fuchsia-400",
  current: "bg-emerald-400",
};

export default function Journey() {
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(progressRef.current, { height: "0%" });
      gsap.to(progressRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" className="section-pad relative z-10">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Journey"
          title="From first React component to production."
          description="A timeline of what I've learned, built, and shipped so far."
        />

        <div ref={trackRef} className="relative mt-16 pl-8 sm:pl-10">
          {/* base line */}
          <div className="absolute left-0 top-0 h-full w-px bg-line" />
          {/* progress line */}
          <div
            ref={progressRef}
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-violet-400 via-violet-500 to-violet-700 shadow-[0_0_12px_rgba(168,85,247,0.6)]"
          />

          <div className="flex flex-col gap-14">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span
                  className={`absolute -left-8 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full sm:-left-10 ${typeColor[item.type]}`}
                  style={{ boxShadow: "0 0 12px currentColor" }}
                />

                <p className="font-mono text-xs uppercase tracking-widest text-violet-400">
                  {item.year}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-soft-white">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-mist-dim">{item.place}</p>
                <p className="mt-3 max-w-xl text-mist">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
