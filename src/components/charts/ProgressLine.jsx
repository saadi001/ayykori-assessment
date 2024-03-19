import { Line } from "rc-progress";

export default function ProgressLine({ name, percent, color }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <div className={`bg-[${color}] w-[10px] h-[10px] rounded-full`}></div>
          <p className="text-xs">{name}</p>
        </div>
        <div className="w-1/2 flex items-center gap-x-1">
          <Line
            percent={percent}
            strokeColor={color}
            strokeWidth={6}
            trailWidth={6}
            trailColor="#E0EDEA"
          ></Line>
          <p className={`text-[${color}] text-xs`}>{percent + "%"}</p>
        </div>
      </div>
    </>
  );
}
