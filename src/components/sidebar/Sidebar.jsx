import { Link, useLocation } from "react-router-dom";
import AyyKori from "../../assets/ayyKori.png";
import report from "../../assets/icons/Report.svg";
import application from "../../assets/icons/application.svg";
import calendar from "../../assets/icons/calendar.svg";
import career from "../../assets/icons/carrer.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import employee from "../../assets/icons/employee.svg";
import jobs from "../../assets/icons/jobs.svg";
import logout from "../../assets/icons/logout.svg";
import message from "../../assets/icons/message.svg";
import refferals from "../../assets/icons/refferals.svg";
import setting from "../../assets/icons/setting.svg";
import structure from "../../assets/icons/structure.svg";
import logo from "../../assets/logo.png";

export default function Sidebar() {
  const location = useLocation();
  return (
    <>
      <div>
        <div className="flex items-center">
          <img src={logo} alt="" />
          <img src={AyyKori} alt="" />
        </div>
        <div className="mt-8 px-2">
          {/* menu  */}
          <p className="font-bold text-xs my-3">Menu</p>
          <div className="flex flex-col gap-y-1">
            <Link
              to={"/"}
              className={`flex items-center gap-3 px-3 py-3 rounded-md  text-xs font-medium cursor-pointer ${
                location.pathname === "/" && "bg-[#11998E] text-white"
              }`}
            >
              <img src={dashboard} alt="Dashboard" />
              <span>Dashboard</span>
            </Link>
            <Link
              to={"/application"}
              className={`flex items-center gap-3 px-3 py-3 rounded-md  text-xs font-medium  duration-150 ease-in-out cursor-pointer ${
                location.pathname === "/application" &&
                "bg-[#11998E] text-white"
              }`}
            >
              <img src={application} alt="" />
              <span>Application</span>
            </Link>
            <Link
              to={"/calendar"}
              className={`flex items-center gap-3 px-3 py-3 rounded-md  text-xs font-medium  duration-150 ease-in-out cursor-pointer ${
                location.pathname === "/calendar" && "bg-[#11998E] text-white"
              }`}
            >
              <img src={calendar} alt="" />
              <span>Calendar</span>
            </Link>
          </div>
          {/* Recruitment  */}
          <p className="font-bold text-xs mt-5 mb-3">Recruitment</p>
          <div className="flex flex-col gap-1.5">
            <div className="flex  items-center gap-3 px-3 py-2  rounded-md  text-xs font-medium  duration-150 ease-in-out cursor-pointer">
              <img src={jobs} alt="" />
              <span>Jobs</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1  rounded-md  text-xs font-medium  duration-150 ease-in-out cursor-pointer">
              <img src={message} alt="" />
              <span>Message</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md  text-xs font-medium  duration-150 ease-in-out cursor-pointer">
              <img src={career} alt="" />
              <span>Career Site</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md  text-xs font-medium  duration-150 ease-in-out cursor-pointer">
              <img src={refferals} alt="" />
              <span>My referrals</span>
            </div>
          </div>
          {/* Organization  */}
          <p className="font-bold text-xs mt-5 mb-3">Organization</p>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3 px-3 py-2 rounded-md  text-xs font-medium  duration-150 ease-in-out cursor-pointer">
              <img src={employee} alt="" />
              <span>Employee</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md  text-xs font-medium  duration-150 ease-in-out cursor-pointer">
              <img src={structure} alt="" />
              <span>Structure</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md  text-xs font-medium  duration-150 ease-in-out cursor-pointer">
              <img src={report} alt="" />
              <span>Report</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md  text-xs font-medium  duration-150 ease-in-out cursor-pointer">
              <img src={setting} alt="" />
              <span>Setting</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-md  text-xs font-medium  duration-150 ease-in-out cursor-pointer">
              <img src={logout} alt="" />
              <span>LogOut</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
