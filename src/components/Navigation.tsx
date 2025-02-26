
import { motion } from "framer-motion";

type NavigationProps = {
  currentPage?: 'about' | 'design' | 'works';
  textColor?: 'white' | 'black';
};

const Navigation = ({ currentPage, textColor = 'black' }: NavigationProps) => {
  const links = [
    { href: "/about", text: "about me", id: 'about' },
    { href: "/design", text: "about my design", id: 'design' },
    { href: "/works", text: "selected works", id: 'works' },
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
          <li key={link.href}>
            <a
              href={link.href}
              className={`text-[28px] transition-colors duration-300 ${
                textColor === 'white' ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'
              } ${
                currentPage === link.id ? 'font-priego-bold' : 'font-priego-light'
              }`}
            >
              {link.text}
            </a>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navigation;
