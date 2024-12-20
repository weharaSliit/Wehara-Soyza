import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Projects
      </motion.h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full mb-6 project-box"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="rounded"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl text-center"
            >
              <h3 className="mb-2 font-semibold text-2xl text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
              <div className="mt-4 button-container">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="view-project-button flex items-center justify-center gap-2">
                  <FaGithub className="icon-animation" />
                    View Project</button>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
