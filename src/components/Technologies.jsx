import { useRef } from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPython, SiMysql, SiPowerbi, SiNodedotjs, SiNumpy, SiPandas, SiR, SiHtml5, SiCss3, SiJavascript, SiTensorflow, SiPytorch, SiC, SiCplusplus, SiSpring, SiSnowflake, SiApachespark } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const RotatingStarsBackground = () => {
  const starGroup = useRef();

  useFrame(({ clock }) => {
    if (starGroup.current) {
      const t = clock.getElapsedTime();
      starGroup.current.rotation.x = t * 0.01;
      starGroup.current.rotation.y = t * 0.005;
    }
  });

  return (
    <group ref={starGroup}>
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
};

const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.1} />
        <RotatingStarsBackground />
      </Canvas>
    </div>
  );
};

const iconVariants = {
  hover: {
    y: -10,
    scale: 1.1,
    transition: { 
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 10
    },
  },
};

const cardVariants = {
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      staggerChildren: 0.1
    }
  },
  initial: { opacity: 0, y: 50 },
};

const skillsData = {
  "Frontend Development": [
    { Icon: RiReactjsLine, label: "React", color: "text-cyan-400", glow: "shadow-cyan-400/20" },
    { Icon: SiHtml5, label: "HTML", color: "text-orange-500", glow: "shadow-orange-500/20" },
    { Icon: SiCss3, label: "CSS", color: "text-blue-500", glow: "shadow-blue-500/20" },
    { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400", glow: "shadow-yellow-400/20" },
  ],
  "Backend Development": [
    { Icon: SiNodedotjs, label: "Node.js", color: "text-green-500", glow: "shadow-green-500/20" },
    { Icon: SiSpring, label: "Spring Boot", color: "text-green-400", glow: "shadow-green-400/20" },
    { Icon: SiMysql, label: "MySQL", color: "text-blue-400", glow: "shadow-blue-400/20" },
    { Icon: SiMongodb, label: "MongoDB", color: "text-green-500", glow: "shadow-green-500/20" },
  ],
  "Data Science & AI": [
    { Icon: SiPython, label: "Python", color: "text-yellow-400", glow: "shadow-yellow-400/20" },
    { Icon: SiNumpy, label: "NumPy", color: "text-blue-500", glow: "shadow-blue-500/20" },
    { Icon: SiPandas, label: "Pandas", color: "text-gray-300", glow: "shadow-gray-300/20" },
    { Icon: SiTensorflow, label: "TensorFlow", color: "text-orange-400", glow: "shadow-orange-400/20" },
    { Icon: SiPytorch, label: "PyTorch", color: "text-red-400", glow: "shadow-red-400/20" },
    { Icon: SiR, label: "R", color: "text-blue-400", glow: "shadow-blue-400/20" },
  ],
  "Programming Languages": [
    { Icon: SiC, label: "C", color: "text-blue-500", glow: "shadow-blue-500/20" },
    { Icon: SiCplusplus, label: "C++", color: "text-purple-500", glow: "shadow-purple-500/20" },
    { Icon: FaJava, label: "Java", color: "text-red-500", glow: "shadow-red-500/20" },
  ],
  "Data Warehouse & BI": [
    { Icon: SiSnowflake, label: "Snowflake", color: "text-blue-300", glow: "shadow-blue-300/20" },
    { Icon: SiApachespark, label: "Spark", color: "text-red-500", glow: "shadow-red-500/20" },
    { Icon: SiPowerbi, label: "Power BI", color: "text-yellow-500", glow: "shadow-yellow-500/20" },
  ],
};

const Technologies = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      <SpaceBackground />
      
      {/* Shooting stars animation */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 w-0.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 6px 1px white"
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: `${Math.random() * 600 - 300}px`,
            y: `${Math.random() * 600 - 300}px`
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            repeatDelay: Math.random() * 8
          }}
        />
      ))}

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl md:text-5xl font-bold text-white"
      >
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          My Tech Universe
        </span>
      </motion.h2>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {Object.entries(skillsData).map(([category, skills], idx) => (
          <motion.div
            key={idx}
            className="mb-20"
            variants={cardVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl text-center mb-10 font-medium text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative inline-block">
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                {category}
              </span>
            </motion.h3>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map(({ Icon, label, color, glow }, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="relative group"
                  >
                    <motion.div
                      whileHover="hover"
                      variants={iconVariants}
                      className={`flex flex-col items-center justify-center p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-cyan-400/30 transition-all duration-300 ${glow} group-hover:shadow-lg`}
                    >
                      <Icon className={`text-4xl md:text-5xl ${color} drop-shadow-lg`} />
                      <p className="text-white mt-3 text-sm md:text-base font-medium text-center">
                        {label}
                      </p>
                    </motion.div>
                    
                    {/* Floating particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute h-1 w-1 bg-white rounded-full opacity-0 group-hover:opacity-70"
                        style={{
                          left: `${Math.random() * 80 + 10}%`,
                          top: `${Math.random() * 80 + 10}%`,
                        }}
                        initial={{ y: 0 }}
                        animate={{
                          y: [0, -10, -20],
                          opacity: [0.7, 0.4, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;