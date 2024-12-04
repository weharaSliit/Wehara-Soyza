import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPython, SiMysql, SiPowerbi, SiNodedotjs, SiNumpy, SiPandas, SiR, SiHtml5, SiCss3, SiJavascript, SiTensorflow, SiPytorch } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Technologies = () => {
  const skills = [
    { Icon: RiReactjsLine, label: "React", color: "text-cyan-400" },
    { Icon: SiMongodb, label: "MongoDB", color: "text-green-500" },
    { Icon: SiPython, label: "Python", color: "text-yellow-400" },
    { Icon: SiMysql, label: "MySQL", color: "text-blue-400" },
    { Icon: SiPowerbi, label: "Power BI", color: "text-yellow-500" },
    { Icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
    { Icon: SiNumpy, label: "NumPy", color: "text-blue-500" },
    { Icon: SiPandas, label: "Pandas", color: "text-gray-300" },
    { Icon: SiR, label: "R", color: "text-blue-400" },
    { Icon: SiHtml5, label: "HTML", color: "text-orange-500" },
    { Icon: SiCss3, label: "CSS", color: "text-blue-500" },
    { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
    { Icon: SiTensorflow, label: "TensorFlow", color: "text-orange-400" },
    { Icon: SiPytorch, label: "PyTorch", color: "text-red-400" },
  ];

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

      <div className="flex flex-wrap items-center justify-center gap-6">
        {skills.map(({ Icon, label, color }, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="animate"
            variants={iconVariants}
            className="flex flex-col items-center"
          >
            <Icon className={`text-7xl ${color}`} />
            <p className="text-white mt-2">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
