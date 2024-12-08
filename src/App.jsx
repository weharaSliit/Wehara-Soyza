import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Interests from "./components/Interests";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import StarCanvas from "./components/StarCanvas";

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Starry Canvas */}
      <StarCanvas />

      {/* Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-[1200px]">
        <Navbar />
        <Hero />
        <Technologies />
        <Interests />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default App;
