
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleSystem = () => {
  const meshRef = useRef();

  useEffect(() => {
    const mesh = meshRef.current;
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const vertices = new Float32Array(50 * 3);
   
    for (let i = 0; i < particleCount; i++) {
      // Randomly distribute particles in a cube around the origin
      const x = Math.random() * 1.3 ; // [-1, 1]
      const y = Math.random() * 2 - 2; // [-2, 0]
      const z = Math.random() * 3 - 1; // [-1, 1]
      vertices[i ] = x;
      vertices[i * 1 + 1] = y;
      vertices[i * 1 + 2] = z;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    // Create particle material
    const particleMaterial = new THREE.PointsMaterial({ color: "#fff", size: 0.0  });

    // Create particle system
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    mesh.add(particleSystem);

 

    // Animation loop
    let startTime = null;
    const animateParticles = (time) => {
      if (!startTime) startTime = time;
      const elapsedTime = (time - startTime) * 0.0005; // Convert to seconds

      // Update particle positions based on elapsed time
      const positions = particleSystem.geometry.attributes.position.array;
      // const perticle = particleSystem.PointsMaterial.opacity
      // console.log(perticle)
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i + 1] = Math.sin(elapsedTime + i * 0.1) * 2; // Move particles along the y-axis
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      // Request animation frame
      requestAnimationFrame(animateParticles);
    };

    animateParticles(0); // Start the animation loop

    return () => {
      // Cleanup
      mesh.remove(particleSystem);
    };
  }, []);

  return <mesh scale={[1, 0.5 ,1]} position={[-0.8,1.8,0]}  rotation={[0,0.7,0]} ref={meshRef} />;
};

export default ParticleSystem;
