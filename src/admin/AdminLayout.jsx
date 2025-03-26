import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="bg-black h-[100vh] text-white px-5">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
