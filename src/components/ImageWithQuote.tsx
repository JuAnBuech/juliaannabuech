
import { motion } from "framer-motion";
import { useState } from "react";

interface ImageWithQuoteProps {
  imageSrc: string;
  quoteSrc: string;
  index: number;
}

const ImageWithQuote = ({ imageSrc, quoteSrc, index }: ImageWithQuoteProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "400px",
        position: "absolute",
        left: `${(index % 3) * 400}px`,
        top: `${Math.floor(index / 3) * 400}px`
      }}
    >
      <motion.img
        src={imageSrc}
        alt="About section image"
        className="w-full h-auto"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.7 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.img
        src={quoteSrc}
        alt="Quote"
        className="absolute inset-0 w-full h-full object-contain p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ImageWithQuote;
