import { motion } from "framer-motion";
import { IconContext } from "react-icons";

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  color = "neon-cyan",
  delay = 0,
}) => {
  const colorClasses = {
    "neon-cyan": "text-neon-cyan",
    "neon-blue": "text-neon-blue",
    "neon-violet": "text-neon-violet",
  };

  return (
    <motion.div
      className="glass rounded-xl p-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      }}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full glass-strong mb-4 mx-auto">
        <IconContext.Provider
          value={{ size: "2rem", className: colorClasses[color] }}
        >
          <Icon />
        </IconContext.Provider>
      </div>

      <h3 className="text-xl font-bold text-center mb-3 text-white">{title}</h3>

      <p className="text-gray-300 text-center text-sm leading-relaxed flex-grow">
        {description}
      </p>

      <motion.div
        className="mt-4 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ color: colorClasses[color] }}
      />
    </motion.div>
  );
};

export default ServiceCard;
