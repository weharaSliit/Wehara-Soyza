import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCodeBranch } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";

const Projects = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10  opacity-90"></div>
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-[#feb80f] to-[#ff5e4d]"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto px-4">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center text-white mb-16 relative"
        >
          <span className="relative z-10">
            My Projects
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#feb80f] to-[#ff5e4d]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-stone-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-stone-700/50 hover:border-[#feb80f]/30 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-white text-xl font-semibold">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-[#feb80f] transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-400 hover:text-[#ff5e4d] transition-colors"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-stone-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ y: -2 }}
                      className="bg-stone-700/50 text-stone-300 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <FiLayers className="text-[#feb80f]" />
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex justify-center"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 text-sm font-semibold bg-gradient-to-r from-[#feb80f] to-[#ff5e4d] text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all"
                  >
                    <FaCodeBranch />
                    View Project
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;