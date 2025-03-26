import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPad from "./pages/MainPad.jsx";
import AdminLayout from "./admin/AdminLayout.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import AddingQuestion from "./admin/pages/AddingQuestion.jsx";
import Signup from "./auth/pages/Signup.jsx";
import AuthLayout from "./auth/AuthLayout.jsx";
import Login from "./auth/pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <MainPad /> }],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "add-question", element: <AddingQuestion /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

export default router;
