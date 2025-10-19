import { motion } from "framer-motion";
import { IconContext } from "react-icons";

const SkillBadge = ({ name, icon: Icon, color = "neon-cyan", delay = 0 }) => {
  const colorClasses = {
    "neon-cyan": "text-neon-cyan border-neon-cyan/30 hover:bg-neon-cyan/10",
    "neon-blue": "text-neon-blue border-neon-blue/30 hover:bg-neon-blue/10",
    "neon-violet":
      "text-neon-violet border-neon-violet/30 hover:bg-neon-violet/10",
  };

  return (
    <motion.div
      className={`
        glass border ${colorClasses[color]}
        rounded-lg p-3 flex items-center space-x-2
        transition-all duration-300 cursor-pointer
        hover:scale-105 hover:shadow-lg
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{
        boxShadow: `0 0 20px ${
          color === "neon-cyan"
            ? "rgba(0,217,255,0.5)"
            : color === "neon-blue"
            ? "rgba(99,102,241,0.5)"
            : "rgba(139,92,246,0.5)"
        }`,
      }}
    >
      {Icon && (
        <IconContext.Provider value={{ size: "1.2rem" }}>
          <Icon />
        </IconContext.Provider>
      )}
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillBadge;
