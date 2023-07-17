import { useQuery } from "@tanstack/react-query";
import useSecureAuth from "../../../Hooks/useSecureAuth";
import useUser from "../../../Hooks/useUser";
import Spinner from "../../../components/Spinner/Spinner";
import StaticCard from "../../../components/Cards/StaticCard";
import Chart from "../../../components/Chart/Chart";
import moment from "moment/moment";
import { useContext } from "react";
import { PositionContext } from "../../../Context/PositionProvider";

const Overview = () => {
  const { secureAuth } = useSecureAuth();
  const { position } = useContext(PositionContext);
  const { loading } = useUser();
  const { data: overviewData = [], isLoading: oLoading } = useQuery({
    queryKey: ["overviewData"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.post(`/api/v1/dashboard/statics`);
      return res.data.statics;
    },
  });
  const { data: chartData = [], isLoading: cLoading } = useQuery({
    queryKey: ["chartData"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.post(`/api/v1/dashboard/chart`);
      return res.data?.progress;
    },
  });
  if (oLoading || cLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {overviewData.map((overviewItem, index) => (
          <StaticCard
            key={overviewItem?.id}
            index={index}
            item={overviewItem}
          />
        ))}
      </div>
      {position === "student" && (
        <div className="my-6 primary-shadow p-4">
          <h4 className="font-bold text-lg">Your Daily Progress</h4>
          <p className="text-xs font-semibold">
            {moment().format("MMMM Do YYYY")}
          </p>
          <Chart chartData={chartData} />
        </div>
      )}
    </div>
  );
};

export default Overview;
