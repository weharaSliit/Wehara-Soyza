import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-black">
  {/* Background Layers */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="h-[80vw] w-[80vw] max-h-[1000px] max-w-[1000px] rounded-full bg-[radial-gradient(circle_at_center,#fbfbfb36,#000)] z-0"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto px-4 sm:px-6 md:px-8 max-w-[1200px]">
    <Navbar />
    <Hero />
    <Technologies />
    <Projects />
    <Education />
    <Contact />
  </div>
</div>
  );
};

export default App;

