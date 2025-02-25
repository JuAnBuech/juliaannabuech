
import { motion } from "framer-motion";

const Navigation = () => {
  const links = [
    { href: "/about", text: "about me" },
    { href: "/design", text: "about my design" },
    { href: "/works", text: "selected works" },
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
              className="text-[28px] font-light hover:text-black transition-colors duration-300"
              style={{ fontFamily: "Priego" }}
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
