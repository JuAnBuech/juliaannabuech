
import { motion } from "framer-motion";

const Navigation = () => {
  const links = [
    { href: "/about", text: "About Me" },
    { href: "/design", text: "About My Design" },
    { href: "/works", text: "Selected Works" },
  ];

  return (
    <nav className="fixed top-8 right-8 z-50">
      <motion.ul 
        className="flex flex-col gap-6 text-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-gray-600 hover:text-black transition-colors duration-300 text-lg"
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
