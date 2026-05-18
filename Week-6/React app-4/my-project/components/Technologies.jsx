import { Link, Outlet } from "react-router-dom";

function Technologies() {
  return (
    <div className="technologies-layout">
      <aside className="technologies-sidebar">
        <h2>Tech Stack</h2>
        <ul>
          <li>
            <Link to="java">
              Java
            </Link>
          </li>
          <li>
            <Link to="nodejs">
              Node.js
            </Link>
          </li>
          <li>
            <Link to="vue">
              Vue
            </Link>
          </li>
        </ul>
      </aside>

      <div className="technologies-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Technologies;
