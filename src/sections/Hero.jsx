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
  {
    value: "03+",
    shortLabel: "LIVE APPS",
    label: "LIVE DEPLOYED\nCLIENT & STORE APPS",
  },
  {
    value: "02",
    shortLabel: "CLIENT SYSTEMS",
    label: "COMMERCIAL\nCLIENT SYSTEMS",
  },
  {
    value: "16+",
    shortLabel: "TECHNOLOGIES",
    label: "MODERN FRONTEND\nTECHNOLOGIES",
  },
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
      className="relative overflow-hidden bg-void pt-16 pb-8 sm:pt-20 sm:pb-10 lg:min-h-[100svh] lg:pt-[76px] lg:pb-8 flex flex-col justify-between"
    >
      {/* Dramatic Deep Midnight Purple Studio Backlight Behind "PORTFOLIO" & Portrait */}
      <div
        className="pointer-events-none absolute left-1/2 top-[44%] -z-0 h-[480px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(68, 14, 128, 0.55) 0%, rgba(32, 6, 64, 0.35) 48%, rgba(3, 1, 6, 0) 76%)",
        }}
        aria-hidden="true"
      />

      {/* Lightweight Architectural White Light Lines Inside Hero Stage */}
      <svg
        viewBox="0 0 1440 800"
        fill="none"
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroWhiteLine1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="rgba(181,131,255,0)" />
          </linearGradient>
          <linearGradient id="heroWhiteLine2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Sweeping white light curve from left toward right callout */}
        <path
          d="M 80 560 C 380 500, 740 280, 1180 325"
          stroke="url(#heroWhiteLine1)"
          strokeWidth="1.1"
          strokeDasharray="420 1980"
          className="animate-trace-dash opacity-80"
        />

        {/* Secondary white light arc across upper stage */}
        <path
          d="M 220 110 Q 720 290 1320 150"
          stroke="url(#heroWhiteLine2)"
          strokeWidth="1"
          strokeDasharray="360 2040"
          className="animate-trace-dash opacity-65"
          style={{ animationDelay: "-5s" }}
        />
      </svg>

      <div className="container-px relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between">
        {/* TOP EDITORIAL MICRO-HEADER BAR — Tightly positioned below Navbar */}
        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5 font-mono text-[9.5px] tracking-[0.16em] uppercase sm:text-xs sm:tracking-[0.22em]">
          <div className="flex items-center gap-1.5 truncate">
            <span className="font-semibold text-violet-300">FRONTEND DEV</span>
            <span className="text-white/30">/</span>
            <span className="truncate text-soft-white/80">
              SOFTWARE ENGINEER
            </span>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="WhatsApp"
            className="group inline-flex shrink-0 items-center gap-1.5 text-soft-white/90 transition-colors hover:text-violet-300"
          >
            <span>AVAILABLE FOR FREELANCE</span>
            <span className="text-violet-300 transition-transform duration-300 group-hover:rotate-90">
              ✦
            </span>
          </a>
        </div>

        {/* MAIN EDITORIAL STAGE: GIANT "PORTFOLIO" BACKDROP + STUDIO PORTRAIT + LEFT/RIGHT OVERLAYS */}
        <div className="relative mt-2 flex flex-1 flex-col justify-between lg:min-h-[520px] xl:min-h-[560px]">
          {/* MONUMENTAL CONDENSED "PORTFOLIO" BACKDROP TEXT */}
          <div
            className="pointer-events-none relative z-10 select-none overflow-hidden text-center"
            aria-hidden="true"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-condensed text-[clamp(4.8rem,19.5vw,16.5rem)] font-extrabold uppercase leading-[0.8] tracking-[-0.03em] text-hero-backdrop"
            >
              PORTFOLIO
            </motion.div>
          </div>

          {/* CENTER STUDIO PORTRAIT OF ABOOBACKER */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none relative z-20 -mt-10 mx-auto flex w-full max-w-[380px] justify-center sm:-mt-20 sm:max-w-[460px] lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-4 lg:mt-0 lg:max-w-[540px] xl:max-w-[580px] lg:items-end"
          >
            {/* Subtle Midnight Purple rim halo directly behind head & shoulders */}
            <div
              className="absolute left-1/2 top-[44%] -z-10 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[75px] sm:h-[340px] sm:w-[340px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(82, 18, 150, 0.5) 0%, rgba(40, 8, 78, 0.24) 58%, transparent 80%)",
              }}
              aria-hidden="true"
            />

            <picture
              className="w-full"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 90% 88% at 50% 38%, #000 58%, rgba(0,0,0,0.65) 76%, transparent 98%)",
                maskImage:
                  "radial-gradient(ellipse 90% 88% at 50% 38%, #000 58%, rgba(0,0,0,0.65) 76%, transparent 98%)",
              }}
            >
              <source srcSet={profile.heroPortraitWebp} type="image/webp" />
              <img
                src={profile.heroPortraitPng}
                alt="Aboobacker — Frontend Developer & Software Engineer"
                width="960"
                height="820"
                fetchPriority="high"
                decoding="async"
                referrerPolicy="no-referrer"
                className="mx-auto block h-auto w-full max-h-[340px] object-contain object-bottom sm:max-h-[440px] lg:max-h-[500px] xl:max-h-[545px]"
              />
            </picture>
          </motion.div>

          {/* FOREGROUND 12-COLUMN OVERLAY GRID */}
          <div className="relative z-30 -mt-6 grid grid-cols-1 items-end gap-7 sm:-mt-10 lg:mt-auto lg:grid-cols-12 lg:gap-6 lg:pb-2">
            {/* LEFT COLUMN: "Hello, I'm ABOOBACKER." + Role + Primary CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start lg:col-span-5"
            >
              <p className="font-serif-editorial text-xl italic text-soft-white/90 sm:text-2xl lg:text-3xl">
                Hello, I&apos;m
              </p>

              <h1 className="mt-0.5 font-condensed text-[clamp(3.1rem,6.5vw,5.4rem)] font-extrabold uppercase leading-[0.88] tracking-tight text-soft-white">
                ABOOBACKER
                <span className="text-violet-400">.</span>
              </h1>

              <p className="mt-2 font-condensed text-base font-bold uppercase tracking-[0.08em] text-violet-400 sm:text-lg lg:text-xl">
                FRONTEND DEVELOPER &amp; SOFTWARE ENGINEER
              </p>

              {/* Primary Freelance & Portfolio CTAs */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
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
                  <span>Previous Works</span>
                  <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Bottom-left Worldwide Availability Tag */}
              <div className="mt-4 flex items-center gap-2 font-mono text-[10.5px] tracking-[0.16em] uppercase text-soft-white/80 sm:mt-5">
                <FiGlobe className="text-violet-400 shrink-0" size={13} />
                <span>AVAILABLE WORLDWIDE · KERALA, INDIA</span>
              </div>
            </motion.div>

            {/* CENTER SPACER FOR PORTRAIT ON DESKTOP */}
            <div className="hidden lg:col-span-3 lg:block" />

            {/* RIGHT COLUMN: Compact, Mobile-Responsive Resume Card + KPI Stats */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex w-full flex-col gap-2.5 lg:col-span-4 lg:ml-auto lg:max-w-[268px] xl:max-w-[280px]"
            >
              {/* Interactive Star Badge -> Morphs Smoothly Into Download Resume on Hover */}
              <a
                href={profile.resumeUrl}
                download="Aboobacker_Frontend_Developer_Resume.pdf"
                data-cursor="Resume"
                aria-label="Download Aboobacker Resume PDF"
                className="group relative flex w-full items-center gap-3 overflow-hidden rounded-xl border border-white/12 bg-[#07020f]/85 px-3 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-violet-400/50 hover:bg-[#0b0318]/90"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/[0.04] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:border-violet-400 group-hover:bg-violet-600/35 group-hover:shadow-[0_0_24px_rgba(131,56,236,0.65)]">
                  <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-violet-400/55 transition-colors duration-500 group-hover:border-white/70" />

                  {/* Default ✦ Star (rotates, scales down & fades out on hover) */}
                  <span className="absolute text-sm text-soft-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-90 group-hover:scale-0 group-hover:opacity-0">
                    ✦
                  </span>

                  {/* Hover Download Icon (rises, scales up & fades in on hover) */}
                  <FiDownload
                    size={15}
                    className="absolute translate-y-2 scale-50 text-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] leading-snug text-soft-white/90 transition-colors duration-300 group-hover:text-white">
                    Turning ideas into powerful, conversion-ready digital
                    experiences.
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-violet-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-emerald-300">
                    <span>Download Resume</span>
                    <span className="opacity-75 group-hover:opacity-100">↓</span>
                  </span>
                </div>
              </a>

              {/* Responsive KPI Counters: 3-Column Symmetrical Grid on Mobile, Compact Stacked Card on Desktop */}
              <div className="grid w-full grid-cols-3 divide-x divide-white/10 overflow-hidden rounded-xl border border-white/12 bg-[#07020f]/85 backdrop-blur-md lg:grid-cols-1 lg:divide-x-0 lg:divide-y">
                {HERO_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-between px-2 py-2 text-center sm:px-3 lg:flex-row lg:px-3.5 lg:py-2 lg:text-right"
                  >
                    <span className="font-condensed text-xl font-extrabold leading-none tabular-nums tracking-tight text-violet-400 sm:text-2xl lg:text-[1.65rem]">
                      {stat.value}
                    </span>

                    {/* Compact label on small mobile screens so 3 columns look balanced */}
                    <span className="mt-1 font-mono text-[8px] leading-tight tracking-[0.08em] uppercase text-mist sm:hidden">
                      {stat.shortLabel}
                    </span>

                    {/* Full two-line editorial label on tablet & desktop */}
                    <span className="hidden whitespace-pre-line font-mono text-[8.5px] leading-tight tracking-[0.12em] uppercase text-mist sm:mt-1 sm:block lg:mt-0 lg:text-right">
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
