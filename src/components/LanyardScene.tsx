// src/components/LanyardScene.tsx
import { useRef, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import gsap from 'gsap'

export default function LanyardScene() {
  const torusRef = useRef<any>()
  const planeRef = useRef<any>()

  // load your portrait; place your image at public/portrait.jpg
  const portrait = useLoader(TextureLoader, '/portrait.jpg')

  // floating animation
  useFrame((_, dt) => {
    torusRef.current.rotation.y += dt * 0.2
    torusRef.current.rotation.x += Math.sin(Date.now() / 1000) * dt * 0.1
  })

  // entrance animation
  useEffect(() => {
    gsap.from(torusRef.current.scale, {
      x: 0, y: 0, z: 0,
      duration: 1.5,
      ease: 'back.out(1.5)'
    })
    gsap.from(planeRef.current.position, {
      y: -5,
      duration: 1.2,
      delay: 0.2,
      ease: 'bounce.out'
    })
  }, [])

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} />

      {/* Lanyard ring */}
      <mesh ref={torusRef} position={[0, 0, -4]}>
        <torusGeometry args={[1.2, 0.1, 16, 100]} />
        <meshStandardMaterial color="#0ff" emissive="#0ff" emissiveIntensity={0.6} metalness={0.5} roughness={0.2}/>
      </mesh>

      {/* Portrait plane */}
      <mesh ref={planeRef} position={[0, -1, -4]}>
        <planeGeometry args={[1, 1.3]} />
        <meshBasicMaterial
          map={portrait}
          toneMapped={false}
        />
      </mesh>
    </>
  )
}
