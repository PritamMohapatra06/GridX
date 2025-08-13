import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#0B0C0E] text-white px-6 pt-28 pb-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full bg-[#141517] border border-white/5 rounded-2xl shadow-lg p-8"
      >
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 ">About Me</h1>
        <p className="text-gray-400 text-lg mb-6">
          Hi, I’m <span className="text-white font-semibold">Pritam Mohapatra</span>, 
          a passionate MERN Stack Developer from India. I specialize in building responsive, modern, 
          and interactive web applications that provide an amazing user experience.
        </p>

        {/* Image & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[1.5rem] p-[3px] w-full max-w-sm">
              <img
                src="/assets/images/profile.jpg"
                alt="Pritam Mohapatra"
                className="rounded-[1.4rem] object-cover w-full h-[350px]"
              />
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Skills & Expertise</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Frontend: React, Next.js, Tailwind CSS</li>
              <li>Backend: Node.js, Express.js, REST APIs</li>
              <li>Database: MongoDB, Mongoose</li>
              <li>Other: Git, Framer Motion, Web Performance</li>
            </ul>
          </div>
        </div>

        {/* Personal Statement */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">My Vision</h2>
          <p className="text-gray-400">
            My goal is to create meaningful digital experiences that help businesses 
            grow and users feel connected. Every line of code I write is driven by 
            the passion to innovate and inspire.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
