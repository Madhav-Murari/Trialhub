import React, { useState, useEffect } from "react";
import TaskList from "../../components/TaskList";
import { fetchTaskData } from "../../src/Api/TaskApi";
import { AuthData, TaskDetails } from "../../src/Api/PropTypes";
import { useRouter } from "next/router";

type Props = {};

export default function index({}: Props) {
  const router = useRouter();

  const [taskData, setTaskData] = useState<TaskDetails | null>(null);

  useEffect(() => {
    const userDataString: string | null = localStorage.getItem("userData");
    if (!userDataString) {
      router.push("/login");
      return;
    }
    const authData: AuthData = JSON.parse(userDataString);
    const clientId = authData.clientId;

    fetchTaskData(clientId)
      .then((response) => {
        setTaskData(response);
        console.log(response);
      })
      .catch((err) => console.log("Erros is ", err.message));
  }, []);

  return (
    <>
      <div className="bg-light-primary p-4 h-full">
        <div className="flex flex-row md:flex-col">
          <div className="bg-lighter-grey basis-1/2 flex flex-col md:flex-row items-center justify-between font-semibold p-3 rounded-md">
            <div className="text-left w-full md:flex md:w-3/20">User ID</div>
            <div className="text-left w-full md:flex md:w-3/20">Client ID</div>
            <div className="text-left w-full md:flex md:w-3/20">
              Task Assigned
            </div>
            <div className="text-left w-full md:flex md:w-3/20">Status</div>
            <div className="text-left w-full md:flex md:w-3/20">Start Date</div>
            <div className="text-left w-full md:flex md:w-3/20">End Date</div>
          </div>

          <div className="bg-white basis-1/2 rounded-md mx-1">
            <TaskList tasks={taskData} />
          </div>
        </div>
      </div>
    </>
  );
}
