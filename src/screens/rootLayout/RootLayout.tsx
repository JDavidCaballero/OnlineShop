import { Outlet, useLocation } from "react-router-dom";
import amazonLogo from "../../assets/amazon_logo.png";
import MainNavigationBar from "../../components/mainNavigationBar/MainNavigationBar";

function RootLayout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/SignIn" && (
        <div className="flex items-center space-x-4 mb-3 ">
          <img src={amazonLogo} alt="Amazon Logo" className="w-20" />
          <MainNavigationBar />
        </div>
      )}
      <Outlet />
    </>
  );
}

export default RootLayout;
