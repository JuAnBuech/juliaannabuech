
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";

const About = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <div 
      ref={ref}
      className="min-h-screen bg-black overflow-y-auto overflow-x-hidden font-priego-light"
    >
      <Navigation currentPage="about" textColor="white" />
      
      <motion.div
        className="fixed top-[140px] left-[140px] w-[584px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ opacity }}
      >
        <img 
          src="/lovable-uploads/header_aboutme.png" 
          alt="Header About"
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        className="fixed top-[140px] right-[140px] w-[584px]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ opacity }}
      >
        <img 
          src="/lovable-uploads/about-quote.png" 
          alt="About Quote"
          className="w-full h-auto"
        />
      </motion.div>

      {/* Add enough height to enable scrolling */}
      <div className="h-[200vh]" />
    </div>
  );
};

export default About;
