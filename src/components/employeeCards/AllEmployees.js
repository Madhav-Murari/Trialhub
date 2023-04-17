import React, { useState } from "react";
import CardEmployee from "./CardEmployee";
import Left from "../../assets/Left.svg";
import Right from "../../assets/Right.svg";
import Image from "next/image";
import employeeData from "./EmployeeData";
import ManagerTeam from "../Manager/ManagerTeam";

export default function EmployeeCard() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [pageNum, setPageNum] = useState(1);

  const [currPage, setCurrPage] = useState("all");
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="basis-1/5 font-sans text-xl px-4 py-5 ">
          <div className="font-bold px-3 py-2 rounded-md">Details</div>
          <div
            className={
              currPage === "all"
                ? "bg-[#E3D5CA] px-3 py-2 rounded-md"
                : "px-3 py-2 rounded-md"
            }
            onClick={() => setCurrPage("all")}
          >
            All
          </div>
          <div className={`px-3 py-2 rounded-md`}>Administration </div>
          <div
            className={
              currPage === "manager"
                ? "bg-[#E3D5CA] px-3 py-2 rounded-md"
                : "px-3 py-2 rounded-md"
            }
            onClick={() => setCurrPage("manager")}
          >
            Manager
          </div>
          <div className={`px-3 py-2 rounded-md`}>HR </div>
          <div className={`px-3 py-2 rounded-md`}>Sales </div>
        </div>

        <div className="basis-4/5 font-sans text-xl px-4 py-5">
          {currPage === "all" && (
            <>
              <div className=" flex flex-wrap justify-center">
                <CardEmployee start={start} end={end} />
              </div>

              <div className="mt-4 flex flex-row justify-center">
                {start > 0 && (
                  <span
                    className="mx-1"
                    onClick={() => {
                      setStart((prevState) => prevState - 10);
                      setEnd((prevState) => prevState - 10);
                      setPageNum((prevState) => prevState - 1);
                    }}
                  >
                    <Image src={Left} alt="Left" />
                  </span>
                )}
                <span className="mx-1">
                  Page {pageNum} / {Math.floor(employeeData.length / 10 + 1)}
                </span>
                {end <= employeeData.length && (
                  <span
                    className="mx-1"
                    onClick={() => {
                      setStart((prevState) => prevState + 10);
                      setEnd((prevState) => prevState + 10);
                      setPageNum((prevState) => prevState + 1);
                    }}
                  >
                    <Image src={Right} alt="right" />
                  </span>
                )}
              </div>
            </>
          )}

          {currPage==="manager" && <ManagerTeam />}
        </div>
      </div>
    </>
  );
}
