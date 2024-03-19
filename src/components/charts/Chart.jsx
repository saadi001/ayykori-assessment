import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Chart() {
  const data = [
    {
      day: "Mon",
      application: 50,
      shortlist: 20,
      rejection: 10,
    },
    {
      day: "Tue",
      application: 40,
      shortlist: 15,
      rejection: 15,
    },
    {
      day: "Wed",
      application: 45,
      shortlist: 25,
      rejection: 15,
    },
    {
      day: "Thu",
      application: 40,
      shortlist: 20,
      rejection: 15,
    },
    {
      day: "Fri",
      application: 45,
      shortlist: 35,
      rejection: 10,
    },
    {
      day: "Sat",
      application: 48,
      shortlist: 25,
      rejection: 11,
    },
    {
      day: "Sun",
      application: 45,
      shortlist: 30,
      rejection: 5,
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
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
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#11998E" }} />
          <YAxis tick={{ fontSize: 10, fill: "#11998E" }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: "10px" }} />
          <Bar dataKey="rejection" stackId="a" fill="#FF6A49" barSize={5} />
          <Bar dataKey="shortlist" stackId="a" fill="#E7B860" />
          <Bar
            dataKey="application"
            stackId="a"
            fill="#11998E"
            barSize={5}
            bar={{ fill: "none" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
