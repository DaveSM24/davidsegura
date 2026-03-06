import { lazy, Suspense } from "react"

import Navbar from "./components/navbar/navbar.jsx";
import NavbarTop from "./components/navbar/navbartop.jsx";
import Hero from "./components/hero/hero.jsx"
const About = lazy(() => import("./components/about/about.jsx"))
const Contact = lazy(() => import("./components/contact/contact.jsx"))
const Skills = lazy(() => import("./components/skills/skills.jsx"))

import ParticlesBackground from "./components/ParticlesBackground";





export default function App() {
  return (
    <div className="min-h-screen dark:bg-dark-bg bg-light-bg text-center text-dark-bg dark:text-light-bg transition-colors duration-300 relative z-0 font-sans">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        
        {/* glow lateral suave */}
        <div
          className="
    absolute top-1/3 -left-64
    w-[700px] h-[700px]
    dark:bg-naranja-400/25 
    rounded-full
    blur-[180px]
  "
        />

        {/* integración lateral */}
        <div
          className="
    absolute inset-0
    bg-gradient-to-r
    from-orange-900/20 via-transparent to-transparent
  "
        />

        {/* viñeta cinematográfica */}
        <div
          className="
    absolute inset-0
    bg-gradient-to-b
    from-black/20 via-transparent to-black/30
  "
        />
      </div>

      <ParticlesBackground>
        <NavbarTop />
        <Navbar />
        <main>
            <Hero />
          <Suspense fallback={<div className="py-20">Loading...</div>}>
            <About />          
            <Skills />          
            <Contact />
          </Suspense>
          
        </main>
      </ParticlesBackground>
    </div>
  );
}
