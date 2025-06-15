import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import Scene from './components/Scene';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Scene />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Html fullscreen>
        <div className="overlay">
          <h1>My 3D Portfolio</h1>
          <p>Interactive 3D experiences with React, Three.js & GSAP</p>
        </div>
      </Html>
    </div>
  );
};

export default App;
