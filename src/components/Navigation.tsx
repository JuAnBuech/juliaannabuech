
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type NavigationProps = {
  currentPage?: 'about' | 'design' | 'works';
  textColor?: 'white' | 'black';
};

const Navigation = ({ currentPage, textColor = 'black' }: NavigationProps) => {
  const links = [
    { 
      to: "/about", 
      imgSrc: currentPage === 'about' 
        ? (textColor === 'white' ? "/lovable-uploads/877946b2-7209-4d31-a4d0-353a121f4e5f.png" : "/lovable-uploads/4718697d-d353-42aa-9dbd-9e0dbffe821c.png")
        : (textColor === 'white' ? "/lovable-uploads/af7b068d-3204-48c3-916c-d6784bce4041.png" : "/lovable-uploads/4718697d-d353-42aa-9dbd-9e0dbffe821c.png"),
      alt: "about me", 
      id: 'about' 
    },
    { 
      to: "/design", 
      imgSrc: currentPage === 'design'
        ? (textColor === 'white' ? "/lovable-uploads/877946b2-7209-4d31-a4d0-353a121f4e5f.png" : "/lovable-uploads/2ee56e3e-52de-42eb-91f2-766c92f8bb72.png")
        : (textColor === 'white' ? "/lovable-uploads/af7b068d-3204-48c3-916c-d6784bce4041.png" : "/lovable-uploads/2ee56e3e-52de-42eb-91f2-766c92f8bb72.png"),
      alt: "about my design", 
      id: 'design' 
    },
    { 
      to: "/works", 
      imgSrc: currentPage === 'works'
        ? (textColor === 'white' ? "/lovable-uploads/877946b2-7209-4d31-a4d0-353a121f4e5f.png" : "/lovable-uploads/ae356613-0453-4db3-9253-d3b7e13712aa.png")
        : (textColor === 'white' ? "/lovable-uploads/af7b068d-3204-48c3-916c-d6784bce4041.png" : "/lovable-uploads/ae356613-0453-4db3-9253-d3b7e13712aa.png"),
      alt: "selected works", 
      id: 'works' 
    },
  ];

  return (
    <nav className="fixed left-[140px]" style={{ top: "calc(140px + 584px - 50px)" }}>
      <motion.ul 
        className="flex gap-[110px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="transition-opacity duration-300 hover:opacity-80"
            >
              <img 
                src={link.imgSrc}
                alt={link.alt}
                className="h-[28px] w-auto"
              />
            </Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navigation;
