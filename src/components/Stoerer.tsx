
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Stoerer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div 
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate("/about")}
    >
      <motion.img
        src={isHovered ? "/lovable-uploads/stoerer_klick.png" : "/lovable-uploads/stoerer.png"}
        alt="Interactive element"
        className="w-auto h-auto"
        animate={{ width: isHovered ? "346px" : "173px" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Stoerer;
