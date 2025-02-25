
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen fixed inset-0 bg-white overflow-hidden">
      <Navigation />
      
      <motion.div
        className="fixed top-[140px] left-[140px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src="/lovable-uploads/header_quote.png" 
          alt="Header Quote"
          className="w-[584px] h-auto"
        />
      </motion.div>

      <motion.div
        className="fixed top-[140px] right-[140px] w-[584px]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <img src="/lovable-uploads/about1.JPG" alt="About 1" className="w-full h-auto" />
          <img src="/lovable-uploads/about2.JPG" alt="About 2" className="w-full h-auto" />
          <img src="/lovable-uploads/about3.JPG" alt="About 3" className="w-full h-auto" />
          <img src="/lovable-uploads/about4.jpg" alt="About 4" className="w-full h-auto" />
          <img src="/lovable-uploads/about5.JPG" alt="About 5" className="w-full h-auto" />
          <img src="/lovable-uploads/about6.JPG" alt="About 6" className="w-full h-auto" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
