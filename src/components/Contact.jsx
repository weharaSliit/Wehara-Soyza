import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import {
  
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  
} from "react-icons/fa";

const CONTACT = {
  phoneNo: "+94 76 934 3227",
  email: "soyzawehara@gmail.com",
  linkedin: "https://www.linkedin.com/in/wehara-soyza-596717322",
  github: "https://github.com/weharaSliit/Wehara-Soyza", 
};

const Globe = () => {
  const globeRef = useRef();
  const groupRef = useRef();

  const [colorMap, bumpMap, specularMap] = useLoader(THREE.TextureLoader, [
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg",
    "https://threejs.org/examples/textures/planets/earth_normal_2048.jpg",
    "https://threejs.org/examples/textures/planets/earth_specular_2048.jpg",
  ]);

  const lightsMap = useLoader(
    THREE.TextureLoader,
    "https://threejs.org/examples/textures/planets/earth_lights_2048.png"
  );

  // Atmospheric glow shader
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      glowColor: { type: "c", value: new THREE.Color(0x4d9eff) },
      viewVector: { type: "v3", value: new THREE.Vector3(0, 0, 10) },
      intensity: { type: "f", value: 1.5 }
    },
    vertexShader: `
      uniform vec3 viewVector;
      uniform float intensity;
      varying float glowIntensity;
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vec3 actual_normal = normalize(normalMatrix * normal);
        glowIntensity = pow(0.8 - dot(actual_normal, normalize(viewVector)), 2.0) * intensity;
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      varying float glowIntensity;
      void main() {
        vec3 glow = glowColor * glowIntensity;
        gl_FragColor = vec4(glow, 0.5); // Increased alpha for more visibility
      }
    `,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = time * 0.1;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main globe with realistic materials */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.05}
          specularMap={specularMap}
          specular={new THREE.Color('grey')}
          shininess={5}
        />
        {/* Atmospheric glow */}
        <mesh scale={[1.1, 1.1, 1.1]} material={glowMaterial} />
      </mesh>

      {/* City lights on dark side */}
      <mesh>
        <sphereGeometry args={[2.51, 64, 64]} />
        <meshBasicMaterial
          map={lightsMap}
          transparent
          blending={THREE.AdditiveBlending}
          opacity={1.2} // Increased opacity
        />
      </mesh>

      {/* Interactive markers */}
      {[
        {
          position: [1.5, 1.2, 1],
          color: "#feb80f",
          icon: <FaPhoneAlt />,
          link: `tel:${CONTACT.phoneNo}`,
          label: "Call Me"
        },
        {
          position: [-1.8, 0.5, -1],
          color: "#ff5e4d",
          icon: <FaEnvelope />,
          link: `mailto:${CONTACT.email}`,
          label: "Email Me"
        },
        
        {
          position: [1.8, -0.3, -1.2],
          color: "#0077b5",
          icon: <FaLinkedin />,
          link: CONTACT.linkedin,
          label: "LinkedIn"
        }
      ].map((marker, i) => (
        <InteractiveMarker key={i} {...marker} />
      ))}

     
    </group>
  );
};

const InteractiveMarker = ({ position, color, icon, link, label }) => {
  const markerRef = useRef();
  
  useFrame((state) => {
    if (markerRef.current) {
      markerRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
    }
  });

  return (
    <group position={position} ref={markerRef}>
      <Html center>
        <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <motion.div
            className="flex flex-col items-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
            whileHover={{ scale: 1.5 }}
          >
            <div className="text-2xl text-white">{icon}</div>
            <motion.span 
              className="text-xs text-white bg-black/50 px-2 py-1 rounded mt-1"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {label}
            </motion.span>
          </motion.div>
        </a>
      </Html>
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh position={[0, 0, 0.1]}>
        <circleGeometry args={[0.15, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

const Contact = () => {
  return (
    <section className="relative min-h-screen py-20  overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#feb80f] to-[#ff5e4d]"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1,
              filter: "blur(15px)"
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 h-full">
        {/* Contact Information - Elegant Layout */}
        <motion.div
          className="w-full lg:w-1/2 z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#feb80f] to-[#ff5e4d]">Connect</span>
          </motion.h2>

          <div className="space-y-8">
            {/* Phone */}
            <motion.div 
              className="flex items-center gap-6 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-[#feb80f] to-[#ff5e4d] text-white shadow-lg transition-transform group-hover:rotate-12">
                <FaPhoneAlt className="text-xl" />
              </div>
              <div>
                <p className="text-stone-400 text-sm mb-1">Phone</p>
                <a 
                  href={`tel:${CONTACT.phoneNo}`} 
                  className="text-2xl font-medium text-white hover:text-[#feb80f] transition-colors"
                >
                  {CONTACT.phoneNo}
                </a>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              className="flex items-center gap-6 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-[#ff5e4d] to-[#4d9eff] text-white shadow-lg transition-transform group-hover:rotate-12">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-stone-400 text-sm mb-1">Email</p>
                <a 
                  href={`mailto:${CONTACT.email}`} 
                  className="text-2xl font-medium text-white hover:text-[#ff5e4d] transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
            </motion.div>

           

            {/* LinkedIn */}
            <motion.div 
              className="flex items-center gap-6 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg transition-transform group-hover:rotate-12">
                <FaLinkedin className="text-xl" />
              </div>
              <div>
                <p className="text-stone-400 text-sm mb-1">LinkedIn</p>
                <a 
                  href={CONTACT.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-medium text-white hover:text-blue-400 transition-colors"
                >
                  wehara-soyza
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced 3D Globe with brighter lighting */}
        <motion.div
          className="w-full lg:w-1/2 h-[500px] lg:h-[600px] relative z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} /> {/* Increased ambient light */}
            <pointLight position={[5, 5, 5]} intensity={1.5} color="#feb80f" /> {/* Brighter */}
            <pointLight position={[-5, -5, -5]} intensity={1} color="#4d9eff" /> {/* Brighter */}
            <pointLight position={[0, 5, 0]} intensity={1.2} color="#ff5e4d" /> {/* Brighter */}
            
            <Suspense fallback={null}>
              <Globe />
              <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
            </Suspense>
            
            <OrbitControls 
              enableZoom={true}
              zoomSpeed={0.5}
              autoRotate
              autoRotateSpeed={1}
              enablePan={false}
              minDistance={6}
              maxDistance={12}
              enableDamping
              dampingFactor={0.05}
            />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;