/* eslint-disable react/prop-types */
import { Circle } from "rc-progress";
import menu from "../../assets/icons/menu.svg";

export default function ProgressCircle({
  header,
  number,
  incDecPer,
  percent,
  color,
}) {
  return (
    <div className=" flex justify-between items-center p-5 rounded-md relative">
      <div>
        <h5 className="text-xs font-medium mb-2">{header}</h5>
        <p className="text-xl font-bold">{number}</p>
        <p className={`text-[8px] text-[${color}]`}>{incDecPer}</p>
      </div>
      <div className="h-[50px] w-[50px] relative">
        <Circle
          percent={percent}
          strokeWidth={10}
          strokeColor={color}
          trailWidth={8}
          trailColor="#E0EDEA"
        ></Circle>
        <div
          className={`text-xs font-medium absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-[${color}]`}
        >
          {"+" + percent + "%"}
        </div>
      </div>
      <div className="absolute top-[10px] right-3 text-xl">
        <img className="w-full" src={menu} alt="" />
      </div>
    </div>
  );
}
