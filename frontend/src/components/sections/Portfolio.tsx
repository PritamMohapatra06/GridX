import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiJavascript, SiTypescript } from "react-icons/si";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with payment processing",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/assets/images/ecommerce.jpg",
  },
  {
    title: "Task Management App",
    description: "Productivity application with team collaboration",
    tags: ["TypeScript", "React", "Firebase"],
    image: "/assets/images/tasks.jpg",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather with interactive maps",
    tags: ["JavaScript", "API Integration"],
    image: "/assets/images/weather.jpg",
  },
];

// Icon map
const tagIcons: { [key: string]: React.ReactElement } = {
  React: <FaReact className="text-blue-500" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  MongoDB: <SiMongodb className="text-green-700" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
};

const Portfolio = () => {
  return (
    <motion.section
      id="portfolio"
      className="py-20 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          My <span className="text-blue-600">Portfolio</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-1 text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tagIcons[tag] || null}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
