import { Outlet, useLocation, useNavigate } from "react-router-dom";
import amazonLogo from "../../assets/amazon_logo.png";

import MainNavigationBar from "../../components/mainNavigationBar/MainNavigationBar";
import { useSelector } from "react-redux";
import { userLoginResponse } from "../../api/user/LoginUser";

function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state: { user: userLoginResponse }) => state.user);
  const areLoggedIn = user.user.email !== "";
  const shouldHideNavigationBar =
    location.pathname.startsWith("/Profile") || location.pathname === "/SignIn";

  return (
    <>
      {!shouldHideNavigationBar && (
        <div className="flex items-center space-x-4 mb-3 ">
          <img src={amazonLogo} alt="Amazon Logo" className="w-20" />
          <div className="ms-5 w-full">
            <MainNavigationBar
              areLoggedIn={areLoggedIn}
              navigate={navigate}
              user={user}
            />
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}

export default RootLayout;
