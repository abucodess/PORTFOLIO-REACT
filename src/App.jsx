import CustomCursor from "./components/Cursor/CustomCursor";
import SceneBackground from "./components/Background/SceneBackground";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import useLenis from "./hooks/useLenis";

export default function App() {
  useLenis();

  return (
    <>
      <SceneBackground />
      <div className="noise-layer" />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
