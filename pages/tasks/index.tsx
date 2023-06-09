import React, { useState, useEffect } from "react";
import TaskList from "../../src/components/task/TaskList";
import { fetchAllTasks, fetchTaskData } from "../../src/Api/TaskApi";
import { AuthData, TaskResponse } from "../../src/Api/PropTypes";
import { useRouter } from "next/router";
import TaskaAdd from "../../src/components/task/TaskaAdd";

type Props = {};

export default function index({ }: Props) {
  const router = useRouter();

  const [taskData, setTaskData] = useState<TaskResponse>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const userDataString: string | null = localStorage.getItem("userData");
    if (!userDataString) {
      router.push("/login");
      return;
    }

    const authData: AuthData = JSON.parse(userDataString);
    const clientId = authData.clientId;
    const role = authData.role;
    if (role === "superAdmin") {
      fetchAllTasks()
        .then((response) => {
          setTaskData(response);
          setLoading(false);
        })
        .catch((err) => console.log("Erros is ", err.message));
    } else {
      fetchTaskData(clientId)
        .then((response) => {
          setTaskData(response);
          setLoading(false);
        })
        .catch((err) => console.log("Erros is ", err.message));
    }
  }, []);
  return (
    <>
      <div className="p-4 h-full">
        <div className="flex flex-col">
          <div className="bg-lighter-grey basis-1/2 flex flex-row items-center justify-between font-medium p-3 rounded-md">
            <div className="text-left w-full md:flex md:w-3/20">User ID</div>
            <div className="text-left w-full md:flex md:w-3/20">Client ID</div>
            <div className="text-left w-full md:flex md:w-3/20">
              Task Assigned
            </div>
            <div className="text-left w-full md:flex md:w-3/20">Status</div>
            <div className="text-left w-full md:flex md:w-3/20">Start Date</div>
            <div className="text-left w-full md:flex md:w-3/20">End Date</div>
          </div>

          <div className="basis-1/2 mx-1">
            {!loading && taskData ? (
              <TaskList tasks={taskData} />
            ) : (
              <div className="bg-white shadow rounded-md p-2">
                Loading task details...
              </div>
            )}
          </div>

          <TaskaAdd />

        </div>
      </div>
    </>
  );
}
