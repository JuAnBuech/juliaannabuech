
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import SocialIcons from "@/components/SocialIcons";
import Stoerer from "@/components/Stoerer";

const Index = () => {
  return (
    <div className="min-h-screen fixed inset-0 bg-white overflow-hidden">
      <Navigation />
      <SocialIcons />
      
      <motion.div
        className="fixed top-[140px] left-[140px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src="/lovable-uploads/header_landing.png" 
          alt="Header Landing"
          className="w-[584px] h-auto"
        />
      </motion.div>

      <Stoerer />
    </div>
  );
};

export default Index;
