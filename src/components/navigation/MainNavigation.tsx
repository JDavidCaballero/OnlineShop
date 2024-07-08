import { NavLink } from "react-router-dom";
import "./styles.css";

function MainNavigation() {
  return (
    <header data-testid="mainNavigation" className="headerNavigation">
      <nav>
        <ul className="listNavigatopm">
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              data-testid="remindersLink"
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Reminders
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
