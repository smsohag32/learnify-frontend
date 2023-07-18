import { useContext, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import TeacherLink from "./TeacherLink";
import StudentLink from "./StudentLink";
import { PositionContext } from "../../Context/PositionProvider";

const Sidebar = () => {
  const { position } = useContext(PositionContext);
  const [isOpen, setIsOpen] = useState("false");
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Small Screen  */}
      <div className=" bg-[#418CD1] text-white flex justify-between md:hidden">
        <div className="text-white">
          <div className="block cursor-pointer p-4 font-bold">
            <span>Learnify</span>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none"
        >
          <AiOutlineMenuFold className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        style={{
          background: "linear-gradient(180deg, #418CD1 0%, #9C41D1 100%)",
        }}
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isOpen && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center flex-col mx-auto">
              <span className="font-bold text-xl text-white">Learnify</span>
            </div>
          </div>
          {/* Nav link */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {position === "teacher" && <TeacherLink />}
              {position === "student" && <StudentLink />}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
