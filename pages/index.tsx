import React from "react";
import Head from "next/head";
import Hero from "../src/components/Hero/Hero";

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
