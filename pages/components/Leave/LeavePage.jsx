import React, { useState } from "react";
import LeaveApplication from "./LeaveApplication";
import ManageLeave from "./ManageLeave";

export default function LeavePage() {
  const [leavePage, setLeavePage] = useState("apply");
  return (
    <>
      <div className="flex h-full md:pr-16 sm:pr-12 pr-2 bg-white sm:bg-[#E3D5CA] overflow-x-hidden ">
        <div className="hidden sm:grid basis-1/4 bg-[#000] ">
          <div className="h-[100vh]  bg-[#0B0808CF] flex flex-col justify-around items-center">
            {/* <button className="px-8 py-2 my-3 text-white bg-[#DAE8E5]">LEAVE</button> */}
            <button className="px-8 py-2 text-white bg-[#5983D3]">LEAVE</button>
            <button className="px-8 py-2 text-white">Balance Leaves</button>
            <button
              className={
                leavePage === "apply"
                  ? "px-8 py-2 text-white bg-[#303030] rounded"
                  : "px-8 py-2 text-white"
              }
              onClick={() => setLeavePage("apply")}
            >
              Apply for leaves
            </button>
            <button
              className={
                leavePage === "manage"
                  ? "px-8 py-2 text-white bg-[#303030] rounded"
                  : "px-8 py-2 text-white"
              }
              onClick={() => setLeavePage("manage")}
            >
              Manage Leave
            </button>
            <button className="px-8 py-2 text-white">View Status</button>
          </div>
        </div>

        <div className="basis-3/4">
          {leavePage === "apply" && <LeaveApplication />}
          {leavePage === "manage" && <ManageLeave />}
        </div>
      </div>
    </>
  );
}
