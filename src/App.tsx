import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/landingPage/LandingPage";
import SignInPage from "./screens/signIn/SignInPage";
import RootLayout from "./screens/rootLayout/RootLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/SignIn",
        element: <SignInPage />,
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
