import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm shadow-sm fixed top-0 left-16 lg:left-20 right-0 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">Pritam</span> Mohapatra
        </h1>
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Portfolio", "Blog", "Contact"].map((item, i) => (
            <a 
              key={i}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;