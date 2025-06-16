// src/pages/Home.tsx
import NeonButton from '../components/NeonButton'
export default function Home() {
  return (
    <section>
      <div style={{ textAlign: 'center' }}>
        <h1 className="neon" style={{ fontSize: '3rem' }}>Welcome</h1>
        <p style={{ margin: '1rem 0' }}>[Your intro here]</p>
        <NeonButton text="See My Work" onClick={() => window.location.href = '/achievements'} />
      </div>
    </section>
  )
}
