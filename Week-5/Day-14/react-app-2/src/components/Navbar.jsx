const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>LOGO</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#signup">Signup</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
