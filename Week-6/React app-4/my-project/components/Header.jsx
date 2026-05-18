import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">
          AppDev
        </NavLink>
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/technologies">Technologies</NavLink></li>
          <li><NavLink to="/login">Log in</NavLink></li>
          <li><NavLink to="/register">Sign up</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
