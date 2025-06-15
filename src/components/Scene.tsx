import React, { useRef, useEffect } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

const Scene: React.FC = () => {
  const cubeRef = useRef<Mesh>(null!);

  // Rotate continuously
  useFrame((_, delta) => {
    cubeRef.current.rotation.x += delta * 0.5;
    cubeRef.current.rotation.y += delta * 0.3;
  });

  // GSAP entrance animation
  useEffect(() => {
    gsap.from(cubeRef.current.scale, { x: 0, y: 0, z: 0, duration: 1, ease: 'back.out(1.7)' });
  }, []);

  return (
    <mesh ref={cubeRef} position={[0, 0, 0]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00adee" />
    </mesh>
  );
};

export default Scene;
