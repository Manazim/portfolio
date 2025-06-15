import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Scene() {
  const cube = useRef<Mesh>(null!)

  useFrame(() => {
    cube.current.rotation.y += 0.005
    cube.current.rotation.x += 0.005
  })

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={cube} position={[0, 0, -5]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
    </>
  )
}
