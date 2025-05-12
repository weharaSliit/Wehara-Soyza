import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <section className="py-20 relative overflow-hidden ">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#feb80f] to-[#ff5e4d]"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1,
              filter: "blur(40px)"
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-5xl font-bold text-white mb-20"
        >
          <span className="relative inline-block">
            Education
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#feb80f] to-[#ff5e4d]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {EDUCATION.map((education, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-gradient-to-r from-[#feb80f] to-[#ff5e4d] transform -translate-x-1/2"></div>
              
              {/* Timeline line */}
              {index !== EDUCATION.length - 1 && (
                <div className="absolute left-0 top-6 bottom-0 w-0.5 bg-gradient-to-b from-[#feb80f] to-[#ff5e4d] transform -translate-x-1/2"></div>
              )}

              <div className="pl-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-stone-800/50 px-4 py-2 rounded-full"
                  >
                    <FaCalendarAlt className="text-[#feb80f]" />
                    <span className="text-sm text-stone-400">{education.year}</span>
                  </motion.div>

                  <motion.h3 
                    className="text-xl font-semibold text-white flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <FaGraduationCap className="text-[#ff5e4d]" />
                    {education.degree}
                  </motion.h3>
                </div>

                <motion.div 
                  className="flex items-center gap-2 text-stone-500 mb-4"
                  whileHover={{ x: 5 }}
                >
                  <FaUniversity />
                  <span>{education.university}</span>
                </motion.div>

                {education.description && (
                  <motion.p 
                    className="text-stone-400 pl-6 border-l-2 border-stone-700/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {education.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;