import { useRouter } from "next/router";
import React from "react";
import { MdSearch } from "react-icons/md";
import FilterIcon from "../components/icons/filterIcon";
import GridIcon from "../components/icons/gridIcon";
import AllEmployees from "../components/employeeCards/AllEmployees";

function employee() {
  const router = useRouter();

  const addEmployeeButton = () => {
    router.push("/AddEmployee");
  };
  return (
    <>
      <div>
        <div id="heading">
          <div
            id="employee-head"
            className="flex space-x-20 justify-between max-w-1280px mx-auto py-2 px-4 bg-red-50 border-solid border-y-2 border-black-500"
          >
            <div>
              <h3 className="font-bold my-3">Employee</h3>
            </div>
            <div className="hidden md:inline-flex space-x-10 ">
              <label className="my-auto bg-[#fff] rounded-md p-2 flex flex-row justify-center align-center">
                {" "}
                <span className="my-auto mx-1">
                  {" "}
                  <MdSearch />{" "}
                </span>{" "}
                <input
                  type="text"
                  placeholder="Search"
                  className="focus:outline-none"
                />
              </label>

              <FilterIcon />
              <GridIcon />
              <button
                className="text-white bg-[#202020] rounded-full border-2 border-[#202020]  px-6 py-1 mx-1 flex items-center hover:drop-shadow-md"
                onClick={addEmployeeButton}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <AllEmployees />
    </>
  );
}

export default employee;
