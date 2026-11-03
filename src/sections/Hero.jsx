import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiDownload,
  FiGlobe,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile, getWhatsAppUrl } from "../data/profile";

const HERO_STATS = [
  { value: "03+", label: "LIVE DEPLOYED\nCLIENT & STORE APPS" },
  { value: "02", label: "COMMERCIAL\nCLIENT SYSTEMS" },
  { value: "16+", label: "MODERN FRONTEND\nTECHNOLOGIES" },
];

export default function Hero() {
  const whatsappHref = getWhatsAppUrl();

  const scrollTo = (id) => {
    window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: id }));
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-void pt-24 pb-12 sm:pt-28 lg:pt-32"
    >
      {/* Dramatic Deep Violet Studio Backlight Behind "PORTFOLIO" & Portrait */}
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] -z-0 h-[540px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.45) 0%, rgba(88, 28, 135, 0.25) 45%, rgba(5, 5, 5, 0) 75%)",
        }}
        aria-hidden="true"
      />

      {/* Animated White Architectural Light Lines Inside Hero Stage */}
      <svg
        viewBox="0 0 1440 860"
        fill="none"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroWhiteLine1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.45)" />
            <stop offset="100%" stopColor="rgba(192,132,252,0)" />
          </linearGradient>
          <linearGradient id="heroWhiteLine2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Sweeping white light curve from left toward right callout */}
        <motion.path
          d="M 80 620 C 380 560, 740 310, 1180 355"
          stroke="url(#heroWhiteLine1)"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.75 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        />

        {/* Secondary white light arc across upper stage */}
        <motion.path
          d="M 220 140 Q 720 340 1320 190"
          stroke="url(#heroWhiteLine2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: 2.6, delay: 0.3, ease: "easeOut" }}
        />
      </svg>

      <div className="container-px relative z-20 mx-auto flex max-w-7xl flex-col justify-between">
        {/* TOP EDITORIAL MICRO-HEADER BAR (Matches top strip of reference image) */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[10px] tracking-[0.22em] uppercase sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-violet-400">
              FRONTEND DEVELOPER
            </span>
            <span className="text-white/30">/</span>
            <span className="text-soft-white/80">REACT.JS CREATOR</span>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="WhatsApp"
            className="group inline-flex items-center gap-2 text-soft-white/90 transition-colors hover:text-violet-300"
          >
            <span>AVAILABLE FOR FREELANCE</span>
            <span className="text-violet-400 transition-transform duration-300 group-hover:rotate-90">
              ✦
            </span>
          </a>
        </div>

        {/* MAIN EDITORIAL STAGE: GIANT "PORTFOLIO" BACKDROP + STUDIO PORTRAIT + LEFT/RIGHT OVERLAYS */}
        <div className="relative mt-4 flex min-h-[540px] flex-col justify-between sm:min-h-[620px] lg:min-h-[680px]">
          {/* MONUMENTAL CONDENSED "PORTFOLIO" BACKDROP TEXT (Layered behind portrait) */}
          <div
            className="pointer-events-none relative z-10 select-none overflow-hidden text-center"
            aria-hidden="true"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-condensed text-[clamp(5.4rem,19.5vw,18.5rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.03em] text-hero-backdrop"
            >
              PORTFOLIO
            </motion.div>
          </div>

          {/* CENTER STUDIO PORTRAIT OF ABOOBACKER (Overlapping the giant PORTFOLIO letters in 3D depth) */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none relative z-20 -mt-16 mx-auto flex w-full max-w-[540px] justify-center sm:-mt-28 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-10 lg:mt-0 lg:max-w-[650px] lg:items-end"
          >
            {/* Subtle glowing rim halo directly behind head & shoulders */}
            <div
              className="absolute left-1/2 top-1/2 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] sm:h-[420px] sm:w-[420px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(168, 85, 247, 0.42) 0%, rgba(124, 58, 237, 0.15) 60%, transparent 80%)",
              }}
              aria-hidden="true"
            />

            <picture className="w-full">
              <source srcSet={profile.heroPortraitWebp} type="image/webp" />
              <img
                src={profile.heroPortraitPng}
                alt="Aboobacker — Frontend Developer & React.js Creator"
                width="800"
                height="700"
                fetchPriority="high"
                decoding="async"
                referrerPolicy="no-referrer"
                className="mx-auto block h-auto w-full max-h-[440px] object-contain object-bottom drop-shadow-[0_24px_65px_rgba(0,0,0,0.95)] sm:max-h-[540px] lg:max-h-[610px]"
              />
            </picture>

            {/* Bottom Blend Vignette so Portrait Merges Seamlessly into #050505 */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-void via-void/80 to-transparent"
              aria-hidden="true"
            />
          </motion.div>

          {/* FOREGROUND 12-COLUMN OVERLAY GRID (Left Identity Column + Right Callout & Stats Column) */}
          <div className="relative z-30 mt-auto grid grid-cols-1 items-end gap-10 pt-4 lg:grid-cols-12 lg:gap-6 lg:pb-6">
            {/* LEFT COLUMN: "Hello, I'm ABOOBACKER" + Role + Bio + Freelance CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start lg:col-span-5"
            >
              <p className="font-serif-editorial text-2xl italic text-soft-white/90 sm:text-3xl">
                Hello, I&apos;m
              </p>

              <h1 className="mt-1 font-condensed text-[clamp(3.4rem,7vw,5.75rem)] font-extrabold uppercase leading-[0.88] tracking-tight text-soft-white">
                ABOOBACKER
                <span className="text-violet-400">.</span>
              </h1>

              <p className="mt-3 font-condensed text-lg font-bold uppercase tracking-[0.08em] text-violet-400 sm:text-xl">
                FRONTEND DEVELOPER &amp; REACT.JS CREATOR
              </p>

              <p className="mt-3 max-w-sm text-xs leading-relaxed text-mist sm:text-[13.5px]">
                I engineer fast, high-converting e-commerce platforms and
                responsive client web applications with{" "}
                <span className="text-soft-white">
                  React.js, Redux Toolkit, TypeScript, and Tailwind CSS
                </span>{" "}
                — combining clean architecture with smooth interactions that
                drive real business results.
              </p>

              {/* Primary Freelance & Portfolio CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="WhatsApp"
                  className="group inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-soft-white shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-200 hover:bg-violet-500 whitespace-nowrap shrink-0"
                >
                  <FaWhatsapp className="text-sm text-emerald-300" />
                  <span>Let&apos;s Talk</span>
                  <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  type="button"
                  data-cursor="Projects"
                  onClick={() => scrollTo("projects")}
                  className="group inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-soft-white backdrop-blur-md transition-colors duration-200 hover:border-violet-400/60 hover:bg-violet-500/15 whitespace-nowrap shrink-0"
                >
                  <span>Selected Work</span>
                  <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                <a
                  href={profile.resumeUrl}
                  download="Aboobacker_Frontend_Developer_Resume.pdf"
                  data-cursor="Resume"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-3 font-mono text-[11px] text-mist transition-colors duration-200 hover:border-white/30 hover:text-soft-white whitespace-nowrap shrink-0"
                >
                  <FiDownload size={13} />
                  <span>Resume</span>
                </a>
              </div>

              {/* Bottom-left Worldwide Availability Tag */}
              <div className="mt-6 flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-soft-white/80">
                <FiGlobe className="text-violet-400" size={14} />
                <span>AVAILABLE WORLDWIDE · KERALA, INDIA</span>
              </div>
            </motion.div>

            {/* CENTER SPACER FOR PORTRAIT ON DESKTOP */}
            <div className="hidden lg:col-span-3 lg:block" />

            {/* RIGHT COLUMN: Floating Star Callout + Stacked Metrics (Matches reference right side) */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between gap-8 lg:col-span-4 lg:items-end"
            >
              {/* Floating Star Callout Badge ("Turning ideas into powerful digital experiences.") */}
              <div className="flex items-center gap-4 self-start lg:mr-4 lg:mb-6 lg:self-end">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/[0.03] backdrop-blur-md">
                  <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-violet-400/50" />
                  <span className="text-base text-soft-white">✦</span>
                </div>
                <p className="max-w-[185px] text-xs leading-relaxed text-soft-white/90">
                  Turning ideas into powerful, conversion-ready digital
                  experiences.
                </p>
              </div>

              {/* Stacked KPI Counters with Hairline Dividers */}
              <div className="w-full max-w-[260px] divide-y divide-white/12 border-y border-white/12">
                {HERO_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between gap-4 py-3.5"
                  >
                    <span className="font-condensed text-4xl font-extrabold tabular-nums tracking-tight text-violet-400 sm:text-[2.6rem]">
                      {stat.value}
                    </span>
                    <span className="whitespace-pre-line text-right font-mono text-[10px] leading-tight tracking-[0.14em] uppercase text-mist">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
