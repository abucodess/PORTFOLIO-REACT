import { lazy, Suspense, useEffect } from "react";
import SceneBackground from "./components/Background/SceneBackground";
import CustomCursor from "./components/Cursor/CustomCursor";
import Navbar from "./components/Layout/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Layout/Footer";

// Code-split below-the-fold sections for instant initial load
const loadAbout = () => import("./sections/About");
const loadSkills = () => import("./sections/Skills");
const loadProjects = () => import("./sections/Projects");
const loadJourney = () => import("./sections/Journey");
const loadAchievements = () => import("./sections/Achievements");
const loadContact = () => import("./sections/Contact");

const About = lazy(loadAbout);
const Skills = lazy(loadSkills);
const Projects = lazy(loadProjects);
const Journey = lazy(loadJourney);
const Achievements = lazy(loadAchievements);
const Contact = lazy(loadContact);

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
  // Preload lazy chunks during browser idle time so anchor navigation is instant
  useEffect(() => {
    const preloadAll = () => {
      loadAbout();
      loadSkills();
      loadProjects();
      loadJourney();
      loadAchievements();
      loadContact();
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(preloadAll, { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    } else {
      const timer = setTimeout(preloadAll, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <SceneBackground />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />

        <Suspense fallback={<SectionFallback id="about" />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback id="skills" />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionFallback id="projects" />}>
          <Projects />
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
      </main>

      <Footer />
    </>
  );
}
