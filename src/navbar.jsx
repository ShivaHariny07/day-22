import { NavLink } from 'react-router-dom'

const linkStyle = ({ isActive }) =>
  `nav-link ${isActive ? 'fw-bold text-primary' : 'text-dark'}`

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm p-3 mb-4 rounded">
      <div className="container">
        <span className="navbar-brand">🌐 My App</span>
        <div>
          <NavLink to="/" end className={linkStyle}>Home</NavLink>
          <NavLink to="/about" className={linkStyle}>About</NavLink>
          <NavLink to="/profile" className={linkStyle}>Profile</NavLink>
        </div>
      </div>
    </nav>
  )
}