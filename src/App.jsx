import { profile } from "./data/profile";
import About from "./components/About";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
