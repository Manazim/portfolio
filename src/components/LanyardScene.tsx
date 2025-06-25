
import { useGLTF, Float, OrbitControls } from '@react-three/drei'
import gsap from 'gsap'
import { useEffect } from 'react'

export default function LanyardScene() {
  // load your GLTF model
  const { scene } = useGLTF('/models/lanyard.glb') as any
  const modelRef = useRef<THREE.Group>(null!)

  // entrance animation
  useEffect(() => {
    gsap.from(modelRef.current.scale, {
      x: 0, y: 0, z: 0,
      duration: 1.5,
      ease: 'back.out(1.7)'
    })
  }, [])

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Float
        ref={modelRef}
        speed={1}            /* how fast it floats */
        rotationIntensity={0.4}
        floatIntensity={0.6}
      >
        <primitive object={scene} />
      </Float>

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        maxDistance={10}
        minDistance={3}
      />
    </>
  )
}

// preload for faster load
useGLTF.preload('/models/lanyard.glb')
