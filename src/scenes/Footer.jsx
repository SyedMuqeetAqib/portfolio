import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="glass rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-2xl font-space font-bold text-gradient mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Syed Muqeet Aqib
          </motion.h3>

          <motion.p
            className="text-gray-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Software Engineer | Full-Stack Developer | Blockchain Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <SocialMediaIcons />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
