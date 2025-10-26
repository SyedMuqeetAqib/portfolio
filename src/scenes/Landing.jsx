import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import ScrollIndicator from "../components/ScrollIndicator";
import GlassButton from "../components/GlassButton";
import TwinklingStars from "../components/TwinklingStars";

const Landing = ({ setSelectedPage }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
    >
      {/* Hero Section Stars */}
      <TwinklingStars />

      <motion.div
        className="text-center max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Name */}
        <motion.h1
          className="text-6xl md:text-8xl font-space font-black mb-6"
          variants={nameVariants}
        >
          <span className="text-gradient">Mike Hiker</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 font-light mb-8 leading-relaxed"
          variants={itemVariants}
        >
          Software Engineer | Full-Stack Developer | Blockchain Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-400 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Full Stack Engineer with 4 years of professional experience, building
          end-to-end web applications and blockchain solutions. Expert in modern
          web technologies, cloud infrastructure, and decentralized applications
          with proficiency in MERN stack, smart contracts, and scalable system
          architecture.
        </motion.p>

        {/* CTA Button */}
        <motion.div className="mb-12" variants={itemVariants}>
          <AnchorLink
            href="#projects"
            onClick={() => setSelectedPage("projects")}
          >
            <GlassButton size="lg" className="text-lg font-medium">
              View My Work
            </GlassButton>
          </AnchorLink>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={itemVariants}>
          <SocialMediaIcons />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Landing;
