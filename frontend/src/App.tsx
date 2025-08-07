import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Sidebar from "../src/components/layout/Sidebar";
import Hero from "../src/components/sections/Hero";
import About from "../src/components/sections/About";
import Portfolio from "../src/components/sections/Portfolio";
import Blog from "../src/components/sections/Blog";
import Contact from "../src/components/sections/Contact";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="flex font-inter text-gray-900">
      {/* Sidebar - only visible on medium+ screens */}
      <aside className="hidden md:block fixed top-0 left-0 h-full w-64 z-50">
        <Sidebar />
      </aside>

      {/* Main content area - has left margin only when sidebar is visible */}
      <main className="flex-1 w-full md:ml-16 overflow-x-hidden">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
