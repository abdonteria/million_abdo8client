import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import MainPad from "./pages/MainPad.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <MainPad /> }],
  },
]);

export default router;
