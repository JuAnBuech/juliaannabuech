
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
    { image: "/lovable-uploads/about1.JPG", quote: "/lovable-uploads/aboutme_quotes.png" },
    { image: "/lovable-uploads/about2.JPG", quote: "/lovable-uploads/aboutme_quotes.png" },
    { image: "/lovable-uploads/about3.JPG", quote: "/lovable-uploads/aboutme_quotes.png" },
    { image: "/lovable-uploads/about4.jpg", quote: "/lovable-uploads/aboutme_quotes.png" },
    { image: "/lovable-uploads/about5.JPG", quote: "/lovable-uploads/aboutme_quotes.png" },
    { image: "/lovable-uploads/about6.JPG", quote: "/lovable-uploads/aboutme_quotes.png" },
    { image: "/lovable-uploads/about7.JPG", quote: "/lovable-uploads/aboutme_quotes.png" },
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
