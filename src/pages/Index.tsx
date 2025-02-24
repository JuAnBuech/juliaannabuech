
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import AngledDot from "@/components/AngledDot";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-white overflow-hidden">
      <Navigation />
      
      <motion.div
        className="absolute top-[140px] left-[140px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src="/header_landing.png" 
          alt="Julia Anna"
          className="w-[584px] h-auto"
        />
      </motion.div>

      <AngledDot
        imageUrl="/placeholder.svg"
        quote="Design is not just what it looks like and feels like. Design is how it works."
        className="absolute bottom-20 left-20 animate-float"
      />
    </div>
  );
};

export default Index;
