import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import SkillBadge from "../components/SkillBadge";
import {
  FaReact,
  FaNodeJs,
  FaEthereum,
  FaDocker,
  FaJs,
  FaDatabase,
  FaCode,
  FaTools,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiSolidity,
  SiWeb3Dotjs,
  SiGit,
  SiAmazonaws,
  SiJest,
} from "react-icons/si";

const MySkills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaReact,
      color: "neon-cyan",
      skills: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "JavaScript", icon: FaJs },
      ],
    },
    {
      title: "Backend Development",
      icon: FaNodeJs,
      color: "neon-blue",
      skills: [
        { name: "NestJS", icon: SiNestjs },
        { name: "Node.js", icon: FaNodeJs },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "TypeORM", icon: FaDatabase },
      ],
    },
    {
      title: "Blockchain & Web3",
      icon: FaEthereum,
      color: "neon-violet",
      skills: [
        { name: "Solidity", icon: SiSolidity },
        { name: "Web3.js", icon: SiWeb3Dotjs },
        { name: "Ethers.js", icon: FaEthereum },
        { name: "Solana", icon: FaEthereum },
        { name: "Smart Contracts", icon: FaCode },
        { name: "EVM + NEAR", icon: FaEthereum },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: FaTools,
      color: "neon-cyan",
      skills: [
        { name: "Docker", icon: FaDocker },
        { name: "Git", icon: SiGit },
        { name: "AWS", icon: SiAmazonaws },
        { name: "Jest", icon: SiJest },
        { name: "TheGraph", icon: FaDatabase },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
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
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across
            frontend, backend, blockchain, and development tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg glass-strong flex items-center justify-center mr-4 text-${category.color}`}
                  >
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      color={category.color}
                      delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
