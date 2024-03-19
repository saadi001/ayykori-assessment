import { Circle } from "rc-progress";
import search from "../../assets/icons/Search.svg";
import genderIcon from "../../assets/icons/genderIcon.svg";
import ApplicationRecieveChart from "../../components/charts/ApplicationRecieveChart";
import Chart from "../../components/charts/Chart";
import ProgressCircle from "../../components/charts/ProgressCircle";
import ProgressLine from "../../components/charts/ProgressLine";
import Dropdown from "../../components/dropdown/Dropdown";
import Updates from "../../components/updates/Updates";

export default function Dashboard() {
  return (
    <>
      <div className="flex ">
        <div className="pl-8 pr-5 py-8 w-9/12">
          {/* heading  */}
          <div className="flex items-center justify-between ">
            <p className="text-lg font-semibold">Good Morning</p>
            <div className="relative">
              <input
                type="text"
                className="bg-[#B9F2E5] pl-5 py-2 text-xs rounded w-[264px] z-0"
                placeholder="Search"
              />
              <button className="bg-[#11998E] absolute z-10 right-0 h-full px-3 rounded-r-[5px]">
                <img src={search} alt="" />
              </button>
            </div>
          </div>

          {/* progress bar  */}
          <div className=" my-10 grid grid-cols-3 gap-x-5">
            <ProgressCircle
              header={"Total Candidates"}
              number={361}
              incDecPer={"+26 Inc"}
              percent={74}
              color={"#11998E"}
            ></ProgressCircle>
            <ProgressCircle
              header={"Shortlisted Candidates"}
              number={201}
              incDecPer={"+45% Inc"}
              percent={74}
              color={"#E7B860"}
            ></ProgressCircle>
            <ProgressCircle
              header={"Rejected Candidates"}
              number={160}
              incDecPer={"+04% Dec"}
              percent={74}
              color={"#FF6A49"}
            ></ProgressCircle>
          </div>

          {/* charts */}
          <div className="grid grid-cols-3 gap-x-5 my-10 ">
            {/* bar chart section  */}
            <div className=" col-span-2 p-5   ">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-bold">
                  Statistics of Active Applications
                </h3>
                <Dropdown></Dropdown>
              </div>
              <Chart></Chart>
            </div>

            {/* progress line section  */}
            <div className=" p-5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-bold">Acquisitions</h3>
                <Dropdown></Dropdown>
              </div>
              <div className="flex flex-col gap-y-8">
                <ProgressLine
                  name={"Application"}
                  percent={80}
                  color={"#11998E"}
                ></ProgressLine>
                <ProgressLine
                  name={"Shortlisted"}
                  percent={55}
                  color={"#E7B860"}
                ></ProgressLine>
                <ProgressLine
                  name={"Rejected"}
                  percent={47}
                  color={"#FF6A49"}
                ></ProgressLine>
                <ProgressLine
                  name={"On Hold"}
                  percent={35}
                  color={"#7B7B7B"}
                ></ProgressLine>
                <ProgressLine
                  name={"Finalised"}
                  percent={24}
                  color={"#61E7D3"}
                ></ProgressLine>
              </div>
            </div>
          </div>

          {/* area chart section */}
          <div className="grid grid-cols-3 ">
            <div className="p-5 col-span-2  ">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-bold">
                  Applications Received Time
                </h3>
                <Dropdown></Dropdown>
              </div>
              <ApplicationRecieveChart></ApplicationRecieveChart>
            </div>

            {/* gender  */}
            <div className=" ">
              <p className="text-xs font-bold p-5">Candidates by gender</p>
              <div className="p-12 relative">
                <div className="relative">
                  <Circle
                    percent={75}
                    strokeWidth={7}
                    strokeColor="#11998E"
                    trailWidth={7}
                    trailColor="#E7B860"
                  ></Circle>
                  <div className="absolute w-[65px] h-[65px] bg-[#E0EDEA] -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 rounded-full shadow-lg">
                    <img
                      src={genderIcon}
                      className="w-[26px] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 "
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-around">
                  <div className="flex items-center gap-x-2">
                    <div className="h-[10px] w-[10px] bg-[#11998E] rounded-full"></div>
                    <p className="text-[10px]">Male</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="h-[10px] w-[10px] bg-[#E7B860] rounded-full"></div>
                    <p className="text-[10px]">Female</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/12">
          <Updates></Updates>
        </div>
      </div>
    </>
  );
}
