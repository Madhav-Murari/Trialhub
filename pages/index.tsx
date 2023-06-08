import React from "react";
import Head from "next/head";
import Hero from "../src/components/Hero/Hero";
import AllEmployees from "../src/components/employeeCards/AllEmployees";

const index = () => {
  return (
    <>
      <Head>
        <title>Trialhub</title>
      </Head>
      <Hero />
    </>
  );
};

export default index;
