import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Services from "./scenes/Services";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <motion.div onViewportEnter={() => setSelectedPage("home")}>
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>

        {/* Skills Section */}
        <motion.div onViewportEnter={() => setSelectedPage("skills")}>
          <MySkills />
        </motion.div>

        {/* Services Section */}
        <motion.div onViewportEnter={() => setSelectedPage("services")}>
          <Services />
        </motion.div>

        {/* Projects Section */}
        <motion.div onViewportEnter={() => setSelectedPage("projects")}>
          <Projects />
        </motion.div>

        {/* Contact Section */}
        <motion.div onViewportEnter={() => setSelectedPage("contact")}>
          <Contact />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
