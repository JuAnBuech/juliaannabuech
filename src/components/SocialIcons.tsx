
import { motion } from "framer-motion";

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
        className="transition-opacity hover:opacity-70"
      >
        <img 
          src="/lovable-uploads/877946b2-7209-4d31-a4d0-353a121f4e5f.png" 
          alt="Contact Icons"
          className="h-6 w-auto"
        />
      </a>
    </motion.div>
  );
};

export default SocialIcons;
