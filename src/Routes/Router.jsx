import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Courses from "../Pages/Dashboard/Courses/Courses";
import Account from "../Pages/Dashboard/Account/Account";
import Overview from "../Pages/Dashboard/Overview/Overview";
import AddCourse from "../Pages/Dashboard/AddCourse/AddCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Overview />,
      },
      {
        path: "/dashboard/courses",
        element: <Courses />,
      },
      {
        path: "/dashboard/courses",
        element: <AddCourse />,
      },
      {
        path: "/dashboard/account",
        element: <Account />,
      },
    ],
  },
]);

export default router;
