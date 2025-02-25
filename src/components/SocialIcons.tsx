
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
          src="/lovable-uploads/65b2dc4c-f487-45ec-b84f-c232a77fbaaf.png" 
          alt="LinkedIn"
          className="h-6 w-auto"
        />
      </a>
      
      <div className="h-6 w-[3px] bg-black"></div>
      
      <a 
        href="mailto:juliaannabuech@gmail.com"
        className="transition-opacity hover:opacity-70"
      >
        <img 
          src="/lovable-uploads/af7b068d-3204-48c3-916c-d6784bce4041.png" 
          alt="Email"
          className="h-6 w-auto"
        />
      </a>
    </motion.div>
  );
};

export default SocialIcons;
