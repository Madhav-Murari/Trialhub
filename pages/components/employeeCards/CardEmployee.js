import React from "react";
import Employee from "../assets/Employee.svg";
import Image from "next/image";
import { employeeData } from "./EmployeeData";

export default function CardEmployee(props) {
  return (
    <>
      {employeeData &&
        employeeData.map((item, index) => {
          return (
            index < props.end &&
            index >= props.start && (
              <div
                key={index}
                className="bg-[#ffffff] flex flex-col items-center m-1 shadow p-1 rounded-md hover:drop-shadow-xl"
              >
                <Image
                  src={Employee}
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
            )
          );
        })}
    </>
  );
}
