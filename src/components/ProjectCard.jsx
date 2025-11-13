import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { FaCode } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  longDescription,
  image,
  video,
  liveLink,
  githubLink,
  technologies = [],
  features = [],
  tags = [],
  status,
  year,
  role,
  delay = 0,
  isOwnProduct = false,
}) => {
  const handleCardClick = () => {
    if (liveLink) {
      window.open(liveLink, "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.6 }}
      className="group cursor-pointer relative"
    >
      <GlassCard
        className="relative overflow-hidden p-0 h-full flex flex-col"
        onClick={handleCardClick}
      >
        {/* Project Image/Video */}
        <div className="relative w-full h-48 overflow-hidden">
          {video ? (
            <motion.video
              src={`/assets/${video}`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <motion.img
              src={`/assets/${image}.png`}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-space font-bold text-white">
                {title}
              </h3>
              {isOwnProduct && (
                <span className="text-xs px-2 py-1 rounded-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30 font-medium">
                  My Product
                </span>
              )}
            </div>
            <p className="text-gray-400 text-sm mb-3 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-4 flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <FaCode className="text-neon-cyan text-sm" />
              <span className="text-sm font-medium text-gray-300">
                Technologies
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 5).map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-md bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 5 && (
                <span className="text-xs px-2 py-1 rounded-md bg-gray-500/10 text-gray-400 border border-gray-500/20">
                  +{technologies.length - 5} more
                </span>
              )}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default ProjectCard;
