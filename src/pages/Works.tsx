
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const Works = () => {
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
          src="/lovable-uploads/header_sw1.png" 
          alt="Header Selected Works"
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
          className="flex flex-col gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <img 
            src="/lovable-uploads/portfolio1-thumb.png" 
            alt="Portfolio Item 1" 
            className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
          <img 
            src="/lovable-uploads/portfolio2-thumb.png" 
            alt="Portfolio Item 2" 
            className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
          <img 
            src="/lovable-uploads/portfolio3-thumb.png" 
            alt="Portfolio Item 3" 
            className="w-full h-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Works;
