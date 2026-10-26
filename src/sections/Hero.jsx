import { motion } from "framer-motion";
import { FiArrowRight, FiPlay, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Subtle purple studio backlight behind headline & centerpiece */}
      <div
        className="pointer-events-none absolute left-1/2 top-[52%] -z-10 h-[520px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-65"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.34) 0%, rgba(88, 28, 135, 0.16) 45%, transparent 72%)",
        }}
        aria-hidden="true"
      />

      <div className="container-px relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-between">
        {/* TOP CIRCULAR STAMP (Matches top-right circular stamp in reference image) */}
        <div
          className="pointer-events-none absolute right-6 top-6 hidden lg:flex h-24 w-24 items-center justify-center xl:right-14"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 120 120"
            className="h-full w-full animate-spin-slower text-violet-300/75"
          >
            <defs>
              <path
                id="mindlyCirclePath"
                d="M 60, 60 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
              />
            </defs>
            <text className="fill-current font-mono text-[8.5px] tracking-[0.23em]">
              <textPath href="#mindlyCirclePath" startOffset="0%">
                • A MORE FOCUSED YOU • EVERYDAY
              </textPath>
            </text>
          </svg>
          <span className="absolute text-violet-400">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.3 9.7L22 12L14.3 14.3L12 22L9.7 14.3L2 12L9.7 9.7L12 2Z" />
            </svg>
          </span>
        </div>

        {/* CENTER HEADLINE, SUBHEADLINE & DUAL PILL BUTTONS */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-editorial text-[clamp(2.75rem,6vw,5.25rem)] font-medium leading-[1.02] tracking-tight text-soft-white"
          >
            <span className="block">A clearer mind</span>
            <span className="block italic font-normal text-gradient">
              for a brighter you.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-md text-sm leading-relaxed text-mist sm:text-[15px]"
          >
            Abubacker builds modern web applications, organizes complex systems,
            and crafts intelligent digital experiences — all in one beautiful space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3.5"
          >
            <button
              type="button"
              data-cursor="button"
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2.5 rounded-full bg-violet-600 px-6 py-3 text-xs font-medium text-soft-white shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-200 hover:bg-violet-500 whitespace-nowrap shrink-0"
            >
              <span>View My Work</span>
              <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <a
              href={profile.resumeUrl}
              download
              data-cursor="button"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-xs font-medium text-soft-white backdrop-blur-md transition-colors duration-200 hover:border-violet-400/50 hover:bg-violet-500/10 whitespace-nowrap shrink-0"
            >
              <span className="grid h-4 w-4 place-items-center rounded-full bg-violet-400 text-[#050505]">
                <FiPlay size={8} className="translate-x-[0.5px]" fill="currentColor" />
              </span>
              <span>Resume / CV</span>
            </a>
          </motion.div>
        </div>

        {/* BOTTOM SPATIAL STAGE: LEFT CARD + CURVED LINES + PORTRAIT & ORBITING CARDS + RIGHT CARD */}
        <div className="relative mt-4 flex w-full flex-col items-center justify-end lg:mt-2">
          {/* Delicate Curved SVG Connector Lines (Matches left & right curved lines in reference) */}
          <svg
            viewBox="0 0 1280 540"
            fill="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="curveLeft" x1="160" y1="190" x2="420" y2="335" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(192, 132, 252, 0.42)" />
                <stop offset="100%" stopColor="rgba(192, 132, 252, 0.08)" />
              </linearGradient>
              <linearGradient id="curveRight" x1="1110" y1="260" x2="850" y2="375" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="rgba(192, 132, 252, 0.42)" />
                <stop offset="100%" stopColor="rgba(192, 132, 252, 0.08)" />
              </linearGradient>
            </defs>
            {/* Left sweeping curve from bottom of Left Floating Card into Orbit */}
            <path
              d="M 168 205 C 180 315, 275 350, 395 342"
              stroke="url(#curveLeft)"
              strokeWidth="1.2"
            />
            {/* Right sweeping curve from bottom of Right Floating Card into Orbit */}
            <path
              d="M 1105 275 C 1075 365, 965 390, 865 368"
              stroke="url(#curveRight)"
              strokeWidth="1.2"
            />
          </svg>

          {/* LEFT FLOATING CARD (Matches "Turn thoughts into progress." card in reference) */}
          <motion.div
            initial={{ opacity: 0, x: -24, rotate: -6 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card absolute left-2 top-0 z-20 hidden w-[205px] rounded-3xl p-5 lg:block xl:left-6"
          >
            <div className="mb-3.5 grid h-9 w-9 place-items-center rounded-full border border-violet-400/25 bg-violet-500/15 text-violet-300">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14 9.5L21.5 11.5L14 13.5L12 21L10 13.5L2.5 11.5L10 9.5L12 2Z" />
              </svg>
            </div>
            <p className="font-display text-sm font-semibold leading-snug text-soft-white">
              Turn thoughts
              <br />
              into progress.
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-mist">
              Capture, organize and
              <br />
              ship full-stack apps.
            </p>
          </motion.div>

          {/* RIGHT FLOATING CARD (Matches "Ideas, anytime, anywhere." card in reference) */}
          <motion.div
            initial={{ opacity: 0, x: 24, rotate: 6 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card absolute right-2 top-14 z-20 hidden w-[210px] rounded-3xl p-5 lg:block xl:right-6"
          >
            <div className="mb-3.5 flex items-center">
              <img
                src="/images/profile.jpg"
                alt="Abubacker avatar"
                className="h-7 w-7 rounded-full border border-violet-400/40 object-cover object-top"
              />
              <span className="-ml-2 grid h-7 w-7 place-items-center rounded-full border border-violet-400/40 bg-violet-950 font-mono text-[9px] font-semibold text-violet-200">
                R19
              </span>
              <span className="-ml-2 grid h-7 w-7 place-items-center rounded-full border border-violet-400/40 bg-purple-950 font-mono text-[9px] font-semibold text-violet-200">
                AI
              </span>
              <button
                type="button"
                onClick={() => scrollTo("skills")}
                aria-label="Explore skills"
                className="-ml-1.5 grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-surface-2 text-xs text-soft-white hover:border-violet-400"
              >
                +
              </button>
            </div>
            <p className="font-display text-sm font-semibold leading-snug text-soft-white">
              Ideas, anytime,
              <br />
              anywhere.
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-mist">
              Fast &amp; responsive across
              <br />
              all your devices.
            </p>
          </motion.div>

          {/* CENTRAL PORTRAIT & 3D ORBITING GLASS CARDS FROM REFERENCE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mx-auto w-full max-w-[760px] select-none"
          >
            {/* Ambient violet halo behind the head and cards */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[320px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(168, 85, 247, 0.38) 0%, rgba(124, 58, 237, 0.15) 60%, transparent 80%)",
              }}
              aria-hidden="true"
            />

            <picture>
              <source srcSet={profile.heroCenterpieceWebp} type="image/webp" />
              <img
                src={profile.heroCenterpiecePng}
                alt="Abubacker looking upward surrounded by floating 3D cards for Focus, Ideas, and Plan"
                width="1280"
                height="856"
                fetchPriority="high"
                decoding="async"
                className="mx-auto block h-auto w-full max-h-[490px] object-contain object-bottom drop-shadow-[0_20px_60px_rgba(124,58,237,0.28)]"
              />
            </picture>
          </motion.div>

          {/* BOTTOM-LEFT & BOTTOM-RIGHT ANCHORS (Matching reference image) */}
          <div className="relative z-20 flex w-full flex-col items-center justify-between gap-6 border-t border-white/[0.06] py-6 sm:flex-row lg:pointer-events-none lg:absolute lg:inset-x-0 lg:bottom-8 lg:border-t-0 lg:py-0">
            {/* Bottom-Left Proof Anchor */}
            <div className="pointer-events-auto flex flex-col items-center sm:items-start">
              <div className="mb-2.5 hidden h-px w-7 bg-violet-400/50 lg:block" />
              <p className="text-xs leading-relaxed text-mist">
                Built &amp; shipped <span className="text-soft-white font-medium">6+ production apps</span>
                <br />
                with <span className="text-soft-white font-medium">400+ GitHub commits</span>
              </p>

              <div className="mt-3 flex items-center">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  aria-label="GitHub"
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-surface-2 text-mist transition-colors hover:border-violet-400 hover:text-soft-white"
                >
                  <FiGithub size={14} />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  aria-label="LinkedIn"
                  className="-ml-1.5 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-surface-2 text-mist transition-colors hover:border-violet-400 hover:text-soft-white"
                >
                  <FiLinkedin size={14} />
                </a>
                <a
                  href={profile.socials.email}
                  data-cursor="link"
                  aria-label="Email"
                  className="-ml-1.5 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-surface-2 text-mist transition-colors hover:border-violet-400 hover:text-soft-white"
                >
                  <FiMail size={14} />
                </a>
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  aria-label="Contact Abubacker"
                  className="-ml-1.5 grid h-8 w-8 place-items-center rounded-full border border-violet-400/40 bg-violet-600/25 text-xs font-medium text-soft-white transition-colors hover:bg-violet-600/40"
                >
                  +
                </button>
              </div>
            </div>

            {/* Bottom-Right Clarity Anchor */}
            <div className="pointer-events-auto flex flex-col items-center text-center sm:items-end sm:text-right">
              <div className="mb-2 flex items-center gap-2 text-violet-400">
                <span className="hidden h-px w-6 bg-white/15 sm:inline-block" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.3 9.7L22 12L14.3 14.3L12 22L9.7 14.3L2 12L9.7 9.7L12 2Z" />
                </svg>
              </div>
              <p className="text-xs leading-relaxed text-mist">
                Less chaos
                <br />
                <span className="text-soft-white">More clarity</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
