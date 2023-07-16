import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import userPhoto from "../../assets/user/user.png";
import { useContext, useState } from "react";
import { PositionContext } from "../../Context/PositionProvider";
import { AiOutlineDown } from "react-icons/ai";
const DashboardHeader = () => {
  const { user } = useUser();
  const { position } = useContext(PositionContext);
  const [isOpen, setIsOpen] = useState();
  const navigate = useNavigate();
  console.log(position);
  console.log(user);
  //   handle to log out
  const handleLogOut = () => {
    localStorage.removeItem("position");
    localStorage.removeItem("access-token");
    navigate("/");
  };

  return (
    <div className="h-16 bg-[#6078EA] gap-10 md:gap-16 items-center md:px-12 px-6 flex justify-between">
      <div className="flex-1">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 pl-10 text-sm text-gray-900 outline-none rounded-lg"
            placeholder="Search here..."
          />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <span>
          <Link
            to=""
            className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg"
          >
            <IoMdNotificationsOutline className="text-white text-xl" />

            <div className="absolute inline-flex items-center justify-center bg-[#ff6633c7] text-white text-xs font-bold marker:bg-red-500 rounded-full top-2 right-2 ">
              <span className="p-1"></span>
            </div>
          </Link>
        </span>
        <div className="flex gap-5 items-center text-white">
          <div className="">
            <img
              className="w-8 h-8 rounded-full ring-2 ring-white"
              src={userPhoto}
              alt="user"
              width={40}
              height={40}
            />
          </div>
          <div>
            <p className="font-semibold text-sm">{user?.full_name}</p>
            <p className="text-gray-200 text-xs">{position}</p>
          </div>
          <div className="text-white">
            <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              <AiOutlineDown />
            </span>
          </div>
          {isOpen && (
            <div className=" absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-16 text-sm">
              <div className="flex flex-col cursor-pointer">
                <span
                  onClick={handleLogOut}
                  className="block px-4 py-3 text-black hover:bg-neutral-100 transition font-semibold"
                >
                  Logout
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
