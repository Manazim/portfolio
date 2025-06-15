// src/App.tsx
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Scene from './components/Scene'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import './styles/global.css'

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Canvas className="canvas-background">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>

        {/* HTML UI should go here */}
        <div className="ui-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
