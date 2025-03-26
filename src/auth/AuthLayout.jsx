import { Outlet } from "react-router-dom";
import AuthNavbar from "./components/AuthNavbar";
import AuthFooter from "./components/AuthFooter";

const AuthLayout = () => {
  return (
    <div className="bg-black text-white">
      <AuthNavbar />
      <main className="px-5">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
