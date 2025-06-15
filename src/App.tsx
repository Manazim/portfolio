// App.tsx
import { Canvas } from '@react-three/fiber'
import { Scene } from './components/Scene'

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Scene />
    </Canvas>
  )
}
