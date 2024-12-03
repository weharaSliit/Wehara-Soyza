import profilePic from "../assets/newMe.svg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="mt-0">
      <div className="flex flex-col lg:flex-row-reverse items-center lg:justify-between lg:space-x-8 max-w-screen-xl mx-auto px-4">
       
        <motion.div className="relative flex justify-center lg:justify-start lg:w-1/2 mb-8 lg:mb-0 sm:-mt-12 md:-mt-16 lg:mt-0">
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 10, 
              ease: "linear",
              repeat: Infinity, 
            }}
            className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full"
            style={{
              borderImageSource: `conic-gradient(
                #feb80f 10%, 
                rgba(255, 94, 77, 1) 30%, 
                rgba(0, 0, 0, 0) 50%
              )`,
              borderWidth: "5px",
              borderStyle: "solid",
              borderRadius: "50%",
            }}
          ></motion.div>

          {/* Profile Image */}
          <motion.img
            src={profilePic}
            alt="Wehara"
            className="profile-img w-64 h-64 rounded-full z-10"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.5 } },
          }}
          className="text-center lg:text-left"
          style={{ textDecoration: "none" }}
        >
          {/* Typing Effect */}
          <motion.h2
            className="text-white text-4xl font-bold tracking-tight lg:text-6xl"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
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

          <motion.p
            className="mt-4 text-2xl font-medium bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
            Data Science Enthusiast
          </motion.p>

          <motion.p
            className="mt-6 text-gray-400 text-lg max-w-md"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
            {ABOUT_TEXT}
          </motion.p>

          {/* Resume Button */}
          <motion.div
            className="relative inline-block mt-8 mb-10"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
            <motion.a
              href="/resume.pdf"
              target="noopener noreferrer"
              download
              className="inline-block rounded-full py-4 px-6 text-sm font-semibold transition-all duration-500"
              style={{
                background: "white",
                color: "rgb(88, 88, 88)",
                animation: "gradientShift 3s ease-in-out infinite", // continuous gradient animation
              }}
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
