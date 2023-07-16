import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import DashboardHeader from "../components/Header/DashboardHeader";
import UserProvider from "../Context/UserProvider";

const DashboardLayout = () => {
  return (
    <div>
      <UserProvider>
        <div className="relative min-h-screen md:flex">
          <Sidebar />
          <div className="flex-1 md:ml-64">
            <DashboardHeader />
            <div className="p-5">
              <Outlet />
            </div>
          </div>
        </div>
      </UserProvider>
    </div>
  );
};

export default DashboardLayout;
