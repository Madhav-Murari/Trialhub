import React from "react";

function LeaveApplication() {
  return (
    <>
      <div className="">
        <div className="py-2 bg-white sm:px-6 sm:h-5/7 ml-4 h-[96vh] my-6 sm:my-2">
          <div className="py-1 text-2xl font-bold">Designation</div>
          <input type="text" className="w-full py-2 bg-[#DAE8E5]"></input>
          <div className="w-full">
            <div className="flex flex-col py-2 md:flex-row">
              <div className="pt-3 md:pt-10 md:w-1/2">
                <button className="lg:px-8 sm:px-2 py-3 w-1/2 md:w-1/3 text-white bg-[#5983D3] font-bold">
                  FULL DAY
                </button>
                <button className="lg:px-8 sm:px-2 py-3 w-1/2 md:w-1/3 text-black bg-[#DAE8E5] font-bold">
                  HALF DAY
                </button>
              </div>
              <div className="md:w-1/2">
                <div className="py-1 font-bold lg:text-2xl sm:text-xl ">
                  No. of Days Leave required
                </div>
                <input type="text" className="w-full py-2 bg-[#DAE8E5]"></input>
              </div>
            </div>

            <div className="flex py-2 ">
              <div className="w-1/2 mx-1">
                <div className="py-1 text-2xl font-bold">Start Date</div>
                <input type="date" className="w-full py-2 bg-[#DAE8E5]"></input>
              </div>
              <div className="w-1/2">
                <div className="py-1 text-2xl font-bold">End date</div>
                <input type="date" className="w-full py-2 bg-[#DAE8E5]"></input>
              </div>
            </div>
            <div className="py-1 text-2xl font-bold">Reason for leave</div>
            <input
              type="text"
              className="w-full py-2 bg-[#DAE8E5] h-36 my-2"
            ></input>
            <div className="flex flex-col-reverse justify-center py-2 mx-3 sm:flex-row sm:justify-end">
              <button className="invisible px-2 py-3 text-black bg-white rounded sm:px-6 md:px-10 sm:px-8 sm:visible ">
                Reset
              </button>
              <button className="px-2 py-3 text-white bg-blue-900 rounded sm:px-6 sm:bg-black md:px-10 sm:px-8">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LeaveApplication;
