import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function HouseModel() {
  const groupRef = useRef();
  
  // 1. Load the model from the public folder
  const { scene } = useGLTF('/model.glb');

  // 2. Add smooth animations (rotation and floating)
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate slowly on the Y axis
      groupRef.current.rotation.y += delta * 0.15; 
      
      // Subtle up-and-down floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 - 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* 3. Render the 3D model */}
      <primitive 
        object={scene} 
        scale={1} // Change this number (e.g., 0.1 or 5) if the model is too big or too small
      />
    </group>
  );
}

// 4. Preload ensures the model is cached and ready before rendering
useGLTF.preload('/model.glb');