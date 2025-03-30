import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPython, SiMysql, SiPowerbi, SiNodedotjs, SiNumpy, SiPandas, SiR, SiHtml5, SiCss3, SiJavascript, SiTensorflow, SiPytorch, SiC, SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  hover: {
    scale: 1.2,
    transition: { duration: 0.3 },
  },
};

const cardVariants = {
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 50 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const skillsData = {
  "Frontend Development": [
    { Icon: RiReactjsLine, label: "React", color: "text-cyan-400" },
    { Icon: SiHtml5, label: "HTML", color: "text-orange-500" },
    { Icon: SiCss3, label: "CSS", color: "text-blue-500" },
    { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
  ],
  "Backend Development": [
    { Icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
    { Icon: SiMysql, label: "MySQL", color: "text-blue-400" },
    { Icon: SiMongodb, label: "MongoDB", color: "text-green-500" },
  ],
  "Data Science & AI": [
    { Icon: SiPython, label: "Python", color: "text-yellow-400" },
    { Icon: SiNumpy, label: "NumPy", color: "text-blue-500" },
    { Icon: SiPandas, label: "Pandas", color: "text-gray-300" },
    { Icon: SiTensorflow, label: "TensorFlow", color: "text-orange-400" },
    { Icon: SiPytorch, label: "PyTorch", color: "text-red-400" },
    { Icon: SiR, label: "R", color: "text-blue-400" },
  ],
  "Programming Languages": [
    
    { Icon: SiC, label: "C", color: "text-blue-500" },
    { Icon: SiCplusplus, label: "C++", color: "text-purple-500" },
    { Icon: FaJava, label: "Java", color: "text-red-500" },
    
  ],
  "Visualization Tools": [
    { Icon: SiPowerbi, label: "Power BI", color: "text-yellow-500" },
  ],
};

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl text-white"
      >
         Skills
      </motion.h2>

      {Object.entries(skillsData).map(([category, skills], idx) => (
        <motion.div
          key={idx}
          className="mb-16"
          variants={cardVariants}
          initial="initial"
          whileInView="whileInView"
          transition="transition"
        >
          <h3 className="text-2xl text-white font-semibold text-center mb-6 underline">
            {category}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {skills.map(({ Icon, label, color }, index) => (
              <motion.div
                key={index}
                whileHover="hover"
                variants={iconVariants}
                className="w-28 h-28 flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Icon className={`text-5xl ${color}`} />
                <p className="text-white mt-2 text-sm text-center">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Technologies;
