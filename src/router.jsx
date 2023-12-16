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
import Homepage from "./pages/Home/Homepage";
import DashboardpageLayout from "./components/layouts/DashboardpageLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import OrdersPage from "./pages/dashboard/OrdersPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AnalyticsPage from "./pages/dashboard/AnalyticsPage";
import CustomersPage from "./pages/dashboard/CustomersPage";
import ChatsPage from "./pages/dashboard/ChatsPage";
import InventoryPage from "./pages/dashboard/InventoryPage";
import AddNewMedicinePage from "./pages/dashboard/AddNewMedicinePage";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import AllProduct from "./pages/Product/AllProduct";
import FavoritesPage from "./pages/Favorites/FavoritesPage";
import CardDetailsPage from "./pages/Product/CardDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import ChatPage from "./pages/chat/ChatPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AccountPage from "./pages/profile/AccountPage";
import PaymentDetailsPage from "./pages/PaymentDetails/PaymentDetailsPage";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import PayNow from "./components/OrderDetails/PayNow";
import Notifications from "./components/Notifications/Notifications";
import Checkout from "./components/Cart/Checkout";
import Address from "./components/Address/Address";
const router = createBrowserRouter([
  {
    path: "",
    element: <HomepageLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/product",
        element: <AllProduct />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/details",
        element: <CardDetailsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/profile",
        element:<ProfilePage/>
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/payment",
        element: <PaymentDetailsPage />,
      },
      {
        path: "/order-details",
        element: <OrderDetails />,
      },
      {
        path: "/paynow",
        element: <PayNow />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/location",
        element: <Address />,
      }
    ],
  },
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
  {
    path: "",
    element: <DashboardpageLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/orders",
        element: <OrdersPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "/dashboard/customers",
        element: <CustomersPage />,
      },
{
  path: "/dashboard/chats",
  element: <ChatsPage />,
},
{
  path: "/dashboard/inventory",
  element: <InventoryPage />,
},
{
  path: "/dashboard/inventory/add-new-medicine",
  element: <AddNewMedicinePage />,
},

    ],
  },
]);

export default router;
