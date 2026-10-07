import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="top-nav" aria-label="Main navigation">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        About Me
      </NavLink>

      <NavLink
        to="/town"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        My Town
      </NavLink>
    </nav>
  )
}
