import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TwinklingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars with different properties
    const generateStars = () => {
      const starCount = 50; // Number of stars
      const newStars = [];

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // Random x position (0-100%)
          y: Math.random() * 100, // Random y position (0-100%)
          size: Math.random() * 3 + 1, // Random size (1-4px)
          delay: Math.random() * 2 + 1, // Random fade-in delay (1-3 seconds)
          twinkleDelay: Math.random() * 25 + 5, // Random twinkle delay (5-30 seconds)
          twinkleDuration: Math.random() * 2 + 0.5, // Random twinkle duration (0.5-2.5 seconds)
          opacity: Math.random() * 0.8 + 0.2, // Random base opacity (0.2-1.0)
          floatDuration: Math.random() * 10 + 8, // Random float duration (8-18 seconds)
          floatDelay: Math.random() * 5, // Random float delay (0-5 seconds)
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${
              star.opacity
            })`,
          }}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, star.opacity, star.opacity * 0.3, star.opacity],
            scale: [0, 1, 1.2, 1],
            x: [0, Math.random() * 20 - 10, Math.random() * 15 - 7.5, 0],
            y: [0, Math.random() * 20 - 10, Math.random() * 15 - 7.5, 0],
          }}
          transition={{
            opacity: {
              duration: star.twinkleDuration,
              repeat: Infinity,
              delay: star.twinkleDelay,
              ease: "easeInOut",
            },
            scale: {
              duration: star.twinkleDuration,
              repeat: Infinity,
              delay: star.twinkleDelay,
              ease: "easeInOut",
            },
            x: {
              duration: star.floatDuration,
              repeat: Infinity,
              delay: star.floatDelay,
              ease: "easeInOut",
            },
            y: {
              duration: star.floatDuration,
              repeat: Infinity,
              delay: star.floatDelay,
              ease: "easeInOut",
            },
            // Initial fade-in animation
            delay: star.delay,
            duration: 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default TwinklingStars;
