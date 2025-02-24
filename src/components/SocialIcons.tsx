
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const SocialIcons = () => {
  return (
    <motion.div 
      className="fixed top-[140px] right-[140px] flex items-center gap-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <a 
        href="https://www.linkedin.com/in/julia-anna-lachmann-4483b5102/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black transition-colors"
      >
        <Linkedin size={24} />
      </a>
      <div className="h-6 w-px bg-gray-300" />
      <a 
        href="mailto:julia.anna.lachmann@gmail.com"
        className="text-gray-600 hover:text-black transition-colors"
      >
        <Mail size={24} />
      </a>
    </motion.div>
  );
};

export default SocialIcons;
