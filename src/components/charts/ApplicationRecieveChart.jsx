import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ApplicationRecieveChart() {
  const data = [
    {
      time: "8PM",
      received: 50,
    },
    {
      time: "10PM",
      received: 45,
    },
    {
      time: "12PM",
      received: 65,
    },
    {
      time: "2AM",
      received: 60,
    },
    {
      time: "4AM",
      received: 90,
    },
    {
      time: "6AM",
      received: 52,
    },
    {
      time: "8AM",
      received: 70,
    },
  ];
  return (
    <>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          width={""}
          height={""}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: -38,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#11998E" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#11998E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" tick={{ fontSize: 10, fill: "#11998E" }} />
          <YAxis tick={{ fontSize: 10, fill: "#11998E" }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="received"
            stroke="#11998E"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
