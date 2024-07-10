import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userLoginResponse } from "../../api/user/LoginUser";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useSelector((state: { user: userLoginResponse }) => state.user);
  if (!user.user || user.user.accessToken === "") {
    return <Navigate to="/SignIn" replace />;
  }

  return children;
};

export default ProtectedRoute;
