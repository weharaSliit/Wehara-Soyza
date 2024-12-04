import profilePic from "../assets/newMe.svg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="mt-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center mx-auto px-4 max-w-[1200px]">
        {/* Rotating Circle and Profile Image */}
        <motion.div className="relative flex justify-center lg:w-1/2 mb-8 lg:mb-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] circle-gradient"
          ></motion.div>

          <motion.img
            src={profilePic}
            alt="Wehara"
            className="profile-img z-10"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.h2 className="text-white text-4xl font-bold tracking-tight lg:text-6xl">
            <Typewriter
              words={["Wehara Soyza"]}
              loop={Infinity}
              typeSpeed={100}
              deleteSpeed={60}
              cursor
              cursorStyle="|"
              cursorBlinking={true}
            />
          </motion.h2>

          <motion.p className="mt-4 text-2xl font-medium bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
            Data Science Enthusiast
          </motion.p>

          <motion.p className="mt-6 text-gray-400 text-lg max-w-md">
            {ABOUT_TEXT}
          </motion.p>

          {/* Resume Button */}
          <motion.div className="relative inline-block mt-8 mb-10">
            <motion.a
              href="/resume.pdf"
              download
              className="inline-block rounded-full py-4 px-6 text-sm font-semibold transition-all duration-500 view-project-button"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
