import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa";

const SocialMediaIcons = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/syed-muqeet-aqib/",
      color: "text-blue-400",
      glowColor: "rgba(59, 130, 246, 0.5)",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/smuqeetaqib",
      color: "text-cyan-400",
      glowColor: "rgba(34, 211, 238, 0.5)",
    },
    {
      icon: FaGithub,
      href: "https://github.com/syedmuqeetaqib",
      color: "text-gray-300",
      glowColor: "rgba(156, 163, 175, 0.5)",
    },
    {
      icon: FaTelegram,
      href: "http://t.me/syedmuqeetaqib",
      color: "text-blue-300",
      glowColor: "rgba(59, 130, 246, 0.5)",
    },
    {
      icon: FaEnvelope,
      href: "mailto:syedmuqeetaqib@gmail.com",
      color: "text-red-400",
      glowColor: "rgba(248, 113, 113, 0.5)",
    },
  ];

  return (
    <div className="flex justify-center my-10 gap-6">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className={`
            glass rounded-full p-3 
            ${social.color} 
            transition-all duration-300
            hover:scale-110
          `}
          whileHover={{
            boxShadow: `0 0 20px ${social.glowColor}`,
            scale: 1.1,
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <social.icon size={24} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
