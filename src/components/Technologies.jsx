import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb} from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiR } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import {motion} from "framer-motion";


const iconVariants= (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }

  }
})




const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1}}
      className="my-20 text-center text-4xl text-white">Skills
      
      </motion.h2>
      <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-6">
        
        <motion.div 
           initial="initial"
           animate="animate"
           variants={iconVariants(2.5)}
        
        className="flex flex-col items-center">
          <RiReactjsLine className="text-7xl text-cyan-400 " />
          <p className="text-white mt-2">React</p>
        </motion.div>
        
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
        className="flex flex-col items-center">
          <SiMongodb className="text-7xl text-green-500 " />
          <p className="text-white mt-2">MongoDB</p>
        </motion.div>
       
        <motion.div 
            initial="initial"
           animate="animate"
           variants={iconVariants(5)}
        className="flex flex-col items-center">
          <SiPython className="text-7xl" style={{ color: "#FFD43B" }} />
          <p className="text-white mt-2">Python</p>
        </motion.div>
        
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
        className="flex flex-col items-center">
          <SiMysql className="text-7xl text-blue-400" />
          <p className="text-white mt-2">MySQL</p>
        </motion.div>
        
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        className="flex flex-col items-center">
          <SiPowerbi className="text-7xl text-yellow-500" />
          <p className="text-white mt-2">Power BI</p>
        </motion.div>
       
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
        className="flex flex-col items-center">
          <SiNodedotjs className="text-7xl text-green-500" />
          <p className="text-white mt-2">Node.js</p>
        </motion.div>
       
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}
        className="flex flex-col items-center">
          <SiNumpy className="text-7xl text-blue-500 " />
          <p className="text-white mt-2">NumPy</p>
        </motion.div>
        
        <motion.div 
           initial="initial"
           animate="animate"
           variants={iconVariants(3)}
        className="flex flex-col items-center">
          <SiPandas className="text-7xl text-gray-300" />
          <p className="text-white mt-2">Pandas</p>
        </motion.div>
        
        <motion.div 
           initial="initial"
           animate="animate"
           variants={iconVariants(5)}
        className="flex flex-col items-center">
          <SiR className="text-7xl text-blue-400" />
          <p className="text-white mt-2">R</p>
        </motion.div>
        
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        className="flex flex-col items-center">
          <SiHtml5 className="text-7xl text-orange-500" />
          <p className="text-white mt-2">HTML</p>
        </motion.div>
       
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
        className="flex flex-col items-center">
          <SiCss3 className="text-7xl text-blue-500" />
          <p className="text-white mt-2">CSS</p>
        </motion.div>
        
        <motion.div 
           initial="initial"
           animate="animate"
           variants={iconVariants(4)}
        className="flex flex-col items-center">
          <SiJavascript className="text-7xl text-yellow-400" />
          <p className="text-white mt-2">JavaScript</p>
        </motion.div>
        <motion.div 
           initial="initial"
           animate="animate"
           variants={iconVariants(2)}
        className="flex flex-col items-center">
          <SiTensorflow className="text-7xl text-orange-400" />
          <p className="text-white mt-2">TensorFlow</p>
        </motion.div>
        <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
        className="flex flex-col items-center">
          <SiPytorch className="text-7xl text-red-400" />
          <p className="text-white mt-2">PyTorch</p>
        </motion.div>
       
      </motion.div>
    </div>
  );
};

export default Technologies;