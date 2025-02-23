
import { motion } from "framer-motion";

interface AngledDotProps {
  imageUrl?: string;
  quote?: string;
  className?: string;
}

const AngledDot = ({ imageUrl, quote, className = "" }: AngledDotProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-72 h-72 rounded-full bg-gray-100 transform rotate-45 overflow-hidden relative hover:scale-105 transition-transform duration-300">
        {imageUrl && (
          <img
            src={imageUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transform -rotate-45 scale-150"
          />
        )}
        {quote && (
          <div className="absolute inset-0 flex items-center justify-center transform -rotate-45 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center px-6">{quote}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AngledDot;
