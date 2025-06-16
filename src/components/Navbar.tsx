import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-20 bg-black/60 text-white px-6 py-2 rounded-full shadow-lg flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/achievement">Achievements</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
