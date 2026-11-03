import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiCheckCircle,
  FiLayers,
  FiCpu,
  FiGlobe,
  FiMaximize2,
  FiX,
  FiMonitor,
  FiStar,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { projects } from "../data/projects";
import { getWhatsAppUrl } from "../data/profile";
import ProjectArtwork from "../components/Projects/ProjectArtwork";

export default function ProjectDetailPage({
  project,
  onBack,
  onSelectProject,
}) {
  const [activeShotIndex, setActiveShotIndex] = useState(0);
  const [lightboxShot, setLightboxShot] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project?.slug]);

  useEffect(() => {
    if (!lightboxShot || !Array.isArray(project?.screenshots)) return;
    const shots = project.screenshots;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxShot(null);
      } else if (e.key === "ArrowRight") {
        const idx = shots.findIndex((s) => s.src === lightboxShot.src);
        const next = shots[(idx + 1) % shots.length];
        setLightboxShot(next);
      } else if (e.key === "ArrowLeft") {
        const idx = shots.findIndex((s) => s.src === lightboxShot.src);
        const prev = shots[(idx - 1 + shots.length) % shots.length];
        setLightboxShot(prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxShot, project?.screenshots]);

  if (!project) return null;

  const hasScreenshots =
    Array.isArray(project.screenshots) && project.screenshots.length > 0;
  const activeScreenshot = hasScreenshots
    ? project.screenshots[activeShotIndex] || project.screenshots[0]
    : null;

  const currentIndex = Math.max(
    0,
    projects.findIndex(
      (p) => p.slug.toLowerCase() === project.slug.toLowerCase()
    )
  );
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const projectWhatsappUrl = getWhatsAppUrl(
    `Hi Aboobacker! I just reviewed your ${project.title} case study and would love to discuss building a similar project.`
  );

  return (
    <article className="relative min-h-screen pt-28 pb-24 sm:pt-32">
      {/* Subtle top Midnight Purple radial aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] -z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 0%, rgba(90, 24, 154, 0.28) 0%, rgba(60, 9, 108, 0.1) 55%, transparent 100%)",
        }}
      />

      <div className="container-px mx-auto max-w-6xl">
        {/* TOP NAVIGATION & BREADCRUMB BAR */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/12 pb-5"
        >
          <button
            type="button"
            onClick={onBack}
            data-cursor="Back"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-surface/80 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-soft-white transition-all hover:border-violet-400/60 hover:bg-violet-950/60"
          >
            <FiArrowLeft className="text-violet-400 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </button>

          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
            <span className="text-violet-400">
              PROJECT {project.index} / 0{projects.length}
            </span>
            <span className="text-white/20">//</span>
            <span className="hidden sm:inline text-soft-white">
              {project.title}
            </span>
          </div>
        </motion.div>

        {/* EDITORIAL CASE STUDY HERO HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="inline-flex flex-wrap items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-violet-300">
              <span className="rounded border border-violet-400/30 bg-violet-950/50 px-2.5 py-1">
                {project.category}
              </span>
              <span className="text-white/30">•</span>
              <span className="text-mist">{project.clientType}</span>
            </div>

            <div className="mt-4 flex items-baseline gap-4">
              <span className="font-condensed text-5xl font-extrabold leading-none text-violet-400 sm:text-7xl">
                {project.index}
              </span>
              <h1 className="font-condensed text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-soft-white sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </div>

            <p className="mt-3 font-serif-editorial text-xl italic text-violet-200 sm:text-2xl">
              {project.subtitle}
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-mist sm:text-base">
              {project.overview || project.description}
            </p>
          </div>

          {/* PRIMARY EXTERNAL ACTIONS PANEL */}
          <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Launch"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 px-6 py-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-soft-white shadow-[0_0_32px_rgba(131,56,236,0.45)] transition-all duration-200 hover:bg-violet-500 sm:w-auto lg:w-full"
            >
              <FiGlobe className="text-base" />
              <span>Visit Live Website</span>
              <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GitHub"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-surface/80 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-soft-white transition-colors hover:border-violet-400/50 hover:bg-surface-2"
              >
                <FiGithub className="text-sm text-violet-300" />
                <span>Source Code</span>
              </a>

              <a
                href={projectWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="WhatsApp"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-950/25 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-emerald-200 transition-colors hover:border-emerald-400/60 hover:bg-emerald-950/45"
              >
                <FaWhatsapp className="text-sm text-emerald-400" />
                <span>Inquire</span>
              </a>
            </div>
          </div>
        </motion.header>

        {/* METADATA SPECIFICATION BAR */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-white/12 bg-surface/70 p-5 sm:grid-cols-4 sm:p-6"
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-dim">
              ROLE
            </p>
            <p className="mt-1 font-mono text-xs font-semibold text-soft-white sm:text-sm">
              {project.role || "Lead Frontend Developer"}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-dim">
              DELIVERY TYPE
            </p>
            <p className="mt-1 font-mono text-xs font-semibold text-soft-white sm:text-sm">
              {project.clientType}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-dim">
              YEAR
            </p>
            <p className="mt-1 font-mono text-xs font-semibold text-soft-white sm:text-sm">
              {project.year}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist-dim">
              DEPLOYMENT STATUS
            </p>
            <p className="mt-1 inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-300 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>{project.status || "Live on Vercel"}</span>
            </p>
          </div>
        </motion.div>

        {/* LARGE HERO VISUAL SHOWCASE FRAME */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="group mt-8 overflow-hidden rounded-2xl border border-white/15 bg-surface shadow-[0_25px_80px_rgba(3,1,6,0.9)]"
        >
          {/* Editorial Browser / System Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#05010a] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-violet-400/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
              <span className="ml-2 font-mono text-[11px] text-mist">
                https://{project.liveLabel}
              </span>
            </div>

            {hasScreenshots && (
              <div className="flex flex-wrap items-center gap-1.5">
                {project.screenshots.map((shot, idx) => {
                  const isSelected = idx === activeShotIndex;
                  return (
                    <button
                      key={shot.src}
                      type="button"
                      onClick={() => setActiveShotIndex(idx)}
                      className={`rounded-lg px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-all ${
                        isSelected
                          ? "bg-violet-600 text-white shadow-[0_0_15px_rgba(131,56,236,0.45)]"
                          : "border border-white/10 bg-white/5 text-mist hover:text-soft-white"
                      }`}
                    >
                      0{idx + 1} · {shot.title.split("&")[0].trim()}
                    </button>
                  );
                })}
              </div>
            )}

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-violet-300 transition-colors hover:text-soft-white"
            >
              <span>Open Live Application</span>
              <FiArrowUpRight size={14} />
            </a>
          </div>

          {hasScreenshots && activeScreenshot ? (
            <div className="relative bg-[#07020d]">
              <button
                type="button"
                onClick={() => setLightboxShot(activeScreenshot)}
                data-cursor="Zoom"
                aria-label={`Inspect ${activeScreenshot.title} in full screen`}
                className="relative block w-full overflow-hidden text-left focus:outline-none"
              >
                <img
                  src={activeScreenshot.src}
                  alt={activeScreenshot.title}
                  className="w-full object-cover object-top transition-transform duration-500 hover:scale-[1.01]"
                />
                <span className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-[#05010a]/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-soft-white backdrop-blur-md">
                  <FiMaximize2 size={12} className="text-violet-400" />
                  <span>Click to Expand</span>
                </span>
              </button>

              {/* Active Screenshot Caption Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-[#06020c] px-5 py-4 sm:px-7">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400">
                      {activeScreenshot.tag}
                    </span>
                    {activeScreenshot.appType && (
                      <span
                        className={`rounded border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
                          activeScreenshot.appType.includes("Admin")
                            ? "border-emerald-400/35 bg-emerald-950/40 text-emerald-300"
                            : "border-violet-400/35 bg-violet-950/50 text-violet-200"
                        }`}
                      >
                        {activeScreenshot.appType}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-1 font-condensed text-xl font-bold uppercase tracking-wide text-soft-white">
                    {activeScreenshot.title}
                  </h2>
                  <p className="mt-1 max-w-3xl text-xs leading-relaxed text-mist">
                    {activeScreenshot.caption}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {project.screenshots.map((shot, idx) => (
                    <button
                      key={shot.src}
                      type="button"
                      onClick={() => setActiveShotIndex(idx)}
                      aria-label={`View screen ${idx + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        idx === activeShotIndex
                          ? "w-8 bg-violet-400"
                          : "w-2 bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <ProjectArtwork project={project} size="hero" />
          )}
        </motion.div>

        {/* KEY ENGINEERING METRICS STRIP */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/60 p-6"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <p className="font-condensed text-4xl font-extrabold uppercase tracking-tight text-violet-400 sm:text-5xl">
                  {metric.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-mist">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* PRODUCTION INTERFACE GALLERY (Rendered when project has real screenshots) */}
        {hasScreenshots && (
          <section className="mt-14">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
                <FiMonitor />
                <span>PRODUCTION INTERFACE GALLERY</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-violet-400/30 to-transparent" />
            </div>

            <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-condensed text-3xl font-extrabold uppercase tracking-wide text-soft-white sm:text-4xl">
                Application Screens &amp; Workflows
              </h2>
              <p className="font-mono text-xs text-mist">
                Click any screen to inspect in full resolution
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {project.screenshots.map((shot, idx) => (
                <motion.div
                  key={shot.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onClick={() => {
                    setActiveShotIndex(idx);
                    setLightboxShot(shot);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightboxShot(shot);
                    }
                  }}
                  data-cursor="Inspect"
                  className={`group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border bg-surface/70 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/60 ${
                    idx === activeShotIndex
                      ? "border-violet-400/50 shadow-[0_0_30px_rgba(131,56,236,0.2)]"
                      : "border-white/12"
                  }`}
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-[#05010a]">
                      <img
                        src={shot.src}
                        alt={shot.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      {shot.appType && (
                        <span
                          className={`absolute top-3 left-3 rounded-md border px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider backdrop-blur-md ${
                            shot.appType.includes("Admin")
                              ? "border-emerald-400/40 bg-[#05010a]/85 text-emerald-300"
                              : "border-violet-400/40 bg-[#05010a]/85 text-violet-200"
                          }`}
                        >
                          {shot.appType}
                        </span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05010a]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-[#05010a]/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
                        <FiMaximize2 size={11} className="text-violet-400" />
                        <span>Expand</span>
                      </span>
                    </div>

                    <div className="p-5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400">
                        {shot.tag}
                      </span>
                      <h3 className="mt-1.5 font-condensed text-xl font-bold uppercase tracking-wide text-soft-white group-hover:text-violet-300 transition-colors">
                        {shot.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-mist">
                        {shot.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* THE CHALLENGE & THE SOLUTION (2-COLUMN EDITORIAL BREAKDOWN) */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative rounded-2xl border border-white/12 bg-surface/50 p-7 sm:p-9">
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
              <span>01 // THE CHALLENGE</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <h2 className="mt-4 font-condensed text-2xl font-bold uppercase tracking-wide text-soft-white sm:text-3xl">
              Problem &amp; Requirements
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">
              {project.challenge}
            </p>
          </div>

          <div className="relative rounded-2xl border border-violet-400/25 bg-surface/80 p-7 sm:p-9">
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-violet-300">
              <span>02 // THE SOLUTION</span>
              <div className="h-px flex-1 bg-violet-400/20" />
            </div>
            <h2 className="mt-4 font-condensed text-2xl font-bold uppercase tracking-wide text-soft-white sm:text-3xl">
              Engineering &amp; Execution
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">
              {project.solution}
            </p>
          </div>
        </div>

        {/* SYSTEM ARCHITECTURE MODULES */}
        {project.architecture && project.architecture.length > 0 && (
          <section className="mt-14">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
                <FiLayers />
                <span>03 // SYSTEM ARCHITECTURE</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-violet-400/30 to-transparent" />
            </div>

            <h2 className="mt-3 font-condensed text-3xl font-extrabold uppercase tracking-wide text-soft-white sm:text-4xl">
              Core Architectural Pillars
            </h2>

            <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
              {project.architecture.map((mod, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-surface/60 p-6 transition-colors hover:border-violet-400/40"
                >
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-violet-400">
                      {mod.code}
                    </span>
                    <h3 className="mt-2.5 font-condensed text-2xl font-bold uppercase tracking-wide text-soft-white">
                      {mod.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-mist sm:text-sm">
                      {mod.detail}
                    </p>
                  </div>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-violet-400/40 via-white/10 to-transparent" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* KEY FEATURES & COMPLETE TECH STACK */}
        <section className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Key Features Engineered */}
          <div className="rounded-2xl border border-white/10 bg-surface/50 p-7 sm:p-8 lg:col-span-7">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
              <FiCheckCircle />
              <span>04 // KEY DELIVERABLES</span>
            </div>
            <h2 className="mt-3 font-condensed text-2xl font-bold uppercase tracking-wide text-soft-white sm:text-3xl">
              Features Engineered
            </h2>

            <ul className="mt-6 space-y-4">
              {(project.keyFeatures || project.highlights).map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3.5 border-b border-white/[0.06] pb-4 last:border-none last:pb-0"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet-400/40 bg-violet-950/60 font-mono text-[10px] text-violet-300">
                    0{idx + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-soft-white/90 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack & Live Action Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-surface/50 p-7 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
                <FiCpu />
                <span>05 // TECHNOLOGIES USED</span>
              </div>
              <h2 className="mt-3 font-condensed text-2xl font-bold uppercase tracking-wide text-soft-white sm:text-3xl">
                Stack &amp; Tooling
              </h2>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="rounded-lg border border-white/12 bg-[#06020c] px-3.5 py-2 font-mono text-xs text-soft-white"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-violet-400/25 bg-violet-950/25 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-violet-300">
                READY TO INSPECT LIVE?
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-mist">
                Explore the deployed production build of {project.title} or
                reach out to discuss a custom application for your business.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-soft-white transition-colors hover:bg-violet-500"
                >
                  <span>Open {project.liveLabel}</span>
                  <FiArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VERIFIED CLIENT REVIEW FOR THIS PROJECT */}
        {project.testimonial && (
          <section className="mt-14">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-surface/75 p-7 sm:p-9">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-md border border-violet-400/30 bg-violet-950/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>06 // CLIENT TESTIMONIAL</span>
                </div>

                <div
                  className="flex items-center gap-1 text-amber-400"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: project.testimonial.rating || 5 }).map(
                    (_, starIdx) => (
                      <FiStar
                        key={starIdx}
                        size={15}
                        className="fill-amber-400 text-amber-400"
                      />
                    )
                  )}
                </div>
              </div>

              <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-soft-white sm:text-2xl">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                <div>
                  <div className="font-condensed text-lg font-bold uppercase tracking-wider text-soft-white">
                    {project.testimonial.author}
                  </div>
                  <div className="font-mono text-xs text-mist">
                    {project.testimonial.role}
                  </div>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-300">
                  ✓ Verified Client Delivery
                </span>
              </div>
            </div>
          </section>
        )}

        {/* PREVIOUS / NEXT PROJECT NAVIGATION FOOTER */}
        <nav
          aria-label="Project pagination"
          className="mt-16 border-t border-white/12 pt-10"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
              Continue Exploring Projects
            </span>
            <button
              type="button"
              onClick={onBack}
              className="font-mono text-xs uppercase tracking-[0.18em] text-violet-300 transition-colors hover:text-soft-white"
            >
              All Projects Grid →
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject.slug)}
              data-cursor="Previous"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-surface/60 p-6 text-left transition-all hover:border-violet-400/50 hover:bg-surface"
            >
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mist group-hover:text-violet-300">
                <FiArrowLeft className="transition-transform duration-200 group-hover:-translate-x-1" />
                <span>Previous Project // {prevProject.index}</span>
              </span>
              <span className="mt-3 font-condensed text-2xl font-extrabold uppercase tracking-wide text-soft-white sm:text-3xl">
                {prevProject.title}
              </span>
              <span className="mt-1 font-mono text-xs text-mist-dim">
                {prevProject.category}
              </span>
            </button>

            <button
              type="button"
              onClick={() => onSelectProject(nextProject.slug)}
              data-cursor="Next"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-surface/60 p-6 text-left sm:text-right sm:items-end transition-all hover:border-violet-400/50 hover:bg-surface"
            >
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mist group-hover:text-violet-300">
                <span>Next Project // {nextProject.index}</span>
                <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
              <span className="mt-3 font-condensed text-2xl font-extrabold uppercase tracking-wide text-soft-white sm:text-3xl">
                {nextProject.title}
              </span>
              <span className="mt-1 font-mono text-xs text-mist-dim">
                {nextProject.category}
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* FULL-RESOLUTION LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxShot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxShot(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/20 bg-[#07020e] shadow-2xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400">
                    {lightboxShot.tag}
                  </span>
                  <h3 className="font-condensed text-lg font-bold uppercase tracking-wide text-soft-white">
                    {lightboxShot.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  {hasScreenshots && project.screenshots.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          const idx = project.screenshots.findIndex(
                            (s) => s.src === lightboxShot.src
                          );
                          const prev =
                            project.screenshots[
                              (idx - 1 + project.screenshots.length) %
                                project.screenshots.length
                            ];
                          setLightboxShot(prev);
                        }}
                        aria-label="Previous screenshot"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/5 text-soft-white transition-colors hover:border-violet-400 hover:bg-violet-600"
                      >
                        <FiArrowLeft size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const idx = project.screenshots.findIndex(
                            (s) => s.src === lightboxShot.src
                          );
                          const next =
                            project.screenshots[
                              (idx + 1) % project.screenshots.length
                            ];
                          setLightboxShot(next);
                        }}
                        aria-label="Next screenshot"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/5 text-soft-white transition-colors hover:border-violet-400 hover:bg-violet-600"
                      >
                        <FiArrowRight size={16} />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => setLightboxShot(null)}
                    aria-label="Close preview"
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 bg-white/5 text-soft-white transition-colors hover:border-violet-400 hover:bg-violet-600"
                  >
                    <FiX size={18} />
                  </button>
                </div>
              </div>

              <div className="max-h-[78vh] overflow-auto bg-[#040108] p-2 sm:p-4">
                <img
                  src={lightboxShot.src}
                  alt={lightboxShot.title}
                  className="mx-auto h-auto max-w-full rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
