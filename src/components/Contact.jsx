import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Globe = () => {
  const globeRef = useRef();

  // Rotate the globe
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
        map={new THREE.TextureLoader().load(
          "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
        )}
      />
    </mesh>
  );
};

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pt-10 pb-20 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Contact Info Section */}
      <motion.div
        className="text-center flex flex-col gap-6 items-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl text-white font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get in Touch
          
        </motion.h2>

        <motion.p
          className="flex items-center gap-2 text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FaMapMarkerAlt className="text-lg text-gray-400 icon-animation" />
          {CONTACT.address}
        </motion.p>

        <motion.p
          className="flex items-center gap-2 text-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FaPhoneAlt className="text-lg text-gray-400 icon-animation" />
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a
          href="mailto:soyzawehara@gmail.com"
          className="flex items-center gap-2 text-white hover:text-blue-400 hover:underline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <FaEnvelope className="text-lg text-gray-400 icon-animation" />
          {CONTACT.email}
        </motion.a>

        <motion.a
          href="mailto:soyzawehara@gmail.com"
          className="px-6 py-3 mt-6 inline-block bg-gradient-to-r from-[#feb80f] to-[#ff5e4d] text-white rounded-lg shadow-lg hover:from-[#ff5e4d] hover:to-[#feb80f] transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Send an Email
        </motion.a>
      </motion.div>

      {/* Globe Section */}
      <div
        style={{ width: "400px", height: "400px" }}
        className="relative overflow-hidden"
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Globe />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default Contact;
