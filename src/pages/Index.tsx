
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import AngledDot from "@/components/AngledDot";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-white overflow-hidden">
      <Navigation />
      
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-light mb-4">Julia Anna</h1>
        <p className="text-xl text-gray-600 tracking-wide">
          Visual Design & Art Direction
        </p>
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
