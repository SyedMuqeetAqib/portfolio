import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{
        background: [
          "radial-gradient(at 0% 0%, #1e1b4b 0%, #0c0a1f 50%, #0f172a 100%)",
          "radial-gradient(at 100% 100%, #312e81 0%, #1e1b4b 50%, #0c0a1f 100%)",
          "radial-gradient(at 50% 50%, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          "radial-gradient(at 0% 100%, #1e1b4b 0%, #312e81 50%, #0c0a1f 100%)",
          "radial-gradient(at 0% 0%, #1e1b4b 0%, #0c0a1f 50%, #0f172a 100%)",
        ],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Floating particles for depth */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
    </motion.div>
  );
};

export default AnimatedBackground;
