// src/components/Hero.tsx

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#0F172A] px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        
        {/* Profile Image with ring effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-indigo-500 shadow-lg overflow-hidden"
        >
          <img
            src="/assets/images/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-center md:text-left"
        >
          <p className="text-lg md:text-xl">Hello, I’m</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight pb-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Pritam Priyajit Mohapatra
          </h1>
          <h2 className="text-lg md:text-2xl mt-2 text-gray-300">
            Full Stack Developer
          </h2>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <a href="#portfolio">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow">
                    View My Work
                  </button>
              </a>
              <a href="#contact">
                  <button className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-full transition">
                    Contact Me
                  </button>
              </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
