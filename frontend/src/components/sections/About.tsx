import { motion } from "framer-motion";

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", 
  "Express", "MongoDB", "Tailwind CSS", "Git"
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-4 bg-white"
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
          About <span className="text-blue-600">Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate full-stack developer with 5 years of experience building web applications. 
              I specialize in the MERN stack and love creating interactive user experiences.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me contributing to open-source projects or exploring new technologies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * i }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;