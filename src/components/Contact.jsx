import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

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
      {/* Sphere for the globe */}
      <sphereGeometry args={[2.5, 64, 64]} />
      {/* Texture for the globe */}
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
    <div className="border-t border-stone-900 pb-20 flex flex-col md:flex-row items-center justify-center gap-10">
      <motion.div
        className="text-center tracking-tighter"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="my-10 text-4xl text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="my-4 text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          className="my-4 text-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href="mailto:soyzawehara@gmail.com"
          className="border-b text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>

      {/* Static globe container without framer-motion */}
      <div style={{ width: "400px", height: "400px" }} className="relative overflow-hidden">
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
