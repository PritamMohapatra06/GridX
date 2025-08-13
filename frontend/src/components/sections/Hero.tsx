import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`bg-[#141517] border border-white/5 rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

const ArrowLink = ({ to }: { to: string }) => (
  <Link
    to={to}
    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
  >
    ➜
  </Link>
);

export default function HomePage() {
  return (
    <section className="min-h-screen bg-[#0B0C0E] text-white px-6 pt-32 pb-16">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Profile Card */}

        <Card className="lg:col-span-2 p-6 h-80 rounded-[2rem] shadow-lg backdrop-blur-lg bg-glass-gradient text-white">
          <div className="flex flex-row items-center gap-4 h-full">
            {/* Left - Image */}
            <div className="w-60 h-60 bg-gradient-to-tl from-green-600 to-red-400 p-[3px] rounded-tl-[2rem] rounded-br-[2rem] shadow-lg">
              <img
                src="/assets/images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-tl-[2rem] rounded-br-[2rem]"
              />
            </div>
            {/* Right */}
            <div className="flex-[1] flex flex-col ">
              <div>
                <span className="text-sm text-gray-400 uppercase">MERN Developer</span>
                <h2 className="text-3xl font-bold">Pritam Mohapatra</h2>
                <p className="text-gray-400 text-sm">
                  I am a MERN Developer based in India. I create responsive, modern, and interactive web applications.
                </p>
              </div>
            </div>
          </div>
        </Card>


        {/* Credentials */}
        <Card className="lg:col-span-1 h-80 rounded-[2rem] shadow-lg backdrop-blur-lg bg-glass-gradient text-white overflow-hidden">
          <img src="/assets/images/credentials.png" alt="Credentials" className="w-full h-60 object-cover" />
          <div className="p-4 flex flex-col flex-grow">
            <span className="text-xs text-gray-400 uppercase">More About Me</span>
            <h3 className="text-lg font-semibold mt-1">Credentials</h3>
            <p className="text-sm text-gray-400 mt-2 flex-1">
              Education, work experience, and certifications that showcase my skills.
            </p>
          </div>
          <div className="p-4 -mt-10 flex justify-end">
            <ArrowLink to="/contact" />
          </div>
        </Card>

        {/* Projects */}
        <Card className="lg:col-span-1  h-80 rounded-[2rem] shadow-lg backdrop-blur-lg bg-glass-gradient text-white overflow-hidden">
          <img src="/assets/images/projects.jpeg" alt="Projects" className="w-full h-40 object-cover" />
          <div className="p-4 flex flex-col flex-grow">
            <span className="text-xs text-gray-400 uppercase">Showcase</span>
            <h3 className="text-lg font-semibold mt-1">Projects</h3>
            <p className="text-sm text-gray-400 mt-2 flex-1">
              A selection of projects I’ve worked on with live demos and code.
            </p>
          </div>
          <div className="p-4 -mt-8 flex justify-end">
            <ArrowLink to="/portfolio" />
          </div>
        </Card>

        {/* Blog */}
        <Card  className="lg:col-span-1 h-80 rounded-[2rem] shadow-lg backdrop-blur-lg bg-glass-gradient text-white">
          <img src="/assets/images/blog.png" alt="Blog" className="w-full h-40 object-cover" />
          <div className="p-4 flex flex-col flex-grow">
            <span className="text-xs text-gray-400 uppercase">Blog</span>
            <h3 className="text-lg font-semibold mt-1">Gfont</h3>
            <p className="text-sm text-gray-400 mt-2 flex-1">
              My thoughts, tutorials, and insights on web development and design.
            </p>
          </div>
          <div className="p-1 -mt-8 mr-3 flex justify-end">
            <ArrowLink to="/blog" />
          </div>
        </Card>

        {/* Services */}
        <Card className="lg:col-span-2 h-80 rounded-[2rem] shadow-lg backdrop-blur-lg bg-glass-gradient text-white">
          <img src="/assets/images/services.jpg" alt="Services" className="w-full h-40 object-cover" />
          <div className="p-4 flex flex-col flex-grow">
            <span className="text-xs text-gray-400 uppercase">Specialization</span>
            <h3 className="text-lg font-semibold mt-1">Services Offering</h3>
            <p className="text-sm text-gray-400 mt-2 flex-1">
              Web app development, UI/UX design, API integrations, and performance optimization.
            </p>
          </div>
          <div className="p-4 -mt-8 flex justify-end">
            <ArrowLink to="/contact" />
          </div>
        </Card>

        {/* Profiles */}
        <Card className="lg:col-span-1 h-80 rounded-[2rem] shadow-lg backdrop-blur-lg bg-glass-gradient text-white">
          <img src="/assets/images/connect.png" alt="Profiles" className="w-full h-40 object-cover" />
          <div className="p-4 flex flex-col flex-grow">
            <span className="text-xs text-gray-400 uppercase">Stay With Me</span>
            <h3 className="text-lg font-semibold mt-1">Profiles</h3>
            <p className="text-sm text-gray-400 mt-2 flex-1">
              Links to my professional and social media profiles.
            </p>
          </div>
          <div className="p-4 -mt-8 flex justify-end">
            <ArrowLink to="/contact" />
          </div>
        </Card>

      </div>
    </section>
  );
}
