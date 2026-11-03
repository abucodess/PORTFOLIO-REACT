import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { projects } from "../data/projects";
import { profile, getWhatsAppUrl } from "../data/profile";
import ProjectArtwork from "../components/Projects/ProjectArtwork";

const capabilities = [
  "E-Commerce & Admin Suites",
  "POS & Billing Systems",
  "Business & Brand Websites",
  "Custom SaaS Dashboards",
  "Booking & Service Platforms",
  "Full-Responsive Web Apps",
];

export default function Projects({ onSelectProject }) {
  const enquiryWhatsappUrl = getWhatsAppUrl(
    "Hi Aboobacker! I checked out your 3 featured project demos and would like to enquire about building a custom website / web application."
  );

  const handleOpenProject = (slug) => {
    if (onSelectProject) {
      onSelectProject(slug);
    } else {
      window.history.pushState(null, "", `#/project/${slug}`);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  };

  const scrollToContact = () => {
    window.dispatchEvent(
      new CustomEvent("portfolio:navigate", { detail: "contact" })
    );
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="projects"
      className="section-pad relative z-10 border-t border-white/10"
    >
      <div className="container-px mx-auto max-w-7xl">
        {/* EDITORIAL SECTION HEADER BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-condensed text-3xl font-extrabold uppercase tracking-wide text-soft-white sm:text-4xl">
              FEATURED PROJECT DEMOS
            </h2>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
              03 Curated Flagship Case Studies · Click any project to inspect
              screens &amp; architecture
            </p>
          </div>

          {/* Connecting white architectural line */}
          <div className="mx-4 hidden h-px flex-1 bg-gradient-to-r from-white/25 via-violet-400/35 to-white/15 lg:block" />

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GitHub"
            className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-mist transition-colors hover:text-soft-white whitespace-nowrap"
          >
            <span>GITHUB PROFILE</span>
            <FiArrowRight className="text-violet-400 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 FLAGSHIP SHOWCASE CARDS (01 SOLEX, 02 FUWA POS, 03 BIKEMODE) */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
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
              onClick={() => handleOpenProject(project.slug)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenProject(project.slug);
                }
              }}
              role="button"
              tabIndex={0}
              data-cursor="Case Study"
              aria-label={`View ${project.title} project details`}
              className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-white/10 bg-surface/60 p-4 text-left transition-all duration-300 hover:border-violet-400/50 hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              <div>
                {/* Visual Poster Container */}
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <ProjectArtwork project={project} size="card" />
                </div>

                {/* Numbered Index Row: "01 | TITLE + CATEGORY | →" */}
                <div className="mt-5 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-start gap-3.5">
                    <span className="font-condensed text-4xl font-extrabold leading-none tabular-nums text-violet-400">
                      {project.index}
                    </span>
                    <div>
                      <h3 className="font-condensed text-xl font-bold uppercase tracking-wide text-soft-white transition-colors group-hover:text-violet-300">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-mist">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-mist transition-all duration-200 group-hover:border-violet-400 group-hover:bg-violet-600 group-hover:text-white">
                    <FiArrowRight size={15} />
                  </span>
                </div>

                {/* Bullet Highlights */}
                <ul className="mt-4 space-y-2 px-1 text-xs leading-relaxed text-mist">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Metadata & Case Study CTA Footer */}
              <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-3.5 px-1 font-mono text-[11px]">
                <span className="truncate text-mist-dim">
                  {project.tags.slice(0, 3).join(" · ")}
                </span>

                <span className="ml-3 inline-flex shrink-0 items-center gap-1.5 font-semibold uppercase tracking-wider text-violet-300 transition-colors group-hover:text-soft-white whitespace-nowrap">
                  <span>View Project</span>
                  <FiArrowRight
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CUSTOM WEBSITES & WEB APPS ENQUIRY BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-white/15 bg-surface/80 p-7 sm:p-10 lg:p-12"
        >
          {/* Top & bottom architectural white hairlines + Midnight Purple aura */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/35 to-transparent" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-35 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(131, 56, 236, 0.55) 0%, rgba(60, 9, 108, 0.2) 60%, transparent 100%)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-md border border-violet-400/30 bg-violet-950/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>CUSTOM DEVELOPMENT · BEYOND THESE 3 DEMOS</span>
              </div>

              <h3 className="mt-4 font-condensed text-3xl font-extrabold uppercase leading-[0.96] tracking-wide text-soft-white sm:text-4xl lg:text-5xl">
                I Build All Kinds of{" "}
                <span className="text-violet-400">
                  Websites &amp; Web Applications.
                </span>
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist sm:text-base">
                The 3 projects showcased above are a curated demo of my work across{" "}
                <span className="text-soft-white font-medium">
                  E-Commerce Storefronts
                </span>
                ,{" "}
                <span className="text-soft-white font-medium">
                  POS Billing Systems
                </span>
                , and{" "}
                <span className="text-soft-white font-medium">
                  Client Brand Platforms
                </span>
                . I have designed and built many more websites and web applications
                tailored to different industries—contact me directly for enquiries
                or to discuss your custom project.
              </p>

              {/* Capability Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {capabilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-[#05010a]/80 px-3 py-1.5 font-mono text-[11px] text-soft-white/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Enquiry CTAs */}
            <div className="flex flex-col gap-3.5 lg:col-span-4 lg:items-end">
              <a
                href={enquiryWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="WhatsApp"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 px-6 py-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-soft-white shadow-[0_0_32px_rgba(131,56,236,0.45)] transition-all duration-200 hover:bg-violet-500 sm:w-auto lg:w-full"
              >
                <FaWhatsapp className="text-base text-emerald-300" />
                <span>Contact for Enquiry</span>
                <FiArrowUpRight className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={scrollToContact}
                data-cursor="Message"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-[#06020c]/90 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-soft-white transition-colors hover:border-violet-400/50 hover:bg-surface-2 sm:w-auto lg:w-full"
              >
                <FiSend className="text-violet-400" size={14} />
                <span>Send Project Brief</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
