import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LanyardScene from './components/LanyardScene'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      {/* 3D Background */}
      <Canvas className="canvas-bg">
        <Suspense fallback={null}>
          <LanyardScene />
        </Suspense>
      </Canvas>

      {/* Foreground UI */}
      <div className="ui-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}
