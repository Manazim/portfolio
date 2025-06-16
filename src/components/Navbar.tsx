// src/components/Navbar.tsx
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const loc = useLocation().pathname
  const items = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/experience', label: 'Experience' },
    { to: '/achievements', label: 'Achievements' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <nav>
      {items.map(i => (
        <Link
          key={i.to}
          to={i.to}
          className={loc === i.to ? 'neon' : ''}
        >
          {i.label}
        </Link>
      ))}
    </nav>
  )
}
