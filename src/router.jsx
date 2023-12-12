import { createBrowserRouter } from "react-router-dom";

import HomepageLayout from "./components/layouts/HomepageLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./components/Auth/Login";
import { Login2 } from "./components/Auth/Login2";
import Login3 from "./components/Auth/Login3";
import Login4 from "./components/Auth/Login4";
import Register from "./components/Auth/Register";
import ForgetPassword from "./components/Auth/ForgetPassword";
import Verification from "./components/Auth/Verification";
import NewPassword from "./components/Auth/NewPassword";
import Homepage from "./pages/Homepage";
const router = createBrowserRouter([
  {
    path: "",
    element: <HomepageLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
  {},
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login1",
        element: <Login />,
      },
      {
        path: "login2",
        element: <Login2 />,
      },
      {
        path: "login3",
        element: <Login3 />,
      },
      {
        path: "login",
        element: <Login4 />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "verification",
        element: <Verification />,
      },
      {
        path: "new-password",
        element: <NewPassword />,
      },
    ],
  },
]);

export default router;
