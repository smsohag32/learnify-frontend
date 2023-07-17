import { NavLink, useNavigate } from "react-router-dom";
import { FaDiscourse, FaHome, FaUser } from "react-icons/fa";
import {} from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const TeacherLink = () => {
  const navigate = useNavigate();
  // handle logout
  const handleLogOut = () => {
    localStorage.removeItem("position");
    localStorage.removeItem("access-token");
    navigate("/");
  };
  return (
    <>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 duration-300 transform ${
            isActive ? "active-link" : "primary-link"
          }`
        }
      >
        <FaHome className="w-5 h-5" />
        <span className="mx-4 font-medium">Dashboard</span>
      </NavLink>
      <NavLink
        to="/dashboard/courses"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 duration-300 transform ${
            isActive ? "active-link" : "primary-link"
          }`
        }
      >
        <FaDiscourse className="w-5 h-5" />
        <span className="mx-4 font-medium">Courses</span>
      </NavLink>
      <NavLink
        to="/dashboard/addcourses"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 duration-300 transform ${
            isActive ? "active-link" : "primary-link"
          }`
        }
      >
        <FaUser className="w-5 h-5" />
        <span className="mx-4 font-medium">Add New Course</span>
      </NavLink>
      <NavLink
        to="/dashboard/account"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 duration-300 transform ${
            isActive ? "active-link" : "primary-link"
          }`
        }
      >
        <FaUser className="w-5 h-5" />
        <span className="mx-4 font-medium">Account</span>
      </NavLink>
      <button
        onClick={handleLogOut}
        className="flex items-center text-gray-200 primary-link w-full px-4 py-2 mt-5 duration-300 transform"
      >
        <IoMdLogOut color="#ffff" className="w-5 text-gray-200 h-5" />
        <span className="mx-4 font-medium">Logout</span>
      </button>
    </>
  );
};

export default TeacherLink;
