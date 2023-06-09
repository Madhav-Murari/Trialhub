import React, { useState, useEffect } from "react";
// import { AuthData, TaskDetails } from "../../Api/PropTypes";
import { addTask } from "../../Api/TaskApi";

type Props = { role: String };

export default function AddTaskForm({ role }: Props) {
  const [addTaskData, setAddTaskData] = useState({
    userId: "",
    clientId: "",
    task: "",
    status: "",
    startDate: "",
    endDate: "",
  });
  //   const [updateTask, setUpdateTask] = useState<TaskDetails | null>(null);

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      addTask(addTaskData).then((response) => {
        console.log(response);
        setAddTaskData(response);
      });
    } catch (err) {
      console.log("Erros is ");
    }
  };

  return (
    <>
      {role && (
        <>
          <div className="text-[2rem] text-center mt-6">Assign new task</div>
          <div className="my-5 w-full flex justify-center">
            <form className="flex flex-col w-[70%]">
              <input
                type="text"
                id="userId"
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter user ID"
                required
              />
              <input
                type="text"
                id="clientId"
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter client ID"
                required
              />
              <input
                type="text"
                id="task"
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter task"
                required
              />
              <input
                type="text"
                id="status"
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter status"
                required
              />
              <input
                type="text"
                id="startDate"
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter startDate"
                required
              />
              <input
                type="text"
                id="endDate"
                className="w-full px-3 my-1 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter end date"
                required
              />
              <div className="flex justify-center">
                <button
                  className="px-6 py-3 my-3 bg-primary text-white font-bold rounded-md"
                  onClick={handleSubmit}
                >
                  Assign
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
