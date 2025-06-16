// src/components/NeonButton.tsx
import React from 'react'

interface NeonButtonProps {
  text: string
  onClick?: () => void
}

export default function NeonButton({ text, onClick }: NeonButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.75rem 1.5rem',
        fontFamily: 'Orbitron, sans-serif',
        fontSize: '1rem',
        color: '#fff',
        background: 'transparent',
        border: '2px solid #0ff',
        borderRadius: '4px',
        textShadow: '0 0 6px #0ff, 0 0 12px #0ff',
        cursor: 'pointer'
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,255,255,0.1)')}
      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
    >
      {text}
    </button>
  )
}
