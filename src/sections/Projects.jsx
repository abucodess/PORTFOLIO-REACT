import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";
import { profile } from "../data/profile";

function ProjectArtwork({ project }) {
  if (project.previewType === "solex") {
    return (
      <div className="relative h-56 w-full overflow-hidden bg-[#08080e] p-6 select-none">
        {/* Background radial glow + white architectural lines */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 75% 40%, rgba(124, 58, 237, 0.38), transparent 60%), linear-gradient(135deg, #090910 0%, #140d26 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-y-0 right-16 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

        {/* Top mini nav inside preview */}
        <div className="relative z-10 flex items-center justify-between font-mono text-[9px] tracking-[0.2em] uppercase text-white/60">
          <span className="font-bold text-white">SOLEX®</span>
          <span>STOREFRONT + ADMIN RBAC</span>
        </div>

        {/* Editorial Poster Typography */}
        <div className="relative z-10 mt-5 flex flex-col justify-between">
          <p className="font-condensed text-3xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-4xl">
            SOLEX
            <br />
            <span className="text-violet-400">FOOTWEAR</span>
          </p>
          <p className="mt-2 max-w-[180px] font-mono text-[10px] leading-snug text-white/70">
            Dual-App Architecture · Customer Store &amp; Admin Dashboard
          </p>
        </div>

        {/* Sleek Vector Sneaker Silhouette + UI Badge */}
        <svg
          viewBox="0 0 220 110"
          className="absolute bottom-3 right-3 h-28 w-44 drop-shadow-[0_14px_25px_rgba(124,58,237,0.45)] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
          fill="none"
        >
          <path
            d="M20 82 C45 82, 65 40, 92 32 C110 26, 128 48, 155 54 C178 58, 198 52, 205 68 C210 80, 198 88, 175 88 L25 88 C15 88, 12 82, 20 82 Z"
            fill="url(#shoeGrad)"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="1.5"
          />
          <path
            d="M16 90 L202 90 C206 90, 208 96, 200 98 L20 98 C14 98, 12 92, 16 90 Z"
            fill="#f5f3ff"
          />
          <path
            d="M75 56 L128 68 M85 46 L132 58"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="shoeGrad" x1="0" y1="0" x2="220" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="60%" stopColor="#3b0764" />
              <stop offset="100%" stopColor="#09090b" />
            </linearGradient>
          </defs>
        </svg>

        <span className="relative z-10 mt-6 inline-block rounded border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white backdrop-blur-sm">
          Redux Toolkit · 2 Roles
        </span>
      </div>
    );
  }

  if (project.previewType === "fuwa") {
    return (
      <div className="relative h-56 w-full overflow-hidden bg-[#12101b] p-6 select-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 30%, rgba(232, 121, 249, 0.28), transparent 60%), linear-gradient(145deg, #171324 0%, #09080f 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative z-10 flex items-center justify-between font-mono text-[9px] tracking-[0.2em] uppercase text-white/60">
          <span className="font-bold text-white">FUWA JAPANESE</span>
          <span className="text-emerald-300">CLIENT POS</span>
        </div>

        <div className="relative z-10 mt-4">
          <p className="font-serif-editorial text-2xl font-semibold leading-tight text-white sm:text-[1.7rem]">
            Cloud-Soft
            <br />
            <span className="italic text-violet-300">POS Billing</span>
            <br />
            &amp; Receipts
          </p>
        </div>

        {/* POS Receipt & WhatsApp Invoice Card Preview */}
        <div className="absolute bottom-4 right-4 z-10 w-40 rounded-xl border border-white/15 bg-[#0b0a12]/90 p-3 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5 font-mono text-[9px] text-white/70">
            <span>ORDER #204</span>
            <span className="text-emerald-400">PAID</span>
          </div>
          <div className="mt-2 space-y-1 font-mono text-[9px] text-mist">
            <div className="flex justify-between">
              <span>Soufflé Pancake</span>
              <span className="text-white">¥1,280</span>
            </div>
            <div className="flex justify-between">
              <span>Matcha Cream</span>
              <span className="text-white">¥640</span>
            </div>
          </div>
          <div className="mt-2.5 rounded bg-violet-600/30 px-2 py-1 text-center font-mono text-[8px] uppercase tracking-wider text-violet-200">
            WhatsApp Invoice Sent ✓
          </div>
        </div>

        <span className="relative z-10 mt-5 inline-block rounded border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white">
          TanStack Start · TypeScript
        </span>
      </div>
    );
  }

  if (project.previewType === "bikemode") {
    return (
      <div className="relative h-56 w-full overflow-hidden bg-[#07070b] p-6 select-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 75% 55%, rgba(139, 92, 246, 0.32), transparent 62%), linear-gradient(160deg, #050507 0%, #150e28 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative z-10 flex items-center justify-between font-mono text-[9px] tracking-[0.2em] uppercase text-white/60">
          <span className="font-bold text-white">BIKEMODE</span>
          <span className="text-violet-300">CLIENT PROJECT</span>
        </div>

        <div className="relative z-10 mt-5">
          <p className="font-condensed text-3xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-4xl">
            STAY AHEAD
            <br />
            <span className="text-violet-400">ON EVERY RIDE</span>
          </p>
          <p className="mt-2 max-w-[170px] font-mono text-[10px] text-white/70">
            Royal Enfield Specialist Workshop Platform
          </p>
        </div>

        {/* Custom Cafe Racer Motorcycle Vector Graphic */}
        <svg
          viewBox="0 0 220 110"
          className="absolute bottom-3 right-3 h-28 w-44 transition-transform duration-500 group-hover:translate-x-1 group-hover:scale-105"
          fill="none"
        >
          <circle
            cx="46"
            cy="76"
            r="22"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="3"
          />
          <circle
            cx="46"
            cy="76"
            r="12"
            stroke="rgba(168,85,247,0.8)"
            strokeWidth="1.5"
          />
          <circle
            cx="174"
            cy="76"
            r="22"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="3"
          />
          <circle
            cx="174"
            cy="76"
            r="12"
            stroke="rgba(168,85,247,0.8)"
            strokeWidth="1.5"
          />
          <path
            d="M46 76 L88 46 L142 46 L174 76 M88 46 L108 76 L142 46"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M90 44 C105 32, 132 32, 140 44 Z"
            fill="#7c3aed"
            stroke="#f5f3ff"
            strokeWidth="1.5"
          />
        </svg>

        <span className="relative z-10 mt-6 inline-block rounded border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white">
          React.js · Tailwind · Vite
        </span>
      </div>
    );
  }

  return null;
}

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);
  const moreProjects = projects.slice(3);

  return (
    <section
      id="projects"
      className="section-pad relative z-10 border-t border-white/10"
    >
      <div className="container-px mx-auto max-w-7xl">
        {/* EDITORIAL SECTION HEADER BAR (Matches "SELECTED PROJECTS ————— VIEW ALL PROJECTS →" in reference) */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-condensed text-3xl font-extrabold uppercase tracking-wide text-soft-white sm:text-4xl">
            SELECTED PROJECTS
          </h2>

          {/* Connecting white architectural line */}
          <div className="mx-4 hidden h-px flex-1 bg-gradient-to-r from-white/25 via-violet-400/35 to-white/15 md:block" />

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GitHub"
            className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-mist transition-colors hover:text-soft-white whitespace-nowrap"
          >
            <span>VIEW ALL PROJECTS</span>
            <FiArrowRight className="text-violet-400 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 FLAGSHIP SHOWCASE CARDS (Matching 01, 02, 03 layout in reference image) */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-surface/60 p-4 transition-all duration-300 hover:border-violet-400/50 hover:bg-surface"
            >
              <div>
                {/* Clickable Visual Poster Container */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Live Site"
                  className="block overflow-hidden rounded-xl border border-white/10"
                >
                  <ProjectArtwork project={project} />
                </a>

                {/* Reference-Style Numbered Index Row: "01 | TITLE + CATEGORY | →" */}
                <div className="mt-5 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-start gap-3.5">
                    <span className="font-condensed text-4xl font-extrabold leading-none tabular-nums text-violet-400">
                      {project.index}
                    </span>
                    <div>
                      <h3 className="font-condensed text-xl font-bold uppercase tracking-wide text-soft-white group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-mist">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="Launch"
                    aria-label={`Open ${project.title} live website`}
                    className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-mist transition-all duration-200 group-hover:border-violet-400 group-hover:bg-violet-600 group-hover:text-white"
                  >
                    <FiArrowRight size={15} />
                  </a>
                </div>

                {/* Resume Bullet Highlights */}
                <ul className="mt-4 space-y-2 px-1 text-xs leading-relaxed text-mist">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Unboxed Tech Metadata & Live Link Footer */}
              <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3.5 px-1 font-mono text-[11px]">
                <span className="truncate text-mist-dim">
                  {project.tags.slice(0, 3).join(" · ")}
                </span>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 inline-flex items-center gap-1 text-violet-300 transition-colors hover:text-soft-white whitespace-nowrap shrink-0"
                >
                  <span>{project.liveLabel}</span>
                  <FiArrowUpRight size={13} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ADDITIONAL DEPLOYED BUILDS ARCHIVE */}
        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mist">
              More Deployed React Applications
            </p>
            <div className="ml-4 h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {moreProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-xl border border-white/10 bg-surface/40 p-5 transition-colors hover:border-violet-400/40 hover:bg-surface/80"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-condensed text-2xl font-extrabold tabular-nums text-violet-400">
                      {project.index}
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="text-mist transition-colors hover:text-soft-white"
                      >
                        <FiGithub size={15} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live`}
                        className="text-violet-300 transition-colors hover:text-soft-white"
                      >
                        <FiArrowUpRight size={17} />
                      </a>
                    </div>
                  </div>

                  <h3 className="mt-3 font-condensed text-xl font-bold uppercase tracking-wide text-soft-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-mist">
                    {project.description}
                  </p>
                </div>

                <p className="mt-4 border-t border-white/[0.06] pt-3 font-mono text-[10px] text-mist-dim">
                  {project.tags.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
