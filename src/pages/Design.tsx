
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const Design = () => {
  return (
    <div className="min-h-screen fixed inset-0 bg-white overflow-hidden font-priego-light">
      <Navigation />
      
      <motion.div
        className="fixed top-[140px] left-[140px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src="/lovable-uploads/header_resume.png" 
          alt="Header Resume"
          className="w-[584px] h-auto"
        />
      </motion.div>

      <motion.div
        className="fixed top-[140px] right-[140px]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <img 
          src="/lovable-uploads/timeline.png" 
          alt="Timeline"
          className="w-[584px] h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Design;
