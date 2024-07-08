import React from "react";
import { NavLink } from "react-router-dom";

const MainNavigationBar: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li className="list-none">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-black"
              } hover:text-yellow-400`
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-black"
              } hover:text-yellow-400`
            }
          >
            About
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${
                isActive ? "text-yellow-400" : "text-black"
              } hover:text-yellow-400`
            }
          >
            Contact
          </NavLink>
        </li>
        {/* Add more items as needed */}
      </ul>
    </nav>
  );
};

export default MainNavigationBar;
