import { motion } from "framer-motion";
import { INTERESTS } from "../constants";

const Interests = () => {
  return (
    <div className="pb-4">
    <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl text-white"
    >
      Areas of Interest
    </motion.h2>

    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {INTERESTS.map((interest, index) => (
        <motion.div
          key={index}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="p-6 rounded-lg bg-stone-900 shadow-lg hover:shadow-xl"
        >
          <h3 className="mb-2 text-xl font-semibold text-white">{interest.title}</h3>
          <p className="text-stone-400">{interest.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
  )
}

export default Interests
