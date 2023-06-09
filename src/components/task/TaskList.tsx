import React, { useState, useEffect } from "react";
import { AuthData, TaskDetails } from "../..//Api/PropTypes";
import { useRouter } from "next/router";
import StatusTile from "./StatusTile";

type Props = {
  tasks: TaskDetails[];
};

export default function TasksList({ tasks }: Props) {
  console.log(tasks, "tasks")
  const router = useRouter();

  useEffect(() => {
    const userDataString: string | null = localStorage.getItem("userData");
    if (!userDataString) {
      router.push("/login");
      return;
    }
    const authData: AuthData = JSON.parse(userDataString);
  }, []);

  return (
    <>
      {tasks && (
        <div className="bg-white shadow rounded-md h-[300px] overflow-auto">
          {tasks && tasks?.data?.map((data, index) => (
            <div
              key={index}
              className="w-full bg-white flex flex-row items-start justify-between m-1 p-2 rounded-md"
            >
              <div className="w-[100%] text-left m-1 w-3/20">{data.userId}</div>
              <div className="w-[100%] text-left m-1 w-3/20">
                {data.clientId}
              </div>
              <div className="w-[100%] text-left m-1 w-3/20">{data.task}</div>
              <div className="w-[100%] text-left m-1 w-3/20">
                <StatusTile status={data.status} />
              </div>
              <div className="w-[100%] text-left m-1 w-3/20">
                {data.startDate}
              </div>
              <div className="w-[100%] text-left m-1 w-3/20">
                {data.endDate}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};


