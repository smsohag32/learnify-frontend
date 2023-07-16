import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { dayName: "Thursday" },
  { dayName: "Friday" },
  { dayName: "Saturday" },
  { dayName: "Sunday" },
  { dayName: "Monday" },
  { dayName: "Tuesday" },
  { dayName: "Wednesday" },
];

const Chart = ({ chartData }) => {
  console.log(chartData);
  return (
    <div className="max-w-7xl w-full mx-auto">
      <AreaChart
        width={900}
        height={350}
        data={chartData?.length > 0 ? chartData : data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dayName" />
        <YAxis dataKey="watchHours" />
        <Tooltip />
        <Area type="monotone" dataKey="date" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Chart;
