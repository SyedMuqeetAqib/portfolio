/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "glass-white": "rgba(255, 255, 255, 0.1)",
        "glass-border": "rgba(255, 255, 255, 0.2)",
        "neon-cyan": "#00D9FF",
        "neon-blue": "#6366F1",
        "neon-violet": "#8B5CF6",
        "deep-blue": "#0c0a1f",
        "glass-dark": "rgba(0, 0, 0, 0.2)",
      },
      backdropBlur: {
        glass: "20px",
        "glass-strong": "30px",
      },
      animation: {
        gradient: "gradient 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 217, 255, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 217, 255, 0.8)" },
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "gradient-mesh":
          "radial-gradient(at 0% 0%, #1e1b4b 0%, #0c0a1f 50%, #0f172a 100%)",
        "gradient-mesh-2":
          "radial-gradient(at 100% 100%, #312e81 0%, #1e1b4b 50%, #0c0a1f 100%)",
        "gradient-mesh-3":
          "radial-gradient(at 50% 50%, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
      }),
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
