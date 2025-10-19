import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { FaServer, FaLaptopCode, FaEthereum, FaRobot } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Backend API Development",
      description:
        "Scalable REST and GraphQL APIs built with NestJS, TypeORM, and PostgreSQL. Focus on performance, security, and maintainable code architecture.",
      icon: FaServer,
      color: "neon-cyan",
    },
    {
      title: "Frontend Development",
      description:
        "Modern, responsive user interfaces using React, Next.js, and TailwindCSS. Creating intuitive experiences with smooth animations and interactions.",
      icon: FaLaptopCode,
      color: "neon-blue",
    },
    {
      title: "Web3 & Blockchain",
      description:
        "Decentralized applications and smart contracts using Solidity, Web3.js, and Ethers.js. Experience with EVM and non-EVM blockchains.",
      icon: FaEthereum,
      color: "neon-violet",
    },
    {
      title: "AI/Chatbot Integration",
      description:
        "Intelligent automation solutions and conversational AI. Integrating NLP and machine learning to enhance user experiences and workflows.",
      icon: FaRobot,
      color: "neon-cyan",
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            What I <span className="text-gradient">Build</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive development services covering the full spectrum of
            modern web applications, from backend APIs to blockchain solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-gray-300 text-lg mb-6">
            Ready to bring your ideas to life?
          </p>
          <motion.a
            href="#contact"
            className="inline-block glass-button px-8 py-3 text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
