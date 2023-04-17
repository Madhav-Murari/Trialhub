import React from "react";
import LeaveList from "./LeaveList";
import IntroCard from "./IntroCard";

const LeaveRightSidebar = () => {
  return (
    <>
      <div className="w-full md:w-fit">
        <div className="md:py-12 grid justify-center p-2 bg-orange-100">
          <h1 className="font-bold">MEMBERS ON LEAVE</h1>{" "}
        </div>
        {LeaveList.map((data) => {
          return (
            <IntroCard
              image={data.imgUrl}
              name={data.name}
              role={data.role}
              days={data.days}
            />
          );
        })}
      </div>
    </>
  );
};

export default LeaveRightSidebar;
