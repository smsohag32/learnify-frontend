import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Courses from "../Pages/Dashboard/Courses/Courses";
import Account from "../Pages/Dashboard/Account/Account";
import AddCourse from "../Pages/Dashboard/AddCourse/AddCourse";
import OverviewStudent from "../Pages/Dashboard/Overview/OverviewStudent";
import OverviewTeacher from "../Pages/Dashboard/Overview/OverviewTeacher";

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
        path: "/dashboard/student",
        element: <OverviewStudent />,
      },
      {
        path: "/dashboard/teacher",
        element: <OverviewTeacher />,
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
