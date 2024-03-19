import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

export default function Main() {
  return (
    <>
      <div className="flex  w-full">
        <div className=" w-2/12 py-4 pl-10">
          <Sidebar></Sidebar>
        </div>
        <main className=" w-10/12 ">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}
