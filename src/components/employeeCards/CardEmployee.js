import React from "react";
// import Employee from "../../assets/Employee.svg";
import Image from "next/image";
// import employeeData from "./EmployeeData";
import Link from "next/link";
export default function CardEmployee(props) {
  const employeeData = props.employeeData;
  return (
    <>
      {employeeData &&
        employeeData.map((item, index) => {
          return (
            index < props.end &&
            index >= props.start && (
              <Link href={`/employee/profile?employeeId=${item._id}`} className="flex flex-wrap">
                <div
                  key={index}
                  className="bg-[#ffffff] flex flex-col items-center m-1 shadow p-1 rounded-md hover:drop-shadow-xl"
                >
                  <Image
                    src={item.profilePic}
                    className="rounded"
                    alt="img"
                    priority={false}
                  />
                  <div className="rounded">
                    {index + 1}.{item.name}
                  </div>
                  <div className="rounded text-slate-600">{item.position}</div>
                  <div className="rounded text-slate-500 text-sm">
                    {item.email}
                  </div>
                </div>
              </Link>
            )
          );
        })}
    </>
  );
}
