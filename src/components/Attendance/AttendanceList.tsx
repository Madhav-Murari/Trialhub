import React from "react";
import { AttendanceResponse } from "../../Api/Interface";
import AttendenceStatus from "./AttendenceStatus";

interface props {
  item: AttendanceResponse;
}

const AttendanceItem: React.FC<props> = ({ item }) => {
  console.log(item?.data, "item")
  return (
    <>
      {item && item?.data.map((data, index) => {
        return (
          <div key={index} className="flex flex-row">
            <div className='w-full px-4 py-2'>{data.userId}</div>
            <div className='w-full px-4 py-2'>{data.clientId}</div>
            <div className='w-full px-4 py-2'>
              <AttendenceStatus status={data.status ?? ""} />
            </div>
          </div>
        )
      })}
    </>
  );
};

export default AttendanceItem;
