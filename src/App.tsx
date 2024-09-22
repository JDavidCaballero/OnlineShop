import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/landingPage/LandingPage";
import SignInPage from "./screens/signIn/SignInPage";
import RootLayout from "./screens/rootLayout/RootLayout";
import ErrorPage from "./screens/errorPage/ErrorPage";
import ProfilePage from "./screens/profile/profilePage";
import ProtectedRoute from "./screens/rootLayout/ProtectedRoute";
import ProductDetail from "./screens/productDetail/ProductDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/SignIn",
        element: <SignInPage />,
      },
      {
        path: "/Profile/:id",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/Product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
