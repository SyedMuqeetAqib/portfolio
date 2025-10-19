import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  variant = "default",
  hover = true,
  ...props
}) => {
  const variants = {
    default: "glass",
    strong: "glass-strong",
    dark: "glass-dark",
  };

  return (
    <motion.div
      className={`
        ${variants[variant]} 
        ${hover ? "glow-hover" : ""} 
        rounded-xl p-6 
        ${className}
      `}
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
