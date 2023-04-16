import React, { useState } from "react";
import LeavePage from "../pages/components/Leave/LeavePage";

function leave() {
  const [page,setPage] = useState("manage")
  return (
    <>
      <LeavePage />
    </>
  );
}

export default leave;
