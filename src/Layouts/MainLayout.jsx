import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
