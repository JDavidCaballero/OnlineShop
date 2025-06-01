import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { UserState } from "../../store/userSlice"

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useSelector((state: { user: UserState }) => state.user)
  if (!user?.isLoggedIn || !user.accessToken) {
    return <Navigate to="/SignIn" replace />
  }

  return children
}

export default ProtectedRoute
