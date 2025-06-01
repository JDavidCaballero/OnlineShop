import React from "react"
import { NavigateFunction, NavLink } from "react-router-dom"
import avatarLogo from "../../assets/avatar.png"
import cart from "../../assets/cart.png"
import { UserState } from "../../store/userSlice"
interface BarProps {
  areLoggedIn: boolean
  navigate: NavigateFunction
  user: UserState
}

const MainNavigationBar: React.FC<BarProps> = ({
  areLoggedIn,
  navigate,
  user,
}) => {
  return (
    <div className="flex flex-row items-center w-full justify-between">
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
              to="/aboutUs"
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
      <div className="flex flex-row">
        <div className="flex flex-row border border-yellow-400 rounded-md p-1 items-center me-5">
          <img src={avatarLogo} alt="Amazon Logo" className="w-[30px] me-2" />
          <button
            className="bg-transparent text-black border-none outline-none"
            onClick={() => {
              if (areLoggedIn) {
                navigate(`/Profile/${user.id}`)
                console.warn("user", user)
                console.warn("areLoggedIn", areLoggedIn)
              } else {
                navigate("/SignIn")
              }
            }}
          >
            {areLoggedIn ? `Welcome ${user.name}` : "Sign In"}
          </button>
        </div>
        <div className="flex flex-row p-1 items-center">
          <img src={cart} alt="Amazon Logo" className="w-[30px] me-2" />
          <p className="text-black">0 Items</p>
        </div>
      </div>
    </div>
  )
}

export default MainNavigationBar
