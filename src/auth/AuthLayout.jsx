import { Outlet } from "react-router-dom";
import AuthNavbar from "./components/AuthNavbar";

const AuthLayout = () => {
  return (
    <div className="bg-black h-[100vh] text-white">
      <AuthNavbar />
      <main className="px-5">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
