import React from "react";
import EmployeeCard from "./components/employeeCards/AllEmployees";
import Worklog from "./components/worklog/index";

const index = () => {
  return (
    <div className="text-3xl">
      {/* <EmployeeCard /> */}
      <Worklog />
    </div>
  );
};

export default index;
