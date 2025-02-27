
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import ImageWithQuote from "@/components/ImageWithQuote";

const About = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollY, [0, 300], [1, 0.2]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const images = [
    { image: "/lovable-uploads/about1.JPG", quote: "/lovable-uploads/0d46c240-a079-4c5c-933a-f3c9aca448e9.png" },
    { image: "/lovable-uploads/about2.JPG", quote: "/lovable-uploads/ca209886-baaa-467b-a768-9d5b7520a39d.png" },
    { image: "/lovable-uploads/about3.JPG", quote: "/lovable-uploads/227d042e-b60e-43bb-88c7-4204c1e990b9.png" },
    { image: "/lovable-uploads/about4.jpg", quote: "/lovable-uploads/b37a0068-a068-4e8e-8e84-d66df01b80ab.png" },
    { image: "/lovable-uploads/about5.JPG", quote: "/lovable-uploads/38fa95ad-f6bf-4bfe-be06-ba49e03b67f9.png" },
    { image: "/lovable-uploads/about6.JPG", quote: "/lovable-uploads/92750608-3411-46b3-b90f-41b76b566533.png" },
    { image: "/lovable-uploads/about7.JPG", quote: "/lovable-uploads/e847db2a-de4f-479d-b5be-4e04180f1d57.png" },
  ];

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
        style={{ opacity, scale }}
      >
        <img 
          src="/lovable-uploads/header_aboutme.png" 
          alt="Header About"
          className="w-full h-auto"
        />
      </motion.div>

      <div className="relative mt-[800px] mx-auto max-w-[1200px] min-h-[2000px]">
        {images.map((item, index) => (
          <ImageWithQuote
            key={item.image}
            imageSrc={item.image}
            quoteSrc={item.quote}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
