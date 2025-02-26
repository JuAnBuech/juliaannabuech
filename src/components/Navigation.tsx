
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type NavigationProps = {
  currentPage?: 'about' | 'design' | 'works';
  textColor?: 'white' | 'black';
};

const Navigation = ({ currentPage, textColor = 'black' }: NavigationProps) => {
  const links = [
    { to: "/about", text: "about me", id: 'about' },
    { to: "/design", text: "about my design", id: 'design' },
    { to: "/works", text: "selected works", id: 'works' },
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
              className={`text-[28px] transition-colors duration-300 ${
                textColor === 'white' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'
              } ${
                currentPage === link.id ? 'font-priego-bold' : 'font-priego-light'
              }`}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navigation;
