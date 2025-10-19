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
import SEOHead from "./components/SEOHead";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;

      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
        setIsHeroVisible(true);
      } else {
        setIsTopOfPage(false);
        // Check if hero section is still visible
        setIsHeroVisible(window.scrollY < heroHeight * 0.8); // Show logo when 80% of hero is scrolled past
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app relative">
      {/* SEO Head */}
      <SEOHead />

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar
        isTopOfPage={isTopOfPage}
        isHeroVisible={isHeroVisible}
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
