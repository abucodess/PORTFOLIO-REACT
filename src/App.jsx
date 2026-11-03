import { lazy, Suspense, useEffect, useState, useCallback } from "react";
import SceneBackground from "./components/Background/SceneBackground";
import CustomCursor from "./components/Cursor/CustomCursor";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Layout/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Layout/Footer";
import { projects } from "./data/projects";

// Code-split below-the-fold sections & project detail page for instant initial load
const loadAbout = () => import("./sections/About");
const loadSkills = () => import("./sections/Skills");
const loadProjects = () => import("./sections/Projects");
const loadJourney = () => import("./sections/Journey");
const loadAchievements = () => import("./sections/Achievements");
const loadContact = () => import("./sections/Contact");
const loadProjectDetailPage = () => import("./pages/ProjectDetailPage");

const About = lazy(loadAbout);
const Skills = lazy(loadSkills);
const Projects = lazy(loadProjects);
const Journey = lazy(loadJourney);
const Achievements = lazy(loadAchievements);
const Contact = lazy(loadContact);
const ProjectDetailPage = lazy(loadProjectDetailPage);

function getProjectSlugFromHash() {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash || "";
  if (hash.startsWith("#/project/")) {
    return decodeURIComponent(hash.replace("#/project/", "").trim());
  }
  return null;
}

function SectionFallback({ id }) {
  return (
    <div
      id={id}
      className="container-px mx-auto max-w-[1360px] py-24"
      aria-hidden="true"
    >
      <div className="h-64 w-full animate-pulse rounded-3xl border border-line bg-surface/40" />
    </div>
  );
}

export default function App() {
  const [activeSlug, setActiveSlug] = useState(() => getProjectSlugFromHash());

  // Sync with browser Back/Forward buttons and URL hash changes
  useEffect(() => {
    const syncFromLocation = () => {
      setActiveSlug(getProjectSlugFromHash());
    };

    window.addEventListener("hashchange", syncFromLocation);
    window.addEventListener("popstate", syncFromLocation);
    return () => {
      window.removeEventListener("hashchange", syncFromLocation);
      window.removeEventListener("popstate", syncFromLocation);
    };
  }, []);

  // Preload lazy chunks during browser idle time so navigation is instant
  useEffect(() => {
    const preloadAll = () => {
      loadAbout();
      loadSkills();
      loadProjects();
      loadJourney();
      loadAchievements();
      loadContact();
      loadProjectDetailPage();
    };

    const timer = setTimeout(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(preloadAll, { timeout: 2000 });
      } else {
        preloadAll();
      }
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectProject = useCallback((slug) => {
    if (!slug) return;
    window.history.pushState(null, "", `#/project/${slug}`);
    setActiveSlug(slug);
  }, []);

  const handleExitProjectToSection = useCallback((targetSectionId = "projects") => {
    window.history.pushState(
      null,
      "",
      window.location.pathname + window.location.search
    );
    setActiveSlug(null);

    requestAnimationFrame(() => {
      setTimeout(() => {
        if (targetSectionId === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        const el = document.getElementById(targetSectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 40);
    });
  }, []);

  const activeProject = activeSlug
    ? projects.find(
        (p) => p.slug.toLowerCase() === activeSlug.toLowerCase()
      ) || null
    : null;

  return (
    <>
      <Preloader />
      <SceneBackground />
      <CustomCursor />
      <Navbar
        isProjectPage={Boolean(activeProject)}
        onExitProject={handleExitProjectToSection}
      />

      <main className="relative z-10">
        {activeProject ? (
          <Suspense fallback={<SectionFallback id="project-detail" />}>
            <ProjectDetailPage
              key={activeProject.slug}
              project={activeProject}
              onBack={() => handleExitProjectToSection("projects")}
              onSelectProject={handleSelectProject}
            />
          </Suspense>
        ) : (
          <>
            <Hero />

            <Suspense fallback={<SectionFallback id="about" />}>
              <About />
            </Suspense>

            <Suspense fallback={<SectionFallback id="skills" />}>
              <Skills />
            </Suspense>

            <Suspense fallback={<SectionFallback id="projects" />}>
              <Projects onSelectProject={handleSelectProject} />
            </Suspense>

            <Suspense fallback={<SectionFallback id="journey" />}>
              <Journey />
            </Suspense>

            <Suspense fallback={<SectionFallback id="achievements" />}>
              <Achievements />
            </Suspense>

            <Suspense fallback={<SectionFallback id="contact" />}>
              <Contact />
            </Suspense>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
