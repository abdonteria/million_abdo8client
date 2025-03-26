import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="bg-black h-[100vh] text-white px-5">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
