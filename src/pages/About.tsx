
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Preload images
    const headerImg = new Image();
    const quoteImg = new Image();
    headerImg.src = "/lovable-uploads/header_white.png";
    quoteImg.src = "/lovable-uploads/aboutme_quote.png";
  }, []);

  return (
    <div className="min-h-screen fixed inset-0 bg-black overflow-hidden font-priego-light">
      <Navigation currentPage="about" textColor="white" />
      
      <motion.div
        className="fixed top-[140px] left-[140px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src="/lovable-uploads/header_white.png" 
          alt="Header About"
          className="w-[584px] h-auto"
          loading="eager"
        />
      </motion.div>

      <motion.div
        className="fixed top-[140px] right-[140px]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <img 
          src="/lovable-uploads/aboutme_quote.png" 
          alt="About Quote"
          className="w-[584px] h-auto"
          loading="eager"
        />
      </motion.div>
    </div>
  );
};

export default About;
