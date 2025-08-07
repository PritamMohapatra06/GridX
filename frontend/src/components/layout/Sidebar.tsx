import { motion } from "framer-motion";
import { FaHome, FaUser, FaBriefcase, FaBlog, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const items = [
    { icon: <FaHome size={18} />, href: "#hero", label: "Home" },
    { icon: <FaUser size={18} />, href: "#about", label: "About" },
    { icon: <FaBriefcase size={18} />, href: "#portfolio", label: "Portfolio" },
    { icon: <FaBlog size={18} />, href: "#blog", label: "Blog" },
    { icon: <FaEnvelope size={18} />, href: "#contact", label: "Contact" },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-16 md:w-20 bg-black shadow-lg flex flex-col items-center py-8 space-y-8 z-50">
      {items.map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          className="p-3 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all relative group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          {item.icon}
          <span className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap shadow-md z-10">
            {item.label}
          </span>
        </motion.a>
      ))}
    </aside>
  );
};

export default Sidebar;
