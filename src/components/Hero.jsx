import { useRef } from "react";
import profilePic from "../assets/newMe.svg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const RotatingStars = () => {
  const starGroup = useRef();

  useFrame(({ clock }) => {
    if (starGroup.current) {
      const t = clock.getElapsedTime();
      starGroup.current.rotation.x = t * 0.05;
      starGroup.current.rotation.y = t * 0.03;
    }
  });

  return (
    <group ref={starGroup}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={6}
        saturation={0}
        fade
        speed={2}
      />
    </group>
  );
};

const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#4d9eff" intensity={1} />
        <RotatingStars />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

const FloatingPlanets = () => {
  return (
    <>
      {/* Large blue planet */}
      <motion.div
        initial={{ y: -100, x: -100, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/4 left-1/4 w-20 h-20 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 blur-xl opacity-30"
      />

      {/* Small orange planet */}
      <motion.div
        initial={{ y: 100, x: 100, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 0.3 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-10 h-10 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-400 to-red-600 blur-xl opacity-30"
      />
    </>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <SpaceBackground />
      <FloatingPlanets />

      {/* Animated shooting stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 w-0.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 10px 2px white"
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: `${Math.random() * 500 - 250}px`,
            y: `${Math.random() * 500 - 250}px`
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 5
          }}
        />
      ))}

      <div className="flex flex-col lg:flex-row-reverse items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] z-10 w-full">
        {/* Profile image with effects */}
        <motion.div className="relative flex justify-center w-full lg:w-1/2 mb-8 lg:mb-0 px-4">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 15,
              ease: "linear",
              repeat: Infinity,
              scale: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30 rounded-full blur-xl"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity
            }}
            className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[370px] md:h-[370px] lg:w-[420px] lg:h-[420px] border-2 border-transparent rounded-full"
            style={{
              boxShadow: "0 0 30px 5px rgba(77, 158, 255, 0.5)",
              borderImage: "linear-gradient(to right, #4d9eff, #feb80f, #ff5e4d) 1"
            }}
          />

          <motion.img
            src={profilePic}
            alt="Wehara"
            className="profile-img z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -10, 0]
            }}
            transition={{
              scale: { duration: 1, delay: 1.5 },
              opacity: { duration: 1, delay: 1.5 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left w-full lg:w-1/2 px-4 sm:px-6"
        >
          <motion.h2
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              words={["Wehara Soyza"]}
              loop={1}
              typeSpeed={100}
              deleteSpeed={60}
              cursor
              cursorStyle="|"
              cursorBlinking={true}
            />
          </motion.h2>

          <motion.p
            className="mt-2 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-medium bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typewriter
              words={["Data Science Explorer", "AI Developer", "Cosmic Coder"]}
              loop={Infinity}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
              cursor
              cursorStyle="|"
              cursorBlinking={true}
            />
          </motion.p>

          <motion.p
            className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {ABOUT_TEXT}
          </motion.p>

          {/* Resume Button */}
          <motion.div
            className="relative inline-block mt-6 sm:mt-8 md:mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.a
              href="/resume.pdf"
              download
              className="relative z-10 inline-block rounded-full py-3 px-6 sm:py-4 sm:px-8 text-sm font-semibold text-white transition-all duration-500"
              style={{
                background: "linear-gradient(45deg, #feb80f, #ff5e4d)",
                boxShadow: "0 0 20px rgba(254, 184, 15, 0.6), 0 0 25px rgba(255, 94, 77, 0.6)"
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(254, 184, 15, 0.7)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            <motion.div
              className="absolute -inset-1 sm:-inset-2 rounded-full bg-blue-500 blur-md opacity-70 -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 0.4, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;