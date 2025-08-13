import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const { pathname } = useLocation();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-[#0B0C0E]/90 backdrop-blur-md border-b border-white/5 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/images/logo.jpg" alt="logo" className="w-8 h-8 rounded-3xl" />
          <span className="font-bold text-3xl tracking-wide">GridX</span>
        </Link>

        {/* Menu Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors ${
                pathname === item.to
                  ? "text-primary"
                  : "text-white hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social Icons & Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/PritamMohapatra06"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <i className="ri-github-line text-xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <i className="ri-linkedin-line text-xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <i className="ri-instagram-line text-xl"></i>
          </a>
          <Link
            to="/contact"
            className="ml-4 btn-primary text-sm px-4 py-2"
          >
            Let’s Talk
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
