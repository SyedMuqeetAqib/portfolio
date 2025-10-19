import { motion } from "framer-motion";

const GlassButton = ({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    default: "glass-button",
    strong: "glass-strong",
    gradient: "border-gradient",
  };

  return (
    <motion.button
      className={`
        ${variants[variant]} 
        ${sizeClasses[size]}
        rounded-lg font-medium
        transition-all duration-300
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default GlassButton;
