import ProgressBar from "@ramonak/react-progress-bar";
import { PiNotepadLight } from "react-icons/pi";
import { FcIdea } from "react-icons/fc";
import { AiOutlineFlag, AiOutlineLineChart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const StaticCard = ({ item, index }) => {
  return (
    <div className="bg-white rounded-md p-6">
      <div className="mb-4 flex gap-3 items-center">
        <span className="text-xl rounded-full primary-bg p-2 flex items-center justify-center text-white">
          {index === 0 && <PiNotepadLight />}
          {index === 1 && <FcIdea />}
          {index === 2 && <AiOutlineLineChart />}
          {index === 3 && <AiOutlineFlag />}
        </span>
        <div>
          <p className="text-xl font-bold text-gray-600">{item?.total}</p>
          <p className="text-sm text-gray-500">{item?.title}</p>
        </div>
      </div>
      <div className="mt-auto">
        {index === 0 || index === 1 || index === 2 ? (
          <div className="flex justify-between gap-4 items-center">
            <div className="w-[70%]">
              <ProgressBar completed={`${item?.progress || 0}`} />
            </div>
            <span className="flex-1 text-sm">{item?.progress || 0} %</span>
          </div>
        ) : (
          ""
        )}
        {index === 3 && (
          <Link
            to="/dashboard/courses"
            className="primary-text font-bold flex gap-2 items-center text-xs"
          >
            View Courses <FaArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
};

export default StaticCard;
