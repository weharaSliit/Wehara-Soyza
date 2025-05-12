import { useRef } from 'react';
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Text3D } from "@react-three/drei";
import * as THREE from 'three';
import { INTERESTS } from "../constants";

const RotatingSpaceBackground = () => {
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
        radius={150}
        depth={100}
        count={5000}
        factor={6}
        saturation={0}
        fade
        speed={2}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="cyan" />
    </group>
  );
};

const FloatingPlanet = ({ position, color, size }) => {
  const planetRef = useRef();

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const t = clock.getElapsedTime();
      planetRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.5;
      planetRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <mesh ref={planetRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.3}
        roughness={0.7}
      />
      {Math.random() > 0.5 && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[size * 1.3, size * 1.5, 32]} />
          <meshStandardMaterial 
            color="gray" 
            side={THREE.DoubleSide} 
            transparent 
            opacity={0.6}
          />
        </mesh>
      )}
    </mesh>
  );
};

const SpaceTitle = () => {
  
  return (
    <div className="relative h-64 w-full flex items-center justify-center">
      <Canvas 
        camera={{ position: [0, 0, 50], fov: 45 }} 
        className="absolute inset-0"
      >
        {/* Space background for title */}
        <Stars
          radius={50}
          depth={50}
          count={2000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        {/* 3D Text */}
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={5}
          height={1}
          curveSegments={10}
          bevelEnabled
          bevelThickness={0.5}
          bevelSize={0.3}
          bevelOffset={0}
          bevelSegments={5}
          position={[-22, 0, 0]}
        >
          Areas of Interest
          <meshStandardMaterial 
            color="#4fd1c5" 
            emissive="#4fd1c5" 
            emissiveIntensity={0.8}
            metalness={0.5}
            roughness={0.2}
          />
        </Text3D>
        
        {/* Floating asteroids */}
        {[...Array(3)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.random() * 60 - 30,
              Math.random() * 20 - 10,
              Math.random() * -50 - 10
            ]}
            rotation={[
              Math.random() * Math.PI,
              Math.random() * Math.PI,
              Math.random() * Math.PI
            ]}
          >
            <icosahedronGeometry args={[Math.random() * 0.5 + 0.3, 0]} />
            <meshStandardMaterial 
              color="#888" 
              emissive="#444" 
              emissiveIntensity={0.2}
              roughness={0.8}
            />
          </mesh>
        ))}
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="cyan" />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enablePan={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
      </Canvas>
      
      {/* Glow effect overlay */}
      <div className="absolute inset-0  pointer-events-none" />
    </div>
  );
};

const InterestCard = ({ interest, index }) => {
  return (
    <motion.div
      key={index}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(79, 209, 197, 0.2)"
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5, 
          delay: index * 0.1,
          ease: "easeOut" 
        }
      }}
      initial={{ opacity: 0, y: 50 }}
      className="relative p-8 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700/50 overflow-hidden"
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10"></div>
      </div>
      
      <h3 className="mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        {interest.title}
      </h3>
      <p className="text-gray-300">{interest.description}</p>
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-70"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          initial={{ y: 0 }}
          animate={{
            y: [0, -20, -40],
            opacity: [0.8, 0.4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  );
};

const Interests = () => {
  return (
    <div className="relative py-24 overflow-hidden min-h-screen ">
      {/* Space background canvas */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <RotatingSpaceBackground />
          {[...Array(3)].map((_, i) => (
            <FloatingPlanet
              key={i}
              position={[
                Math.random() * 100 - 50,
                Math.random() * 50 - 25,
                Math.random() * -100
              ]}
              color={new THREE.Color(
                Math.random() * 0.5 + 0.5,
                Math.random() * 0.3,
                Math.random() * 0.5 + 0.5
              )}
              size={Math.random() * 0.5 + 0.5}
            />
          ))}
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>
      
      {/* Shooting stars */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 w-2 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: `${Math.random() * 1000 - 500}px`,
            y: `${Math.random() * 1000 - 500}px`,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 10 + i * 2,
            ease: "linear"
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <SpaceTitle />
        
        <motion.div 
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {INTERESTS.map((interest, index) => (
            <InterestCard key={index} interest={interest} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Interests;