import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar">
      <ul className="nav-list text-2xl gap-5 bg-amber-300">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
        <li><NavLink to="/create-emp" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Create Employee</NavLink></li>
        <li><NavLink to="/list-of-employees" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>List of Employees</NavLink></li>
      </ul>
    </nav>
  )
}

export default Header;
