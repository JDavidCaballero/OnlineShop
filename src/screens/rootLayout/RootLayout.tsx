import { Outlet, useLocation, useNavigate } from "react-router-dom"
import amazonLogo from "../../assets/amazon_logo.png"

import MainNavigationBar from "../../components/mainNavigationBar/MainNavigationBar"
import { useSelector } from "react-redux"
import { UserState } from "../../store/userSlice"

function RootLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const user = useSelector((state: { user: UserState }) => state.user)
  const areLoggedIn = user.isLoggedIn
  const shouldHideNavigationBar =
    location.pathname.startsWith("/Profile") || location.pathname === "/SignIn"

  return (
    <>
      {!shouldHideNavigationBar && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
          <div className="flex items-center space-x-4 px-4 max-w-7xl mx-auto h-16">
            <img
              src={amazonLogo}
              alt="Amazon Logo"
              className="w-20"
              onClick={() => navigate("/")}
            />
            <div className="ms-5 w-full">
              <MainNavigationBar
                areLoggedIn={areLoggedIn}
                navigate={navigate}
                user={user}
              />
            </div>
          </div>
        </div>
      )}

      <div
        className="flex justify-center items-center"
        style={{
          minHeight: shouldHideNavigationBar ? "100vh" : "calc(100vh - 64px)",
          paddingTop: shouldHideNavigationBar ? 0 : "64px",
        }}
      >
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
