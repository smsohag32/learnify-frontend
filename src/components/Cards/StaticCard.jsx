import ProgressBar from "@ramonak/react-progress-bar";
import { GrNotes } from "react-icons/gr";
import { FcIdea } from "react-icons/fc";
import { AiOutlineFlag, AiOutlineLineChart } from "react-icons/ai";
const StaticCard = ({ item, index }) => {
  return (
    <div className="bg-white rounded-md p-6">
      <div>
        {index === 0 && <GrNotes />}
        {index === 1 && <FcIdea />}
        {index === 2 && <AiOutlineLineChart />}
        {index === 3 && <AiOutlineFlag />}
        <p>{item?.total}</p>
        <p>{item?.title}</p>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <div className="w-[70%]">
          <ProgressBar completed={`${item?.progress || 0}`} />
        </div>
        <span className="flex-1 text-sm">{item?.progress || 0} %</span>
      </div>
    </div>
  );
};

export default StaticCard;
