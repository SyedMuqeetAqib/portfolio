import React from "react";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <motion.h2
        className="text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <motion.li
            key={skill.name}
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="mr-2">{skill.name}</span>
            <span className="text-sm text-gray-500">{skill.proficiency}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
