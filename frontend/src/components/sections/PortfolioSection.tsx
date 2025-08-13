import React from "react";
import {motion} from "framer-motion";

const PortfolioSection: React.FC = () => {
  const works = [
    { id: 1, title: "Task Management App", category: "Web Design", image: "/assets/images/tasks.jpg", link: "#" },
    { id: 2, title: "Photography Portfolio", category: "Photography", image: "/assets/images/photography.jpg", link: "#" },
    { id: 3, title: "E-Commerce Website", category: "Web Development", image: "/assets/images/ecommerce.png", link: "#" },
    { id: 4, title: "App UI Design", category: "UI/UX", image: "/assets/images/app-ui.jpeg", link: "#" },
    { id: 5, title: "Weather Dashboard", category: "Web Development", image: "/assets/images/weather.jpg", link: "#" },
    { id: 6, title: "Marketing Campaign", category: "Digital Marketing", image: "/assets/images/marketing.png", link: "#" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    <section className="mt-10 py-16 bg-[#0f0f0f] text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {works.map((work) => (
          <div key={work.id} className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={work.image}
              alt={work.title}
              onError={(e) => (e.currentTarget.src = "/images/portfolio/fallback.jpg")}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{work.title}</h3>
              <p className="text-sm text-gray-400">{work.category}</p>
              <a href={work.link} className="mt-4 inline-block text-[#ff4d5a] hover:underline">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </motion.div>
  );
};

export default PortfolioSection;
