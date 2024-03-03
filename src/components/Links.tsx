import { motion } from "framer-motion";
import { navLinks } from "../constants";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const menu = navLinks.map((link) => link.title);
  return (
    <motion.div
      className="links absolute, w-[100%] h-[100%] flex flex-col justify-center items-center"
      variants={variants}
    >
      {menu.map((menuItem) => (
        <motion.a
          className="text-white mb-7 font-inter text-4xl"
          href={`#${menuItem}`}
          key={menuItem}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {menuItem}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
