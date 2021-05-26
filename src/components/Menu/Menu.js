import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";

const Menu = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="flex-grid">
          <a href="/" className="nav-logo">
            Sparkles
          </a>
          <ul id="nav-mobile" className="">
            {routes.map((route, index) => (
              <li key={index}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
