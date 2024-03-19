import dropdownIcon from "../../assets/icons/dropdownIcon.svg";
import avatar from "../../assets/avatar.png";

export default function Application() {
  return (
    <>
      <div className="p-8 bg-[#E0EDEA]">
        <h2 className="text-lg font-semibold mt-5">Application</h2>
        <p className="text-sm font-medium mt-5">On going recruitment</p>
        <div className="inline-block">
          <div className="flex items-center bg-[#B9F2E5] gap-x-16 px-5 py-2 mt-3">
            <p className="text-xs">Jr. UI/UX Designer</p>
            <img src={dropdownIcon} alt="" />
          </div>
        </div>
        {/* select bar  */}
        <div className="flex items-center justify-between bg-white text-sm px-5 py-3 mt-3 rounded">
          <div className="flex items-center gap-x-4 font-semibold">
            <span>All(165)</span>
            <span>Shortlisted(50)</span>
            <span>In Process(5)</span>
            <span>On Hold(25)</span>
            <span>Rejected(54)</span>
          </div>
          <div className="flex gap-x-3">
            <div>Search</div>
            <div>Filter</div>
          </div>
        </div>
        {/* Candidates */}
        <div className="bg-white mt-5 mb-8 px-5 py-2 rounded grid grid-cols-3 items-center">
          <div className="flex items-center gap-x-2">
            <img src={avatar} alt="" />
            <div>
              <p className="text-sm font-semibold">Amit Alvaj</p>
              <div>
                <p className="text-[#7B7B7B] text-xs">
                  <span>4 years experience</span> | <span>Expected 45k</span>
                </p>
              </div>
            </div>
          </div>
          <div className="text-sm font-semibold">Shortlisted</div>
          <div className="text-right text-xs text-[#7B7B7B] font-bold">
            14/03/24
          </div>
        </div>
      </div>
    </>
  );
}
