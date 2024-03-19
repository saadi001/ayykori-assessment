import dropdownCalendar from "../../assets/icons/dropdownCalendar.svg";
import dropdownIcon from "../../assets/icons/dropdownIcon.svg";

export default function Dropdown() {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <div className="bg-[#B9F2E5] p-2 rounded-md">
          <img src={dropdownCalendar} className="w-full" alt="" />
        </div>
        <p className="text-xs font-bold">Week</p>
        <img src={dropdownIcon} alt="" />
      </div>
    </>
  );
}
