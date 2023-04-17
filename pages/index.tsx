import React from "react";
import EmployeeCard from "../src/components/employeeCards/AllEmployees";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Trialhub</title>
      </Head>
      <EmployeeCard />
    </>
  );
};

export default index;
